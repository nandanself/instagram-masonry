import Ember from 'ember';

export default Ember.Component.extend({
	classNames:['card-footer'],

	liked:false,

	actions:{
		photoLiked(){
			this.set('liked',true);
		},

		photoUnLiked(){
			this.set('liked',false);
		}
	}
});
