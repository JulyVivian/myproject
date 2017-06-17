<template>
  <div class="camp-box">
    <div v-for="camp in camps">
      <img :src="camp.pic" />
      <div>
        <button>预约</button>
        <p class="price-days"><span>¥{{camp.price}}</span><img src="../assets/time.png" />{{camp.downcount}}天</p>
        <p class="detail">{{camp.detail}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      camps: {
        type: Array
      }
    }
  }
</script>
<style scoped lang="less">
  .camp-box{
    width: 7.5rem;
    div{
      img{
        width: 100%;
        height: 3.9rem;
        display: block;
      }
      div{
        height: .97rem;
        padding: .3rem;
        border-top: 1px solid #333333;
        button{
          float: right;
          width: 1.34rem;
          height: .6rem;
          background-color: #ff4236;
          font-size: .32rem;
          color: #ffffff;
          border-radius: .04rem;
        }
        .price-days{
          height: .5rem;
          line-height: .5rem;
          span{
            color: #ff851a;
            font-size: .44rem;
          }
          img{
            display: inline-block;
            width: .28rem;
            height: .28rem;
            margin-left: .24rem;
            margin-right: .1rem;
          }
        }
        .detail{
          height: .47rem;
          line-height: .47rem;
        }
      }
    }
  }
</style>
