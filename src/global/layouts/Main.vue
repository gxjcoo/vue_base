<template>
  <div>
    <div class="bg"></div>
    <Header></Header>
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
.bg{
  position: absolute;
  background: #fff;
  width:100vw;
  height:100vh;
  z-index: -999;
}
.main {
  height: 40rem;
}
</style>
