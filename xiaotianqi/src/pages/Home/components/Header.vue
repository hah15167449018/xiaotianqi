<template>
    <div class="header">
        <span class="iconfont">&#xec3f;</span>
        <span>{{this.$store.state.city}}</span>
    </div>
</template>

<script>
  export default {
    name: "HomeHeader",
    props:{
      city:String
    }
  }
</script>

<style scoped >
    .header{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: 2.6rem;
        background: #fff;
        line-height: 3rem;
        border: .02rem solid #f0f0f4;
    }
</style>