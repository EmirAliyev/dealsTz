<template lang="pug">
.product(v-for='(item,idx,value) in filteredMass' :key="item.id")
   ProductInformation( :item="item")
   ProductOrder(:item = "item" :orderBtn="'Оплатить'")
</template>

<script setup lang="ts">
import { usePiniaStore } from "~~/store/piniaStore";
const store = usePiniaStore();

const loadData = onMounted(() => {
  let dataDeals =  JSON.parse(localStorage.getItem("mydeals")!)
  store.deals = dataDeals ? dataDeals : store.deals
  let dataFavourite = JSON.parse(localStorage.getItem("myfavourites")!);
  store.favourites = dataFavourite ? dataFavourite : store.favourites;
});

const filteredMass = computed(() => {
  if (store.filterKey == "All") {
    return store.deals;
  } else {
    return store.deals.filter((item) => {
      if (item.saleType == store.filterKey) {
        return item;
      }
    });
  }
});
</script>
