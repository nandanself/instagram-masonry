import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'img',
  classNames:['ma'],
  attributeBindings:['src:src'],

  didInsertElement(){
    this._super(...arguments);
    const img = this.$()[0]
    var currentState = this;
    this.$()[0].onload = function(){
      currentState.sendAction('scaleImage',img);
    }
  },
});
