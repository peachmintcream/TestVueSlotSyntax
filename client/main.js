import Vue from 'vue';
import App from './App.vue';
import './main.html';

import VueMeteorTracker from 'vue-meteor-tracker'
Vue.use(VueMeteorTracker)

import Vuetify from 'vuetify/dist/vuetify.js'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify, {
  iconfont: 'fa',
})

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  });
});
