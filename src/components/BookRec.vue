<template>
  <div class="paragraph pb-3 mb-5">
    <h3 class="title pt-3 pb-3">四、新书推荐</h3>
    <div class="row mb-4 d-flex justify-content-center">
      <div class="col-6 col-md-2">
        <img
          data-aos="zoom-in"
          data-aos-delay="100"
          :src="coverA"
          alt=""
          srcset=""
        />
      </div>
      <div class="col-11 col-md-8 d-flex flex-column justify-content-center">
        <h4>推荐理由：</h4>
        <p>
          {{ bookContents.descA }}
        </p>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-6 col-md-2">
        <img
          data-aos="zoom-in"
          data-aos-delay="300"
          :src="coverB"
          alt=""
          srcset=""
        />
      </div>
      <div class="col-11 col-md-8 d-flex flex-column justify-content-center">
        <h4>推荐理由：{{ bookContents.titleA }}</h4>
        <p>
          {{ bookContents.descB }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.paragraph {
  border: 2px solid #6fb0df;
}
.paragraph .title {
  background-color: #6fb0df;
  text-align: center;
  color: white;
}

.paragraph h4 {
  text-align: left;
  color: green;
  font-weight: bold;
}
.paragraph img {
  width: 100%;
  // height:250px;
  object-fit: cover;
}
@media (max-width: 992px) {
  .paragraph h4 {
    margin-top: 30px;
    text-align: center;
  }
  .paragraph img {
    width: 100%;
    // height:300px;
  }
}
</style>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  data() {
    return {
      coverA: String,
      coverB: String,
    };
  },
  props: {
    bookContents: Object,
  },

  methods: {},
  // computed: {
  //   imgUrl: function () {
  //     return this.photo;
  //   },
  // },
  mounted() {
    AOS.init();
    this.coverA = require(`@/assets/${this.bookContents.month}/4-1.png`);
    this.coverB = require(`@/assets/${this.bookContents.month}/4-2.png`);
    console.log('book vue mounted.');
  },
};
</script>