var observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        eventListenerSupported = window.addEventListener;

    return function(obj, callback){
        if( MutationObserver ){
            // define a new observer
            var obs = new MutationObserver(function(mutations, observer){
                if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
                    callback();
            });
            // have the observer observe foo for changes in children
            obs.observe( obj, { childList:true, subtree:true });
        }
        else if( eventListenerSupported ){
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    };
})();

// Observe a specific DOM element:
observeDOM( document.getElementById('playerSongInfo') ,function(){ 
   
    var newString ="s1280-c-e100-rwu-v1";
var currentImage = document.getElementById('playerBarArt');
var mysrc = currentImage.src;
mysrc = mysrc.slice(0, -11);
mysrc += newString;

document.body.style.backgroundImage = "url("+mysrc+")";
document.getElementById('content-container').style.backgroundImage = "url(over_pattern_2x.png)";

});