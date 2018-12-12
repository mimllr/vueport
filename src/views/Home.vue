<template>
  <div class="home">
    <div class="hero">
      <h1>{{ header }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: "Hi, I'm Mike Miller."
    };
  },
  name: "home"
};
</script>
<style lang="sass" scoped>
.hero
  height: 500px
  background: gray
</style>
