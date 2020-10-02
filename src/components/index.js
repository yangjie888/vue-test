import OneCom from './OneCom'
import TwoCom from './TwoCom'
import AsideCom from './AsideCom'
const components = [
  OneCom,
  TwoCom,
  AsideCom
]

const install = (Vue, opts = {}) => {
  components.map(component => Vue.component(component.name, component))
}
export default install
