<template>
  <div id="projects">
    <div class="container">
      <div class="row py-3">
        <div class="col">
          <p>
            <router-link :to="{name: 'home'}">Home</router-link>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <template v-if="loading">
            <div class="loading">
              <h1>Loading...</h1>
            </div>
          </template>
          <template v-else>
            <div class="content">
              <h1>{{ project.name }}</h1>
              <span v-html="fullTextHTML"></span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const showdown = require("showdown");
const converter = new showdown.Converter({ emoji: true, flavor: "github" });

export default {
  data() {
    return {
      loading: true,
      project: this.projects[projSlug].fields
    };
  },
  props: {
    projects: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  created() {
    this.getProject();
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        this.getProject();
      }
    }
  },
  computed: {
    fullTextHTML: function() {
      if (this.project.fullText) {
        return converter.makeHtml(this.project.fullText.toString());
      } else {
        return "";
      }
    }
  },
  methods: {
    getProject() {
      var projSlug = this.$route.params.id;
      this.project = this.projects[projSlug].fields;
      this.loading = false;
    }
  },
  name: "project"
};
</script>

<style lang="sass" scoped>
</style>
