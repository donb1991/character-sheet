import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  age: attr('number'),
  class: attr('string'),
  creator: belongsTo('user'),
  deity: attr('string'),
  gender: attr('string'),
  height: attr('string'),
  name: attr('string'),
  race: attr('string'),
  size: attr('string'),
  weight: attr('number')
});
