const cardTemplate = document.createElement('template')
// TODO: separate to smaller components
cardTemplate.innerHTML = `
  <div part="card">
    <p part="card-title" id="card-title"></p>
    <span part="label">Status:</span>
    <p part="data" id="status"></p>
    <span part="label">Region:</span>
    <p part="data" id="region"></p>
    <span part="label">City / Town:</span>
    <p part="data" id="city-town"></p>
    <span part="label">Date of the crim:</span>
    <p part="data" id="date"></p>
  </div>
`

class Card extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  get title() {
    return this.getAttribute('title')
  }

  get region() {
    return this.getAttribute('region')
  }

  get city() {
    return this.getAttribute('city')
  }

  get status() {
    return 'In captivity'
  }

  get date() {
    return 'Mar 13, 2022'
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowRoot.appendChild(cardTemplate.content.cloneNode(true))
  }
}

export default Card
