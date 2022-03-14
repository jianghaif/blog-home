<template>
  <div id="notePage">
    <h2>博客列表<input type="" name="" v-model="query"></h2>
    <div v-for="blog in filteredBlogs" :key="blog.noteId" class="item">
      <h3><router-link :to="{name: 'ReadBlog', params: {id: blog.noteId}}">{{ blog.title }}</router-link></h3>
      <p class="blog-info"><span >作者：{{ blog.author }}</span> | 
        <span>发表：{{ blog.createAt }}</span> | 
        <!-- <span>标签：<span v-for="tag in blog.tags">{{ tag }}{{ blog.tags.indexOf(tag) == blog.tags.length-1 ? "" : "," }}  </span></span></p> -->
      <p>{{ blog.content | cutContent }}</p>
      <el-divider></el-divider>
    </div>
    <!-- <div class="pagination-container">
      <el-pagination
        :current-page="listQuery.pageNo"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="listQuery.size"
        :total="total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'NotePage',
  data () {
    return {
      query: '',
      total: 0,
      listQuery: {
        pageNo: 1,
        size: 20,
        name: null,
        status: null,
        searchTime: []
      },
      list: []
    }
  },
  created() {
    this.getList()
  },
  computed: {
    filteredBlogs: function() {
      return this.list.filter((blog) => {
        return blog.title.match(this.query);
      })
    }
  },
  filters: {
    cutContent: function (content) {
      var clearContent = content.replace(/<[^>]*>/g, '');
      if (clearContent.length > 140) {
        return clearContent.slice(0,140) + ' ......';
      } else {
        return clearContent + ' ......';
      } 
    },
  },
  methods: {
    getList() {
      var p
      const query = JSON.parse(JSON.stringify(this.listQuery))
      query.startTime = this.searchTime ? this.searchTime[0] : ''
      query.endTime = this.searchTime ? this.searchTime[1] : ''
      var host = process.env.BASE_API
      p = axios.post(host + '/api/note/noteArticle/notePage.json', query)
      p.then(response => {
        console.log(response)
        console.log(response.page)
        this.total += response.data.page.total
        this.list = response.data.page.records
      })
    },
    handleSizeChange(val) {
      this.listQuery.size = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.pageNo = val
      this.getList()
    }
    }
};
</script>

<style scoped>
#notePage {
  width: 70%;
  margin: 100px auto 0 auto;
  background-color: rgba(240,240,240,0.8);
  min-height: 360px;
  padding: 30px;
  border-radius: 2px;
}
h2 {
  width: 70%;
  margin: 0 auto;
  font-weight: bold;
  /*text-align: center;*/
  margin-bottom: 20px;
  /*border: 1px solid red;*/
}
input {
  margin-left: 30px;
  color: #424242;
  width: 220px;
  height: 30px;
  padding: 0 10px 0 34px;
  line-height: 30px;
  display: inline-block;
  border: none;
  outline: none;
  border-radius: 15px;
  font-size: 18px;
  vertical-align: -1px;
  /*background-color: rgba(255,255,255,.5);*/
  /*background-color: ;*/
  border: 1px solid #8a8a8a;
  opacity: 0.5;
  /* background: #fff url('../assets/search-icon2.svg') no-repeat; */
  background-size: 16px 16px;
  background-position: 10px 7px;
  vertical-align: 3px;
}
input:focus {
  opacity: 1;
  width: 320px;
  border-color: #42b983;
}
.item {
  width: 70%;
  margin: 20px auto;
  padding: 20px;
  background-color: rgba(240,240,240,0.8);
}
.item h3 {
  margin-bottom: 10px;
}
.item h3 a {
  color: #42b983;
  text-decoration: none;
}
.item .blog-info {
  margin: 10px 0;
  font-size: 12px;
  color: #999;
}

</style>
