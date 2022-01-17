
console.log("Content script has loaded via Manifest V3. test download");

var downloadOptions = {
    filename : 'test/test_SAVEAS_TRUE.txt', 
    conflictAction : 'uniquify',
    method : 'GET',
    saveAs : true,
    url : URL.createObjectURL(new Blob(['test text'], {type : 'text/plain'}))
}

chrome.runtime.sendMessage({method: "downloads.download", download : downloadOptions}, function(response) {
    console.log(response);
});  

downloadOptions.filename = 'test/test_SAVEAS_FALSE.txt';
downloadOptions.saveAs = false;

chrome.runtime.sendMessage({method: "downloads.download", download : downloadOptions}, function(response) {
    console.log(response);
});             
 