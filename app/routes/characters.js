import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend(AuthenticatedRouteMixin, {
  session: service(),

  model() {
    let userId = this.get('session.session.authenticated.id');

    return this.get('store').query('character', { userId });
  }
});
