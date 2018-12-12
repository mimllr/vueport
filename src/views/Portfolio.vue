<template>
  <div class="project">
    <Project cardTitle="Project 1"></Project>
  </div>
</template>

<script>
// @ is an alias to /src
import Project from "@/components/Project.vue";

export default {
  name: "portfolio",
  components: {
    Project
  }
};
</script>
