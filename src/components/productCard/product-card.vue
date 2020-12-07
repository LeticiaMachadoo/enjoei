<template>
  <a class="c-product-card" :href="href">
    <div
      v-if="price.current !== price.original"
      class="c-product-card__discount"
    >
      <span>
        {{
          Math.round(((price.current - price.original) / price.original) * 100)
        }}% off
      </span>
    </div>
    <img class="c-product-card__image" :src="imageUrl" />
    <div class="c-product-card__price">
      <span>R$ {{ price.current }}</span>
      <span class="original-price" v-if="price.current !== price.original"
        >R$ {{ price.original }}</span
      >
    </div>
  </a>
</template>

<script>
import { getImageUrl, IMAGE_PRESETS } from "@/tools/get-image-url";

export default {
  props: {
    imageId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    price: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      imageUrl: getImageUrl(this.imageId, IMAGE_PRESETS.product.card)
    };
  },
  computed: {
    href() {
      return `https://www.enjoei.com.br/p/${this.path}`;
    }
  }
};
</script>

<style scoped lang="scss">
@keyframes skeleton-placeholder {
  0% {
    background-position: -46.8rem 0;
  }
  100% {
    background-position: 46.8rem 0;
  }
}
.c-product-card {
  animation: skeleton-placeholder 2s linear infinite;
  background: var(--color-gray-1);
  background: linear-gradient(
    to right,
    var(--color-gray-1) 10%,
    var(--color-gray-2) 18%,
    var(--color-gray-1) 33%
  );
  background-size: 400% 400%;
  border-radius: 0.3rem;
  display: block;
  max-height: 21.6rem;
  min-height: 16.3rem;
  min-width: 16.3rem;
  overflow: hidden;
  position: relative;

  &__image {
    border-radius: 0.3rem;
    bottom: 0;
    left: 0;
    min-width: 100%;
    position: absolute;
    right: 0;
    top: 0;
  }

  &__price,
  &__discount {
    border-radius: 0.2rem;
    font-size: 1.2rem;
    padding: 0.5rem;
    position: absolute;
    z-index: 99;
  }

  &__price {
    background: var(--color-white);
    bottom: 0.2rem;
    color: var(--color-pink);
    left: 0.2rem;

    .original-price {
      color: var(--color-gray-4);
      margin-left: 0.5rem;
      text-decoration: line-through;
    }
  }

  &__discount {
    background-color: var(--color-pink);
    color: var(--color-white);
    top: 0.2rem;
    right: 0.2rem;
  }
}
</style>
