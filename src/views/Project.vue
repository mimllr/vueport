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
            <template v-if="project.present">
              <div class="content">
                <h1>{{ project.data.name }}</h1>
                <span v-html="fullTextHTML"></span>
              </div>
            </template>
            <template v-else>
              <h2>Hmm, couldn't find that project.</h2>
              <h3>Check the
                <router-link :to="{name: 'home'}">homepage</router-link>.
              </h3>
            </template>
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
    return {
      project: {
        present: true,
        data: {}
      }
    };
  },
  created: function() {
    this.setProject();
  },
  watch: {
    $route() {
      this.setProject();
    },
    projects: function() {
      this.setProject();
    }
  },
  computed: {
    loading: function() {
      if (this.projects.found) {
        return false;
      } else {
        return true;
      }
    },
    fullTextHTML: function() {
      if (this.project.data.fullText) {
        return converter.makeHtml(this.project.data.fullText.toString());
      } else {
        return "";
      }
    }
  },
  methods: {
    setProject() {
      var projSlug = this.$route.params.id;
      if (this.projects.data.hasOwnProperty(projSlug)) {
        if (this.checkNotEmpty(this.projects.data[projSlug])) {
          this.project.present = true;
          this.project.data = this.projects.data[projSlug].fields;
        } else {
          this.project.present = false;
          this.project.data = {};
        }
      }
    },
    checkNotEmpty(obj) {
      return Object.keys(obj).length > 0 ? true : false;
    }
  }
};
</script>

<style lang="sass" scoped>
</style>
