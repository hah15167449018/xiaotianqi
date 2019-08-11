<template>
    <div class="menu">
        <ul class="menu-list">
            <li class="home-button" @click="handleHomeChange">
                <span class="iconfont menu-img">&#xe60d;</span><br>
                <span>首页</span>
            </li>
            <li class="search-button" @click="handleSearchChange">
                <span class="iconfont menu-img">&#xe617;</span><br>
                <span>查找</span>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "HomeMenu",
    methods:{
      handleHomeChange(){
        this.$emit('changeList')
      },
      handleSearchChange(){
        this.$emit('changeSearch')
      }
    }
  }
</script>

<style scoped>
    .menu {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        line-height: 1rem;
    }

    .menu-list {
        display: flex;
        list-style: none;
        padding: 0;
    }
    .menu-img{
        font-size: 2rem;
    }
    .home-button{
        margin-left: 3rem;
    }
    .search-button{
        margin-left: 13.5rem;
    }

</style>