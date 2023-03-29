<template lang="pug">
.chapter__wrapper
   .chapter
      .chapter__item(:class="{'chapter__item_active': store.activeType_All }" @click="store.setActiveType('All')") Все типы
      .chapter__item(:class="{'chapter__item_active': store.activeType_Direct }" @click="store.setActiveType('Direct')") Прямые продажи
      .chapter__item(:class="{'chapter__item_active': store.activeType_Auction }"  @click="store.setActiveType('Auction')") Аукцион
   .input__wrapper
      input.chapter__input
      img.search__btn( src='/img/search_btn.png')
</template>

<script setup lang="ts">
import { usePiniaStore } from "~~/store/piniaStore";
const store = usePiniaStore();



const loadActiveType = onMounted(() => {
  const activeChapter: any = !!localStorage.getItem("activeChapter")===true ? localStorage.getItem("activeChapter") : "All";
  store.filterKey = activeChapter
  store.setActiveType(activeChapter);
});

</script>