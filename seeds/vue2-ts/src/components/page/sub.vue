<template lang="pug">
div.p-sub
  Nav
  Demo
</template>
<style lang="scss">
@charset 'utf-8';
.p-sub {
  background: #ddd;
  height: 100%;
}
</style>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Action } from 'vuex-class'
import Demo from '~@/widget/demo/demo.vue'
import Nav from '~@/widget/nav.vue'

@Component({
  name: 'PageSub',
  components: {
    Demo,
    Nav
  }
})
class PageSub extends Vue {
  @Action addDemoLog:(msg: string) => void;
  mounted () {
    const vm = this
    vm.addDemoLog('page sub is ready')
  }
}
export default PageSub
</script>
