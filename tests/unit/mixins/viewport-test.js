import Ember from 'ember';
import ViewportMixin from 'instamasonry/mixins/viewport';
import { module, test } from 'qunit';

module('Unit | Mixin | viewport');

// Replace this with your real tests.
test('it works', function(assert) {
  let ViewportObject = Ember.Object.extend(ViewportMixin);
  let subject = ViewportObject.create();
  assert.ok(subject);
});
