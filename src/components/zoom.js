import { zoomInAction, zoomOutAction } from '../redux/zoom/actions.js'
import store from '../redux/index.js'

const map = document.getElementById('map')
const mapContainer = document.getElementById('map-container')
const zoomInButton = document.getElementById('zoom-in')
const zoomOutButton = document.getElementById('zoom-out')

let isDragging = false
let lastX = 0
let lastY = 0

zoomInButton.addEventListener('click', () => {
  store.dispatch(zoomInAction())
  map.style.transform = `scale(${store.getState().zoom.zoomLevel})`
})

zoomOutButton.addEventListener('click', () => {
  store.dispatch(zoomOutAction())
  map.style.transform = `scale(${store.getState().zoom.zoomLevel})`
})

mapContainer.addEventListener('mousedown', (e) => {
  isDragging = true
  lastX = e.clientX
  lastY = e.clientY
})

document.addEventListener('mouseup', () => {
  isDragging = false
})
