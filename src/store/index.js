import { createStore } from "redux";

const productList = {
  productsListArr: [
    {
      id: 0,
      imageLink:
        "https://cdn.shopify.com/s/files/1/0071/6249/5060/products/classic_fit_three-piece_check_suit_2_270x341_crop_top.jpg?v=1553073344",
      isAddedToCart: false,
      price: 300,
      defaultQty: 0,
    },
    {
      id: 1,
      imageLink:
        "https://cdn.shopify.com/s/files/1/0071/6249/5060/products/crewneck_sicoca_silk_blend_sweater_2_270x341_crop_top.jpg?v=1553073338",
      isAddedToCart: false,
      price: 600,
      defaultQty: 0,
    },
    {
      id: 2,
      imageLink:
        "https://cdn.shopify.com/s/files/1/0071/6249/5060/products/illusion_yoke_lace_sheath_dress_2_270x341_crop_top.jpg?v=1553073332",
      isAddedToCart: false,
      price: 550,
      defaultQty: 0,
    },
    {
      id: 3,
      imageLink:
        "https://cdn.shopify.com/s/files/1/0071/6249/5060/products/josefina_boyfriend_jeans_bright_light_broken_twill_2_270x341_crop_top.jpg?v=1553073326",
      isAddedToCart: false,
      price: 1550,
      defaultQty: 0,
    },
    {
      id: 4,
      imageLink:
        "https://cdn.shopify.com/s/files/1/0071/6249/5060/products/bing_trim_fit_cotton_jersey_polo_2_270x341_crop_top.jpg?v=1553073349",
      isAddedToCart: false,
      price: 800,
      defaultQty: 0,
    },
    {
      id: 5,
      imageLink:
        "https://cdn.shopify.com/s/files/1/0071/6249/5060/products/crewneck_sicoca_silk_blend_sweater_1_270x341_crop_top.jpg?v=1553073338",
      isAddedToCart: false,
      price: 1250,
      defaultQty: 0,
    },
    {
      id: 6,
      imageLink:
        "https://cdn.shopify.com/s/files/1/0071/6249/5060/products/illusion_yoke_lace_sheath_dress_1_270x341_crop_top.jpg?v=1553073332",
      isAddedToCart: false,
      price: 650,
      defaultQty: 0,
    },
    {
      id: 7,
      imageLink:
        "https://cdn.shopify.com/s/files/1/0071/6249/5060/products/bing_trim_fit_cotton_jersey_polo_1_270x341_crop_top.jpg?v=1553073349",
      isAddedToCart: false,
      price: 700,
      defaultQty: 0,
    },
  ],
};

const reducerFun = (state = productList, action) => {
  if (action.type === "ADD_REMOVE_TO_CART") {
    return { ...state, productsListArr: action.payload };
  }
  return state;
};

const store = createStore(reducerFun);
export default store;
