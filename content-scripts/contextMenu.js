chrome.contextMenus.create({
    title: "Bring Text in Images",
    id: "bringTextInImages001",
    contexts: ["image"],
});
chrome.contextMenus.create({
    title: "Extract text from image",
    parentId: "bringTextInImages001",
    contexts: ["image"],
    onclick: (info, tab) => {
        chrome.tabs.create({
            url: chrome.extension.getURL('popup/popup.html'),
            active: false
        }, (tab) => {
            chrome.windows.create({
                tabId: tab.id,
                type: 'popup',
                focused: true,
                height: 230
            });
        });
    }
});