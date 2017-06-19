import Ember from 'ember';

export default Ember.Mixin.create({
	activate: function() {
		console.log('hiiiiiii');
		this._super();
		window.scrollTo(0,0);
	}
});
