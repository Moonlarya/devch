import store from '../../redux/index.js'

const sidebarTemplate = document.createElement('template')
sidebarTemplate.innerHTML = `
  <link rel="stylesheet" href="src/components/checkbox/checkbox.css">
  <section part="sidebar">
    <div part="search">
      <input part="search-input" placeholder="🔍 Search" />
      <img src="src/assets/icons/filter.svg" alt='filter icon' />
    </div>
    <div part="content">
      <h2 part="h2">Filters</h2>
      <h3 part="h3">Crime Type</h3>
      <div part="checkbox-list" class="checkbox-list"></div>
      <h3 part="h3">Region</h3>
      <selector-options defaultValue="All States"></selector-options>
      <h3 part="h3">City / Town</h3>
      <selector-options defaultValue="All Cities / Towns"></selector-options>
      <h3 part="results">Results:</h3>
    </div>
  </section>
`

class Sidebar extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
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

  toggleSidebar = (sidebar) => {
    if (!sidebar.style.width || sidebar.style.width === '0px') {
      sidebar.style.width = '30%'
    } else {
      sidebar.style.width = '0'
    }
  }

  render() {
    this.shadowRoot.appendChild(sidebarTemplate.content.cloneNode(true))

    const sidebar = document.getElementById('sidebar')
    const locationButton = document.getElementById('location-button')
    locationButton.addEventListener('click', () => this.toggleSidebar(sidebar))

    const checkboxList = this.shadowRoot.querySelector('.checkbox-list')

    const crimeTypes = this.types.map((type) => {
      const crimeType = document.createElement('checkbox-label')
      crimeType.setAttribute('label', type.name)
      crimeType.setAttribute('value', type.id)

      return crimeType
    })

    crimeTypes.forEach((type) => {
      checkboxList.appendChild(type)
    })
  }
}

export default Sidebar
