(function () {
  function getProfile() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const isMobileOrTablet = w < 1024 && h > w;
    return isMobileOrTablet ? 'mobile' : 'desktop';
  }

  const profile = getProfile();
  const BASE = 'https://raw.githubusercontent.com/JunezaNiyazi/Webflow-frames/main';

  const script = document.createElement('script');
  script.src = `${BASE}/${profile}-frames.js`;
  script.onload = function () {
    // Small delay to ensure page settings code has registered its listener
      console.log('Frames file loaded successfully');

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
