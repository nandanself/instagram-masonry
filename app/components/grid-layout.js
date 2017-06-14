import Ember from 'ember';

const {
	htmlSafe
} = Ember.String;

export default Ember.Component.extend({
	ajax: Ember.inject.service(),

	cardSize:320,

	a:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

	classNames:['grid-layout'],

	attributeBindings:['masonryGridStyle:style'],

	gridHeight:null,

	masonryGridStyle:Ember.computed('gridHeight',function(){
		this.get('ajax').request('https://www.instagram.com/nandanself/media/',{
			method:'GET',
			crossOrigin: true,
		}).then(function(response){
			console.log(response);
		});
		const cardSize = this.get('cardSize');
		let documentWidth = Ember.$(document).width() - 40;
		let width ="width:" + ((Math.floor(documentWidth / cardSize)) * cardSize + (Math.floor(documentWidth / cardSize) - 1) * 10) + "px;" + this.get('gridHeight');
		return htmlSafe(width);
	}),

	didInsertElement(){
		const cardSize = this.get('cardSize');
		let documentWidth = Ember.$(document).width() - 40;
		console.log(documentWidth);
		let numberOfColumn = Math.floor(documentWidth / cardSize);
		console.log(numberOfColumn);
		let pad = 10, cols = numberOfColumn, newleft,newtop;
		let gridHeight = 0;
		var photosCard = document.getElementsByClassName('insta-card');
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


});
