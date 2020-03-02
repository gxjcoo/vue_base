<template>
  <div class="App">
    <div>
      <el-button></el-button>
      {{this.aa}}
      <p>{{getCounter}}</p>
      <button @click="add">add</button>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      aa: "11"
    };
  },
  computed: {
    getCounter() {
      return this.$store.getters["test/getCounter"];
    }
  },
  mounted() {

  },
  methods: {
    add() {
      this.$store.commit("test/add");
    },
    load() {
      this.$axios.get("/aa").then(res => {
        console.log(res);
      });
    }
  }
};
</script>
