import Ember from 'ember';

export default Ember.Component.extend({

  classNames:['small-display-pic'],

  scaleImage(srcwidth, srcheight, targetwidth, targetheight, fLetterBox) {
    var result = {
      width: 0,
      height: 0,
      fScaleToTargetWidth: true
    };

    if ((srcwidth <= 0) || (srcheight <= 0) || (targetwidth <= 0) || (targetheight <= 0)) {
      return result;
    }

    // scale to the target width
    var scaleX1 = targetwidth;
    var scaleY1 = (srcheight * targetwidth) / srcwidth;

    // scale to the target height
    var scaleX2 = (srcwidth * targetheight) / srcheight;
    var scaleY2 = targetheight;

    // now figure out which one we should use
    var fScaleOnWidth = (scaleX2 > targetwidth);
    if (fScaleOnWidth) {
      fScaleOnWidth = fLetterBox;
    } else {
      fScaleOnWidth = !fLetterBox;
    }

    if (fScaleOnWidth) {
      result.width = Math.floor(scaleX1);
      result.height = Math.floor(scaleY1);
      result.fScaleToTargetWidth = true;
    } else {
      result.width = Math.floor(scaleX2);
      result.height = Math.floor(scaleY2);
      result.fScaleToTargetWidth = false;
    }
    result.targetleft = Math.floor((targetwidth - result.width) / 2);
    result.targettop = Math.floor((targetheight - result.height) / 2);

    return result;
  },

  OnImageLoad(evt) {
    var img = evt;
    var currentState = this;

    // what's the size of this image and it's parent
    var w = Ember.$(img).width();
    var h = Ember.$(img).height();
    var tw = Ember.$(img).parent().width();
    var th = Ember.$(img).parent().height();

    // compute the new size and offsets
    var result = currentState.scaleImage(w, h, tw, th, false);

    // adjust the image coordinates and size
    img.width = result.width;
    img.height = result.height;
    Ember.$('img').css("margin-left", result.targetleft);
    Ember.$('img').css("margin-top", result.targettop);
    return result;
  },

  actions: {
    imageLoaded(evt) {
      this.OnImageLoad(evt);
    }
  },
});
