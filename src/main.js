import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { 
  faGithub, 
  faLinkedin, 
  faInstagram,
  faHtml5, 
  faCss3Alt, 
  faSquareJs, 
  faVuejs, 
  faReact, 
  faAngular, 
  faPhp, 
  faPython, 
  faFigma, 
  faWhatsappSquare 
} from '@fortawesome/free-brands-svg-icons'

// Adiciona todos os ícones
library.add(
  faEnvelope,
  faLaptopCode,
  faGithub,
  faLinkedin,
  faInstagram,
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faVuejs,
  faReact,
  faAngular,
  faPhp,
  faPython,
  faFigma,
  faWhatsappSquare
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')