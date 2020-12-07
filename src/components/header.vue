<template>
  <div :class="'c-header'">
    <img :src="require('@/assets/enjoei-logo.svg')" :width="'30px'" />
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
.c-header {
  align-items: center;
  display: flex;
  border-bottom: 0.1rem solid #f1eeec;
  height: 7rem;
  justify-content: center;
  margin-bottom: 2.4rem;
  width: 100%;
}
</style>
