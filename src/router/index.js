import { createRouter, createWebHashHistory } from 'vue-router'
import InitializePage from '../views/initializepage.vue'
import SelectModel from '../views/selectmodle.vue'
import User01 from '../views/user01.vue'
import Guardian01 from '../views/guardian01.vue'
import CameraPage from '../views/camerapage.vue'
import UserPersonal from '../views/userpersonal.vue'
import GuardianPersonal from '../views/guardian_personal.vue'
import EmergencePage from '../views/emergencepage.vue'
import SosPage from '../views/sospage.vue'

const routes = [
  {
    path: '/',
    name: 'InitializePage',
    component: InitializePage
  },
  {
    path: '/selectmodle',
    name: 'SelectModel',
    component: SelectModel
  },
  {
    path: '/user01',
    name: 'User01',
    component: User01
  },
  {
    path: '/guardian01',
    name: 'Guardian01',
    component: Guardian01
  },
  {
    path: '/camerapage',
    name: 'CameraPage',
    component: CameraPage
  },
  {
    path: '/userpersonal',
    name: 'UserPersonal',
    component: UserPersonal
  },
  {
    path: '/guardian_personal',
    name: 'GuardianPersonal',
    component: GuardianPersonal
  },
  {
    path: '/emergencepage',
    name: 'EmergencePage',
    component: EmergencePage
  },
  {
    path: '/sospage',
    name: 'SosPage',
    component: SosPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
