import OneCom from './OneCom'
import TwoCom from './TwoCom'
import AsideCom from './AsideCom'
import AlgCom from './AlgCom'
import EchartCom from './EchartCom'
const components = [
  OneCom,
  TwoCom,
  AsideCom,
  AlgCom,
  EchartCom
]

const install = (Vue, opts = {}) => {
  components.map(component => Vue.component(component.name, component))
}
export default install
