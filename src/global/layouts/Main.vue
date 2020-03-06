<template>
  <div class="content">
    <div class="header">
    <Header></Header>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './Header'
import Footer from './Footer'
export default {
  data () {
    return {}
  },
  components: {
    Footer,
    Header
  }
}
</script>
<style lang="less" scoped>
.content{
  width:100%;
  height:100%;
  background: #000;
  .header{
  height:18rem;
    background: #f00;
  height:100%;
  }
}

</style>
