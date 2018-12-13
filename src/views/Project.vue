<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <p>
            <router-link :to="{name: 'home'}">Home</router-link>
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h1>{{ project.name }}</h1>
          <VueShowdown :markdown="project.fullText" flavor="github"/>
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
  accessToken: process.env.VUE_APP_CONTENTLY_ACCESS_TOKEN
});

export default {
  data() {
    return {
      project: {}
    };
  },
  created() {
    client
      .getEntry(this.$route.params.asset)
      .then(entry => {
        this.project = entry.fields;
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
    }
  },
  name: "project"
};
</script>

<style lang="sass" scoped>

</style>
