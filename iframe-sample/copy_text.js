$("#postMessage").on("click", function() {
    var message = {
        result: "success",
        code: "A1101",
        errorCode: "E0001"
    };
    window.parent.postMessage(JSON.stringify(message), '*');

});
//And this in your containing page:
function onMessage(event) {

    var message = JSON.parse(event.data);
    console.log(message);
    //成功時
    if (message.result === "success") {
        alert("get code:" + message.code);
    } else { //エラー時
        console.log(message.errorCode);
    }
}

if (window.attachEvent)
    window.attachEvent('onmessage', onMessage);
else if (window.addEventListener)
    window.addEventListener('message', onMessage, false);
