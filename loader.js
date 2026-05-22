(function () {
  function getProfile() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const isMobileOrTablet = w < 1024 || (w < 768 && h > w);
    return isMobileOrTablet ? 'mobile' : 'desktop';
  }

  const profile = getProfile();
  const BASE = 'https://raw.githubusercontent.com/your-username/your-repo/main';

  const script = document.createElement('script');
  script.src = `${BASE}/${profile}-frames.js`;
  script.onload = function () {
    document.dispatchEvent(new Event('framesReady'));
  };
  document.head.appendChild(script);
})();
