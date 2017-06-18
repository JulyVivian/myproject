<template>
  <div class="vue-date-container">
    <!-- 主体 -->
    <div class="main">
      <div class="weekdays">
        <span class="cell" v-for="(index, weekday) in current.weekdays" track-by="$index">{{changeWeekInEnglish(weekday)}}</span>
      </div>
      <!-- 日期选择 -->
      <div class="middle clearfix">
        <span @click="chooseDay(i)" :class="{'cell active': currentDay === i, 'cell': currentDay !== i}" v-for="i in days">{{i}}</span>
      </div>
    </div>
    <p><img src="../../assets/enter.png" class="enter"/></p>
  </div>
</template>

<script>
  import _ from 'underscore'
  import util from './util'
  const defaultOptions = {
  }
  export default {
    data () {
      return {
        opts: _.extend({}, this.options, defaultOptions),    // configrations
        // 当前显示的时间
        current: {
          weekdays: [],
          year: 0,
          month: 0,
          day: 0,
          hours: 0,
          mintues: 0,
          seconds: 0,
          days: 0
        },
        month: 0,
        currentDay: 0
      }
    },
    created () {
      this.current = util.initDate()
      // this.days = this.current.days
      this.currentDay = this.current.day
      this.month = this.current.month + 1
    },
    computed: {
      /**
       * 月份对应的天数
       */
      days () {
        let totaldays = util.getDays(this.current.year)[this.current.month]
        let totaldaysArray = new Array(totaldays)
        for (var i = 0; i < totaldays; i++) {
          totaldaysArray[i] = i + 1
        }
        return totaldaysArray.slice(this.current.day - 1 - this.current.weekday, this.current.day + (7 - 1 - this.current.weekday))
      },
      /**
       * 每个月的第一天是星期几
       */
      start () {
        var date = new Date()
        date.setFullYear(this.current.year)
        date.setMonth(this.current.month)
        date.setDate(1)
        return date.getDay()
      }
    },
    methods: {
      /**
       * 更改年份
       * @param{number} op 表示增加和减少
       */
      updateYear (op) {
        this.current.year += op
      },
      /**
       * 更改月份
       * @param{number} op 表示增加和减少
       */
      updateMonth (op) {
        this.current.month += op
        this.current.month = this.current.month % 12
        this.month = this.current.month + 1
      },
      /**
       * 转化星期几为英文写法
       */
      changeWeekInEnglish (week) {
        switch (week) {
          case 1: return 'Mon'
          case 2: return 'Tue'
          case 3: return 'Wed'
          case 4: return 'Thu'
          case 5: return 'Fri'
          case 6: return 'Sat'
          case 0: return 'Sun'
        }
      },
      chooseDay (index) {
        this.currentDay = index
        this.current.weekday = index - this.current.day + this.current.weekday
        this.current.day = index
      }
    }
  }
</script>

<style lang="less" scoped>
  .vue-date-container{
    position: relative;
    padding: .46rem .59rem .28rem .4rem
  }
  .vue-date-container p{
    position: absolute;
    top: .7rem;
    right: .14rem;
  }
  .vue-date-container .main{
    height: 1.06rem;
    width: 6.51rem;
  }
  .vue-date-container .main .weekdays{
    display: flex;
    width: 100%;
  }  
  .vue-date-container .main .weekdays .cell{
    flex: 1;
    height: .33rem;
    line-height: .33rem;
    font-size: .24rem;
    text-align: center;
    font-weight: bold;
  }  
  .vue-date-container .main .middle {
    height: .73rem;
    line-height: .73rem;
    .cell.active {
      background-color: #ff4236;
      border-radius: 50%;
    }
  }
  .vue-date-container .main .middle .cell{
    width: .57rem;
    height: .57rem;
    line-height: .57rem;
    margin: .08rem .18rem;
    float: left; 
    font-size: .36rem;
    font-weight: bold;
    text-indent: .04rem;
  }  
  .clearfix:after {
    content: ' ';
    display: block;
    clear: both;
  }
</style>
