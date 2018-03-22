/* #6 start the #external #action and say hello */
console.log("App is alive");

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}

var currentLocation = {
    longitude: 48.257064,
    latitude: 11.652099,
    what3words: 'eats.mistaken.backers'
}

function Message(text) {
    this.createdBy = currentLocation.what3words;
    this.latitude = currentLocation.latitude;
    this.longitude = currentLocation.longitude;
    this.createdOn = new Date(Date.now());
    this.expiresOn = new Date((new Date()).getTime() + 15);
    this.text = text;
    this.own = true;
}



function createMessageElement(messageObject) {

    var expiresIn = Math.round(messageObject.expiresOn - messageObject.createdOn);
    
    $('<div>').html('<h3><a href="http://w3w.co/' + currentLocation.what3words + '" target="_blank"><strong>' + currentLocation.what3words + '</strong></a>' + messageObject.createdOn + '<em>' + expiresIn + ' min. left</em></h3><p>' + messageObject.text + '</p><button>+5 min.</button>').addClass('message').appendTo('#messages');
}

function sendMessage() {

    var myMessage = new Message($("#chat-bar input").val());
    createMessageElement(myMessage);
    $("#chat-bar input").val('');
    $("#messages").scrollTop(messages.scrollHeight);
}