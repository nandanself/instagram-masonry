import Ember from 'ember';
import ViewPort from "instamasonry/mixins/viewport";

const {
	htmlSafe
} = Ember.String;

export default Ember.Component.extend(ViewPort,{
	tagName:'article',
	classNames:['insta-card'],
	attributeBindings: ['cardStyle:style'],

	cardStyle:htmlSafe('position:absolute;'),

	didInsertElement(){
		Ember.run.scheduleOnce('afterRender', this, function() {
			this.didScroll();
		});
		Ember.$(window).on('scroll',Ember.$.proxy(this.didScroll,this));
	},
	
	willDestroyElement(){
		Ember.$(window).off('scroll',Ember.$.proxy(this.didScroll,this));
	},
	
	didScroll(){
		let node = this.$()[0];
		// console.log(node);
		if (this.isVisibleInViewport(node)){
			// console.log('this.isVisibleInViewport(node)');
			node.classList.add('card-animation');
		}
	},

});
