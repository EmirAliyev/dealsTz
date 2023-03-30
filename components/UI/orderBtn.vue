<template lang="pug">
button.product__order-paid(v-if= "item.paid") Оплачено
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
   if(route.path=='/deals/' || route.path=='/deals'){
      newClass.value = 'product__order-pay'
   } else {
      newClass.value = 'product__order-btn'
   }
})


</script>