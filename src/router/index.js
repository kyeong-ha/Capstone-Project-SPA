import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import QuestionView from '../views/QuestionView.vue'
import ResultView from '../views/ResultView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/question',
      name: 'question',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: QuestionView
    },
    {
      path: '/result',
      name: 'result',
      component: ResultView,
      props: true
    }
  ]
})

export default router
