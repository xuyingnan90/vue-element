import MButton from './MButton.vue'
import Vue from 'vue'
MButton.install = ()=> {
  Vue.component('MButton', MButton)
}
export default MButton