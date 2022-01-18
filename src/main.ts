import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faChevronDown,
  faChevronUp,
  faMinusCircle,
  faBroadcastTower,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';
import axios from './store/axios';
import { useTwitchStore } from './store/twitch';
import { piniaPersistPlugin } from './store/persist';

library.add(
  faMinusCircle,
  faTwitch,
  faChevronDown,
  faChevronUp,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faTimesCircle,
  faBroadcastTower
);

const pinia = createPinia();
pinia.use(piniaPersistPlugin);

createApp(App)
  .use(router)
  .use(pinia)
  .component('fa-icon', FontAwesomeIcon)
  .use((app) => {
    app.config.globalProperties.$axios = axios;
  })
  .mount('#app');

// set the twitch token if it exists
useTwitchStore().setToken();
