<template>
  <h3>{{ tmpData }}</h3>
  <br />
  <h3>{{ tmpData }}</h3>
  <br />
  <h3>{{ tmpData }}</h3>
  <br />
  <h3>{{ tmpData }}</h3>
  <br />
  <h3>{{ tmpData }}</h3>
  <br />
  <h3>{{ tmpData }}</h3>
  <br />
  <h3>{{ tmpData }}</h3>
  <br />propA - {{ propA }}
</template>

<style lang="scss" scoped>
</style>


<script>
export default {
  data() {
    return {
      tmpData: "hihi props",
    };
  },
  props: ['propA'],
  methods: {
    testFunc() {
      alert(this.tmpData);
    },
  },
  mounted() {
    this.testFunc();
  },
};
</script>