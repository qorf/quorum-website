// The topic search on a QuorumPage (QuorumPage:TopicSearch). As the reader
// types, only the tutorial cards ([data-topic-card]) whose name, description
// or lessons hold every typed word stay shown; the matching words are marked;
// a group's heading and cards hide when none of its cards match; and a line
// says how many match. Without this script, every card stays shown.
(function () {
  function setUp(search) {
    var box = search.querySelector('input');
    var clear = search.querySelector('[data-topic-clear]');
    var status = search.querySelector('[data-topic-status]');
    var cards = Array.prototype.slice.call(document.querySelectorAll('[data-topic-card]'));
    var grids = Array.prototype.slice.call(document.querySelectorAll('[data-topic-cards]'));
    var timer = null;

    // Each card's searchable words, and the text pieces to mark in.
    cards.forEach(function (card) {
      card.topicWords = card.textContent.toLowerCase();
    });

    function unmark(card) {
      card.querySelectorAll('mark[data-topic-mark]').forEach(function (mark) {
        var parent = mark.parentNode;
        parent.replaceChild(document.createTextNode(mark.textContent), mark);
        parent.normalize();
      });
    }

    function markWords(card, words) {
      var walker = document.createTreeWalker(card, NodeFilter.SHOW_TEXT);
      var pieces = [];
      while (walker.nextNode()) {
        if (walker.currentNode.parentNode.getAttribute('aria-hidden') !== 'true') {
          pieces.push(walker.currentNode);
        }
      }
      pieces.forEach(function (piece) {
        var lower = piece.nodeValue.toLowerCase();
        var spans = [];
        words.forEach(function (word) {
          var at = lower.indexOf(word);
          while (at >= 0) {
            spans.push([at, at + word.length]);
            at = lower.indexOf(word, at + word.length);
          }
        });
        if (spans.length === 0) return;
        spans.sort(function (a, b) { return a[0] - b[0]; });
        var merged = [];
        spans.forEach(function (span) {
          var last = merged[merged.length - 1];
          if (last && span[0] <= last[1]) {
            last[1] = Math.max(last[1], span[1]);
          } else {
            merged.push(span.slice());
          }
        });
        var text = piece.nodeValue;
        var fragment = document.createDocumentFragment();
        var from = 0;
        merged.forEach(function (span) {
          fragment.appendChild(document.createTextNode(text.slice(from, span[0])));
          var mark = document.createElement('mark');
          mark.setAttribute('data-topic-mark', '');
          mark.textContent = text.slice(span[0], span[1]);
          fragment.appendChild(mark);
          from = span[1];
        });
        fragment.appendChild(document.createTextNode(text.slice(from)));
        piece.parentNode.replaceChild(fragment, piece);
      });
    }

    // A grid's group: its heading's section, so an empty group hides whole.
    function groupOf(grid) {
      return grid.closest('section') || grid;
    }

    function run() {
      var query = box.value.trim().toLowerCase();
      var words = query.split(/\s+/).filter(function (word) { return word.length > 0; });
      clear.hidden = words.length === 0;
      var shownCards = 0;
      var shownLessons = 0;
      cards.forEach(function (card) {
        unmark(card);
        var matches = words.every(function (word) { return card.topicWords.indexOf(word) >= 0; });
        card.hidden = !matches;
        if (matches && words.length > 0) {
          shownCards = shownCards + 1;
          markWords(card, words);
          card.querySelectorAll('p:last-child a').forEach(function (lesson) {
            var title = lesson.textContent.toLowerCase();
            if (words.some(function (word) { return title.indexOf(word) >= 0; })) {
              shownLessons = shownLessons + 1;
            }
          });
        }
      });
      grids.forEach(function (grid) {
        var any = Array.prototype.some.call(grid.querySelectorAll('[data-topic-card]'), function (card) {
          return !card.hidden;
        });
        groupOf(grid).hidden = !any;
      });
      if (words.length === 0) {
        status.textContent = '';
      } else if (shownCards === 0) {
        status.textContent = 'No tutorials or lessons match "' + box.value.trim() + '".';
      } else {
        status.textContent = shownCards + (shownCards === 1 ? ' tutorial' : ' tutorials') + ' and ' +
          shownLessons + (shownLessons === 1 ? ' lesson' : ' lessons') + ' match "' + box.value.trim() + '". Showing only those.';
      }
    }

    box.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(run, 150);
    });
    box.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && box.value !== '') {
        box.value = '';
        run();
      }
    });
    clear.addEventListener('click', function () {
      box.value = '';
      run();
      box.focus();
    });
  }

  function setUpAll() {
    document.querySelectorAll('[data-topic-search]').forEach(setUp);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setUpAll);
  } else {
    setUpAll();
  }
})();
