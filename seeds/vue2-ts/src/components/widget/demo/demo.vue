<template lang="pug">
div
  i.w-demo-logo(:class="['w-demo-logo-' + rotate]")
  div.w-demo-tl {{title}}
  div.w-demo-log
    div(v-for="msg in demoLogs") {{msg}}
</template>
<style lang="scss">
@charset 'utf-8';
@import '../../../sass/_mixin';
.w-demo-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 150px;
  height: 116px;
  margin: -58px 0 0 -75px;
  background: url('images/logo.png') no-repeat;
  background-size: 150px 116px;
  transition: .4s;
}
.w-demo-tl {
  position: absolute;
  top: 50%;
  margin-top: 100px;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 18px; /*px*/
}
.w-demo-logo-0 {
  transform: rotate(0deg);
}
.w-demo-logo-1 {
  transform: rotate(90deg);
}
.w-demo-logo-2 {
  transform: rotate(180deg);
}
.w-demo-logo-3 {
  transform: rotate(270deg);
}
.w-demo-log {
  position: fixed;
  z-index: 2;
  bottom: 10px;
  left: 10px;
  right: 10px;
  height: 200px;
  background: rgba(0,0,0,0.2);
  padding: 8px;
  color: green;
  overflow: auto;
  font-size: 18px; /*px*/
}

</style>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'

const cache = {
  changeKey: 0
}

@Component({
  name: 'Demo'
})
class Demo extends Vue {
  @Action addDemoLog: (msg: string) => void;
  @State demoLogs: string[];
  @Prop({ default: 'hello YY' }) title: string;
  rotate: number = 0;

  mounted () {
    const vm = this
    let i = 0
    const iClass = [0, 1, 2, 3]
    cache.changeKey = setInterval(() => {
      const here = iClass.concat([])
      here.splice(here.indexOf(i), 1)
      vm.rotate = here[Math.round(Math.random() * (here.length - 1))]
      i = vm.rotate
    }, 2000)

    vm.addDemoLog('v-demo is ready')
  }
  beforeDestory () {
    clearInterval(cache.changeKey)
  }
}
export default Demo
</script>
