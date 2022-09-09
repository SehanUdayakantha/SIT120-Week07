<template>
  <div class="Basket">
    <button @click="showBasket = !showBasket">Basket({{ basket.length }})</button>
    <div v-if="showBasket" class="basket-dropdown">
    <ul class="basket-dropdown__list">
    <li v-for="(itemname, index) in basket" v-bind:key="index">
    {{ itemname }} (1)
    </li>
    </ul>
    </div>
    </div>
</template>

<script>
export default {
    name: "BasketVue"
}
</script>

<style>

</style>