<template lang="pug">
.product__description
   img(src="/img/product.png") 
   .product__data
      p.product__data_saletype {{ item.saleType }}
      p.product__data_title {{ item.title }}
      .product__data_location-wrp
         img( src='/img/geo.png')
         p.product__data_location {{ item.location }}
      .product__data_vendor
         p.product__data_vendor-title Продавец
         p.product__data_vendor-name  {{ item.vendor }}
      .product__data_type 
         p.product__data_type-title Вид товара
         p.product__data_type-name {{ item.productType }}
      .product__data_description {{ item.description }}
</template>

<script setup lang="ts">
const {item} = defineProps(['item'])

</script>