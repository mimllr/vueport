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
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 100%"
                ></div>
              </div>
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
  name: "project",
  props: {
    projects: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data: function() {
    if (
      this.checkNotEmpty(this.projects) &&
      this.projects.hasOwnProperty(this.$route.params.id)
    ) {
      return {
        loading: false,
        project: this.getProject()
      };
    } else {
      return {
        loading: true,
        project: {}
      };
    }
  },
  watch: {
    $route() {
      this.getProject();
    },
    projects: function() {
      if (
        this.checkNotEmpty(this.projects) &&
        this.checkNotEmpty(this.project)
      ) {
        this.project = this.getProject();
        this.loading = false;
      } else {
        this.loading = true;
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
      var projData = this.projects[projSlug].fields;
      return projData;
    },
    checkNotEmpty(obj) {
      return Object.keys(obj).length > 0 ? true : false;
    }
  }
};
</script>

<style lang="sass" scoped>
</style>
