chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action == 'get_data') {
    chrome.storage.local.get(['enabled', 'patterns_blacklist'], data => {
      sendResponse({ data });
    });
  }

  return true;
});
