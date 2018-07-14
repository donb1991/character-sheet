import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { task } from 'ember-concurrency';

export default Controller.extend({
    session: inject('session'),

    login: task(function * () {
      let { identification, password } = this.getProperties('identification', 'password');
      try {
        yield this.get('session').authenticate('authenticator:oauth2', identification, password);
        
        this.transitionToRoute('characters');
      } catch(error) {
        this.set('errorMessage', error.message || error);
      }
    })
});
