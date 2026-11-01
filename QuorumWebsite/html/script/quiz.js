// A quiz on a QuorumPage (QuorumPage:Quiz): questions with a list of
// choices, each select carrying its right answer in data-answer. Checking
// marks each answered question data-state="correct" or "incorrect" (and
// aria-invalid when wrong), writes Correct or Incorrect under it, and says
// the score; the site's stylesheet colors them (the "quiz-right" and
// "quiz-wrong" classes, and the selects' data-state). Each choice is
// remembered on the reader's computer under the quiz's key (data-quiz),
// and remembered choices are checked when the page opens. This does what
// the Data Science Hour of Code's own scripts did, for any quiz.
(function () {
  function remember(name, value) {
    try { localStorage.setItem(name, value); } catch (e) { }
  }

  function recall(name) {
    try { return localStorage.getItem(name); } catch (e) { return null; }
  }

  function setUp(form) {
    var key = form.getAttribute('data-quiz');
    var selects = Array.prototype.slice.call(form.querySelectorAll('select[data-answer]'));
    var button = form.querySelector('[data-quiz-check]');
    var result = form.querySelector('#result');

    function lineFor(select) {
      return document.getElementById(select.id + '-validation');
    }

    function clear(select) {
      select.removeAttribute('data-state');
      select.removeAttribute('aria-invalid');
      var line = lineFor(select);
      line.innerText = '';
      line.classList.remove('quiz-right', 'quiz-wrong');
    }

    function check() {
      var score = 0;
      selects.forEach(clear);
      selects.forEach(function (select) {
        var chosen = select.value;
        if (!chosen) return;
        var line = lineFor(select);
        if (chosen === select.getAttribute('data-answer')) {
          score++;
          select.setAttribute('data-state', 'correct');
          line.innerText = 'Correct';
          line.classList.add('quiz-right');
        } else {
          select.setAttribute('data-state', 'incorrect');
          select.setAttribute('aria-invalid', 'true');
          line.innerText = 'Incorrect';
          line.classList.add('quiz-wrong');
        }
      });
      var total = selects.length;
      var words = document.createElement('p');
      if (score === total) {
        words.className = 'quiz-right';
        words.textContent = 'You got everything correct.';
      } else {
        words.className = 'quiz-wrong';
        words.textContent = 'You got ' + score + ' out of ' + total + ' correct. Please try again!';
      }
      result.innerHTML = '';
      result.appendChild(words);
    }

    selects.forEach(function (select, i) {
      select.addEventListener('change', function () {
        remember(key + 'q' + (i + 1), this.value);
        clear(select);
      });
    });
    button.addEventListener('click', check);

    var saved = 0;
    selects.forEach(function (select, i) {
      var value = recall(key + 'q' + (i + 1));
      if (value) {
        select.value = value;
        saved++;
      }
    });
    if (saved > 0) check();
  }

  function setUpAll() {
    document.querySelectorAll('[data-quiz]').forEach(setUp);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setUpAll);
  } else {
    setUpAll();
  }
})();
