<template lang="pug">
button.product__order-paid(v-if= "item.paid && route.path == '/deals'") Оплачено
button(v-else :class="newClass") {{ orderBtn }}

</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { usePiniaStore } from '~~/store/piniaStore';
const store = usePiniaStore()
const route = useRoute()
const {orderBtn, item} = defineProps(['orderBtn','item'])

let newClass = ref('');
let className = onMounted(()=>{
   console.log(route.path)
   if(route.path=='/deals/'){
      newClass.value = 'product__order-pay'
   } else {
      newClass.value = 'product__order-btn'
   }
})


</script>