import Ember from 'ember';
import DummyDataMixin from 'instamasonry/mixins/dummy-data';
import { module, test } from 'qunit';

module('Unit | Mixin | dummy data');

// Replace this with your real tests.
test('it works', function(assert) {
  let DummyDataObject = Ember.Object.extend(DummyDataMixin);
  let subject = DummyDataObject.create();
  assert.ok(subject);
});
