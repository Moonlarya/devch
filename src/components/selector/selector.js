import store from '../../redux/index.js'

const selectorTemplate = document.createElement('template')
selectorTemplate.innerHTML = `
  <select part="selector">
    <option id="default-value" selected disabled hidden></option>
  </select>
`

class Selector extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  get defaultValue() {
    return this.getAttribute('defaultValue')
  }

  async connectedCallback() {
    await this.getTypes()
    this.render()
  }

  async getTypes() {
    return new Promise((resolve, reject) => {
      try {
        store.subscribe(() => {
          const currentState = store.getState()
          this.types = currentState.crime.crimeTypesList
          resolve()
        })
      } catch (error) {
        reject(error)
      }
    })
  }

  async render() {
    this.shadowRoot.appendChild(selectorTemplate.content.cloneNode(true))
    const defaultOption = this.shadowRoot.getElementById('default-value')
    defaultOption.innerHTML = this.defaultValue
  }
}

export default Selector
