<template>
  <div class="app-footer">
    <p><a v-bind:href="url" target="_blank">&copy;2020-{{nowYear}} {{name}}</a></p>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      footer: '真实的',
      url: 'https://github.com/jianghaif',
      nowYear: null,
      name: '峰'
    }
  },
  created() {
    this.doHandleYear()
  },
  methods: {
    doHandleYear() {
    var myDate = new Date();
    this.nowYear = myDate.getFullYear();
}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-footer {
  /*margin-top: 80px;*/
  width: 100%;
  background: #eee;
}
.app-footer p {
  width: 1200px;
  height: 80px;
  line-height: 80px;
  margin: 0 auto;
  text-align: center;
}
.app-footer p a {
  /*text-decoration: none;*/
  font-size: 18px;
  color: #000;
  font-weight: bold;
}
.app-footer p a:hover {
  color: #42b983;
}
</style>
