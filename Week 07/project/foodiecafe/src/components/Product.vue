<template>
<div>
    <div class="welcomebox"></div>
    <div class="heading"><h1>Milkshakes</h1></div>
    <div><slot></slot></div>
    <div class="section2">
    <div class="itemdetails">
        <h2>Chocolate Milkshake</h2>
        <p>Quantity {{ itemQuantity }}</p>
        <p>$3.50</p>
        <p v-if="itemQuantity > 0">InStock</p>
        <p v-else>Out Of Stock</p>
       <p>Chocholate Milshake is gurateened to make your taste buds dance with joy</p>
       <button @click="addToBasket" :disabled="itemQuantity == 0" style="background-color: #18A0FB; color: #020351;border-radius: 40px;">Add to Basket</button>
    </div>
   </div>
   <div class="section2" style="margin-top:20px;">
    <h2 style="margin-top: 140px;">How our Chocolate Milkshakes are made !</h2>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/DjBfsMO3qOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </div>
   <div>
    <h2 class="heading">Reviews</h2>
    <div class="sectionreviews">
    <p v-if="reviews.length == 0">There are no reviews for this product.</p>
    <ol v-else>
    <li v-for="(review, index) in reviews" :key="index">
    <div class="row">
    <p class="column">{{ review.name }}</p>
    <p class="column">Rating:{{ review.rating }}</p>
    <p class="column">{{ review.feedback }}</p>
    </div>
    </li>
    </ol>
    </div>
    </div>
         
    <ProductReviewVue @newreview="addReview"></ProductReviewVue>
      
    </div>
</template>

<script>
import ProductReviewVue from './ProductReview.vue'
export default {
    name: "ProductVue",
components:{
    ProductReviewVue
},
data() {
      return {
          reviews: [],
          itemname: 'ChocholateMilkshake',
          itemid: 123,
          itemQuantity: 10
      }
    },
      methods: {
        addToBasket() {
            this.$emit('add-to-basket', this.itemname),
            this.itemQuantity -= 1
        },
        addReview(productreview) {
          this.reviews.push(productreview)
        }
      }
}
</script>

<style>
img {width: 100%; max-width: 100%; height: auto; object-fit: contain; display: block;}
        .welcomebox{
            background-image: url(../assets/1433889344-del-milkshakes-index.jpg);
            background-size:cover;
            padding: 235px;
            color: #020351;
        }
        .heading{
            border-radius: 8px; 
            background-color: #00B4D8;
        }
        .section2{
            display: flex;
            background-color: #00B4D8;
        }
        .section2 .itemdetails{
            display: block;
            background-color: #00B4D8;
            margin-left: 20px;
            margin-right: 50px;
            font-size: large;
        }
        .section3{
            margin-top: 20px;
            position: absolute;
            background-color:#00B4D8;
        }
        .Basket{
            background-color:#00B4D8;
        }
        .section4{
            background-color: #00B4D8;
            text-align: center;
        }
        .sectionreviews{
            background-color: #00B4D8;
        }
        .row{
            clear:both;
            display: flex;
        }
        .column{
            float: left;
            width: 30%;
            padding: 10px;
        }
</style>