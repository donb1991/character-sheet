import IndexedDBBucket from '@orbit/indexeddb-bucket';

export default {
  create() {
    return new IndexedDBBucket({ namespace: 'character-sheet-settings' });
  }
};
