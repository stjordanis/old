<template>
  <div>
    <h2 v-if="header" class="text-center">
      {{ header }}
    </h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5 mb-36"
    >
      <ProductCard
        v-for="{ title, description, badgeText, badgeColor } in products"
        :key="title"
      >
        <template #title>
          {{ title }}
        </template>
        {{ description }}
        <div v-if="badgeText" class="mt-2">
          <ColorBadge :color="badgeColor">{{ badgeText }}</ColorBadge>
        </div>
      </ProductCard>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: { type: String, default: '' },
    products: { type: Array, default: () => [] }
  }
}
</script>
