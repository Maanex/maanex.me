<template>
  <div class="container">
    <span>Hi, I'm Andy 👋</span>
    <span>I'm currently studying computer science at FAU, Germany and do full stack web development along the way</span>
    <span>Feel free to <nuxt-link to="/" class="link">get in touch</nuxt-link> or view my projects at <nuxt-link to="/projects" class="link">maanex.me/projects</nuxt-link></span>
    <br><br>
    <span>Buzzwords in random order:</span>
    <span v-text="buzzwords" />
    <br><br>
    <nuxt-link to="/" class="link">
      Back
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      buzzwords: 'TypeScript, JavaScript, VueJS, NuxtJS, NodeJS, ExpressJS, React, ReactNative, Java, SQL, MongoDB, Redis, Sentry, Grafana, Prometheus, Github, Github Actions, AWS s3, Swagger, Docker, Tailwind, SCSS, Figma, Affinity Designer, Python, C, REST, GQL'
        .split(',')
        .map(e => e.trim())
        .sort(() => Math.random() - 0.5)
        .sort(() => Math.random() - 0.5)
        .sort(() => Math.random() - 0.5)
        .join(', ')
    }
  }
})
</script>

<style scoped lang="scss">
@import '~/assets/style/all.scss';

.container {
  padding: 5vmin;

  span, .link {
    max-width: 250pt;
    display: block;
    font-family: $font-regular;
    color: $color-regular;
    font-size: 12pt;
    margin-bottom: 10pt;
  }

  .link {
    display: inline-block !important;
    color: $primary-five !important;
    font-size: 12pt !important;
    margin-bottom: 0 !important;
    text-decoration: none;

    &:hover {
      color: $primary-four !important;
    }
  }
}

</style>
