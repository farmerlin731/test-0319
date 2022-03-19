<template>
  <div class="cover">
    <h1 style="color: whitesmoke; margin-bottom: 80px">
      富士康大学OCTTTTTT<br />component version
    </h1>

    <h4 style="color: whitesmoke">
      穷理非一端，所得非一处，或在读书上得之，或在讲论上得之，或在思虑上得之，或在行事上得之。读书得之虽多，讲论得之尤速，思虑得之最深，行事得之最实。-----《明儒学案》
      <br /><br />NO.001 2021.10
    </h4>
  </div>
</template>

<style lang="scss" scoped>
.cover {
  width: 100%;
  height: 100vh;
  /* background-image: url('https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'); */
  background:
        /* top, transparent black, faked with gradient */ linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    /* bottom, image */
      url(https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80);
  background-size: cover;
  text-align: center;
  background-attachment: fixed;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 50px;
}
</style>


<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>