import Vue from 'vue'
import App from './App'
import router from './router';
import ElementUI from 'element-ui';
import 'assets/iconfont/iconfont'; // iconfont 具体图标见https://github.com/PanJiaChen/vue-element-admin/wiki
import 'nprogress/nprogress.css';// Progress 进度条 样式
import 'normalize.css/normalize.css';// normalize.css 样式格式化

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