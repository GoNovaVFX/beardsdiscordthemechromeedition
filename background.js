chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({url: "http://gonova.gq/beardstheme"}, function (tab) {
        console.log("New tab launched with http://gonova.gq/beardstheme");
    });
});