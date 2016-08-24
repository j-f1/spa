(function (glob) {
  var SPA = {
    prefix: ''
  };
  var enabled = false;
  var title = '';
  Object.defineProperty(SPA, 'enabled', {
    get: function() {
      return enabled;
    }
  });
  var listener = function() {
    document.title = '' + (SPA.prefix || '') + (document.getElementById(decodeURIComponent(window.location.hash.slice(1))) || document.querySelector('.default.page')).getAttribute('data-title');
  };
  function enable() {
    if (!enabled) {
      title = document.title;
      window.addEventListener('hashchange', listener);
      listener();
      enabled = true;
    }
  }
  SPA.enable = enable;
  function disable() {
    if (enabled) {
      window.removeEventListener('hashchange', listener);
      document.title = title;
      enabled = false;
    }
  }
  SPA.disable  = disable;
  glob.SPA = SPA;
})(window);
