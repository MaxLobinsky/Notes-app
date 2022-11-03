<template>
  <div class="tags-list">
    <div
      class="tag-item"
      v-for="item in items"
      :key="item"
      @click="$emit('onItemClick', item)"
      :class="{ isPreview: isPreview, isActive: tag.includes(item) }"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: Array,
      default: [],
    },
    items: {
      type: Array,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isPreview: {
      type: Boolean,
      default: false,
    },
  },
};
</script>