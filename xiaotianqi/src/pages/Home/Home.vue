<template>
    <div class="home">
        <home-header v-show="ListShow"></home-header>
        <home-list v-show="ListShow" ></home-list>
        <home-menu @changeSearch="ChangeSearch" @changeList="ChangeList"></home-menu>
        <search v-show="SearchShow" @changeList="ChangeList"></search>
    </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeList from './components/List'
  import HomeMenu from './components/Menu'
  import Search from './components/Search'
  export default {
    name: "Home",
    data(){
      return{
        ListShow:true,
        SearchShow:false
      }
    },
    components: {
      HomeHeader,
      HomeList,
      HomeMenu,
      Search
    },
    methods:{
      ChangeList(){
        this.SearchShow=false
        this.ListShow=true
      },
      ChangeSearch(){
        this.ListShow=false
        this.SearchShow=true
      }
    }
  }
</script>

<style scoped>

</style>