import Dexie from 'dexie'

const db = new Dexie('car-recognition')
db.version(1).stores({
  history: '[make+model], image, date',
  favorite: '[make+model], image, date'
})

export default db