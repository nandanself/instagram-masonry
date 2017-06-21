import Ember from 'ember';
import AjaxCall from "instamasonry/mixins/ajax-call";


export default Ember.Component.extend(AjaxCall,{
	ajax: Ember.inject.service(),

	tagName:'header',
	classNames:['user-detailBox'],

	actions:{
		ajaxCall(){
			document.getElementsByClassName('progress-bar')[0].style.opacity = 1;
			let url = "http://scooptent.com/api/users/31/galleries/";
			this.getCall(url).then(function(){
				document.getElementsByClassName('progress-bar')[0].style.opacity = 0;
			});
		}
	}

});
