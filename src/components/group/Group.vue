<template>
  <div>
    <calender />
    <predetermine :predeters="lessons" mode="lesson"/>
  </div>
</template>

<script>
import { groupLessons } from './helper.js'
import Predetermine from '../../pages/Predetermine'
import Calender from '../../pages/ui/Calender'

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
    Predetermine,
    Calender
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
