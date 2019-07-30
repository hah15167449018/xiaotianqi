<template>
    <div class="list">
        <div class="list-today">
            <div class="today">
                <span class="iconfont today-img">&#xe69a;</span>
                <div class="today-detail">
                    <span>今日·周六</span>
                    <h2 style="margin: 0">25-33℃</h2>
                    <h1 style="margin: 0">多云</h1>
                    <div class="today-remind">空气质量优</div>
                </div>
            </div>
        </div>
        <div class="list-other">
            <div class="tomorrow">
                <span>25°-34°</span><br/>
                <span>明天·小雨</span>
            </div>
            <div class="behind">
                <span>25°-34°</span><br/>
                <span>后天·多云</span>
            </div>
        </div>
        <div class="list-hours">
            <div><h4>小时天气</h4></div>
            <ul class="hours-detail">
                <li>
                    <span>20日16时</span><br>
                    <span class="iconfont">&#xe69a;</span><br>
                    <span>32°</span>
                </li>
                <li>
                    <span>20日17时</span><br>
                    <span class="iconfont">&#xe69a;</span><br>
                    <span>29°</span>
                </li>
                <li>
                    <span>20日18时</span><br>
                    <span class="iconfont">&#xe69a;</span><br>
                    <span>27°</span>
                </li>
                <li>
                    <span>20日19时</span><br>
                    <span class="iconfont">&#xe614;</span><br>
                    <span>26°</span>
                </li>
                <li>
                    <span>20日20时</span><br>
                    <span class="iconfont">&#xe614;</span><br>
                    <span>25°</span>
                </li>
            </ul>
        </div>
        <div class="list-remind">
            <h4>生活指数</h4>
            <ul class="remind-detail">
                <li class="remind-li">
                    <span>舒适度指数</span>
                    <div class="remind">较不舒适</div>
                    <br>
                    <span>白天天气多云，并且空气湿度偏大，在这种天气条件下，您会感到有些闷热，不很舒适</span>
                </li>
                <li class="remind-li">
                    <span>穿衣指数</span>
                    <div class="remind">炎热</div>
                    <br>
                    <span>白天天气多云，并且空气湿度偏大，在这种天气条件下，您会感到有些闷热，不很舒适</span>
                </li>
                <li class="remind-li">
                    <span>感冒指数</span>
                    <div class="remind">少发</div>
                    <br>
                    <span>白天天气多云，并且空气湿度偏大，在这种天气条件下，您会感到有些闷热，不很舒适</span>
                </li>
                <li class="remind-li">
                    <span>运动指数</span>
                    <div class="remind">较不宜</div>
                    <br>
                    <span>白天天气多云，并且空气湿度偏大，在这种天气条件下，您会感到有些闷热，不很舒适</span>
                </li>
                <li class="remind-li">
                    <span>旅游指数</span>
                    <div class="remind">较适宜</div>
                    <br>
                    <span>白天天气多云，并且空气湿度偏大，在这种天气条件下，您会感到有些闷热，不很舒适</span>
                </li>
                <li class="remind-li">
                    <span>紫外线指数</span>
                    <div class="remind">中等</div>
                    <br>
                    <span>白天天气多云，并且空气湿度偏大，在这种天气条件下，您会感到有些闷热，不很舒适</span>
                </li>
                <li class="remind-li">
                    <span>洗车指数</span>
                    <div class="remind">不宜</div>
                    <br>
                    <span>白天天气多云，并且空气湿度偏大，在这种天气条件下，您会感到有些闷热，不很舒适</span>
                </li>
                <li class="remind-li">
                    <span>空气污染指数</span>
                    <div class="remind">中</div>
                    <br>
                    <span>白天天气多云，并且空气湿度偏大，在这种天气条件下，您会感到有些闷热，不很舒适</span>
                </li>
            </ul>
        </div>
        <div class="list-hours">
            <div><h4>未来五天天气</h4></div>
            <ul class="hours-detail">
                <li class="future-li">
                    <span>07/21</span><br>
                    <span>25°-34°</span><br>
                    <span class="iconfont">&#xe69a;</span><br>
                    <span>小雨转多云</span>
                </li>
                <li class="future-li">
                    <span>07/21</span><br>
                    <span>25°-34°</span><br>
                    <span class="iconfont">&#xe69a;</span><br>
                    <span>多云转晴</span>
                </li>
                <li class="future-li">
                    <span>07/21</span><br>
                    <span>27°-35°</span><br>
                    <span class="iconfont">&#xe69a;</span><br>
                    <span>小雨转多云</span>
                </li>
                <li class="future-li">
                    <span>07/21</span><br>
                    <span>28°-36°</span><br>
                    <span class="iconfont">&#xe614;</span><br>
                    <span>多云转晴</span>
                </li>
                <li class="future-li">
                    <span>07/21</span><br>
                    <span>28°-36°</span><br>
                    <span class="iconfont">&#xe614;</span><br>
                    <span>多云转晴</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "HomeList",
    mounted() {
      axios.get('https://free-api.heweather.net/s6/weather/now?location=hangzhou&key=2b141b5aa9584d8a9fad51fe3d8bdad5')
        .then(function (response) {
          let weather = response.data.HeWeather6[0].now
          console.log(weather)
        }).catch(function (error) {
        console.log(error)
      })
    }
  }
</script>

<style scoped>
    .list {
        margin-top: 3rem;
    }

    .list-today {
        background: #f0f0f4;
        border-radius: .8rem;

    }

    .today {
        text-align: center;
        margin: 0 auto;
        padding-bottom: 1rem;
    }

    .today-img {
        font-size: 8rem;
        color: blue;
    }

    .today-detail {
        margin-top: 2rem;
        text-align: center;
    }

    .today-remind {
        display: inline;
        background: yellow;
        color: #fff;
    }

    .list-other {
        display: flex;
        margin-top: .8rem;
        height: 3rem;
    }

    .tomorrow {
        text-align: center;
        height: 3.2rem;
        background: #f0f0f4;
        border-radius: .8rem;
        padding: 0 3.2rem;
    }

    .behind {
        text-align: center;
        height: 3.2rem;
        background: #f0f0f4;
        margin-left: 1rem;
        border-radius: .8rem;
        padding: 0 3.2rem;
    }

    .list-hours {
        height: 7rem;
        background: #f0f0f4;
        border-radius: .8rem;
    }

    .hours-detail {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        font-size: .6rem;
        text-align: center;
    }

    li {
        margin-left: .8rem;
    }

    .list-remind {
        background: #f0f0f4;
        border-radius: .8rem;
    }

    .remind-detail {
        list-style: none;
        padding: 0;
    }

    .remind {
        display: inline;
        background: yellow;
        color: #fff;
        margin-left: .6rem;
    }

    .remind-li {
        margin-top: 1rem;
        font-size: .8rem;
        padding-right: .2rem;
    }

    .future-li {
        margin-left: 1rem;
        padding-bottom: 6rem;
    }
</style>