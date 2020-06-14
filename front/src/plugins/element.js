import Vue from 'vue'
import { Button, Loading, Dialog, MessageBox, Table, TableColumn } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(Button);
Vue.use(Loading);
Vue.use(Dialog)
Vue.use(Table)
Vue.use(TableColumn)

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;