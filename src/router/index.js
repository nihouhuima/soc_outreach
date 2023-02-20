import VueRouter from "vue-router"
import Mission from '../components/Mission'
import Home from '../pages/Home'
import Menu from '../pages/Menu'

export default new VueRouter({
    routes: [
        {
            path: '/home',
            
            component: Home},
        {
            path: '/',
            
            redirect:'/home'},
        {
            path: '/Mission',
            component: Mission},
        {
            path: '/Menu',
            component: Menu}
            ]
})