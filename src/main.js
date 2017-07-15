import Vue from 'vue'
import App from './App'
import router from './router';
import ElementUI from 'element-ui';
import 'assets/iconfont/iconfont'; // iconfont 具体图标见https://github.com/PanJiaChen/vue-element-admin/wiki

import iconSvg from './components/Icon-svg'
import 'element-ui/lib/theme-default/index.css';
import 'assets/custom-theme/index.css'; // 换肤版本element-ui css

Vue.use(ElementUI);
// Vue.use(iconSvg);
Vue.component('icon-svg', iconSvg);
new Vue({
    el: "#app",
    router,
    template:'<App/>',
    components:{App}
})