import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { A } from '@ember/array';
import { find } from '@ember/test-helpers'; 

module('Integration | Component | character-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it displays a list of characters', async function(assert) {
    this.set('characters', A([
      {
        id: 1,
        name: 'bob'
      },
      {
        id: 2,
        name: 'tim'
      }
    ]));

    await render(hbs`{{character-list characters=characters}}`);

    assert.equal(find('[data-test-character-id="1"]').textContent, 'bob');
    assert.equal(find('[data-test-character-id="2"]').textContent, 'tim');
  });
});
