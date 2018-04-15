import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  session: inject('session'),

  actions: { 
    async authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      try {
        await this.get('session').authenticate('authenticator:oauth2', identification, password);
        this.transitionToRoute('characters');
      } catch(e) {
        this.set('errorMessage', e.error || e);
      }
    }
  }
});
