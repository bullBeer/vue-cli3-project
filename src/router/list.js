// 主页
const home = () => import('@/views/home')
// 登录页
const news = () => import('@/views/news')


export default [
  {
    path: '/',
    redirect: {
      path: '/home'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/news',
    name: 'news',
    component: news
  }
]
