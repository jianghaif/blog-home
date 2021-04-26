<template>
  <div id="about">
    <h2>Welcome to My Blog !</h2>
    <p>Hi~ 这是用Vue搭建的一个简易博客，主要是由博客首页、添加博客、阅读博客等这几个页面组成。</p>

  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    }
  }
};
</script>

<style scoped>
#about {
  width: 70%;
  margin: 100px auto 0 auto;
  background-color: rgba(240,240,240,0.8);
  min-height: 360px;
  padding: 30px;
  border-radius: 2px;
}
h2 {
  font-weight: normal;
  margin-bottom: 20px;
  color: #42b983;
  font-weight: bold;
  /*text-align: center;*/
}
</style>
