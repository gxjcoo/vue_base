<template>
  <div class="content">
    <div class="header">
    <Header></Header>
    </div>
    <div class="main">
      <router-view></router-view>
      <Article></Article>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './Header'
import Footer from './Footer'
import Article from '../components/article'
export default {
  data () {
    return {}
  },
  components: {
    Footer,
    Header,
    Article
  }
}
</script>
<style lang="less" scoped>
.content{
  width:100%;
  height:100%;
  .header{
  height:3rem;
  width:100%;
  }
  .main{
   height:80rem;
   overflow: auto;
  width:100%;
  margin: 0 auto ;
}
}

</style>
