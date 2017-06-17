<template>
  <div class="home-page">
    <div class="slider-box">
      <slider :items="items" :speed="1.5" :delay="2" :pause="true" :autoplay="true"></slider>
    </div>      
    <div class="mine"><p><img src="../assets/person.png"/>个人中心<img src="../assets/enter.png"/></p><p><img src="../assets/myappoint.png"/>我的预约<img src="../assets/enter.png"/></p></div>
    <ul class="lessons clx">
      <li @click="goToPrivateTrader"><img src="../assets/1.png"/></li>
      <li @click="goToGroup"><img src="../assets/2.png"/></li>
      <li@click="goToPlayGround"><img src="../assets/3.png"/></li>
      <li><img src="../assets/4.png"/></li>
      <li><img src="../assets/5.png"/></li>
    </ul>
  </div>
</template>

<script>
import Slider from '../pages/ui/slider/Slider'

export default {
  name: 'IndexPage',
  data () {
    return {
      items: [
        {
          src: 'https://julyvivian.github.io/js_css_sources/banner.jpg',
          alt: 'images-1'
        }, {
          src: 'https://julyvivian.github.io/js_css_sources/banner.jpg',
          alt: 'images-2'
        }, {
          src: 'https://julyvivian.github.io/js_css_sources/banner.jpg',
          alt: 'images-3'
        }
      ]
    }
  },
  created () {
    document.title = '操场'
  },
  methods: {
    goToPrivateTrader () {
      this.$router.push('/trader')
    },
    goToGroup () {
      this.$router.push('/group')
    },
    goToPlayGround () {
      this.$router.push('/playground')
    }
  },
  components: {
    Slider
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clx:after{
  clear: both;
  display: block;
  height: 0;
  visibility: hidden;
  content: "";
}
.clx{
   *zoom: 1;
}
  .home-page{
    width: 7.5rem;
  }
  .slider-box{
    width: 7.5rem;
    height: 2.8rem;
    overflow: hidden;
  }
  .mine{
    width: 100%;
    display: flex;
    height: .9rem;
    line-height: .9rem;
    background-color: #000000;
  }
  .mine p{
    flex: 1;
    height: .9rem;
    line-height: .9rem;
    text-align: left;
    text-indent: .3rem;
    color: #ffffff;
  }
  .mine p img:nth-child(2){
    float: right;
    margin-right: .3rem;
    margin-top: .24rem;
    width: .2rem;
  }
  .mine p img{
    width: .3rem;
    margin-right: .18rem;
  }  
  .lessons{
    width: 6.9rem;
    padding: .2rem .3rem;
    background-color: #000000;
  }
  .lessons li{
    width: 3.33rem;
    float: left;
    margin-bottom: .24rem;
  }
  .lessons li:nth-child(1), .lessons li:nth-child(4){
    margin-right: .24rem;
  }
  .lessons li:nth-child(3){
    width: 100%;
  }
  .lessons li img{
    display: block;
    width: 100%;
  }  
</style>
