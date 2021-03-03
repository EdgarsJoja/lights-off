chrome.runtime.sendMessage({ action: 'get_patterns' }, response => {
  const blacklist = response.data.patterns_blacklist || [];
  const url = location.href;

  if (blacklist.every(pattern => url.indexOf(pattern) === -1)) {
    document.body.classList.add('lo-theme-dark');
  }
});
