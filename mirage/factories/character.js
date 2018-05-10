import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  age() {
    return Math.floor(Math.random() * Math.floor(50)) + 20;
  },
  class: 'Paladin',
  deity() {
    return faker.list.random('Abadar', 'Asmodeus', 'Calistria', 'Desna', 'Erastil', 'Gorum', 'Gozreh'); 
  },
  gender() {
    return faker.list.random('M', 'F');
  },
  height: '5\'9',
  id: 1,
  level() {
    return Math.floor(Math.random() * Math.floor(20));
  },
  modified() {
    return Date.now(); 
  },
  name() {
    return faker.name.firstName(); 
  },
  race() {
    return faker.list.random('dwarf', 'gnome', 'half-elf', 'half-orc', 'orc', 'halfing', 'human', 'elf');
  },
  size: 'M',
  type: 'character',
  weight() {
    return Math.floor(Math.random() * Math.floor(200)) + 100;
  }
});
