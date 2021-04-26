<template>
  <div id="header">
    <ul>
      <li class="home" :class="{clicked: showHomePage}"><router-link to="/" >Home</router-link></li>
      <!-- <li :class="{clicked: showAddBlog}"><router-link to="/add-blog" >Add Blog</router-link></li> -->
      <!-- <li class="search"><input type="" name=""  @change="search" v-model="query"></li> -->
       <li :class="{clicked: showNotePage}"><router-link to="/notePage" >学习笔记</router-link></li>
       <li :class="{clicked: showResourceSharing}"><router-link to="/resourceSharingPage" >资源分享</router-link></li>
       <li :class="{clicked: showPhotoAlbumPage}"><router-link to="/photoAlbumPage" >生活相册</router-link></li>
       <li :class="{clicked: showAbout}" ><router-link to="/about" >About</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: ["showPage", "showHomePage", "showResourceSharing", "showAbout","showNotePage","showPhotoAlbumPage","showPhotoAlbumPage"],
  methods: {
    search: function () {
      // 1.检测搜索框内的文字v-model
      // 2.过滤器
      console.log(this.query);
    },
  },
  data () {
    return {
      query: '',
    }
  }
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 70px;
  line-height: 70px;
  /*border: 1px solid red;*/
  background-color: #42b983;
  position: fixed;
  z-index: 99999;
  top: 0;
}
ul {
  /*margin-left: 80px;*/
  margin: 0 auto;
  width: 80%;
}
ul li {
  float: left;
  /*margin-right: 20px;*/
  padding: 0 20px;
}
ul li a {
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  height: 36px;
  padding: 0 10px;
  line-height: 36px;
  cursor: pointer;
  display: inline-block;
  /*border: 1px solid red;*/
  border-radius: 3px;
  vertical-align: -1px;
}
ul li.search {
  /*position: relative;*/
}
ul li input {
  color: #424242;
  width: 220px;
  height: 36px;
  padding: 0 10px 0 40px;
  line-height: 36px;
  display: inline-block;
  border: none;
  outline: none;
  border-radius: 3px;
  font-size: 18px;
  vertical-align: -1px;
  /*background-color: rgba(255,255,255,.5);*/
  /*background-color: ;*/
  opacity: 0.5;
  /* background: #fff url('../assets/search-icon.svg') no-repeat; */
  background-size: 20px 20px;
  background-position: 12px 8px;
}
ul li input:focus {
  opacity: 1;
  /*width: 320px;*/
}
ul li a:hover {
  background-color: #fff;
  color: #42b983;
}
ul li.clicked a {
  background-color: #fff;
  color: #42b983;
}
ul li.home a {
  font-size: 26px;
  font-weight: bold;
  vertical-align: -4px;
}
</style>
