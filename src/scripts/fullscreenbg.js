/*!
 * bespoke-fullscreenbackground v2.0.0
 * https://github.com/sole/bespoke-fullscreenbackground
 *
 * Copyright 2014, sole
 * This content is released under the MIT license
 */

module.exports = function() {
  
  return function(deck) {
  
    var fsBgAttribute = 'data-bespoke-fullscreenbackground';
    var preloadDiv = document.createElement('div');

    // Preload the images to prevent "flashy" effects
    deck.slides.forEach(function(slide) {
      var imgSrc = slide.getAttribute(fsBgAttribute);
      if(imgSrc) {
        var img = document.createElement('img');
        preloadDiv.appendChild(img);
        img.src = imgSrc;
      }

    });

    deck.on('activate', function(e) {
      var index = e.index;
      var slide = e.slide;
      var deckParent = deck.parent;
      var background = slide.getAttribute(fsBgAttribute);

      if(background) {
        deckParent.classList.add('cover');
        deckParent.style.backgroundImage = 'url(' + background + ')';
      } else {
        deckParent.classList.remove('cover');
        deckParent.style.backgroundImage = null;
      }

    });
  };

};

