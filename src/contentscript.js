(function() {
  var exec;

  exec = function(fn) {
    var script;
    script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.textContent = '(' + fn + ')();';
    return document.body.appendChild(script);
  };

  exec(function() {
    return $('body').bind('ajaxComplete', function() {
      var l, _i, _len, _ref;
      _ref = document.querySelectorAll("a[href*='rooms']");
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        l = _ref[_i];
        l.target = '_blank';
      }
      return null;
    });
  });

}).call(this);
