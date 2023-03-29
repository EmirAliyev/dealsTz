<template lang="pug">
.product__order
   p.product__order-price-total {{ item.price*item.quantity }} ₽ 
   .product__order-quantity
      p.product__order-quantity-title Количество
      p.product__order-quantity-num {{ item.quantity }} шт.
   .product__order-price
      p.product__order-price-title Стоимость за штуку
      p.product__order-price-num {{ item.price }} ₽
   UIOrderBtn(@click= "addToDealsOrPay(item)" :orderBtn="orderBtn" :item="item")
   UIFavouriteBtn(@click= "addToFavourites(item, idx)" :item="item" ) 
</template>

<script setup lang="ts">
import { usePiniaStore } from "~~/store/piniaStore";
import { useRoute } from "vue-router";
const route = useRoute();
const store = usePiniaStore();

const { item, idx, orderBtn } = defineProps(["item", "idx", "orderBtn"]);

let check = (product: any) => {
  return store.favourites.find((item) => item.id === product.id);
};

const addToFavourites = (product: any, idx: number) => {
  if (check(product)) {
    //Из-за дублирования продуктов в разделе сделки пришлось усложнить структуру
    let needableProduct: any = store.favourites.find(
      (item) => item.id == product.id
    );
    let index = store.favourites.indexOf(needableProduct);
    store.favourites.splice(index, 1);
    localStorage.setItem("myfavourites", JSON.stringify(store.favourites));
  } else {
    store.favourites.push(product);
    localStorage.setItem("myfavourites", JSON.stringify(store.favourites));
  }
};

const addToDealsOrPay = (product: any, idx: number) => {
  if (route.path == "/deals") {
    product.paid = true
    localStorage.setItem("mydeals", JSON.stringify(store.deals));
  } else {
    product.paid= false 
    store.deals.push(product);
    localStorage.setItem("mydeals", JSON.stringify(store.deals));
  }
};
</script>
