import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHtml5, faCss3Alt, faSquareJs, faVuejs, faReact, faAngular, faPhp, faPython, faFigma, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'


library.add(faEnvelope, faGithub, faLinkedin)
library.add(faLaptopCode, faInstagram)
library.add(faHtml5, faCss3Alt, faSquareJs, faVuejs, faReact, faAngular, faPhp, faPython, faFigma, faWhatsappSquare)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
