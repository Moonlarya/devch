const crimeTypeTemplate = document.createElement('template')
crimeTypeTemplate.innerHTML = `
  <div part="point" class="point"></div>
  <span part="name" class="name"></span>
`

class CrimeType extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  get type() {
    return this.getAttribute('type')
  }

  get color() {
    return this.getAttribute('color')
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowRoot.appendChild(crimeTypeTemplate.content.cloneNode(true))

    const name = this.shadowRoot.querySelector('.name')
    const point = this.shadowRoot.querySelector('.point')

    name.textContent = this.type
    point.style.backgroundColor = this.color
  }
}

export default CrimeType
