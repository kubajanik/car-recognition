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

    this.version(1).stores({
      history: '[make+model], image, date, similar',
      favorite: '[make+model], image, date, similar'
    })

    this.history = this.table('history')
    this.favorite = this.table('favorite')
  }
}

export default new Database()