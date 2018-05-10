import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { fillIn, click } from '@ember/test-helpers';

module('Acceptance | new characters', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /new-characters', async function(assert) {
    await visit('characters/new');

    await fillIn('[data-test-selector="name"]', '');
    await fillIn('[data-test-selector="class"]', '');
    await fillIn('[data-test-selector="race"]', '');

    await click('[data-test-action="save"]');
    
    assert.equal(currentURL(), '/new-characters');
  });
});
