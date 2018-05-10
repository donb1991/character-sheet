import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Service from '@ember/service';
import sinon from 'sinon';
import RSVP from 'rsvp';
import { run } from '@ember/runloop';
import EmberObject from '@ember/object';

const user = {
  id: 2,
  username: 'bob'
};

/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
const fakeSession = Service.extend({
  data: {
    authenticated: {
      id: user.id
    }
  }
});
/* eslint-enable ember/avoid-leaking-state-in-ember-objects */
let fakeStore = Service.extend({
  findRecord: sinon.stub().returns(RSVP.resolve(EmberObject.create({ username: user.username })))
});

module('Unit | Service | currentUser', function(hooks) {
  setupTest(hooks);

  test('it loads the user current user into the store ', async function(assert) {
    let service = this.owner.lookup('service:current-user');
    let findRecord = sinon.stub().returns(RSVP.resolve(EmberObject.create({ username: user.username })));
    this.owner.lookup('service:store').set('findRecord', findRecord);
    this.owner.lookup('service:session').set('data.authenticated', { id: user.id });
    await run(() => {
      service.load();
    });

    assert.equal(service.get('user.username'), 'bob');
    assert.ok(findRecord.calledWith(user.id));
  });
});

