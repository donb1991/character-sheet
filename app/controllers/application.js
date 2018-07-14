import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    session: inject('session'),

    actions: {
      signOut() {
        this.get('session').invalidate();
      }
    }
});
