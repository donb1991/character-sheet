import { validatePresence } from 'ember-changeset-validations/validators';

export default {
  class: validatePresence(true),
  name: validatePresence(true),
  race: validatePresence(true)
};
