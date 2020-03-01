const Home = () => import('../views/test/Home');
const About = () => import('../views/test/About');
export default [
  {
      path: '/Home',
      name: 'Home',
      component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
},
  ]