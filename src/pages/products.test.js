import { shallowMount } from "@vue/test-utils";
import vProducts from "@/pages/products.vue";
import axios from "axios";

jest.mock("axios");

describe("Products", () => {
  it("mounts", () => {
    const wrapper = shallowMount(vProducts);
    expect(wrapper.vm).toBeTruthy();
  });

  it("requests products from the API", () => {
    expect(axios.post).toHaveBeenCalledWith(
      expect.stringMatching("https://enjusearch.enjoei.com.br/graphql-search"),
      expect.objectContaining({
        query: expect.any(String),
        variables: expect.any(Object)
      })
    );
  });
});
