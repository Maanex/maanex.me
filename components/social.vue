<template>
  <div>
    <a
      v-for="(l,i) in links"
      :key="i"
      v-tippy="{ placement: 'bottom', delay: [ 300, 0 ] }"
      :content="`${l.title}<br><span style=&quot;opacity: .5&quot;>${l.uname}</span>`"
      :href="l.href"
      target="_blank"
      :ready="anim > i"
      class="c-click-ext"
    >
      <svg-icon :name="l.icon" />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      links: [
        {
          icon: 'twitter',
          title: 'Twitter',
          uname: '@Maanex_',
          href: 'https://twitter.com/Maanex_'
        },
        {
          icon: 'github',
          title: 'Github',
          uname: '@Maanex',
          href: 'https://github.com/Maanex'
        },
        {
          icon: 'discord',
          title: 'Discord',
          uname: '-',
          href: 'https://discord.gg/mJnQXet'
        },
        {
          icon: 'mail',
          title: 'Mail',
          uname: '-',
          href: 'mailto:maanex.tude@gmail.com'
        }
      ],
      anim: 0
    }
  },
  mounted () {
    setTimeout(this.animation, 2000)
  },
  methods: {
    animation () {
      const int = setInterval(() => {
        this.anim += 0.002
        this.anim *= 1.02

        if (this.anim >= 7) {
          clearInterval(int)
        }
      })
    }
  }
})
</script>

<style scoped lang="scss">
@import '~/assets/style/all.scss';

div {
  display: inline-flex;
  justify-content: center;
  width: 100%;
}

a {
  height: 30px;
  width: unset;
  padding: 10px 0;
  text-decoration: none;
  color: $color-sub;
  opacity: 1;
  transform: translateY(0);
  transition: color .3s ease-out
            , opacity .5s cubic-bezier(0.34, 1.56, 0.64, 1)
            , transform .5s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:not([ready]) {
    color: $primary-one;
    opacity: 0;
    transform: translateY(-20px);
  }

  &:hover {
    transition: color .15s ease-out;
    color: $primary-five;
  }

  svg {
    height: 100%;
    width: 100%;
  }
}

</style>
