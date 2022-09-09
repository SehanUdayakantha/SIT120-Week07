<template>
    <div id="home">
      <navbar></navbar>
      <div class="section09">
      <slider-vue></slider-vue>
      </div>
      <Home></Home>
      <h1 style="text-align:center; background-color:#00B4D8; border-radius: 20px; margin-top: 0px;">There are many selections in our cafe</h1>
          <p>Shown below are a list of choices that can be made in our cafe to satisfy our customers.</p>
      <div class="section05">
      <card></card>
      <card></card>
    </div>
    <div class="section05">
      <card></card>
      <card></card>
    </div>
      <footerVue></footerVue>
    </div>
  </template>
  
  <script>
  import Home from '../components/Home.vue'
  import navbar from '../components/navbar.vue';
  import footerVue from '../components/footer.vue';
  import Card from '../Card.vue'
  import SliderVue from '../components/Slider.vue';
  
  export default {
    name: 'HomePageVue',
    components: {
      Home,
      navbar,
      footerVue,
      Card,
      SliderVue,
    }
  }
  </script>
  
  <style>
  .home {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  body, html, .home{
    background-color: #020351;
  }
  .section05{
              display: flex;
              margin-top: 20px;
              width: 100%;
              height: 250px;
          }
  .section09{
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 50px;
    margin-right: 50px;
  }        
  </style>
  