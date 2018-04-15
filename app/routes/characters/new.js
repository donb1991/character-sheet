import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  model() {
    let userId = this.get('session.session.authenticated.id');

    return this.get('store').createRecord('character', { userId });
  },

  session: service(),

  setupController(controller, model) {
    controller.set('model', model);
  },

  store: service()
});
