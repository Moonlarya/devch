import store from '../../redux/index.js'

const initialCoords = { longitude: 32.0, latitude: 49.0 }
const krakowLatitude = 19.0
const homelLongitude = 31.0

const map = document.getElementById('map')
const width = map.offsetWidth
const height = map.offsetHeight

const realDistanceKrakowCherkasyKm = 1046
const mapDistanceKrakowCherkasyPx = width / 2
const mapDistanceHomelCherkasyPx = height / 2.75

const longitudeStep =
  mapDistanceHomelCherkasyPx / (initialCoords.longitude - homelLongitude)

const latitudeStep =
  mapDistanceKrakowCherkasyPx / (initialCoords.latitude - krakowLatitude)

// TODO: move to redux
const initialZoom = realDistanceKrakowCherkasyKm / mapDistanceKrakowCherkasyPx

let data
const getTypes = async () => {
  return new Promise((resolve, reject) => {
    try {
      store.subscribe(() => {
        const currentState = store.getState()
        data = currentState.crime.crimeEventsByArea
        resolve()
      })
    } catch (error) {
      reject(error)
    }
  })
}

getTypes()
  .then(() => {
    Object.values(data).map((area) => {
      Object.values(area).map((crime) => {
        console.log(crime)
        const crimePoint = document.createElement('crime-point')
        crimePoint.style.width = '10px'
        crimePoint.style.height = '10px'
        crimePoint.style.borderRadius = '10px'
        crimePoint.style.backgroundColor = 'red'
        crimePoint.style.position = 'absolute'
        crimePoint.style.top =
          (crime.lon - homelLongitude) * longitudeStep + 'px'
        crimePoint.style.left =
          (crime.lat - krakowLatitude) * latitudeStep + 'px'

        map.appendChild(crimePoint)
      })
    })
  })
  .catch((error) => console.log(error))

// center of Ukraine
const crimePoint = document.createElement('crime-point')
crimePoint.style.width = '10px'
crimePoint.style.height = '10px'
crimePoint.style.borderRadius = '10px'
crimePoint.style.backgroundColor = 'red'
crimePoint.style.position = 'absolute'
crimePoint.style.top =
  (initialCoords.longitude - homelLongitude) * longitudeStep + 'px'
crimePoint.style.left =
  (initialCoords.latitude - krakowLatitude) * latitudeStep + 'px'

map.appendChild(crimePoint)
