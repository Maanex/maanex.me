<template>
  <div id="app" @click.right.prevent="rightclick">
    <canvas v-if="$nuxt.$route.name == 'index'" id="confetti-canvas" />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import confetti from 'canvas-confetti'

Vue.use(require('vue-tippy').default, {
  arrow: true,
  arrowType: 'round',
  animation: 'vertical',
  duration: 100,
  theme: 'black'
})
Vue.component('tippy', require('vue-tippy').TippyComponent)

export default Vue.extend({
  data () {
    return {
      confettiLib: (..._: any) => {}
    }
  },
  mounted () {
    const c = document.getElementById('confetti-canvas')
    if (!c) {
      return
    }

    this.confettiLib = confetti.create(c as HTMLCanvasElement, {
      resize: true,
      useWorker: true
    })
  },
  methods: {
    rightclick (e: MouseEvent) {
      this.confettiLib({
        particleCount: 40,
        spread: 50,
        startVelocity: 30,
        origin: {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight
        }
      })
    }
  }
})
</script>

<style scoped lang="scss">
@mixin fullscreen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}

#app {
  @include fullscreen;
  background-color: #1a1f25;
  overflow-x: hidden;
}

canvas {
  @include fullscreen;
  user-select: none;
  pointer-events: none;
  z-index: 100;
}
</style>

<style lang="scss">
@import '~/assets/style/all.scss';

.tippy-tooltip {
  background-color: black !important;
  color: $color-regular;
  font-family: $font-major;
  font-size: 11pt;
  padding: 6pt 10pt;
}

.tippy-tooltip .tippy-roundarrow {
  fill: black;
}

.tippy-tooltip.invisible-theme {
  opacity: 0;
}

.tippy-tooltip[data-animation='vertical'][data-state='hidden'] {
  opacity: 0;
  transform: translateY(5px) scaleY(.95);
}
</style>
