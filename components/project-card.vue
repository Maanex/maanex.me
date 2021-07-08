<template>
  <a class="project-card c-click-ext" :href="href" tabindex="0" target="_blank" :style="`--color: ${colors[0] || '#EA9F00'}; --color-hov: ${colors[1] || '#E3091B'}`">
    <div class="background" />
    <div class="content" :layout="layout">
      <img v-if="img" :src="'/assets/img/' + img" alt="">
      <h3 v-text="name" />
      <span class="desc" v-text="desc" />
      <div class="tags">
        <span v-for="(tag, i) in tags" :key="i" class="tag" v-text="tag" />
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    colors: {
      type: Array,
      default: () => ([])
    },
    img: {
      type: String,
      default: ''
    },
    layout: {
      type: String,
      default: 'regular'
      // regular, compact, stack
    },
    tags: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
})
</script>

<style scoped lang="scss">
.project-card {
  padding: 20pt;
  position: relative;

  &, * {
    text-decoration: none !important;
    outline: none !important;
  }

  &:focus-visible .background {
    border: 3px solid white;
  }

  &:hover, &:focus-visible {
    h3 { color: var(--color-hov, #{$primary-four}); }

    .background {
      $grow: 2pt;
      inset: -$grow;
      width: calc(100% + #{$grow*2});
      height: calc(100% + #{$grow*2});
      // background-color: var(--color);
      background-color: #121518;
      border-radius: 5px;
    }

    // span { color: #222222 }
  }
}

.background {
  display: block;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  transition: all .3s $ease-out-circ;
  background-color: #181c20;
  border-radius: 2px;
  border: 3px solid transparent;
}

.content {
  position: relative;
  z-index: 20;
  display: grid;
  column-gap: 20pt;
  row-gap: 10pt;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas: "logo name" "logo desc" "logo tags";

  &[layout="compact"] {
    grid-template-areas: "logo name" "desc desc" "tags tags";
    column-gap: 10pt;
    img { width: 28px; height: 28px; }
  }

  &[layout="stack"] {
    grid-template-areas: "logo logo" "name name" "desc desc" "tags tags";
    img { margin-bottom: 10pt; }
  }
}

img {
  grid-area: logo;
  width: 64px;
  height: 64px;
}

h3 {
  grid-area: name;
  color: var(--color, #{$primary-five});
  margin: 0;
  font-family: $font-fancy;
  font-weight: normal;
  font-size: 20pt;
  transition: all .2s $ease-out-expo;
}

.desc {
  grid-area: desc;
  color: $color-regular;
  margin: 0;
  font-family: $font-regular;
  font-weight: normal;
  font-size: 12pt;
}

.tags {
  grid-area: tags;
  display: block;
}

.tag {
  color: $color-sub;
  margin: 0 15pt 15pt 0;
  font-family: $font-major;
  font-weight: normal;
  font-size: 9pt;
  text-transform: uppercase;
}
</style>
