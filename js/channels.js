var Yummy = {
    name: 'Yummy',
    createdOn: new Date("April 01, 2016"),
    createdBy: 'minus.plus.yummy',
    starred: false,
    expiresIn: 100,
    messageCount: 900

}

var SevenContinents = {
    name: 'SevenContinents',
    createdOn: new Date("April 01, 2016"),
    createdBy: 'truck.cotton.zone',
    starred: true,
    expiresIn: 100,
    messageCount: 900

}
var KillerApp = {
    name: 'KillerApp',
    createdOn: new Date("April 01, 2016"),
    createdBy: 'driveway.helper.magazine',
    starred: false,
    expiresIn: 100,
    messageCount: 900

}
var FirstPersonOnMars = {
    name: 'FirstPersonOnMars',
    createdOn: new Date("April 01, 2016"),
    createdBy: 'escapes.pitch.saucepan',
    starred: true,
    expiresIn: 100,
    messageCount: 900

}
var Octoberfest = {
    name: 'Octoberfest',
    createdOn: new Date("April 01, 2016"),
    createdBy: 'meanings.identity.pays',
    starred: false,
    expiresIn: 100,
    messageCount: 900
}

function listChannels() {
    createChannelElement(Yummy).appendTo("#channelsList");
    createChannelElement(SevenContinents).appendTo("#channelsList");
    createChannelElement(KillerApp).appendTo("#channelsList");
    createChannelElement(FirstPersonOnMars).appendTo("#channelsList");
    createChannelElement(Octoberfest).appendTo("#channelsList");
    switchChannel(SevenContinents);
}


function createChannelElement(channelObject) {
    // Checking if star is true and assigning star Icon
    var star4 = (channelObject.starred) ? 'fa fa-star fa-lg' : 'fa fa-star-o fa-lg';

    var channelElement;
    channelElement = $('<li onclick="switchChannel(' + channelObject.name + ')">').html('#' + channelObject.name + '<span class="channel-meta"><i id="' + channelObject.name + '" class="' + star4 + '" aria-hidden="true" onclick="star()"></i>&nbsp<i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i></span>');

    return channelElement;
}

var currentChannel


/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */

function switchChannel(channelName) {
    //Log the channel switch
    console.log("Tuning in to channel", channelName);

    currentChannel = channelName;
    console.log(currentChannel);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = '#' + channelName.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/' + currentChannel.createdBy + '" target="_blank"><strong>' + currentChannel.createdBy + '</strong></a>';

    /* #6 #highlight the selected #channel.
        This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + currentChannel.name + ')').addClass('selected');

    var star1 = (currentChannel.starred) ? 'fa fa-star' : 'fa fa-star-o';

    /* #6 #liking channels on #click */
    $('#channel-star').attr('class', star1);
    
  

}


/* #6 #liking a channel on #click */

function star() {
    currentChannel.starred = !currentChannel.starred;
    var star2 = (currentChannel.starred) ? 'fa fa-star' : 'fa fa-star-o';
    $('#channel-star').attr('class', star2);
    var star3 = (currentChannel.starred) ? 'fa fa-star fa-lg' : 'fa fa-star-o fa-lg';
    $('#' + currentChannel.name).attr('class', star3);
}