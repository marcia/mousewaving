/*
 * Chromeless player has no controls.
 */

// Update a particular HTML element with a new value
function updateHTML(elmId, value) {
  document.getElementById(elmId).innerHTML = value;
}

// This function is called when an error is thrown by the player
function onPlayerError(errorCode) {
  alert("An error occured of type:" + errorCode);
}

// This function is automatically called by the player once it loads
function onYouTubePlayerReady(playerId) {
  ytplayer = document.getElementById("ytPlayer");
  ytplayer.addEventListener("onStateChange", "onPlayerStateChange");
  ytplayer.addEventListener("onError", "onPlayerError");
  //Load an initial video into the player
  ytplayer.cueVideoById("ylLzyHk54Z0");
	var jel = jQuery( "#container" );
	jel.mousemove( function( event ) {
		var x = event.pageX - jel.offset().left,
	 		width = ytplayer.width,
			duration = ytplayer.getDuration();
		if ( x > 0 && x < width ) {
			ytplayer.seekTo( Math.round( x / width * duration ), false );
			ytplayer.pauseVideo();
		}
	});
}

// The "main method" of this sample. Called when someone clicks "Run".
function loadPlayer() {
  // Lets Flash from another domain call JavaScript
  var params = { allowScriptAccess: "always" };
  // The element id of the Flash embed
  var atts = { id: "ytPlayer" };
  // All of the magic handled by SWFObject (http://code.google.com/p/swfobject/)
  swfobject.embedSWF("http://www.youtube.com/apiplayer?" +
                     "version=3&enablejsapi=1&playerapiid=player1", 
                     "thumbnail", "480", "295", "9", null, null, params, atts);
}

loadPlayer();