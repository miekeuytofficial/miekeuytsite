import './assets/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faPhone, faChevronDown, faCircleUser, faUser, faSpinner, faHandshake, faCircleCheck, faGlobe, faChevronUp, faFileArrowDown} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'

/* add icons to the library */
library.add(faLinkedin);
library.add(faEnvelope);
library.add(faGithub);
library.add(faPhone);
library.add(faChevronDown);
library.add(faChevronUp);
library.add(faCircleUser);
library.add(faUser);
library.add(faSpinner);
library.add(faHandshake);
library.add(faCircleCheck);
library.add(faGlobe);
library.add(faFileArrowDown);
library.add(faCopyright);
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia());
app.use(router);
app.mount('#app');
