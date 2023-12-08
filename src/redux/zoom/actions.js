export const ZOOM_IN = 'ZOOM_IN'
export const ZOOM_OUT = 'ZOOM_OUT'

function zoomInAction() {
  return { type: ZOOM_IN }
}

function zoomOutAction() {
  return { type: ZOOM_OUT }
}

export { zoomInAction, zoomOutAction }
