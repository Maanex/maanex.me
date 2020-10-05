<template>
  <div class="container">
    <div class="content">
      <div class="left sl">
        <nuxt-link to="about" class="c-click">
          ABOUT
        </nuxt-link>
      </div>
      <div class="center">
        <logo id="logo" />
        <social id="social" />
      </div>
      <div class="right sl">
        <nuxt-link to="projects" class="c-click">
          PROJECTS
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/logo.vue'
import Social from '~/components/social.vue'

export default Vue.extend({
  components: {
    Logo,
    Social
  }
})
</script>

<style scoped lang="scss">
@import '~/assets/style/all.scss';

.container {
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: url('/assets/cursor/default.svg') 5 5, auto;
}

.center {
  width: $main-width;
  flex-direction: column;
}

.content {
  width: 90%;
  max-width: $content-width;
  display: flex;
  justify-content: space-between;
}

.sl {
  display: flex;
  align-items: center;
  overflow: visible;
  opacity: 0;
  animation: sl-in 2s ease-out 3s 1 forwards;
}

a {
  display: inline-block;
  text-decoration: none;
  font-family: $font-major;
  color: $color-minor;
  transition: color .3s ease-out;
  font-size: 13pt;
  padding: 20px;

  .left & { transform: rotate(-90deg); }
  .right & { transform: rotate(90deg); }

  &:hover {
    transition: color .15s ease-out;
    color: $primary-five;
  }
}

@keyframes sl-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

</style>
