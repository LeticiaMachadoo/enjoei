<template>
  <div :class="['c-container', { '-with-gutter': gutter }]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    gutter: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped lang="scss">
.c-container {
  max-width: 1176px;
  margin-left: auto;
  margin-right: auto;

  &.-with-gutter {
    max-width: 1280px;
    padding-left: 5.2rem;
    padding-right: 5.2rem;

    @media (max-width: 600px) {
      padding-left: 2.4rem;
      padding-right: 2.4rem;
    }
  }
}
</style>
