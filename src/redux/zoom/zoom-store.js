import createStore from '../store.js'
import reducer from './reducer.js'

const initialState = {
  zoomLevel: 1.0,
}

const zoomStore = createStore(reducer, initialState)

export default zoomStore
