<template>
  <el-button><slot>{{msg}}</slot></el-button>
</template>

<script>
export default {
  name: "MButton",
  props: {
    msg: {
      type: String,
      default() {
        return "按钮";
      },
    },
  },
};
</script>

<style lang="less" scoped>
</style>