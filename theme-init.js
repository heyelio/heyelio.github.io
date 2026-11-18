/* global window, document */
// Applies the stored display settings before first paint. Runs from <head>, so
// it must stay tiny, dependency-free and tolerant of blocked storage.
(function () {
  try {
    var root = document.documentElement;
    var store = window.localStorage;
    var theme = store.getItem('heyelio:theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // The stored preference is light, dark or system; anything else follows the OS.
    root.classList.toggle('dark', theme === 'dark' || (theme !== 'light' && prefersDark));

    var hueRaw = store.getItem('heyelio:hue');
    var hue = Number(hueRaw);
    if (hueRaw !== null && Number.isFinite(hue) && hue >= 0 && hue <= 360) {
      root.style.setProperty('--hue', String(hue));
    }

    if (store.getItem('heyelio:card-border') === 'true') {
      root.classList.add('enable-card-border');
    }

    if (store.getItem('heyelio:card-follow-hue') === 'true') {
      root.classList.add('card-follow-hue');
    }

    // Wallpaper and banner panels are applied through root attributes so the
    // markup stays identical between the prerendered HTML and the client.
    var wallpaperMode = store.getItem('heyelio:wallpaper-mode');
    if (wallpaperMode === 'fullscreen' || wallpaperMode === 'overlay' || wallpaperMode === 'none') {
      root.dataset.wallpaperMode = wallpaperMode;
    }

    var layout = store.getItem('heyelio:fullscreen-layout') === 'hero' ? 'hero' : 'classic';
    root.dataset.fullscreenLayout = layout;

    if (store.getItem('heyelio:banner-title') === 'false') {
      root.dataset.bannerTitleEnabled = 'false';
    }

    if (store.getItem('heyelio:banner-waves') === 'true') {
      root.dataset.wavesEnabled = 'true';
    }

    if (store.getItem('heyelio:banner-gradient') === 'false') {
      root.dataset.gradientEnabled = 'false';
    }

    var overlayOpacity = store.getItem('heyelio:overlay-opacity');
    if (overlayOpacity !== null) {
      root.style.setProperty('--overlay-opacity', overlayOpacity);
    }

    var overlayBlur = store.getItem('heyelio:overlay-blur');
    if (overlayBlur !== null) {
      root.style.setProperty('--overlay-blur', overlayBlur + 'px');
    }

    var cardOpacity = store.getItem('heyelio:overlay-card-opacity');
    if (cardOpacity !== null) {
      root.style.setProperty('--card-transparent-opacity', cardOpacity);
    }

    // The transparent-panel rules target <body>, which does not exist yet while
    // this head script runs, so apply the class as soon as it is parsed.
    var mode = root.dataset.wallpaperMode;
    var transparent = mode === 'overlay' || (mode === 'fullscreen' && layout === 'hero');
    var applyBody = function () {
      if (document.body) {
        document.body.classList.toggle('wallpaper-transparent', transparent);
      }
    };

    if (document.body) {
      applyBody();
    } else {
      document.addEventListener('DOMContentLoaded', applyBody);
    }
  } catch {
    // Storage or matchMedia can be unavailable; the default light theme applies.
  }
})();
