<template lang="pug">
div.p-index
  Nav
  Demo(title="hello Index")
</template>
<style lang="scss">
@charset 'utf-8';
.p-index {
  height: 100%;
  background: #fff;
}
</style>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Action } from 'vuex-class'
import Demo from '~@/widget/demo/demo.vue'
import Nav from '~@/widget/nav.vue'

@Component({
  components: {
    Demo,
    Nav
  }
})
class PageIndex extends Vue {
  @Action addDemoLog: (msg: string) => void;
  mounted () {
    const vm = this
    vm.addDemoLog('page index is ready')
    vm.addDemoLog(`now in ${process.env.NODE_ENV}`)
  }
}
export default PageIndex
</script>
