import { lazy } from 'react'
// 如果你是js就直接无视这个interface的定义
interface Router {
  name?: string,
  path: string,
  children?: Array<Router>,
  component: any
}
const router: Array<Router> = [
  {
    path: '/',
    component: lazy(() => import('../pages/home'))
  },
  {
    path: '/brand',
    component: lazy(() => import('../pages/brand'))
  },
  {
    path: '/mage',
    component: lazy(() => import('../pages/mage'))
  },
  {
    path: '/cedal',
    component: lazy(() => import('../pages/cedal'))
  },
  {
    path: '/contact',
    component: lazy(() => import('../pages/contact'))
  },
  {
    path: '/cooperation',
    component: lazy(() => import('../pages/cooperation'))
  },
  {
    path: '/article/:id',
    component: lazy(() => import('../pages/article/list'))
  },
  {
    path: '/peiqi',
    component: lazy(() => import('../pages/peiqi'))
  }
]

export default router