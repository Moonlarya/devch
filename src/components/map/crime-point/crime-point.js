import store from '../../../redux/index.js'

const crimePointTemplate = document.createElement('template')
crimePointTemplate.innerHTML = `
  <div part="crime-point" class="crime-point"></div>
`

class CrimePoint extends HTMLElement {
  types = []
  areas = {}

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  get type() {
    return this.getAttribute('type')
  }

  get number() {
    return this.getAttribute('number')
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowRoot.appendChild(crimePointTemplate.content.cloneNode(true))
    const crimePoint = this.shadowRoot.querySelector('.crime-point')
    crimePoint.style.backgroundColor = this.types.backgroundColor
  }
}

export default CrimePoint
