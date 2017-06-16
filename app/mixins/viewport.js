import Ember from 'ember';

export default Ember.Mixin.create({
	isVisibleInViewport(node) {
		// console.log(node);
		var rect = node.getBoundingClientRect();
		return (
			(rect.height > 0 || rect.width > 0) &&
			rect.bottom >= 0 &&
			rect.right >= 0 &&
			rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.left <= (window.innerWidth || document.documentElement.clientWidth)
			);
	},
});
