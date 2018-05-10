import EmberObject from '@ember/ojbect';
import { inject as service } from '@ember/service'

export default EmberObject.extend({
  ajax: service(),
  providerName: null,

  init(providerName) {
    this._super();
    this.providerName = providerName;
  },

  open() {

  },
});
