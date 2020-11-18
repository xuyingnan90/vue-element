<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button>默认按钮</el-button>
    <m-button>sss</m-button>
  </div>
</template>

<script>
// import MButton from './button/MButton'
export default {
  name: "HelloWorld",
  // components:{
  //   MButton
  // },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
