import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Embarques = lazy(() => import('../pages/Embarques'))
const Cargas = lazy(() => import('../pages/Cargas'))
const Negociaciones = lazy(() => import('../pages/Negociaciones'))
const Rastreo = lazy(()=> import('../pages/Rastreo'))


const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/embarques',
    component: Embarques,
  },
  {
    path: '/cargas',
    component: Cargas,
  },
  {
    path: '/negociaciones',
    component: Negociaciones,
  },
  {
    path: '/rastreo',
    component: Rastreo,
  },

]

export default routes
