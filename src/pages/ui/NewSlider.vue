<template>
  <swiper :options="swiperOption" class="swiper-box">
    <swiper-slide v-for="item in items" class="swiper-item"><img :src="item.src" /></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          paginationClickable: true,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: 2500,
          autoplayDisableOnInteraction: false
        }
      }
    },
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="less">
  html,body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
  }
  .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    .swiper-pagination{
      span{
        width: .12rem;
        height: .12rem;
        border-radius: 50%;
        background-color: #828588;
      }
      .swiper-pagination-bullet-active{
        background-color: #ffffff;
      }
    }
  }
  .swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px ;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    img{
      width: 100%;
      height: 100%;
      display: block;
    }
  }
</style>
