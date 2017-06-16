import Ember from 'ember';

const {
	htmlSafe
} = Ember.String;

export default Ember.Component.extend({
	tagName:'article',
	classNames:['insta-card'],
	attributeBindings: ['cardStyle:style'],
	
	cardStyle:Ember.computed('photo',function(){
		let height = "height:" + (60 + parseInt(this.get('photo.computedHeight'))) + "px"; 
		return htmlSafe('position:absolute;' + height);
	}),

	// didInsertElement(){
	// 	Ember.$(window).on('scroll',Ember.$.proxy(this.didSroll,this));
	// },

	// willDestroyElement(){
	// 	Ember.$(window).off('scroll',Ember.$.proxy(this.didSroll,this));
	// },

	// didSroll(){
	// 	console.log();
	// }
});
