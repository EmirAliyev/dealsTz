<template lang="pug">
.product(v-for='(item,idx,value) in filteredMass' :key="item.id")
   ProductInformation( :item="item")
   ProductOrder(:item = "item" :orderBtn="'Добавить в сделки'")  
</template>

<script setup lang="ts">
import { usePiniaStore } from "~~/store/piniaStore";
const store = usePiniaStore();

let loadInfo =onMounted(()=>{
  store.loadData();
  let dataFav = JSON.parse(localStorage.getItem("myfavourites")!);
  store.favourites = dataFav ? dataFav : store.favourites;
  let dataDeal =  JSON.parse(localStorage.getItem("mydeals")!)
  store.deals = dataDeal ? dataDeal : store.deals
})

const filteredMass = computed(() => {
  if (store.filterKey=="All") {
    return store.dataMass;
  } else {
    return store.dataMass.filter((item) => {
      if (item.saleType == store.filterKey) {
        return item;
      }
    });
  }
});
</script>
