<template>
  <div class="container">
    <h1>PROJECTS</h1>
    <div class="projects">
      <project-card
        v-for="project of projects"
        :key="project.slot"
        :style="`grid-area: ${project.slot}`"
        :href="project.href"
        :name="project.name"
        :desc="project.desc"
        :img="project.img"
        :colors="project.colors"
        :layout="project.layout"
        :tags="project.tags"
      />
    </div>
    <br><br>
    <nuxt-link to="/" class="link c-click">
      Back
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectCard from '~/components/project-card.vue'

export default Vue.extend({
  components: {
    ProjectCard
  },
  data () {
    return {
      projects: [
        {
          href: 'https://freestuffbot.xyz/',
          name: 'FreeStuff',
          desc: 'A Discord Bot to keep up to date on free games. Over 10 million users.',
          img: 'logo_freestuff.png',
          colors: ['#6b6eb9', '#9e35a1'],
          layout: 'regular',
          slot: 'fsb',
          tags: ['TypeScript', 'MongoDB', 'Docker']
        },
        {
          href: 'https://maanex.itch.io/lofi-radio',
          name: 'Lofi Radio',
          desc: 'A one-day project to build a minimalist music player.',
          img: 'logo_lofiradio.png',
          colors: ['#DBB4E4', '#DA5CE1'],
          layout: 'regular',
          slot: 'lofi',
          tags: ['Electron']
        },
        {
          href: 'https://8sachen.de/lender',
          name: '8Sachen',
          desc: 'Frontend development',
          img: 'logo_8sachen.png',
          colors: ['#ffffff', '#A9F8D2'],
          layout: 'compact',
          slot: 'sachen',
          tags: ['React', 'Elixir']
        },
        {
          href: 'https://play.google.com/store/apps/details?id=de.tude.lines',
          name: 'linjo',
          desc: 'An easy to learn, hard to master arcade mobile game',
          img: 'logo_linjo.png',
          colors: ['#EA9F00', '#D35D0D'],
          layout: 'regular',
          slot: 'linjo',
          tags: ['Java', 'Android']
        },
        {
          href: 'https://bkwiki.rexcellentgames.com',
          name: 'BK Wiki',
          desc: 'Official item wiki for the computer game "burning knight"',
          img: 'logo_rex.png',
          colors: ['#D86E67', '#FF372A'],
          layout: 'compact',
          slot: 'bk'
        },
        {
          href: 'https://pass.maanex.me/',
          name: 'pass.maanex.me',
          desc: 'A password manager, using procedural generation over encrypted saving',
          img: 'logo_mpass.png',
          colors: ['#34d399', '#A7F3D0'],
          layout: 'compact',
          slot: 'mpass',
          tags: ['Nuxt', 'Tailwind']
        },
        {
          href: 'https://week.maanex.me/',
          name: 'week.maanex.me',
          desc: 'A simplistic week planner to not lose track over repeating tasks',
          img: 'logo_mweek.png',
          colors: ['#fcd34d', '#FEF3C7'],
          layout: 'compact',
          slot: 'mweek',
          tags: ['Nuxt', 'Tailwind']
        },
        {
          href: 'https://loqui.app/',
          name: 'Loqui',
          desc: 'Translation website, coming soon',
          img: 'logo_loqui.png',
          // colors: ['#6b6eb9', '#9e35a1'],
          layout: 'regular',
          slot: 'loqui'
        }
      ]
    }
  }
})
</script>

<style scoped lang="scss">
.container {
  padding: 5vmin;

  h1 {
    font-family: $font-major;
    font-size: 18pt;
    color: $color-major;
    margin: 0 0 5vmin 0;
  }

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

  .projects {
    width: $content-width;
    display: grid;
    gap: 10pt;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "fsb fsb fsb fsb fsb lofi lofi lofi"
      "sachen sachen linjo linjo linjo linjo bk bk"
      "mpass mpass mpass mpass mweek mweek mweek mweek"
      "loqui loqui loqui - - - - -"
      ;
  }
}

</style>
