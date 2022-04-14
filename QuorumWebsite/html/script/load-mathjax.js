window.MathJax = {
    loader: {load: ['input/mml', 'output/svg', 'a11y/semantic-enrich','a11y/explorer','a11y/assistive-mml']},
    options: {
      sre: {
        speech: 'shallow'  // one of: 'deep', 'shallow', or 'none'
      },
      renderActions: {
        //
        // Force speech enrichment regardless of the menu settings
        //
        enrich: {'[+]': [
          function (doc) {doc.enrich(true)},
          function (math, doc) {math.enrich(doc, true)}  
        ]}
      }
    }
  };
  
  (function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/startup.js';
    script.async = true;
    document.head.appendChild(script);
  })();