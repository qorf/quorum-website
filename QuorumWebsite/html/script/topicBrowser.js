// The topic browser on a QuorumPage (QuorumPage:TopicBrowser), as the
// reference page lists its tutorials. Without this script every group and
// topic is shown, in order. With it:
// - one topic shows at a time, with its group's tiles: the topic named in
//   the address (reference.html#charts), or else the first one;
// - the tree opens the group being shown and closes the others; a group's
//   button opens it and shows its first topic, or closes it if it's open;
// - the tile and the tree's link for the topic shown are marked
//   (aria-current); the site's generated styles mark them;
// - typing in the search shows the lessons whose words hold every typed
//   word, in place of the groups, and a line says how many match.
// It only sets hidden, aria-expanded and aria-current: it writes no styles.
(function () {
  function setUp(browser) {
    var groups = Array.prototype.slice.call(browser.querySelectorAll('[data-group]'));
    var topics = Array.prototype.slice.call(browser.querySelectorAll('[data-topic]'));
    var buttons = Array.prototype.slice.call(browser.querySelectorAll('[data-group-button]'));
    var marks = Array.prototype.slice.call(browser.querySelectorAll('[data-topic-tile], [data-topic-link]'));
    var box = browser.querySelector('[data-topic-search-box]');
    var clear = browser.querySelector('[data-topic-clear]');
    var status = browser.querySelector('[data-topic-status]');
    var resultsBox = browser.querySelector('[data-topic-results]');
    var results = Array.prototype.slice.call(browser.querySelectorAll('[data-topic-result]'));
    if (topics.length === 0) {
      return;
    }

    function topicById(id) {
      for (var i = 0; i < topics.length; i++) {
        if (topics[i].getAttribute('data-topic') === id) {
          return topics[i];
        }
      }
      return null;
    }

    function groupOf(topic) {
      return topic.closest('[data-group]');
    }

    function openGroup(groupId, open) {
      buttons.forEach(function (button) {
        if (button.getAttribute('data-group-button') === groupId) {
          button.setAttribute('aria-expanded', open ? 'true' : 'false');
          var list = browser.querySelector('[data-group-list="' + groupId + '"]');
          if (list) {
            list.hidden = !open;
          }
        }
      });
    }

    // Shows one topic and its group's tiles; opens its group in the tree.
    function show(id, moveFocus) {
      var topic = topicById(id) || topics[0];
      var group = groupOf(topic);
      var groupId = group.getAttribute('data-group');
      groups.forEach(function (g) {
        g.hidden = g !== group;
      });
      topics.forEach(function (t) {
        t.hidden = t !== topic;
      });
      buttons.forEach(function (button) {
        openGroup(button.getAttribute('data-group-button'), button.getAttribute('data-group-button') === groupId);
      });
      var shown = topic.getAttribute('data-topic');
      marks.forEach(function (mark) {
        var markId = mark.getAttribute('data-topic-tile') || mark.getAttribute('data-topic-link');
        if (markId === shown) {
          mark.setAttribute('aria-current', 'true');
        } else {
          mark.removeAttribute('aria-current');
        }
      });
      if (moveFocus) {
        var heading = topic.querySelector('[data-topic-heading]');
        if (heading) {
          heading.focus();
        }
      }
    }

    function fromAddress(moveFocus) {
      var id = decodeURIComponent(window.location.hash.replace(/^#/, ''));
      if (id && !topicById(id)) {
        // A group's address shows the group's first topic.
        buttons.forEach(function (button) {
          if (button.getAttribute('data-group-button') === id) {
            id = button.getAttribute('data-first-topic');
          }
        });
      }
      show(id, moveFocus);
    }

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var groupId = button.getAttribute('data-group-button');
        var current = browser.querySelector('[data-group="' + groupId + '"]');
        if (current && !current.hidden) {
          openGroup(groupId, button.getAttribute('aria-expanded') !== 'true');
          return;
        }
        var first = button.getAttribute('data-first-topic');
        if (first) {
          window.location.hash = first;
        }
      });
    });

    window.addEventListener('hashchange', function () {
      fromAddress(true);
    });

    // The search.
    function search() {
      var words = box.value.toLowerCase().split(/\s+/).filter(function (w) {
        return w.length > 0;
      });
      clear.hidden = words.length === 0;
      if (words.length === 0) {
        resultsBox.hidden = true;
        status.textContent = '';
        fromAddress(false);
        return;
      }
      var count = 0;
      results.forEach(function (result) {
        var text = result.getAttribute('data-topic-result');
        var match = words.every(function (w) {
          return text.indexOf(w) >= 0;
        });
        result.hidden = !match;
        if (match) {
          count++;
        }
      });
      groups.forEach(function (g) {
        g.hidden = true;
      });
      resultsBox.hidden = count === 0;
      status.textContent = count === 0 ? 'No lessons match.' : (count === 1 ? '1 lesson matches.' : count + ' lessons match.');
    }

    if (box) {
      box.addEventListener('input', search);
      clear.addEventListener('click', function () {
        box.value = '';
        search();
        box.focus();
      });
    }

    fromAddress(false);
  }

  function start() {
    document.querySelectorAll('[data-topic-browser]').forEach(setUp);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
