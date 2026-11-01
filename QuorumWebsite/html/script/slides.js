// Slides on a QuorumPage (QuorumPage:Slides). The page has each slide as an
// ordinary subsection after a [data-slides] navigation row; this script
// moves the row under the slides, adds a button for each slide, and shows
// one slide at a time. It marks the current slide's button with
// aria-current and disables Previous or Next at the ends; the site's
// stylesheet gives those their look (QuorumPage:Slides), and each slide's
// button copies Previous's classes. Without it, every slide shows.
(function () {
  function setUp(navigation) {
    var slides = [];
    var next = navigation.nextElementSibling;
    while (next && next.tagName === 'SECTION') {
      slides.push(next);
      next = next.nextElementSibling;
    }
    if (slides.length === 0) {
      navigation.hidden = true;
      return;
    }
    slides[slides.length - 1].after(navigation);

    var previousButton = navigation.querySelector('[data-slides-previous]');
    var nextButton = navigation.querySelector('[data-slides-next]');
    var numbers = navigation.querySelector('[data-slides-numbers]');
    var numberButtons = [];
    var current = 0;

    slides.forEach(function (slide, index) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = previousButton.className;
      button.textContent = String(index + 1);
      button.setAttribute('aria-label', 'Slide ' + (index + 1));
      button.addEventListener('click', function () { show(index); });
      numbers.appendChild(button);
      numberButtons.push(button);
    });

    function setEnabled(button, enabled) {
      button.disabled = !enabled;
    }

    function show(index) {
      current = index;
      slides.forEach(function (slide, i) { slide.hidden = i !== index; });
      numberButtons.forEach(function (button, i) {
        var selected = i === index;
        if (selected) {
          button.setAttribute('aria-current', 'step');
        } else {
          button.removeAttribute('aria-current');
        }
      });
      setEnabled(previousButton, index > 0);
      setEnabled(nextButton, index < slides.length - 1);
    }

    previousButton.addEventListener('click', function () {
      if (current > 0) show(current - 1);
    });
    nextButton.addEventListener('click', function () {
      if (current < slides.length - 1) show(current + 1);
    });
    // A link to a heading inside a slide (such as the page's own
    // contents) shows that slide.
    function showLinked() {
      var target = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
      for (var i = 0; target && i < slides.length; i++) {
        if (slides[i].contains(target)) {
          show(i);
          target.scrollIntoView();
          return true;
        }
      }
      return false;
    }
    window.addEventListener('hashchange', showLinked);
    if (!showLinked()) show(0);
  }

  function setUpAll() {
    document.querySelectorAll('[data-slides]').forEach(setUp);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setUpAll);
  } else {
    setUpAll();
  }
})();
