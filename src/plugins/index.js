// import Vue from 'vue'
import MButton from '@/components/button/index.js'
const components = [
  MButton
]
function install(Vue) {
  components.forEach(component=>{
    Vue.component(component.name,component)
  })
}
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  // MButton
}