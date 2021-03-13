chrome.runtime.sendMessage({ action: 'get_data' }, response => {
  const blacklist = response.data.patterns_blacklist || [];
  const enabled = response.data.enabled || false;

  const url = location.href;

  if (enabled) {
    if (blacklist.every(pattern => url.indexOf(pattern) === -1)) {
      document.body.classList.add('lo-theme-dark');
    }
  }
});
