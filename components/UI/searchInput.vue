<template lang="pug">
.input__wrapper
   input.chapter__input( v-model="search")
   img.search__btn( src='/img/search_btn.png')

</template>

<script setup>
import debounce from 'lodash.debounce'
import { usePiniaStore } from '~~/store/piniaStore';
const store = usePiniaStore()
const search = ref('')

watch(search, debounce(()=>{
   store.inputValue = search.value
},1000))
</script>