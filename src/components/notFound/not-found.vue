<template>
  <div :class="'c-not-found'">
    <vButton v-bind:onClick="clearFilter" variant="primary" class="c-clear"
      >limpar busca</vButton
    >
    <img
      :class="'c-image'"
      :src="require('@/assets/blank-slate.png')"
      :width="'100%'"
    />
  </div>
</template>

<script>
import vButton from "@/components/button/button.vue";

export default {
  components: {
    vButton
  },
  props: {
    clearFilter: {
      type: Function,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.c-not-found {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2.4rem;
  width: 100%;

  @media screen and (max-width: 576px) {
    align-items: flex-start;
  }

  .c-image {
    max-width: 42rem;
  }

  .c-clear {
    margin-bottom: 7rem;
  }
}
</style>
