import reducer from '../crime/reducer.js'
import createStore from '../store.js'

const initialState = {
  activeCrimeType: null,
  crimeTypesList: [],
  crimeEventsByArea: {},
}

const crimeStore = createStore(reducer, initialState)

export default crimeStore
