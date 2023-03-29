<template lang="pug">
.product__order-favourite(:style="{ background: checkFavourites? '#2D3B87' :'#F4F5F9'}")
   img(v-if="!checkFavourites" src='/img/heart.png')
   img(v-else src='/img/heart-liked.png')
</template>

<script setup lang="ts">
import { usePiniaStore } from "~~/store/piniaStore";
const store = usePiniaStore();
const item = defineProps(["item"]);
let data = item.item;
let checkFavourites = computed((data) => {
  if (!store.favourites) {
    return false;
  } else {
    return store.favourites.find((product) => product.id === item.item.id);
  }
});
</script>
