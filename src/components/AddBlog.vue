<template>
  <div class="add-blog">
    <div class="editing-area" v-show="!isPreviewed">
      <!-- <h2>添加博客</h2> -->
      <form>
        <div class="title">
          <input type="text" name="" placeholder="博客标题" v-model="title" autofocus>
        </div>
        <div class="content">
            <ckeditor ref="ck"></ckeditor>
            <!-- <textarea placeholder="添加博客内容" v-model="content" class="textarea" id="editor" rows="10" cols="80"></textarea> -->
            <!-- <ckeditor :editor="editor" v-model="content" :config="editorConfig" class="textarea" style="width:100%;height:500px"></ckeditor> -->
        </div>
        <div class="tags" >
          <label for="">
            <input type="checkbox" name="" value="Vue.js" v-model="tags">
            Vue.js
          </label>
          <label>
            <input type="checkbox" name="" value="Node.js" v-model="tags">
            Node.js
          </label>
          <label>
            <input type="checkbox" name="" value="JQuery" v-model="tags">
            JQuery
          </label>
          <label>
            <input type="checkbox" name="" value="React.js" v-model="tags">
            React.js
          </label>
        </div>
        <div class="author">
          <label>作者:</label>
          <select v-model="selectedAuthor">
            <option v-for="author in authors">{{ author }}</option>
          </select>
          <button class="btn-submit" @click.prevent="addBlog">添加博客</button>
          <button class="btn-preview" @click.prevent="preview">预览博客</button>
        </div>
      </form>
    </div>
    <div class="preview-area" v-show="isPreviewed">
      <span class="btn-return" @click="preview">退出预览</span>
      <h2>{{ title?title:"博客标题" }}</h2>
      <p class="info"><span >作者：{{ selectedAuthor }}</span> | <span class="date">日期：{{ createdTime() }}</span> | <span class="show-tags">标签：<i v-for="tag in tags">{{ tag }}, </i></span></p>
      <p class="content" v-html="content?content:'添加博客内容...'"></p>
    </div>
  </div>
</template>

<script>

// import CKEDITOR from 'CKEDITOR';
import CKEditor from "./CKEditor"
// import 

export default {
  name: 'AddBlog',
  methods: {
    preview: function () {
      this.isPreviewed = !this.isPreviewed;
      this.content = this.$refs.ck.editor.getData();
    },
    addBlog: function () {
      this.content = this.$refs.ck.editor.getData();
      if (!this.title.trim()) {
        alert("请添加博客标题！");
      } else if (!this.content.trim()) {
        alert("请添加博客内容！");
      } else if (!this.tags.length) {
        alert("请选择博客标签！");
      } else if (!this.selectedAuthor) {
        alert("请选择博客作者！");
      } else {
        this.$emit("commit-to-add-blog", {
          id: new Date().getTime(),
          title: this.title.trim(),
          content: this.content.trim(),
          author: this.selectedAuthor,
          tags: this.tags,
          createdTime: this.createdTime(),
        });
        // this.$router.push({path: "/"});  // 路由跳转
        this.$router.push({name: "HomePage"});
      }
    },
    createdTime: function () {
      var now = new Date();
      var year,month,date,hour,min,sec;
      year = now.getFullYear();
      month = now.getMonth() + 1;
      date = now.getDate();
      hour = now.getHours() > 9 ? now.getHours() : "0" + now.getHours();
      min = now.getMinutes() > 9 ? now.getMinutes() : "0" + now.getMinutes();
      sec = now.getSeconds() > 9 ? now.getSeconds() : "0" + now.getSeconds();
      return "" + year + "年" + month + "月" + date + "日 " + hour+ ":" + min + ":" + sec;
    },
    getContent: function () {
      return this.$refs.ck.editor.getData();
    }
  },
  components: {
    ckeditor: CKEditor,
  },
  data () {
    return {
      title: '',
      tags: [],
      authors: ['大明', '小萍', '小军', '小红'],
      selectedAuthor: '',
      isPreviewed: false,
      content: '',
    }
  }
};
</script>

<style scoped>
.add-blog {
  padding: 0 0 10px 0;
  display: inline-block;
  width: 100%;
  /*background-color: #eee;*/
  margin-bottom: 30px;
}
/* 预览区域 */
.preview-area {
  /*color: #fff;*/
  width: 70%;
  margin: 30px auto;
  min-height: 450px;
  /*border-radius: 3px;*/
  padding: 20px;
  box-sizing: border-box;
  background-color: rgba(240,240,240,0.8);
  /*position: relative;*/
}
.preview-area .btn-return {
  display: inline-block;
  background-color: #42b983;
  /*width: 80px;
  text-align: center;
  height: 30px;
  line-height: 30px;*/
  padding: 6px;
  color: #fff;
  /*position: absolute;*/
  top: 80px;
  left: 15%;
  cursor: pointer;
}
.preview-area .info {
  margin: 10px auto;
  text-align: center;
  font-size: 14px;
  padding-left: 40px;
}
.preview-area .info span {
  margin: 0 5px;
}
.preview-area .content {
  margin: 20px 40px;
  border-top: 1px solid #999;
  padding-top: 20px;
  min-height: 450px;
}


/* 编辑区域 */
.editing-area {
  width: 70%;
  /*float: left;*/
  margin: 0 auto;
  padding: 0px;
  box-sizing: border-box;
  /*border: 1px solid red;*/
  min-height: 450px;
}
h2 {
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #424242;
}
.editing-area .title {
  width: 100%;
  margin: 20px auto;
  height: 30px;
}
/*<div class="content">
    <!-- <textarea placeholder="添加博客内容" v-model="content"></textarea> -->
    <ckeditor :editor="editor" v-model="content" :config="editorConfig" class="textarea"></ckeditor>
</div>*/


.editing-area .content {
  width: 100%;
  margin: 20px auto;
  min-height: 200px;
  /*background-color: red;*/
}
.editing-area .title input {
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  box-sizing: border-box;
  border-radius: 1px;
  border: none;
  outline: none;
  border: 1px solid #bbb;
}
.editing-area .content .textarea {
  width: 100%;
  height: ;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 2px;
  border: none;
  outline: none;
  border: 1px solid #424242;
}
/* 选择标签 */
.editing-area .tags {
  color: #424242;
  margin-bottom: 15px;
  text-align: center;
}
.editing-area .tags label {
  border-color: red;
  margin-right: 15px;
}
.editing-area .tags input {
  display: inline-block;
  width: 15px;
  height: 15px;
  vertical-align: -2px;
}
/* 选择作者 */
.editing-area .author {
  margin: 0 auto;
  color: #424242;
  /*font-weight: bold;*/
  /*margin-left: 30px;*/
  width: 360px;
  height: 24px;
  line-height: 24px;
  padding-right: 20px;
  /*font-size: 20px;*/
  /*border: 1px solid red;*/
  /*padding-left: 100px;*/
}
.editing-area .author select {
  width: 120px;
  height: 100%;
  outline: none;
  border: 1px solid #bbb;
  padding: 0 5px;
  /*border: none;*/
  /*vertical-align: 2px;*/
}
.editing-area .author button {
  float: right;
  /*width: 30%;*/
  /*height: 100%;*/
  /*margin-right: 120px;*/
  /*font-size: 18px;*/
  padding: 4px 8px;
  border: none;
  color: #fff;
  background-color: #42b983;
  border-radius: 2px;
  outline: none; 
  margin-left: 20px;
}
.editing-area .author button:hover {
  cursor: pointer;
}
</style>
