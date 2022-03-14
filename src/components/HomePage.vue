<template>
  <!-- <div id="home">
    <ul>
       <li><router-link to="/notePage" >进入博客</router-link></li>
    </ul>
  </div> -->
  <div id="home" class="home-wrap">
    <div class="content">
      <router-link to="/notePage">
      <div class="img-wrap">
        <img
          src="../../static/logo.png"
          class="avatar"
          url="/notePage"
        />
      </div>
      </router-link>
      <div class="desc"> {{ reminder.reminders }}  <br> ---  {{reminder.authorOrigin}}</div>
      <router-link to="/notePage">
        <el-button plain style="opacity:0.4;color:#000">进入博客</el-button>
      </router-link>
      <!-- <m-audio src="~@/assets/唯你一生.mp3"></m-audio> -->
        <el-button plain style="opacity:0.4;color:#000" ref="play" @click="play">{{status}}</el-button>
        <audio ref="audio1" loop="loop" autoplay="autoplay">
            <source src="../../static/kuuga.mp3">
        </audio>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomePage',
  components: {
  },
  created(){
    this.getReminders()
  },
  methods: {
    getReminders() {
      var host = process.env.BASE_API
      axios.post(host + '/api/Reminder/random.json').then(response => {
        this.reminder = response.data.entity
        console.log(this.reminder)
      })
    },
    play(){
        let $audio = this.$refs.audio1;//调用play（）方法播放
        // $audio.addEventListener("playing", function(){		//播放状态Doing
        //         this.status='关闭音乐'
        // });$audio.addEventListener("pause", function(){ //暂停状态Doing
         
        //         this.status='播放音乐'
        // });
         if ($audio.paused) {       
                // 暂停中 
                $audio.play().then(res=>{
                  this.status='关闭音乐'
                })
                  
          }else{      
               // 播放中  
               $audio.pause()
                this.status='播放音乐' 
          }
        
    }
  },
  data () {
    return {
      status: '播放音乐',
      reminder: {
        authorOrigin: '',
        reminders: '',
        figureCaptions: ''
      }
    }
  },
  mounted() {
    this.$refs.play.$el.click()
  }
};
</script>

<style scoped>
.home-wrap {
  height: 100vh;
  width: 100vw;
  background: url("../../static/back.jpg");
  background-size: cover;
}
.content {
  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img-wrap {
  width: 128px;
  height: 128px;
  margin-bottom: 50px;
  
}
.desc {
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 30px;
  line-height: 65px;
  color: #fff;
  font-family: "Nunito", sans-serif;
}
.avatar {
    width: 100%;
    height: 100%;
    border: 4px solid #fff;
    border-radius: 50%;
  }
</style>
