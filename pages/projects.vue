<template>
  <div class="container">
    <span>hi</span>
    <span>check back later, this is still under construction</span>
    <br>
    <nuxt-link to="/" class="link">
      BACK
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style scoped lang="scss">
@import '~/assets/style/all.scss';

.container {
  padding: 5vmin;

  span, .link {
    display: block;
    font-family: $font-regular;
    color: $color-regular;
    font-size: 16pt;
  }

  .link {
    color: $primary-five !important;
    font-size: 12pt !important;
    text-decoration: none;

    &:hover {
      color: $primary-four !important;
    }
  }
}

</style>
