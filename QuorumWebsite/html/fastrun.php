<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
    session_start();
    ob_start();
    $base = "quorum_server:1269";  //set this to the url you want to scrape
    $redisLocation = 'redis';
    $ckfile = '/var/apache/tmp/simpleproxy-cookie-' . session_id();
    try {
        $redis = new Redis();
        $redis->connect($redisLocation);
    }
    catch (Exception $exception) {
        $redis = NULL;
    }

    /* all system code happens below - you should not need to edit it! */

    //work out cookie domain
    $cookiedomain = str_replace("http://www.","",$base);
    $cookiedomain = str_replace("https://www.","",$cookiedomain);
    $cookiedomain = str_replace("www.","",$cookiedomain);

    $request = $_SERVER['REQUEST_URI'];

    $url = $base . $request;

    //The new Quorum server is limited to HTTP, but is guarded in Docker.
    //So assume the message comes over that.
    $mydomain = 'http://'.$_SERVER['HTTP_HOST'];

    // Open the cURL session
    $curlSession = curl_init();

    curl_setopt ($curlSession, CURLOPT_URL, $url);
    curl_setopt ($curlSession, CURLOPT_HEADER, 1);

    $redisKey = "";
    $OKToPost = FALSE;
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        curl_setopt ($curlSession, CURLOPT_POST, 1);
        $post_for_compiler = array();
        
        foreach ($_POST as $key => $value) {
            if($key == 'code') {
                $post_for_compiler[$key] = $value;
                $redisKey = $redisKey . "key: " . $key . "value:" . $value . "|";
            } else if ($key == 'build_only' ||
                       $key == 'timezone' ||
                       $key == 'build_only' ||
                       $key == 'pageURL' ||
                       $key == 'ideName'
            ) { //do nothing with these keys
            }
            else {
                $post_for_compiler[$key] = $value;
                $redisKey = $redisKey . "key: " . $key . "value:" . $value . "|";
            }
        }
        curl_setopt ($curlSession, CURLOPT_POSTFIELDS, http_build_query($post_for_compiler));
        
        // set variables for database submission
        $version = '10.0.6';     // hard code for each quorum release
        $code = $_POST['code'];
        $build = isset($_POST['build_only']) ? $_POST['build_only'] : 0;      // 1 for build | 0 for run
        $tz = isset($_POST['timezone']) ? $_POST['timezone'] : NULL;
        $ip = isset($_SERVER['HTTP_CF_CONNECTING_IP']) ? $_SERVER['HTTP_CF_CONNECTING_IP'] : $_SERVER['REMOTE_ADDR'];
        $url = isset($_POST['pageURL']) ? $_POST['pageURL'] : NULL;
        $ide = isset($_POST['ideName']) ? $_POST['ideName'] : NULL;
        $OKToPost = TRUE;
    }

    curl_setopt($curlSession, CURLOPT_RETURNTRANSFER,1);
    curl_setopt($curlSession, CURLOPT_TIMEOUT,30);
    curl_setopt($curlSession, CURLOPT_SSL_VERIFYHOST, 2);
    curl_setopt ($curlSession, CURLOPT_COOKIEJAR, $ckfile);
    curl_setopt ($curlSession, CURLOPT_COOKIEFILE, $ckfile);

    //handle other cookies cookies
    foreach($_COOKIE as $k=>$v){
        if(is_array($v)){
            $v = serialize($v);
        }
        curl_setopt($curlSession,CURLOPT_COOKIE,"$k=$v; domain=.$cookiedomain ; path=/");
    }

    //Send the request and store the result in an array
    //first check if it's on redis
    if($redis != NULL) {
        $exists = $redis->exists($redisKey);
    }

    if(!$exists) {
        $response = curl_exec ($curlSession);
        $redis->set($redisKey, $response);
    } else {
        $response = $redis->get($redisKey);
    }
    

    // Check that a connection was made
    if (curl_error($curlSession)){
        // If it wasn't...
        print curl_error($curlSession);
    } else {




        //clean duplicate header that seems to appear on fastcgi with output buffer on some servers!!
		$response = str_replace("HTTP/1.1 100 Continue\r\n\r\n","",$response);
		$response = str_replace("Content-Length: 0\r\n\r\n","",$response);
		
        $ar = explode("\r\n\r\n", $response, 2);

        $header = $ar[0];
        $body = $ar[1];

        //handle headers - simply re-outputing them
        $header_ar = explode(chr(10),$header);
        foreach($header_ar as $k=>$v){
            if(!preg_match("/^Transfer-Encoding/",$v)){
                $v = str_replace($base,$mydomain,$v); //header rewrite if needed
                header(trim($v));
            }
        }

      //rewrite all hard coded urls to ensure the links still work!
        $body = str_replace($base,$mydomain,$body);
        if(substr( $body, 0, 11 ) === "<div class=") {
            print rtrim($body);
        } else {
            print $body;
        }
        // put code submission into database
            if ($OKToPost) {
            require_once("php_functions.php");
            saveRunCode($version, $post_for_compiler, $build, $tz, $ip, $url, $ide);
        }
    }
    curl_close ($curlSession);
?>
