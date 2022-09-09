<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="j in [currentSlide]" :key="j">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="before" @click="before" href="#">&#10094; Before</a>
    <a class="after" @click="after" href="#">&#10095; After</a>
  </div>
</template>
<script>
export default {
  name: "image-slider",
  data() {
    return {
      slides: [
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8&w=1000&q=80",
        "https://upload.wikimedia.org/wikipedia/commons/a/a3/R%C3%B6e_g%C3%A5rd_caf%C3%A9_2.jpg",
        "https://optusstadium.com.au/-/media/images/os-web/experience/event-day-dining/cityview-square.jpg?h=600&w=600&la=en&hash=33B5EA6A757E5FE1DF1ED41E2019F9EC53DA3ACC"
      ],
      duration: null,
      currentSlide: 0
    };
  },

  mounted: function() {
    this.beginSlide();
  },

  methods: {
    beginSlide: function() {
      this.duration = setInterval(this.after, 5000);
    },

    after: function() {
      this.currentSlide += 1;
    },
    before: function() {
      this.currentSlide -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.slides[Math.abs(this.currentSlide) % this.slides.length];
    }
  }
};
</script>

<style>
  .fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:400px;
  width:100%
}

.before, .after {
  cursor: pointer;
  position: absolute;
  top: 35%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight:bolder;
  font-size: 16px;
  transition: 0.9s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}
.before{
  left: 0;
  margin-left: 50px;
}
.after {
  right: 0;
  margin-right: 50px;
}
.before:hover, .after:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>