import Ember from 'ember';
import Viewport from "instamasonry/mixins/viewport";

const {
	htmlSafe
} =Ember.String;

export default Ember.Component.extend(Viewport,{
	notLoaded:true,
	scrollTimeout:100,

	attributeBindings:['style:style'],

	style:Ember.computed(function(){
		let height = "height:" + this.get('height') + "px";
		return htmlSafe(height);
	}),

	_settingSourceValue(){
		let currentState = this;
		let imageTag = this.$()[0];
		if(this.isVisibleInViewport(imageTag)){
			let imageUrl = currentState.get('src');
			currentState.set('source',imageUrl);
		}
	},

	didInsertElement(){
		var currentState = this;
		Ember.run.scheduleOnce('afterRender', this, function() {
			this._settingSourceValue();
		});
		let image = this.$('img')[0];
		this.$('img')[0].onload = function(){
			console.log(image);
			image.classList.add('image-animation');
			currentState.set('notLoaded',false);
		};	
		Ember.$(window).on('scroll',Ember.$.proxy(this.didScroll,this));
	},

	willDestroyElement(){
		Ember.$(window).on('scroll',Ember.$.proxy(this.didScroll,this));
	},

	didScroll(){
		Ember.run.debounce(this,'_settingSourceValue',400);
	},

});
