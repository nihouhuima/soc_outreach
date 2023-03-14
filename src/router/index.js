import VueRouter from "vue-router"
import Menu from '../pages/Menu'
import Download from '../components/Download'
import Refresh from '../components/Refresh'

export default new VueRouter({
    routes: [
        {
            path: '/',
            
            redirect:'/Menu'},
        {
            path: '/Menu',
            component: Menu},
        {
            path: '/Download',
            component: Download},
        {
            path: '/Refresh',
            component: Refresh}
            ]
})