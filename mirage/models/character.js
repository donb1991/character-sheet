import { Model } from 'ember-cli-mirage';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  user: belongsTo('user')
});
