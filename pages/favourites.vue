<template lang="pug">
.product(v-for='(item,idx,value) in filteredMass' :key="item.id")
   ProductInformation( :item="item")
   ProductOrder(:item = "item" :idx="idx" :orderBtn="'Добавить в сделки'")
</template>

<script setup lang="ts">
import { usePiniaStore } from "~~/store/piniaStore";
const store = usePiniaStore();

const loadData = onMounted(() => {
  let data = JSON.parse(localStorage.getItem("myfavourites")!);
  store.favourites = data ? data : store.favourites;
});

const filteredMass = computed(() => {
  if (store.filterKey == "All") {
    return store.favourites;
  } else {
    return store.favourites.filter((item) => {
      if (item.saleType == store.filterKey) {
        return item;
      }
    });
  }
});
</script>
5985247

