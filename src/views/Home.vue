<template>
  <div class="home">
    <b-container fluid class="hero mb-5">
      <b-row align-v="center" class="h-100">
        <b-col>
          <img class="logo" src="@/assets/Mike-Miller-Headshot.jpeg">
          <h1>Hi, I'm Mike Miller</h1>
          <h2>Product Manager</h2>
          <h6>Development / Design / Marketing</h6>
        </b-col>
      </b-row>
    </b-container>
    <b-container id="projects">
      <b-row v-for="project in projects" :key="project.sys.id">
        <b-col sm="12" md="5">
          <img :src="project.fields.logo.fields.file.url" alt>
        </b-col>
        <b-col sm="12" md="7" align-v="center">
          <h2 class="mb-4">
            <router-link
              :to="{name: 'project', params: { id: project.sys.id }}"
            >{{ project.fields.name }}</router-link>
          </h2>
          <h4 class="mb-4">{{ project.fields.description }}</h4>
          <router-link
            class="btn btn-primary"
            :to="{name: 'project', params: { id: project.fields.name, asset: project.sys.id }}"
          >View Case Study</router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.VUE_APP_CONTENTLY_SPACE,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.VUE_APP_CONTENTLY_ACCESS_TOKEN
});

export default {
  data() {
    return {
      projects: []
    };
  },
  created() {
    client
      .getEntries()
      .then(entries => {
        this.projects = entries.items;
      })
      .catch(err => {
        console.log(err);
      });
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
    border-radius: 100px
    box-shadow: 0 3px 3px rgba(0,0,0,0.3)
    margin-bottom: 1rem

</style>
