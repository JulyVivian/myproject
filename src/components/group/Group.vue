<template>
  <div>
    <predetermine :predeters="lessons" mode="lesson"/>
  </div>
</template>

<script>
import { groupLessons } from './helper.js'
import Predetermine from '../../pages/Predetermine'

export default {
  name: 'PrivateTrader',
  data () {
    return {
      lessons: groupLessons
    }
  },
  created () {
    document.title = '约团课'
  },
  components: {
    Predetermine
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
