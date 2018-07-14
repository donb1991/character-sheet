import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { find, currentURL, click, fillIn, visit } from '@ember/test-helpers';
import Mirage from 'ember-cli-mirage';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | logging in', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('it logs a user in', async function(assert) {
    await visit('/login');

    await fillIn('[data-test-selector=username]', 'Dude');
    await fillIn('[data-test-selector=password]', 'secret');
    await click('[data-test-action=login]');
    
    assert.ok(currentURL(), '/characters');
  });

  test('it redirects you to login page if not sign in', async function(assert) {
    await visit('/');

    assert.ok(currentURL(), '/login');
  });

  test('it displays server errors when loggin in', async function(assert) {
    server.post('/token', () => new Mirage.Response(
      401,
      { 'Content-Type': 'text/plain' },
      JSON.stringify({ message: "Not allowed" })
    ));

    await visit('/login');

    await fillIn('[data-test-selector=username]', 'I');
    await fillIn('[data-test-selector=password]', 'broke it');
    await click('[data-test-action=login]');

    assert.ok(find('[data-test-error=login]'));
  });
});
