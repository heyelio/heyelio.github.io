/* global document */
/*
 * Port of the inline script inside the reference theme's `Navbar.astro`.
 *
 * The prerendered markup uses the build-time wallpaper mode, but the visitor may
 * have stored a different one, so the navbar's transparent mode is corrected
 * while the document is still parsing — before the first paint and before
 * hydration.
 */
(function () {
  var navbar = document.getElementById('navbar');
  if (!navbar) {
    return;
  }

  var wallpaperMode = document.documentElement.getAttribute('data-wallpaper-mode');
  var isHome = navbar.getAttribute('data-is-home') === 'true';
  var mode;

  if (wallpaperMode === 'fullscreen') {
    mode = isHome ? 'semifull' : 'semi';
  } else if (wallpaperMode === 'banner') {
    mode = 'semi';
  } else {
    mode = 'none';
  }

  navbar.setAttribute('data-transparent-mode', mode);
})();
