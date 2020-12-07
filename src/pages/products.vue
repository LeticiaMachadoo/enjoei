<template>
  <div>
    <vSearchField v-bind:value="this.searchTerm" v-bind:onChange="onChange" />
    <div :class="'c-products-list'">
      <div
        :class="'c-product'"
        v-for="product in products"
        :key="product.node.id"
      >
        <div :class="'c-product-image'">
          <vProductCard
            v-bind:image-id="product.node.photo.image_public_id"
            v-bind:title="product.node.title.name"
            v-bind:path="product.node.path"
            v-bind:price="product.node.price"
          />
        </div>
      </div>
    </div>
    <vNotFound v-bind:clearFilter="onChange" v-if="!products.length" />
    <vPagination
      v-if="products.length"
      v-bind:totalRecords="totalRecords"
      v-bind:currentPage="currentPage"
      v-bind:itemsPerPage="itemPerPage"
      v-bind:setNewPage="setNewPage"
    />
  </div>
</template>

<style scoped lang="scss">
.c-products-list {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 576px) {
    padding-bottom: 2.2rem;
  }
}
.c-product {
  margin: auto;
  margin-bottom: 2.4rem;
  margin-top: 0;
  width: 20%;

  @media (max-width: 992px) {
    width: 25%;
  }

  @media (max-width: 768px) {
    width: 33.33333333333333%;
  }

  @media (max-width: 576px) {
    width: 50%;
    margin-bottom: 1rem;
  }

  @media (max-width: 375px) {
    width: 100%;
  }

  .c-product-image {
    height: 100%;
    padding-right: 2.4rem;
    width: 100%;

    @media (max-width: 375px) {
      padding-right: 0;
    }

    @media screen and (max-width: 768px) and (min-width: 375px) {
      padding-right: 1rem;
    }
  }

  @media screen and (min-width: 992px) {
    &:nth-child(5n) {
      .c-product-image {
        padding-right: 0;
      }
    }
  }

  @media screen and (max-width: 992px) and (min-width: 768px) {
    &:nth-child(4n) {
      .c-product-image {
        padding-right: 0;
      }
    }
  }

  @media screen and (max-width: 768px) and (min-width: 576px) {
    &:nth-child(3n) {
      .c-product-image {
        padding-right: 0;
      }
    }
  }

  @media screen and (max-width: 576px) {
    &:nth-child(even) {
      .c-product-image {
        padding-right: 0;
      }
    }
  }
}
</style>

<script>
import axios from "axios";
import { get } from "lodash";
import vProductCard from "@/components/productCard/product-card.vue";
import vSearchField from "@/components/search/search-field.vue";
import vPagination from "@/components/pagination/pagination.vue";
import vNotFound from "@/components/notFound/not-found.vue";

export default {
  components: {
    vProductCard,
    vSearchField,
    vPagination,
    vNotFound
  },
  data() {
    return {
      products: [],
      searchTerm: "",
      totalRecords: 1000,
      itemPerPage: 15,
      currentPage: 0,
      alignments: ["start", "center", "end"],
      lastItem: this.products
        ? this.products[this.products.length - 1].cursor
        : ""
    };
  },
  methods: {
    setNewPage(sum = false) {
      this.currentPage = sum ? this.currentPage + 1 : this.currentPage - 1;
    },
    onChange(event) {
      this.searchTerm = get(event, "target.value", "");
    },
    listProducts() {
      axios
        .post("https://enjusearch.enjoei.com.br/graphql-search", {
          query: `
            query searchProducts(
              $term: String!,
              $first: Int,
              $after: String
            ) {
              search(products: {
                term: $term
              }) {
                products(first: $first, after: $after) {
                  total
                  edges {
                    cursor
                    node {
                      id
                      path
                      photo {
                        image_public_id
                      }
                      title {
                        name
                      }
                      brand {
                        displayable_name
                      }
                      price {
                        original
                        current
                      }
                    }
                  }
                }
              }
            }
          `,
          variables: {
            term: this.searchTerm,
            first: this.itemPerPage,
            after: this.lastItem
          }
        })
        .then(res => {
          this.totalRecords = res.data.data.search.products.total;
          this.products = res.data.data.search.products.edges;
        });
    }
  },
  watch: {
    function(val) {
      this.fullName = val + " " + this.lastName;
    },
    searchTerm: function(val) {
      this.listProducts();
    },
    currentPage: function() {
      this.listProducts();
    }
  },
  created() {
    this.listProducts();
  }
};
</script>
