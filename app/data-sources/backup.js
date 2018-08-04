import IndexedDBSource from '@orbit/indexeddb';

export default {
  create(injections = {}) {
    injections.name = 'backup';
    injections.namespace = 'character-sheet';
    return new IndexedDBSource(injections);
  }
};
