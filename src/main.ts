import { createApp } from 'vue'
import App from './App.vue'
import CKEditor from '@ckeditor/ckeditor5-vue';
import router from './router'
import store from '../store/index'
import alert from './services/alert'
import modal from './services/modal'
import loading from './services/loading'
import './assets/styles/index.css'
import './assets/styles/icons.css'


const app = createApp(App);


app
.use(store)
.use(router)
.use(CKEditor)
.provide('alert', alert)
.provide('loading', loading)
.provide('modal', modal)
.mount('#app')
