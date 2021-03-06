/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import TextareaAutosize from 'vue-textarea-autosize'

window.Vue.use(TextareaAutosize);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('idea-footer', require('./components/utility/IdeaFooter').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    data:function () {
        return{
            register:'http://127.0.0.1:8000/register',
            login:'http://127.0.0.1:8000/login',
            home:'http://127.0.0.1:8000/',
            welcome:'http://127.0.0.1:8000/welcome',
            idea:'http://127.0.0.1:8000/idea/',
        }
    }
});
