import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  actions: {
    save() {
      this.get('character').save();
    }
  },

  character: alias('model')
});
