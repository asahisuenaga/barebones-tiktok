chrome.webNavigation.onCompleted.addListener((details) => {
  const url = new URL(details.url);
  const videoRegex = /^\/@[^\/]+\/video\/\d+/;

  if (!videoRegex.test(url.pathname)) {
    chrome.tabs.update(details.tabId, {
      url: "https://www.startup.horse"
    });
  }
}, {
  url: [{ hostContains: "tiktok.com" }]
});
