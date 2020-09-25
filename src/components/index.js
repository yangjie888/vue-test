import OneCom from './OneCom'
import TwoCom from './TwoCom'

const components = [
  OneCom,
  TwoCom
]

const install = (Vue, opts = {}) => {
  components.map(component => Vue.component(component.name, component))
}
export default install
