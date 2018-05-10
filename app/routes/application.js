import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend(ApplicationRouteMixin, {
  _loadCurrentUser() {
    return this.get('currentUser').load();
  },

  beforeModel() {
    return this._loadCurrentUser();
  },

  currentUser: service(),

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  }
});
