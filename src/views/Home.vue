<template>
  <div class="home">
    <b-container fluid class="hero">
      <b-row align-v="center" class="h-100">
        <b-col>
          <img class="logo" src="../assets/Mike-Miller-Headshot.jpeg">
          <h1>{{ header }}</h1>
          <h2>Product Manager</h2>
          <h6>Development / Design / Marketing</h6>
        </b-col>
      </b-row>
      <b-row align-v="center" class="arrow-container">
        <div class="arrow"></div>
      </b-row>
    </b-container>
    <b-container fluid></b-container>
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
  height: 550px
  max-height: 95vh
  text-align: center
  color: white;
  position: relative
  background: transparent
  &:before
    background-color: #36d1dc
    background: #36d1dc
    background: -moz-linear-gradient(-45deg, #36d1dc 0%, #5b86e5 100%)
    background: -webkit-linear-gradient(-45deg, #36d1dc 0%,#5b86e5 100%)
    background: linear-gradient(135deg, #36d1dc 0%,#5b86e5 100%)
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#36d1dc', endColorstr='#5b86e5',GradientType=1 )
    content: ''
    display: block
    height: 120%
    width: 100%
    left: 0
    top: -20%
    position: absolute
    z-index: 0
    -webkit-backface-visibility: hidden
    transform: skewY(1.5deg)
    transform-origin: 100%
  .logo
    width: 200px
    border-radius: 100px
    box-shadow: 0 3px 3px rgba(0,0,0,0.3)
    margin-bottom: 1rem
  .arrow-container
    width: 50px
    height: 50px
    border-radius: 25px
    position: absolute
    bottom: -6px
    left: 50%
    right: 50%
    margin-left: -25px
    background: white
    box-shadow: 0 3px 3px rgba(0,0,0,0.3)
    display: flex
    justify-content: center
    cursor: pointer
    .arrow
      border-left: 6px solid black
      border-bottom: 6px solid black
      width: 12px;
      height: 12px;
      transform: rotate(-45deg);


</style>
