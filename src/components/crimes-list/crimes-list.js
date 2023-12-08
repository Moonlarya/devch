import {
  setTypesListAction,
  setCrimeEventsByAreaAction,
} from '../../redux/crime/actions.js'
import store from '../../redux/index.js'

import fetchData from '../../utils/fetchData.js'
import countEventsByArea from '../../utils/countEventsByArea.js'

const crimeTemplate = document.createElement('template')
crimeTemplate.innerHTML = `
  <link rel="stylesheet" href="src/components/crime-type/crime-type.css">
  <div part="crimes-list-wrapper" class="crimes-list-wrapper"></div>
`

class CrimesList extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.types = null
  }

  async connectedCallback() {
    await this.loadData()
    this.render()
  }

  async getTypes() {
    try {
      const currentState = store.getState()
      this.types = currentState.crime.crimeTypesList
    } catch (error) {
      console.log(error)
    }
  }

  async loadData() {
    try {
      const colors = [
        '#1a1a1a',
        '#f0552e',
        '#852d17',
        '#ffa800',
        '#76bce3',
        '#ebebeb',
      ]
      const data = await fetchData('events')
      const names = await fetchData('names')
      const crimeTypesList = Object.entries(names.affected_type).map(
        (type, index) => ({
          id: type[0],
          name: type[1],
          color: colors[index],
        })
      )

      const crimeEventsByArea = countEventsByArea(data)

      store.dispatch(setTypesListAction(crimeTypesList))
      store.dispatch(setCrimeEventsByAreaAction(crimeEventsByArea))

      this.getTypes()
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    this.shadowRoot.appendChild(crimeTemplate.content.cloneNode(true))
    const crime = this.shadowRoot.querySelector('.crimes-list-wrapper')

    const crimeTypes = this.types.map((type) => {
      const crimeType = document.createElement('crime-type')
      crimeType.setAttribute('type', type.name)
      crimeType.setAttribute('color', type.color)

      return crimeType
    })

    crimeTypes.forEach((crimeType) => {
      crime.appendChild(crimeType)
    })
  }
}

export default CrimesList
