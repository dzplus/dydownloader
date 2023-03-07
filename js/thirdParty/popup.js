chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        // if (request.greeting === "hello")
        //     sendResponse({farewell: "goodbye"});
        if (action === "download") {
            console.log(videoUrl);
            $("#message").innerText(
                videoUrl
            )
        }
        sendResponse({res: "ok"})
    }
);