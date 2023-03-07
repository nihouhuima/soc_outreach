import VueRouter from "vue-router"
import Mission from '../components/Mission'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import Action from '../pages/Action'
import Download from '../components/Download'
import Refresh from '../components/Refresh'

export default new VueRouter({
    routes: [
        {
            path: '/home',
            
            component: Home},
        {
            path: '/',
            
            redirect:'/Menu'},
        {
            path: '/Mission',
            component: Mission},
        {
            path: '/Menu',
            component: Menu},
        {
            path: '/Action',
            component: Action},
        {
            path: '/Download',
            component: Download},
        {
            path: '/Refresh',
            component: Refresh}
            ]
})