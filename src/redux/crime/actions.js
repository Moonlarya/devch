export const SET_CRIME_EVENTS_BY_AREA = 'SET_CRIME_EVENTS_BY_AREA'
export const SET_TYPES_LIST = 'SET_TYPES_LIST'
export const SET_ACTIVE_TYPE = 'SET_ACTIVE_TYPE'

function setCrimeEventsByAreaAction(payload) {
  return { type: SET_CRIME_EVENTS_BY_AREA, payload }
}

function setTypesListAction(payload) {
  return { type: SET_TYPES_LIST, payload }
}

function setActiveTypeAction(payload) {
  return { type: SET_ACTIVE_TYPE, payload }
}

export { setCrimeEventsByAreaAction, setTypesListAction, setActiveTypeAction }
