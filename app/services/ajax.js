import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  headers: computed('session.authToken', function() {
    let headers = {};
    const authToken = this.get('session.authToken');
    if (authToken) {
      headers['auth-token'] = authToken;
    }
    return headers;
  }),

  session: service(),
});
