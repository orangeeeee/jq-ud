var message = {
    width: desiredWidth,
    height: desiredHeight
};
window.parent.postMessage(JSON.stringify(message), '*');

//And this in your containing page:

function onMessage(event) {
    if (event.source != theIFrameElement.contentWindow) return;
    var message = JSON.parse(event.data);
    var desiredHeight = message.height;
    var desiredWidth = message.width;
}

if (window.attachEvent)
    window.attachEvent('onmessage', onMessage);
else if (window.addEventListener)
    window.addEventListener('message', onMessage, false);
