<template>
  <a :href="path" v-if="isExternalLink" style="text-decoration: none;"><slot></slot></a>
  <NuxtLink :to="path" v-else style="text-decoration: none;"><slot></slot></NuxtLink>
</template>

<script>
export default {
  props: {
    path: { type: String, default: '' }
  },
  computed: {
    isExternalLink() {
      try {
        const urlCheck = new URL(this.path)
        return true
      } catch {
        return false
      }
    }
  }
}
</script>