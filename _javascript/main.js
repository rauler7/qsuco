document.addEventListener('DOMContentLoaded', () => {
  var navbarBurger = document.getElementById('navbarBurger');
  var navbarOpen = false;
  var rootEl = document.documentElement;

  var $burgers = getAll('.burger');

  navbarBurger.addEventListener('click', function (el) {
    navbarOpen = !navbarOpen;

    if (navbarOpen) {
      rootEl.classList.add('bd-is-clipped-touch');
    } else {
      rootEl.classList.remove('bd-is-clipped-touch');
    }
  });

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }

  if ($burgers.length > 0) {
    $burgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

