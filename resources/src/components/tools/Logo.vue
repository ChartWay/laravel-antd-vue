<template>
  <div class="logo">
    <router-link :to="{name:'dashboard'}">
      <img width="32" :src="logo" />
      <h1 v-if="showTitle">{{ title }}</h1>
    </router-link>
  </div>
</template>

<script>
import LogoSvg from '@/assets/logo.svg?inline'

export default {
  name: 'Logo',
  props: {
    title: {
      type: String,
      default: '培小二管理后台',
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  data() {
    return {
      logo: LogoSvg
    }
  }
}
</script>
