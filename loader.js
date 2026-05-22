(function () {
  function getProfile() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const isMobileOrTablet = w < 1024 && h > w;
    return isMobileOrTablet ? 'mobile' : 'desktop';
  }

  const profile = getProfile();
  const BASE = 'https://cdn.jsdelivr.net/gh/JunezaNiyazi/Webflow-frames@main/desktop-frames.js';

  const script = document.createElement('script');
  script.src = `${BASE}/${profile}-frames.js`;
  script.onload = function () {
    console.log('Frames file loaded:', profile);
    setTimeout(function() {
      document.dispatchEvent(new Event('framesReady'));
    }, 100);
  };
  script.onerror = function () {
    console.error('Failed to load frames for profile:', profile);
    console.error('Tried to load:', script.src);
  };
  document.head.appendChild(script);
})();
