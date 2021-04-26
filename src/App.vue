<template>
  <!-- 只能有一个根标签 -->
  <div id="app">
    
    <app-header v-if="showHomePage == 0" :show-home-page="showHomePage"
                :show-resource-sharing="showResourceSharing"
                :show-photo-album-page="showPhotoAlbumPage"
                :show-about="showAbout"
                :show-note-page="showNotePage"
                ></app-header>
    <div v-if="showHomePage == 0" class="main">
      <!-- 调用其他组件 -->
    <!-- <home-page v-show="showHomePage" ref="homepage"></home-page>
    <add-blog v-show="showAddBlog" ref="addblog" @commit-to-add-blog="commitToAddBlog"></add-blog> -->
    <router-view />
    </div>
    <div v-else>
      <router-view />
    </div>
    <app-footer v-if="showHomePage == 0"/>    
  </div>
</template>

<script>
// 调用其他组件
// import AddBlog from "./components/AddBlog"
import AppHeader from "./components/AppHeader"
import HomePage from "./components/HomePage"
import AppFooter from "./components/AppFooter"
// import HomePage from "./components/HomePage"

export default {
  name: 'App',
  // 注册其他组件
  components: {
    // 'add-blog': AddBlog,
    'app-header': AppHeader,
    'app-footer': AppFooter,
    'home-page': HomePage,
    // 'home-page': HomePage,
  },
  mounted() {
    this.show(this.$route.name);
  },
  watch: {
    $route (to, from) {
      this.show(this.$route.name);
    }
  },
  methods: {
    show: function (name) {
      this.showHomePage = 0;
      this.showResourceSharing = 0;
      this.showPhotoAlbumPage = 0;
      this.showAbout = 0;
      this.showNotePage = 0;
      if (name == 'HomePage') {
        this.showHomePage = 1;
      } else if (name == 'ResourceSharingPage') {
        this.showResourceSharing = 1;
      } else if (name == 'PhotoAlbumPage') {
        this.showPhotoAlbumPage = 1;
      }else if (name == 'About'){
        this.showAbout = 1;
      }else if (name == 'NotePage'){
        this.showNotePage = 1;
      }
    }
  },
  
  data () {
    return {
      showHomePage: 0,
      showResourceSharing: 0,
      showPhotoAlbumPage: 0,
      showAbout: 0,
      showNotePage: 0
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin: 10px;*/
  /*height: 100%;*/
}
.main {
  margin-top: 70px;
  min-height: 460px;
}
</style>
