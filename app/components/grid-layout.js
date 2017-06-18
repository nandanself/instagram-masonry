import Ember from 'ember';
import DummyData from 'instamasonry/mixins/dummy-data';

const {
	htmlSafe
} = Ember.String;

export default Ember.Component.extend(DummyData,{
	ajax: Ember.inject.service(),

	cardSize:300,

	classNames:['grid-layout'],

	attributeBindings:['masonryGridStyle:style'],

	gridHeight:null,

	masonryGridStyle:Ember.computed('gridHeight',function(){
		// this.get('ajax').request('https://www.instagram.com/nandanself/media/',{
		// 	method:'GET',
		// 	crossOrigin: true,
		// }).then(function(response){
		// 	console.log(response);
		// });
		const cardSize = this.get('cardSize');
		let documentWidth = Ember.$(document).width() - 40;
		let width ="width:" + ((Math.floor(documentWidth / cardSize)) * cardSize + (Math.floor(documentWidth / cardSize) - 1) * 10) + "px;" + this.get('gridHeight');
		return htmlSafe(width);
	}),

	_setUpCard(){
		var photosCard = document.getElementsByClassName('insta-card');
		for (var j = 1 ; j < photosCard.length; j++){
			photosCard[j].style.top = "0px";
			photosCard[j].style.left = "0px";
		}
		const cardSize = this.get('cardSize');
		let documentWidth = Ember.$(document).width() - 40;
		// console.log(documentWidth);
		let numberOfColumn = Math.floor(documentWidth / cardSize);
		// console.log(numberOfColumn);
		let pad = 10, cols = numberOfColumn, newleft,newtop;
		let gridHeight = 0;

		for (var i = 1 ; i < photosCard.length; i++){
			if( i % cols === 0){
				newtop = (photosCard[i-cols].offsetTop + photosCard[i-cols].offsetHeight) + pad;
				photosCard[i].style.top = newtop + "px";

				let height = newtop + photosCard[i].offsetHeight;
				if (gridHeight < height){
					gridHeight = height;
				}
			}else{
				if(photosCard[i-cols]){
					newtop = (photosCard[i-cols].offsetTop + photosCard[i-cols].offsetHeight) + pad;
					photosCard[i].style.top = newtop + "px";
					let height = newtop + photosCard[i].offsetHeight;
					if (gridHeight < height){
						gridHeight = height;
					}
				}
				newleft = (photosCard[i-1].offsetLeft + photosCard[i-1].offsetWidth) + pad;
				photosCard[i].style.left = newleft + "px";
				// console.log("else",i);
			}
		}
		gridHeight = "height:" + (gridHeight) +"px";
		this.set('gridHeight',gridHeight);
	},

	didInsertElement(){
		this._setUpCard();
		Ember.$(window).on('resize', Ember.$.proxy(this._setUpCard, this));
	},

	willDestroyElement(){
		Ember.$(window).off('resize', Ember.$.proxy(this._setUpCard, this));
	}

});
