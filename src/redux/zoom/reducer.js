import { ZOOM_IN, ZOOM_OUT } from './actions.js'

function reducer(state, action) {
  switch (action.type) {
    case ZOOM_IN: {
      if (state.zoomLevel >= 3) return state
      return { ...state, zoomLevel: state.zoomLevel + 0.1 }
    }
    case ZOOM_OUT: {
      if (state.zoomLevel <= 1) return state
      return { ...state, zoomLevel: state.zoomLevel - 0.1 }
    }
    default:
      return state
  }
}

export default reducer
