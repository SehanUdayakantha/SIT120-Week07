<template>
    <div>
    <navbarVue></navbarVue>
    <product-vue v-on:add-to-basket="updateBasket">
      <BasketVue></BasketVue>
    </product-vue>
    <footerVue></footerVue>
    </div>
  </template>
  
  
  <script>
  import navbarVue from '../components/navbar.vue';
  import footerVue from '../components/footer.vue';
  import ProductVue from '../components/Product.vue';
  import BasketVue from '../Basket.vue';
  export default {
    name: 'ProductPageVue',
    components: {
      ProductVue,
      BasketVue,
      navbarVue,
      footerVue
    },
    data: function() {
      return{
        basket : [],
          showBasket: false
      }    
        },
        methods: {
          updateBasket(itemname) {
            this.basket.push(itemname)
          }
      }
  }
  </script>
  
  <style>
  body, html, .home{
    background-color: #020351;
  }
  </style>
  