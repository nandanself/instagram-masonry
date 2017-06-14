import Ember from 'ember';

const {
	htmlSafe
} = Ember.String;

export default Ember.Component.extend({
	tagName:'article',
	classNames:['insta-card'],
	attributeBindings: ['cardStyle:style'],
	
	cardStyle:htmlSafe('position:absolute'),
});
