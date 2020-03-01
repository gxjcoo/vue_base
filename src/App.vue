<template>
  <div class="App">
    Hello World

  <div>
      <router-link to="/Home">go Home</router-link>
      <router-link to="/About">go About</router-link>
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
    return {};
  }
};
</script>

<style lang="less" scoped>
.App {
  color: skyblue;
}
</style>