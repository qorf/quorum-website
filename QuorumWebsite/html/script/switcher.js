// A switcher on a QuorumPage (QuorumPage:Switcher): a bar of buttons, each
// showing one panel, as the home page's "Accessible, Friendly, Proven".
// This script makes the buttons tabs (tablist, tab, tabpanel), shows one
// panel at a time, and lets the arrow, Home and End keys move between
// tabs. It marks the chosen tab with aria-selected; the site's stylesheet
// colors it (QuorumPage:SwitcherItem). Without it, every panel shows.
(function () {
  function setUp(switcher, number) {
    var bar = switcher.querySelector('[data-switcher-tabs]');
    var tabs = Array.prototype.slice.call(switcher.querySelectorAll('[data-switcher-tab]'));
    var panels = Array.prototype.slice.call(switcher.querySelectorAll('[data-switcher-panel]'));
    if (!bar || tabs.length === 0 || tabs.length !== panels.length) return;

    bar.setAttribute('role', 'tablist');
    tabs.forEach(function (tab, i) {
      var tabId = 'switcher-' + number + '-tab-' + i;
      var panelId = 'switcher-' + number + '-panel-' + i;
      tab.id = tabId;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', panelId);
      panels[i].id = panelId;
      panels[i].setAttribute('role', 'tabpanel');
      panels[i].setAttribute('aria-labelledby', tabId);
      tab.addEventListener('click', function () { choose(i, false); });
      tab.addEventListener('keydown', function (event) {
        var next = -1;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (i + 1) % tabs.length;
        if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (i - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (next >= 0) {
          event.preventDefault();
          choose(next, true);
        }
      });
    });

    function choose(index, focus) {
      tabs.forEach(function (tab, i) {
        var chosen = i === index;
        tab.setAttribute('aria-selected', chosen ? 'true' : 'false');
        tab.tabIndex = chosen ? 0 : -1;
        // Each panel sits in a centering row; hide the row with it.
        panels[i].parentElement.hidden = !chosen;
      });
      if (focus) tabs[index].focus();
    }
    choose(0, false);
  }

  function setUpAll() {
    document.querySelectorAll('[data-switcher]').forEach(setUp);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setUpAll);
  } else {
    setUpAll();
  }
})();
