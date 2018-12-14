<template>
  <div class="home">
    <div class="container-fluid hero mb-5">
      <div class="row h-100 align-items-center">
        <div class="col">
          <img class="logo shadow rounded-circle" src="@/assets/Mike-Miller-Headshot.jpeg">
          <h1 class="display-4">Hi, I'm Mike Miller</h1>
          <h2>Product Manager</h2>
          <h5>Development / Design / Marketing</h5>
        </div>
      </div>
    </div>
    <div class="container pb-5">
      <div class="row">
        <div class="col">
          <h2 class="display-5">My Work</h2>
        </div>
      </div>
      <div
        class="row mb-4 py-4 projects justify-content-between"
        v-for="project in projects"
        :key="project.sys.id"
      >
        <div class="col-sm-12 col-md-6 col-lg-5 pb-4">
          <img
            class="shadow-sm rounded border"
            :src="project.fields.logo.fields.file.url"
            :alt="project.fields.logo.fields.title"
          >
        </div>
        <div class="col-sm-12 col-md-6">
          <h6 class="mb-3">
            <small class="text-uppercase">{{ project.fields.type }}</small>
          </h6>
          <h3 class="mb-3 display-5">
            <router-link
              :to="{name: 'project', params: { id: project.fields.slug }}"
            >{{ project.fields.name }}</router-link>
          </h3>
          <h4 class="mb-3">{{ project.fields.description }}</h4>
          <router-link
            class="btn btn-primary"
            :to="{name: 'project', params: { id: project.fields.slug }}"
          >View Case Study</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    projects: {
      type: Object,
      default: function() {
        return {};
      }
    }
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
    width: 180px
    margin-bottom: 1rem

</style>
