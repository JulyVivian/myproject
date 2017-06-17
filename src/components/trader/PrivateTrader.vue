<template>
  <predetermine :predeters="traders" mode="trader"/>
</template>

<script>
import { privateTraders } from './helper.js'
import Predetermine from '../../pages/Predetermine'

export default {
  name: 'PrivateTrader',
  data () {
    return {
      traders: privateTraders
    }
  },
  created () {
    document.title = '约私教'
  },
  components: {
    Predetermine
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
