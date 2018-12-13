<template>
  <div id="app">
    <router-view :projects="projects"/>
    <footer class="text-center py-5">Copyright &copy; 2018 Mike Miller</footer>
  </div>
</template>

<script>
const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.VUE_APP_CONTENTLY_SPACE,
  accessToken: process.env.VUE_APP_CONTENTLY_ACCESS_TOKEN
});

export default {
  data() {
    return {
      projects: {}
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      client
        .getEntries({ content_type: "project", order: "fields.order" })
        .then(entries => {
          let data = {};
          entries.items.forEach(function(e) {
            data[e.fields.name] = e;
          });
          this.projects = data;
        })
        .catch(function() {
          this.getProjects();
        });
    }
  }
};
</script>

<style lang="sass">
#projects
  img
    border: 1px solid lightgray
    border-radius: 5px
    margin-bottom: 2rem
    margin-top: 2rem
  p
    margin-bottom: 0.5rem
  h2
    margin-top: 2rem
</style>
