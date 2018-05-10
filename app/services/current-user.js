import Service from '@ember/service';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Service.extend({  
  load() {
    let userId = this.get('session.data.authenticated.id');
    if (userId) {
      return this.get('store').findRecord('user', userId).then((user) => {
        this.set('user', user);
      });
    } else {
      return RSVP.resolve();
    }
  },

  session: service(),
  store: service()
});
