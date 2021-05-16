<template>
  <div class="container">
    <span>hi</span>
    <span>I'm currently busy working on other projects so this website has to wait.</span>
    <span>For now you'll have to be fine with just links, nothing fancy.</span>
    <br><br>
    <span v-for="project of projects" :key="project.name">
      <a :href="project.href" target="_blank" class="link fancy" v-text="project.name" /> &bull; {{ project.description }}
    </span>
    <span>
      <a href="https://github.com/Maanex/Maanex/blob/master/list.md" target="_blank" class="link fancy">&gt; View More</a>
    </span>
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
      projects: [
        {
          href: 'https://freestuffbot.xyz/',
          name: 'FreeStuff',
          description: 'discord bot to announce free games, over 8 million users'
        },
        {
          href: 'https://maanex.itch.io/lofi-radio',
          name: 'Lofi Radio',
          description: 'one-day project to build a minimalist music player'
        },
        {
          href: 'https://8sachen.de/lender',
          name: '8Sachen',
          description: 'frontend development'
        },
        {
          href: 'https://bkwiki.rexcellentgames.com',
          name: 'Burning Knight Wiki',
          description: 'official item wiki for the computer game "burning knight"'
        },
        {
          href: 'https://pass.maanex.me/',
          name: 'pass.maanex.me',
          description: 'innovative password manager, using procedural generation over encrypted saving'
        },
        {
          href: 'https://week.maanex.me/',
          name: 'week.maanex.me',
          description: 'simplistic week planner to not lose track over repeating tasks'
        },
        {
          href: 'https://play.google.com/store/apps/details?id=de.tude.lines',
          name: 'linjo',
          description: 'an easy to learn, hard to master arcade mobile game'
        },
        {
          href: 'https://loqui.app/',
          name: 'Loqui',
          description: 'translation website, coming soon'
        }
      ]
    }
  }
})
</script>

<style scoped lang="scss">
@import '~/assets/style/all.scss';

.container {
  padding: 5vmin;

  span, .link {
    // max-width: 250pt;
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

    &.fancy { font-family: $font-fancy !important; }

    &:hover {
      color: $primary-four !important;
    }
  }
}

</style>
