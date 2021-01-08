import Dexie from 'dexie'

const db = new Dexie('car-recognition')
db.version(1).stores({
  history: '[make+model], image',
  favorite: '[make+model], image'
})

export default db