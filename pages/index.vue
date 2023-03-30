<template lang="pug">
.product(v-for='(item,idx,value) in filteredMass' :key="item.id")
   ProductInformation( :item="item")
   ProductOrder(:item = "item" :orderBtn="'Добавить в сделки'")  
</template>

<script setup lang="ts">
import { usePiniaStore } from "~~/store/piniaStore";
const store = usePiniaStore();

let loadInfo = onMounted(() => {
  store.loadData();
  let dataFav = JSON.parse(localStorage.getItem("myfavourites")!);
  store.favourites = dataFav ? dataFav : store.favourites;
  let dataDeal = JSON.parse(localStorage.getItem("mydeals")!);
  store.deals = dataDeal ? dataDeal : store.deals;
});

const filteredMass = computed(() => {
  if (store.inputValue.length > 0 && store.filterKey != "All") {
    return store.dataMass.filter((item) => {
      return (
        item.title.toLowerCase().includes(store.inputValue.toLowerCase()) &&
        item.saleType == store.filterKey
      );
    });
  } else if (store.inputValue.length > 0 && store.filterKey == "All") {
    return store.dataMass.filter((item) => {
      return item.title.toLowerCase().includes(store.inputValue.toLowerCase());
    });
  } else if (store.inputValue.length == 0 && store.filterKey != "All") {
    return store.dataMass.filter((item) => {
      if (item.saleType == store.filterKey) {
        return item;
      }
    });
  } else {
    return store.dataMass;
  }
});
</script>
