import { Model } from 'ember-cli-mirage';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  characters: hasMany('character')
});
