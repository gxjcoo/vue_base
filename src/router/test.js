const Test = () => import(/* webpackChunkName:'test' */ '../views/test/Index')
const Home = () => import(/* webpackChunkName:'test' */ '../views/test/Home')
const About = () => import(/* webpackChunkName:'test' */ '../views/test/About')
export default [
  {
    path: '/test',
    name: 'Test',
    component: Test,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: About
      }
    ]
  }
]
