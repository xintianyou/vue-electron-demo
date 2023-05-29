<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <div>{{ version }}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      version: ''
    }
  },
  mounted() {
    this.version = `
      本应用正在使用 Chrome (v${versions.chrome()}), 
      Node.js (v${versions.node()}), 
      和 Electron (v${versions.electron()})
    `
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
