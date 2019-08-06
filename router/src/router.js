import VueRouter from 'vue-router'

import HomeContainer from './components/views/HomeContainer.vue'
import SearchSquare from './components/views/SearchSquare.vue'
import Message from './components/views/Message.vue'

var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/search',component:SearchSquare},
        {path:'/message',component:Message}
    ]
})
export default router