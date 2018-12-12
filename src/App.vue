<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link :to="{name: 'home'}">Home</router-link>&nbsp;|
      <router-link :to="{name: 'about'}">About</router-link>&nbsp;|
      <router-link :to="{name: 'projects'}">Projects</router-link>
    </div>
  </div>
</template>

<style lang="sass">
#nav
  padding: 30px
  text-align: center
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
</style>
