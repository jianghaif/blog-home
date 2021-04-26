<template>
    <div>
        <textarea id="editor" rows="10" cols="80"></textarea>
    </div>
</template>

<script type="text/ecmascript-6">
  import CKEDITOR from 'CKEDITOR';
  export default {
    name: 'editor',
    data() {
      return {
        editor: {},  // 代表编辑框
      };
    },
    mounted() {
      this.editor = CKEDITOR.replace('editor', {
        height: '240px', 
        width: '100%',
        // uiColor: '#b42',
        toolbar: 'Full'});
      this.editor.setData("添加博客内容...");
    },
    beforeDestroy() {
    },
    computed: {},
    methods: {
      // clearEditor: function () {
      //   console.log(this.editor.getData());
      //   if (this.editor.getData().trim() == '<p>添加博客内容</p>') {
      //     this.editor.setData("");
      //     console.log("focus!");
      //   }
      // },
    },
    components: {},
  };
</script>

<style scoped>

</style>