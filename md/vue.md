vue-router vuex  axios

# 路由懒加载
- `const About = import('../views/test/About')`这类句式，将所有的文件打包到一个js文件中。导致js文件过大，首屏加载太慢
- `const About = () => import( '../views/test/About')`这类句式，将同所有的文件单独打包到一个js文件中。每次路由跳转都需要加载js文件，导致http请求太过频繁
- `const About = () => import(/* webpackChunkName:'test' */ '../views/test/About')`这类句式，将同一模块的文件打包到一个js文件中。只有再模块路由进行跳转时再进行js文件加载。

# 浏览器长缓存优化
- 打包后的文件加hash，hash不变 浏览器就不会重复请求资源
- 使用[chunkhash:8],可时hash值长度减小，且不再是每次打包都更改hash值，而是有变动的时候再进行更改