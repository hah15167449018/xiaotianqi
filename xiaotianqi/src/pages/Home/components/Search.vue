<template>
    <div>
        <div class="search">
            <div class="search-title">
                <span class="iconfont">&#xe617;</span>
                <input v-model="keywords" placeholder="城市名" class="search-input" ref="name">
            </div>
            <div class="search-text" @click="handleCityClick(keywords)">确定</div>
        </div>
        <div>
            <div><span>当前位置</span></div>
            <ul class="history-button">
                <li>
                    <div class="now-button" @click="handleCityClick('杭州')">杭州市</div>
                </li>
                <li v-if="false">
                    <div class="clear-button">清空历史记录</div>
                </li>
            </ul>
        </div>
        <div>
            <div><span>热门城市</span></div>
            <ul class="history-button">
                <li>
                    <div class="city-button" @click="handleCityClick('北京')">北京市</div>
                </li>
                <li>
                    <div class="city-button-next" @click="handleCityClick('杭州')">杭州市</div>
                </li>
                <li>
                    <div class="city-button-next" @click="handleCityClick('上海')">上海市</div>
                </li>
                <li>
                    <div class="city-button-next" @click="handleCityClick('苏州')">苏州市</div>
                </li>
            </ul>
            <ul class="history-button">
                <li>
                    <div class="city-button" @click="handleCityClick('深圳')">深圳市</div>
                </li>
                <li>
                    <div class="city-button-next" @click="handleCityClick('广州')">广州市</div>
                </li>
                <li>
                    <div class="city-button-next" @click="handleCityClick('南京')">南京市</div>
                </li>
                <li>
                    <div class="city-button-next" @click="handleCityClick('西安')">西安市</div>
                </li>
            </ul>
            <ul class="history-button">
                <li>
                    <div class="city-button" @click="handleCityClick('成都')">成都市</div>
                </li>
                <li>
                    <div class="city-button-next" @click="handleCityClick('武汉')">武汉市</div>
                </li>
                <li>
                    <div class="city-button-next" @click="handleCityClick('郑州')">郑州市</div>
                </li>
                <li>
                    <div class="city-button-next" @click="handleCityClick('寿光')">寿光市</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Search',
    methods: {
      handleCityClick(city) {
        this.$store.commit('changeCity', city)
        this.$emit('changeList')
      }
    },
    data() {
      return {
        keywords: ''
      }
    }
  }
</script>

<style scoped>

    .search {
        display: flex;
        list-style: none;
        margin-top: 4rem;
        height: 2.5rem;
        line-height: 2.5rem;
        margin-bottom: 1rem;
    }

    .search-title {
        margin-left: 1rem;
        flex: 1;
        padding-left: .5rem;
        background: #f0f0f4;
        border-radius: .8rem;
    }

    .search-input {
        padding: .5rem;
        color: #333;
        outline: none;
        border: none;
        font-size: 1.1rem;
        background: #f0f0f4;
        border-radius: .8rem
    }

    .search-text {
        margin: 0 1rem;
        text-align: center;
    }

    .history-button {
        display: flex;
        list-style: none;
        font-size: 1rem;
    }

    .now-button {
        background: #f0f0f4;
        color: #A9A9A9;
        padding: .2rem;
        text-align: center;
        border-radius: .4rem
    }

    .clear-button {
        background: #f0f0f4;
        color: #A9A9A9;
        padding: .2rem;
        margin-left: 1rem;
        text-align: center;
        border-radius: .4rem
    }

    .city-button {
        background: #f0f0f4;
        color: #A9A9A9;
        padding: .3rem;
        text-align: center;
        border-radius: .4rem
    }

    .city-button-next {
        background: #f0f0f4;
        color: #A9A9A9;
        padding: .3rem;
        margin-left: 1rem;
        text-align: center;
        border-radius: .4rem
    }
</style>