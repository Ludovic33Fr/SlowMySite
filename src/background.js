'use strict';

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GREETINGS') {
    const message = `Hi ${
      sender.tab ? 'Con' : 'Pop'
    }, my name is Bac. I am from Background. It's great to hear from you.`;

    // Log message coming from the `request` parameter
    console.log(request.payload.message);
    // Send a response message
    sendResponse({
      message,
    });
  }
});


// User has navigated to a new URL in a tab
chrome.tabs.onUpdated.addListener ((tabId, changeInfo, tab) => {
  if (
    //   tab.url !== null && tab.url.startsWith ('http') &&
    changeInfo.status == 'loading' && tab !== null && tab.url !== undefined &&
    tab.active
  ) {
    //InjectBadJs();
  }
});


function InjectBadJs () {
  chrome.tabs.executeScript (null, {
    file: 'inject.js',
  });
  /*
  chrome.storage.sync.get (['activateLink'], function (obj) {
    if (obj.activateLink == true) {

    }
  });
  */
}