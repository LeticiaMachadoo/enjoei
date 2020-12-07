<template>
  <button
    @click="onClick"
    :class="[
      'c-button',
      { '-primary': variant === 'primary' },
      { '-secondary': variant === 'secondary' }
    ]"
    v-bind:disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: "primary" | "secondary",
      required: true
    },
    disabled: {
      type: Boolean,
      required: false
    },
    onClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.c-button {
  align-items: center;
  display: flex;
  height: 4.8rem;
  border: none;
  border-radius: 0.3rem;
  box-shadow: none;
  padding: 1.6rem 2.4rem;

  &.-primary {
    background: var(--color-pink);
    color: var(--color-white);
  }

  &.-secondary {
    background: transparent;
    border: 0.1rem solid var(--color-border);
    color: var(--color-gray-3);
  }

  &:focus,
  &:hover {
    box-shadow: none;
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
  }
}
</style>
