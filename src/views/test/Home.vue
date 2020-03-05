<template>
  <div class="App">
    <div>
      {{ this.aa }}
      <p>{{ getCounter }}</p>
      <button @click="add">add</button>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      aa: '11'
    }
  },
  computed: {
    getCounter () {
      return this.$store.getters['test/getCounter']
    }
  },
  mounted () {
    console.log('1')
  },
  methods: {
    del () {
      console.log('del')
    },
    add () {
      this.$store.commit('test/add')
    },
    load () {
      this.$axiosaxios.get('url', {
        params: {
          key1: 'url'
        }
      })
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>
