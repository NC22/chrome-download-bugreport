
console.log("Background service [ok]");


self.addEventListener("install", function(event) {
    
    console.log("Background service worker has loaded via Manifest V3.");
    
    // if you put initialisation of chrome.runtime.onMessage.addListener here nothing changes 

});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    
    console.log("request: ", request);
    console.log("sender: ", sender);
  
    chrome.downloads.download(request.download, function (downloadId) {
            
        if (KellyEDispetcher.api.runtime.lastError) {    
        
            response.error = KellyEDispetcher.api.runtime.lastError.message;
            response.downloadId = -1;
            
        } else {
        
            response.downloadId = downloadId;
        }
        
        if (callback) callback(response);                    
    });
});