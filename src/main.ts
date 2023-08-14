import './assets/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faPhone, faChevronDown, faCircleUser, faUser, faSpinner} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'

/* add icons to the library */
library.add(faLinkedin);
library.add(faEnvelope);
library.add(faGithub);
library.add(faPhone);
library.add(faChevronDown);
library.add(faCircleUser);
library.add(faUser);
library.add(faSpinner);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia());
app.use(router);
app.mount('#app');
