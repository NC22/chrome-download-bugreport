
console.log("Content script has loaded via Manifest V3. test download");

var downloadOptions = {
    filename : 'test/test.txt', 
    conflictAction : 'uniquify',
    method : 'GET',
    url : URL.createObjectURL(new Blob(['test text'], {type : 'text/plain'}))
}

chrome.runtime.sendMessage({method: "downloads.download", download : downloadOptions}, function(response) {
    console.log(response);
});             
 
