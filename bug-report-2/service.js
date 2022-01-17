
console.log("Background service [ok]");

var downloads = [];

self.addEventListener("install", function(event) {
    
    console.log("Background service worker has loaded via Manifest V3.");
    
    // if you put initialisation of chrome.runtime.onMessage.addListener here nothing changes 

});


chrome.downloads.onChanged.addListener(function(downloadDelta) {
    if (downloads[downloadDelta.id]) {      
        var error = downloadDelta.error && downloadDelta.error.current ? downloadDelta.error.current : '';
        console.log('[' + downloads[downloadDelta.id].filename + '] ' + downloadDelta.state.current + ' ' + error);
    }
});


chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    
    chrome.downloads.download(request.download, function (downloadId) {
        downloads[downloadId] = request.download;
        if (chrome.runtime.lastError) {} 
        if (callback) callback(downloadId);                    
    });
    
    return true; // async mode
});