<template lang="pug">
  #app 
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class EntryIndex extends Vue {}
</script>
<style lang="scss">
@charset "utf-8";
@import "../../sass/normalize";
@import "../../sass/_mixin";
$psdWidth: 750;

.just-img {
  position: fixed;
  right: 10px; /* no */
  bottom: 10px; /* no */
  width: 100px;
  height: auto;
  z-index: 3;
}
#app {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>