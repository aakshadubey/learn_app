import TeamComponent from './components/team.vue'
import HelloWorld from './components/HelloWorld.vue'
import CurriculumComponent from './components/curriculum.vue' 
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
        },
       {
        path: '/curriculum',
        component: CurriculumComponent
       }
        ]


// Vue.use(VueRouter);