import Ember from 'ember';
import AjaxCallMixin from 'instamasonry/mixins/ajax-call';
import { module, test } from 'qunit';

module('Unit | Mixin | ajax call');

// Replace this with your real tests.
test('it works', function(assert) {
  let AjaxCallObject = Ember.Object.extend(AjaxCallMixin);
  let subject = AjaxCallObject.create();
  assert.ok(subject);
});
