import Vue from 'vue'
import App from './App.vue'
import { createApp } from 'vue'

new Vue({
    el: '#app',
    render: h => h(App)
})

createApp(App).mount('#app')