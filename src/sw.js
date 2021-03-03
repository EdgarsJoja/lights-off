chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action == 'get_patterns') {
    chrome.storage.local.get('patterns_blacklist', data => {
      sendResponse({ data });
    });
  }

  return true;
});
