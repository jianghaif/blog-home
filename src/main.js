// The Vue build version to load with the `import` command
// import & export ES6语法
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Vue类
import Vue from 'vue';
import App from './App';  // App.vue
import router from './router';
// import CKEditor from '@ckeditor/ckeditor5-vue';
import ElementUI from 'element-ui'
Vue.use(ElementUI)
// Vue.config.productionTip = false;
// Vue.use(CKEditor);
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
// use

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


// index.html ——> main.js ——> App.vue