<template>
  <span
    class="inline-flex items-center px-3 py-1 leading-5 rounded-full text-base tracking-tight"
    :class="`bg-${color}-100 dark:bg-${color}-900 text-${color}-500`"
  >
    <slot />
  </span>
</template>

<script>
import Vue from 'vue'
export default {
  props: {
    color: { type: String, default: 'primary' }
  }
}
</script>
