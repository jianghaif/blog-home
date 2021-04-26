import Vue from 'vue'
import Router from 'vue-router'
// 导入组件
import HomePage from '@/components/HomePage'  // @是什么意思？？
import AddBlog from '@/components/AddBlog' 
import About from '@/components/About' 
import ReadBlog from '@/components/ReadBlog' 
import NotePage from '@/views/NotePage'
import ResourceSharingPage from '@/views/ResourceSharingPage'
import PhotoAlbumPage from '@/views/PhotoAlbumPage'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/notePage',
      name: 'NotePage',
      component: NotePage
    },
    {
      path: '/resourceSharingPage',
      name: 'ResourceSharingPage',
      component: ResourceSharingPage
    },
    {
      path: '/photoAlbumPage',
      name: 'PhotoAlbumPage',
      component: PhotoAlbumPage
    },
    {
      path: '/add-blog',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/read-blog/:id',
      name: 'ReadBlog',
      component: ReadBlog
    },
  ]
})

// <router-view/>
