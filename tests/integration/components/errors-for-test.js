import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
import { find } from '@ember/test-helpers'; 

module('Integration | Component | errors-for', function(hooks) {
  setupRenderingTest(hooks);

  test('it display errors on changeset', async function(assert) {
    this.set('changeset', EmberObject.create({
      errors: [
        { key: 'name', validation: ['Can\'t be blank'] },
        { key: 'email', validation: ['Invalid'] }
      ]
    }));
 
    await render(hbs`{{errors-for changeset=changeset field="name"}}`);

    assert.equal(find('[data-test-error="name"]').textContent.trim(), 'Can\'t be blank');
    assert.ok(!find('[data-test-error="email"]'));
  });
});
