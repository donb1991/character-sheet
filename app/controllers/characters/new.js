import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import CharacterValidations from '../../validations/character';
import lookupValidator from 'ember-changeset-validations';
import Changeset from 'ember-changeset';
import { task } from 'ember-concurrency';

export default Controller.extend({
  character: alias('model'),

  save: task(function * () {
    let changeset = this.get('changeset');

    yield changeset.validate();
    if (changeset.get('isValid')) {
      this.get('changeset').save();
      this.transitionToRoute('characters');
    }
  }),  
  
  setup() {
    let changeset = new Changeset(this.get('character'), lookupValidator(CharacterValidations), CharacterValidations);
    changeset.set('creator.id', 1);
    this.set('changeset', changeset);
  }
});
