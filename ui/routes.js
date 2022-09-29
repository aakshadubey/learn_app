import TeamComponent from './components/team.vue'
import HelloWorld from './components/HelloWorld.vue'  
// import VueRouter from 'vue-router'
// import Vue from 'vue'



export const routes= [



    {
        path:'/',
        component:HelloWorld,
    },
        {
            path: '/team',
            component:TeamComponent
        }
        
        ]


// Vue.use(VueRouter);