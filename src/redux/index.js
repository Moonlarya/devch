import zoomStore from './zoom/zoom-store.js'
import crimeStore from './crime/crime-store.js'

import zoomReducer from './zoom/reducer.js'
import crimeReducer from './crime/reducer.js'

import createStore from './store.js'

const initialState = {
  zoom: zoomStore.getState(),
  crime: crimeStore.getState(),
}

function rootReducer(state, action) {
  return {
    zoom: zoomReducer(state.zoom, action),
    crime: crimeReducer(state.crime, action),
  }
}

const globalStore = createStore(rootReducer, initialState)


export default globalStore
