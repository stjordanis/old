<template>
  <ProductLink :path="path">
    <div
      class="shadow-xl border border-gray-300 dark:border-gray-800 rounded-lg p-2 py-4 text-center cursor-pointer"
    >
      <strong class="text-xl text-gray-900">
        <slot name="title" />
      </strong>
      <div class="m-2 text-gray-600 dark:text-gray-400 text-sm">
        <slot />
      </div>
    </div>
  </ProductLink>
</template>

<script>
export default {
  props: {
    path: { type: String, default: '' }
  }
}
</script>