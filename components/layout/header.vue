<template lang="pug">
.header
   .header__projection
   .header__nav
      NuxtLink.header__nav_favourites(to='/favourites')
         img( src='/img/heart.png')
         p Избранное
      NuxtLink.header__nav_box(to='/')
         img( src='/img/box.png')
         p Склад
      NuxtLink.header__nav_deals(to='/deals')
         img( src='/img/deals.png')
         p Сделки
</template>