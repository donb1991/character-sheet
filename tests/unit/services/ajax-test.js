import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Service from '@ember/service';

module('Unit | Service | ajax', function(hooks) {
  setupTest(hooks);

  test('it adds auth token to headers if persent', function(assert) {
    let fakeSession = Service.extend({
      authToken: '123456'
    });
    this.owner.register('service:session', fakeSession);
    let service = this.owner.lookup('service:ajax');

    assert.equal(service.headers['auth-token'], '123456');
  });
});

