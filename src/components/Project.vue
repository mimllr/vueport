<template>
  <div class="card">
    <h1>{{ cardTitle }}</h1>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    cardTitle: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.card {
  background: gray;
}
</style>
