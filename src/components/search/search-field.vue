<template>
  <div :class="'c-search'">
    <div :class="'c-input'">
      <input v-bind:value="value" @keyup="onChange($event)" />
      <img
        :class="'c-search-icon'"
        :src="require('@/assets/search-icon.svg')"
        :width="'25px'"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: false
    },
    onChange: {
      type: Function,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.c-search {
  align-items: center;
  display: flex;
  justify-content: flex-end;
  padding: 2.4rem 0;
  width: 100%;

  .c-input {
    height: 4.2rem;
    margin-right: 0;
    position: relative;
    width: 24rem;

    @media (max-width: 576px) {
      width: 100%;
    }

    input {
      border: 0.1rem solid var(--color-border);
      border-radius: 0.3rem;
      height: 100%;
      padding: 0.9rem 4rem 0.9rem 0.9rem;
      width: 100%;

      &:focus,
      &:hover {
        box-shadow: none;
        outline: none;
      }
    }

    .c-search-icon {
      position: absolute;
      right: 1.2rem;
      top: 0.9rem;
    }
  }
}
</style>
