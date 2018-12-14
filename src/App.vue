<template>
  <div id="app">
    <router-view :projects="projects"/>
    <footer class="container text-center py-5">
      <div class="row justify-content-center">
        <div class="col-auto">
          <ul class="list-inline">
            <li class="list-inline-item pr-3">
              <a href="https://github.com/mimllr" target="_BLANK">🐙 Github</a>
            </li>
            <li class="list-inline-item pr-3">
              <a href="https://www.linkedin.com/in/mimllr/" target="_BLANK">💼 LinkedIn</a>
            </li>
            <li class="list-inline-item pr-3">
              <a href="https://twitter.com/mimllr" target="_BLANK">🐦 Twitter</a>
            </li>
            <li class="list-inline-item">
              <a href="mailto:himikemiller@gmail.com">✉️ Email</a>
            </li>
          </ul>
          <span>Copyright &copy; 2018 Mike Miller</span>
        </div>
      </div>
    </footer>
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
