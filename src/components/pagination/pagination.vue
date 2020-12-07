<template>
  <div :class="'c-pagination'">
    <vButton
      variant="secondary"
      v-bind:disabled="currentPage === 0"
      :class="'c-button-pagination'"
      v-bind:onClick="setNewCurrentPage"
    >
      <img :src="require('@/assets/arrow-left-icon.svg')" :width="'30px'" />
    </vButton>
    <vButton
      variant="secondary"
      v-bind:disabled="currentPage === totalPages"
      :class="'c-button-pagination right'"
      v-bind:onClick="() => setNewCurrentPage(true)"
    >
      <img :src="require('@/assets/arrow-right-icon.svg')" :width="'30px'" />
    </vButton>
  </div>
</template>

<script>
import vButton from "@/components/button/button.vue";

export default {
  components: {
    vButton
  },
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
  padding-bottom: 2rem;
  width: 100%;

  @media (max-width: 576px) {
    justify-content: space-between;
  }

  .c-button-pagination {
    width: 13.2rem;

    &.right {
      justify-content: flex-end;
    }

    &:first-child {
      margin-right: 2.4rem;
    }
  }
}
</style>
