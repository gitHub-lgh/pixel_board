import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import EasyChart from './components/EasyChart.vue';

const app = document.getElementById('app');

if (app) {
  const pageType = app.getAttribute('data-page'); // 获取自定义属性

  if (pageType === 'easychart') {
    createApp(EasyChart).mount('#app');
  } else {
    createApp(App).mount('#app');
  }
}
