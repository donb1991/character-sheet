import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { currentURL, visit, click, fillIn } from '@ember/test-helpers';

module('Acceptance | session', function(hooks) {
  setupApplicationTest(hooks);

  test('User can naviagte to character page when authenticate', async function(assert) {
    await visit('/login');

    await fillIn('[data-test-selector="identification"]', 'bob');
    await fillIn('[data-test-selector="password"]', 'secret');
    await click('[data-test-action="login"]');

    assert.equal(currentURL(), '/characters');
  });
});
