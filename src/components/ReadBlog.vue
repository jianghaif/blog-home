<template>
  <div id="read-blog">
    <h2>{{ blog.title }}</h2>
    <p class="info"><span >作者：jhf{{ blog.author }}</span> | 
        <span>发表：{{ blog.createTime }}</span> | <span>下载笔记：<el-button
          type="text"
          icon="el-icon-download"
          @click="downloadDialog"
          ></el-button
        ></span>| 知识点：<el-tag
            v-for="tag in JSON.parse(blog.tags)"
            :key="tag"
            :disable-transitions="false" size="mini">
            {{ tag }}
          </el-tag></p>
        <!-- <span>标签：<span v-for="tag in blog.tags" class="tag">{{ tag }}</span></span></p> -->
      <!-- <p class="content" v-html="blog.content"></p> -->
      <mavon-editor
        :value="content"
        :editable="isfalse"
        default-open="preview"
        :subfield="isfalse"
        :toolbars-flag="isfalse"
        :navigation="isfalse"
        :short-cut="isfalse"
        :ishljs="istrue"
      />
      <el-dialog
      :visible.sync="dialogFormVisible"
      :close-on-click-modal="false"
      :before-close="handleClose"
      title="验证码确认"
      width="50%"
    >
      <el-form
        ref="download"
        :model="download"
        :rules="rules"
        label-width="60px"
        size="small"
        class="demo-ruleForm"
      >
        <el-form-item
          label="手机号:"
          prop="mobile"
          clearable
          label-width="100px"
        >
          <el-input :maxlength="11" v-model.trim="download.mobile" /><el-button @click="sendCode">获取验证码</el-button>
        </el-form-item>
        <el-form-item
          label="验证码:"
          prop="code"
          clearable
          label-width="100px"
        >
          <el-input :maxlength="11" v-model.trim="download.code" />
        </el-form-item>
        <el-form-item size="large">
          <el-button plain size="mini" @click="handleClose()">取消</el-button>
          <el-button plain size="mini" type="success" @click="onsubmit('download')"
            >确定下载</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ReadBlog',
  computed:{
    blog: function () {
      for (var i = 0; i < this.blogs.length; i ++) {
        if (this.blogs[i].id == this.id) {
          return this.blogs[i];
        }
      }
    },
  },
  data () {
    return {
      id: '',
      blog: {
        title: '',
        author: '',
        createTime: null,
        content: ''
      },
      download:{
        mobile:null,
        code:null
      },
      content: '',
      istrue: true,
      isfalse: false,
      dialogFormVisible: false,
      rules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.id = this.$route.params.id;
    var p
    var host = process.env.BASE_API
    p = axios.post(host + '/api/note/noteArticle/detail.json/'+ this.id)
    p.then(response => {
      this.blog = response.data.entity
      this.content = this.blog.content
    })
  },methods: {
    downloadDialog(){
      this.dialogFormVisible=true
    },
    handleClose(){
     this.resetdownload()
    },sendCode(){

    },onsubmit(download){
      this.$refs[download].validate((valid) => {
        if (valid) {
            this.resetdownload()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },resetdownload(){
      this.download={
        mobile:null,
        code:null
      }
      this.dialogFormVisible=false
    }

  }
};
</script>

<style scoped>
#read-blog {
  width: 70%;
  margin: 100px auto 30px auto;
  background-color: #eee; 
  padding: 30px 50px;
  min-height: 360px;
  line-height: 1.8em;
}
h1, h2 {
  font-weight: normal;
  margin-bottom: 20px;
  font-weight: bold;
  color: #424242;
  /*border-bottom: 1px solid #424242;*/
  /*text-align: center;*/
}
.info {
  margin: 10px 0;
  font-size: 13px;
  color: #42b983;
  line-height: 1em;
}
.tag {
  display: inline-block;
  padding: 3px 5px;
  /*border: 1px solid red;*/
  background-color: #42b983;
  /*opacity: 0.9;*/
  color: #fff;
  border-radius: 10px;
  margin-right: 5px;
  font-size: 12px;
}
.content {
  margin-top: 20px;
}
.el-tag + .el-tag {
    margin-left: 5px;
  }
</style>
