<template>
    <div>
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
    data(){},
    components:{
        Footer,
        Header
    }
}
</script>
<style lang="less" scoped>
.main{
    height:40rem;
}
</style>