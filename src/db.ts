import Dexie, {Table} from 'dexie'

export interface Car {
  make: string;
  model: string;
  image: string;
  date: Date;
  similar?: Car[]
}

class Database extends Dexie {
  history: Table<Car>
  favorite: Table<Car>

  constructor() {
    super('car-recognition')

    this.history = this.table('history')
    this.favorite = this.table('favorite')
  }
}

// const db = new Dexie('car-recognition')
// db.version(1).stores({
//   history: '[make+model], image, date',
//   favorite: '[make+model], image, date'
// })

export default new Database()