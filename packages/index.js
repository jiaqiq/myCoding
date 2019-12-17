
// import CustomButton from './customButton';
// import CustomDialog from './customDialog2';
// import CustomInput from './customInput';
// import CustomLink from './customLink';
// import CustomRadio from './customRadio';
// import CustomSelect from './customSelect';
// import CustomSwitch from './customSwitch';
// import CustomTable from './customTable';
// import Message from './message/index.js';

import Button from './button/index.js';
import collapseTransition from './collapse-transition/collapse-transition.js';
import Message from './message/index.js';
import Carousel from './carousel/index.js';
import CarouselItem from './carousel-item/index.js';


const components = [
  // CustomButton,
  // CustomDialog,
  // CustomInput,
  // CustomLink,
  // CustomRadio,
  // CustomSelect,
  // CustomSwitch,
  // CustomTable

  Button,
  collapseTransition,
  Carousel,
  CarouselItem
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$message = Message;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // install,
  // CustomButton,
  // CustomDialog,
  // CustomInput,
  // CustomLink,
  // CustomRadio,
  // CustomSelect,
  // CustomSwitch,
  // CustomTable,
  // Message

  install,
  Button,
  Message,
  collapseTransition,
  Carousel,
  CarouselItem
}
