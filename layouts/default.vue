<template>
  <div id="app" @click.right.prevent="rightclick">
    <canvas id="confetti-canvas" />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import confetti from 'canvas-confetti'

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
          x: e.clientX / screen.width,
          y: e.clientY / screen.height
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
  user-select: none;
}

canvas {
  @include fullscreen;
  user-select: none;
  pointer-events: none;
  z-index: 100;
}
</style>
