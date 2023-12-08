import {
  SET_TYPES_LIST,
  SET_CRIME_EVENTS_BY_AREA,
  SET_ACTIVE_TYPE,
} from './actions.js'

function reducer(state, action) {
  switch (action.type) {
    case SET_ACTIVE_TYPE: {
      const { payload } = action
      return { ...state, activeCrimeType: payload }
    }
    case SET_TYPES_LIST: {
      const { payload } = action
      return { ...state, crimeTypesList: payload }
    }
    case SET_CRIME_EVENTS_BY_AREA: {
      const { payload } = action
      return { ...state, crimeEventsByArea: payload }
    }
    default:
      return state
  }
}

export default reducer
