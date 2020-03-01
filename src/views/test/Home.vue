<template>
  <div class="App">
    <div>
      <router-link to="/Home">go Home</router-link>
      <router-link to="/About">go About</router-link>
    </div>
    <div>
      <el-button></el-button>
      {{this.aa}}
      <p>{{getCounter}}</p>
      <button @click="add">add</button>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      aa:"11"};
  },
  computed: {
    getCounter(){
      return this.$store.getters['test/getCounter']
    }
  },
  mounted(){
    console.log("%c "+this.$axios,'color:blue')
    this.load()
  },
  methods: {
    add(){
  this.$store.commit('test/add')
    },
    load(){
      this.$axios.get('/').then(res=>{console.log(res)})
    }
  }
};
</script>
<style lang="less" scoped>
.App {
  text-align: center;
  color: skyblue;
  font-size: 28px;
}
</style>
