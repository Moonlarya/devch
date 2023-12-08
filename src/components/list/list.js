const listTemplate = document.createElement('template')
listTemplate.innerHTML = `
  <section part="list">
    
  </section>
`

class List extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowRoot.appendChild(listTemplate.content.cloneNode(true))

    const listButton = document.getElementById('list-button')
    const list = document.getElementById('list')

    listButton.addEventListener('click', function () {
      if (!list.style.width || list.style.width === '0px') {
        list.style.width = 'calc(100% - 60px)'
      } else {
        list.style.width = '0'
      }
    })
  }
}

export default List
