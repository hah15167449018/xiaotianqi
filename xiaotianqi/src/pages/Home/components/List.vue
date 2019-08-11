<template>
    <div class="list" v-if="forecast && forecast.length > 0">
        <div class="list-today" :TodayForecast="toDayForecast" :NowWeek="NowWeek">
            <div class="today">
                <img :src="toDayForecast.icon">
                <div class="today-detail">
                    <span>今日·周{{NowWeek}}</span>
                    <h2 style="margin: 0">{{toDayForecast.tmp_min}}-{{toDayForecast.tmp_max}}℃</h2>
                    <h1 style="margin: 0">{{toDayForecast.cond_txt_d}}</h1>
                    <div class="today-remind">空气质量优</div>
                </div>
            </div>
        </div>
        <div class="list-other">
            <div class="tomorrow" :TomorrowForecast="TomorrowForecast">
                <span>{{TomorrowForecast.tmp_min}}°-{{TomorrowForecast.tmp_max}}°</span><br/>
                <span>明天·{{TomorrowForecast.cond_txt_d}}</span>
            </div>
            <div class="behind" :BehindForecast="BehindForecast">
                <span>{{BehindForecast.tmp_min}}°-{{BehindForecast.tmp_max}}°</span><br/>
                <span>后天·{{BehindForecast.cond_txt_d}}</span>
            </div>
        </div>
        <div class="list-hours">
            <div><h4>小时天气</h4></div>
            <ul class="hours-detail" :hourly="hourly" :NowHourly="NowHourly" :NowDate="NowDate"
                v-if="hourly && hourly.length>0">
                <li>
                    <span>{{NowDate}}日{{NowHourly+1}}时</span><br>
                    <img :src="toDayForecast.icon" style="height: 1.5rem"><br/>
                    <span>{{hourly[0].tmp}}°</span>
                </li>
                <li>
                    <span>{{NowDate}}日{{NowHourly+2}}时</span><br>
                    <img :src="toDayForecast.icon" style="height: 1.5rem"><br>
                    <span>{{hourly[1].tmp}}°</span>
                </li>
                <li>
                    <span>{{NowDate}}日{{NowHourly+3}}时</span><br>
                    <img :src="toDayForecast.icon" style="height: 1.5rem"><br>
                    <span>{{hourly[2].tmp}}°</span>
                </li>
                <li>
                    <span>{{NowDate}}日{{NowHourly+4}}时</span><br>
                    <img :src="toDayForecast.icon" style="height: 1.5rem"><br>
                    <span>{{hourly[3].tmp}}°</span>
                </li>
                <li>
                    <span>{{NowDate}}日{{NowHourly+5}}时</span><br>
                    <img :src="toDayForecast.icon" style="height: 1.5rem"><br>
                    <span>{{hourly[4].tmp}}°</span>
                </li>
            </ul>
        </div>
        <div class="list-remind">
            <h4>生活指数</h4>
            <ul class="remind-detail" :lifestyle="lifestyle" v-if="lifestyle && lifestyle.length>0">
                <li class="remind-li">
                    <span>舒适度指数</span>
                    <div class="remind">{{lifestyle[0].brf}}</div>
                    <br>
                    <span>{{lifestyle[0].txt}}</span>
                </li>
                <li class="remind-li">
                    <span>穿衣指数</span>
                    <div class="remind">{{lifestyle[1].brf}}</div>
                    <br>
                    <span>{{lifestyle[1].txt}}</span>
                </li>
                <li class="remind-li">
                    <span>感冒指数</span>
                    <div class="remind">{{lifestyle[2].brf}}</div>
                    <br>
                    <span>{{lifestyle[2].txt}}</span>
                </li>
                <li class="remind-li">
                    <span>运动指数</span>
                    <div class="remind">{{lifestyle[3].brf}}</div>
                    <br>
                    <span>{{lifestyle[3].txt}}</span>
                </li>
                <li class="remind-li">
                    <span>旅游指数</span>
                    <div class="remind">{{lifestyle[4].brf}}</div>
                    <br>
                    <span>{{lifestyle[4].txt}}</span>
                </li>
                <li class="remind-li">
                    <span>紫外线指数</span>
                    <div class="remind">{{lifestyle[5].brf}}</div>
                    <br>
                    <span>{{lifestyle[5].txt}}</span>
                </li>
                <li class="remind-li">
                    <span>洗车指数</span>
                    <div class="remind">{{lifestyle[6].brf}}</div>
                    <br>
                    <span>{{lifestyle[6].txt}}</span>
                </li>
                <li class="remind-li">
                    <span>空气污染指数</span>
                    <div class="remind">{{lifestyle[7].brf}}</div>
                    <br>
                    <span>{{lifestyle[7].txt}}</span>
                </li>
            </ul>
        </div>
        <div class="list-hours">
            <div><h4>未来五天天气</h4></div>
            <ul class="hours-detail" :NowDate="NowDate" :forecast="forecast" v-if="forecast && forecast.length>0">
                <li class="future-li" v-for="(item,index) in fiveForecast" :key="index">
                    <span>08/{{NowDate+ index + 1}}</span><br>
                    <span>{{item.tmp_min}}°-{{item.tmp_max}}°</span><br>
                    <img class="iconfont" style="height: 1.5rem" :src="item.icon"/><br>
                    <span>{{item.cond_txt_d}}转{{item.cond_txt_n}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  import {getNow} from '@/api/xiaotianqi'
  import {mapState} from 'vuex'

  export default {
    name: 'HomeList',
    data() {
      return {
        forecast: [],
        toDayForecast: {},
        BehindForecast: [],
        hourly: [],
        NowHourly: '',
        NowDay: '',
        week: ['日', '一', '二', '三', '四', '五', '六'],
        NowWeek: '',
        NowDate: '',
        lifestyle: [],
        TodayImg: ''
      }
    },
    computed: {
      ...mapState({
        city: 'city'
      }),
      fiveForecast() {
        return this.forecast.filter((_item, index) => {
          return index < 5
        })
      }
    },
    watch: {
      city() {
        this.requestNow()
      }
    },
    mounted() {
      this.requestNow()
    },
    methods: {
      requestNow() {
        let myDate = new Date()
        this.NowHourly = myDate.getHours()
        this.NowDay = myDate.getDay()
        this.NowWeek = this.week[this.NowDay]
        this.NowDate = myDate.getDate()
        getNow(this.city).then(now => {
          let weather = now.data.HeWeather6[0]
          weather.daily_forecast.forEach((item) => {
            item.icon = '/img/' + item.cond_code_d + '.png'
          })
          this.forecast = weather.daily_forecast
          this.toDayForecast = this.forecast[0]
          this.TomorrowForecast = this.forecast[1]
          this.BehindForecast = this.forecast[2]
          this.hourly = weather.hourly
          this.lifestyle = weather.lifestyle
        }).catch(function (error) {
          console.log(error)
        })
      }
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
        width: 10.8rem;
        height: 3.2rem;
        background: #f0f0f4;
        border-radius: .8rem;
        padding: .2rem;

    }

    .behind {
        width: 10.8rem;
        text-align: center;
        height: 3.2rem;
        background: #f0f0f4;
        border-radius: .8rem;
        margin-left: 1rem;
        padding: .2rem;
    }

    .list-hours {
        height: 7.5rem;
        background: #f0f0f4;
        border-radius: .8rem;
    }

    .hours-detail {
        list-style: none;
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        font-size: .6rem;
        text-align: center;
    }

    .hours-detail li {
        flex: 1;
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
        padding-bottom: 6rem;
    }
</style>