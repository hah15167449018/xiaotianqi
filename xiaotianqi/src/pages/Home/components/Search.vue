<template>
    <div>
        <div class="search">
            <ul class="search-ul">
                <li>
                    <div class="search-title">
                        <span class="iconfont">&#xe617;</span>
                        <input value="城市名" class="search-input">
                    </div>
                </li>
                <li>
                    <div class="search-text">
                        <span>搜索</span>
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <div><span>搜索历史</span></div>
            <ul class="history-button">
                <li>
                    <div class="now-button">当前位置</div>
                </li>
                <li>
                    <div class="clear-button">清空历史记录</div>
                </li>
            </ul>
        </div>
        <div>
            <div><span>热门城市</span></div>
            <ul class="history-button">
                <li>
                    <div class="city-button">北京市</div>
                </li>
                <li>
                    <div class="city-button-next">杭州市</div>
                </li>
                <li>
                    <div class="city-button-next">上海市</div>
                </li>
                <li>
                    <div class="city-button-next">苏州市</div>
                </li>
            </ul>
            <ul class="history-button">
                <li>
                    <div class="city-button">深圳市</div>
                </li>
                <li>
                    <div class="city-button-next">广州市</div>
                </li>
                <li>
                    <div class="city-button-next">南京市</div>
                </li>
                <li>
                    <div class="city-button-next">西安市</div>
                </li>
            </ul>
            <ul class="history-button">
                <li>
                    <div class="city-button">成都市</div>
                </li>
                <li>
                    <div class="city-button-next">武汉市</div>
                </li>
                <li>
                    <div class="city-button-next">郑州市</div>
                </li>
                <li>
                    <div class="city-button-next">寿光市</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Search"
  }
</script>

<style scoped>

    .search-ul {
        display: flex;
        list-style: none;
        margin-top: 4rem;
    }

    .search-title {
        background: #f0f0f4;
        border-radius: .8rem;
    }

    .search-input {
        color: #A9A9A9;
        font-size: 1.1rem;
        background: #f0f0f4;
        border-style: none;
        border-radius: .8rem
    }

    .search-text {
        margin-left: 2rem;
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