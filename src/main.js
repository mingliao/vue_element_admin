import Vue from 'vue'
import App from './App'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import 'assets/custom-theme/index.css'; // 换肤版本element-ui css

Vue.use(ElementUI);

new Vue({
    el: "#app",
    router,
    template:'<App/>',
    components:{App}
})