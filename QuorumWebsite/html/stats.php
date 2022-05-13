<h1><img src="media/QuorumLogo.png" height=60>Quorum Language Stats</h1>
<style>
th {
	text-align:left;
}
</style>

<?php

if (True) {
    try {
        $servername = $servername = $_ENV["MYSQL_NAME"] . ":" . $_ENV["MYSQL_PORT"];
        $dbname = $_ENV["MYSQL_DATABASE"];
        $username = $_ENV["MYSQL_USER"];
        $password = $_ENV["MYSQL_PASSWORD"];
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $conn->query("SELECT COUNT(id) COUNT FROM run_code");        
	$row = $stmt->fetch();
	echo "<p>Total code entries: ".number_format($row['COUNT'])."</p>";
	$startYear = 2017;
	$endYear = 2025;
	$year = $startYear;
	$stmt = $conn->prepare("SELECT YEAR(time) YEAR, MONTHNAME(time) MONTH, COUNT(*) COUNT FROM run_code WHERE YEAR(time) = :year GROUP BY MONTH(time)");
	$stmt->bindParam(':year', $year);
	echo "<table style='width:30%'";
	echo "<tr>";
	echo "<th>Month</th>";
	echo "<th>Year</th>";
	echo "<th>Count</th>";
	echo "</tr>";
	while ($year <= $endYear) {
		$stmt->execute();
		while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
			echo "<tr>";
			echo "<td>".$row['MONTH']."</td>";
			echo "<td>".$row['YEAR']."</td>";
			echo "<td>".number_format($row['COUNT'])."</td>";
			echo "</tr>";
		}
		$year++;
	}
	echo "</table>";

        $stmt = $conn->query("SELECT COUNT(id) COUNT FROM quorum_studio_downloads");
        $row = $stmt->fetch();
        echo "<p>Quorum Studio Downloads: ".number_format($row['COUNT'])."</p>";

	$stmt = null;
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
    $conn = null;
}
?>
