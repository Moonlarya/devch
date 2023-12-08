const checkboxTemplate = document.createElement('template')
checkboxTemplate.innerHTML = `
<label part="checkbox-wrapper">
    <input part="checkbox" type="checkbox">
    <span></span>
</label>
`

class LabelCheckbox extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  get labelAttribute() {
    return this.getAttribute('label')
  }

  connectedCallback() {
    this.render()
  }

  handleChange() {}

  render() {
    this.shadowRoot.appendChild(checkboxTemplate.content.cloneNode(true))
    const labelElement = this.shadowRoot.querySelector('label')
    const inputElement = this.shadowRoot.querySelector('input')

    inputElement.addEventListener('change', () => this.handleChange())

    if (this.labelAttribute) {
      labelElement.querySelector('span').textContent = this.labelAttribute
    }
  }
}

export default LabelCheckbox
