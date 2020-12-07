<template>
  <div :class="'c-pagination'">
    <button
      v-bind:disabled="currentPage === 0"
      :class="'c-button c-button-left'"
      @click="setNewCurrentPage()"
    >
      <img :src="require('@/assets/arrow-left-icon.svg')" :width="'30px'" />
    </button>
    <button
      v-bind:disabled="currentPage === totalPages"
      :class="'c-button c-button-right'"
      @click="setNewCurrentPage(true)"
    >
      <img :src="require('@/assets/arrow-right-icon.svg')" :width="'30px'" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    totalRecords: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      required: true
    },
    setNewPage: {
      type: Function,
      required: true
    }
  },
  methods: {
    setTotalPages() {
      return Math.ceil(this.totalRecords / this.itemsPerPage);
    },
    setNewCurrentPage(sum = false) {
      this.setNewPage(sum);
    }
  },
  data() {
    return {
      totalPages: this.setTotalPages()
    };
  }
};
</script>

<style scoped lang="scss">
.c-pagination {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;

  .c-button {
    align-items: center;
    border: 0.1rem solid #f1eeec;
    display: flex;
    height: 4.8rem;
    justify-content: center;
    margin: 0 1.2rem;
    width: 13.2rem;

    &:disabled {
      opacity: 0.5;
    }
  }
}
</style>
