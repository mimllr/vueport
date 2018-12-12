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
html
  box-sizing: border-box
  font-size: 16px
*, *:before, *:after
  box-sizing: inherit

body, h1, h2, h3, h4, h5, h6, p, ol, ul
  margin: 0
  padding: 0
  font-weight: normal

ol, ul
  list-style: none

img
  max-width: 100%
  height: auto

body
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  
#nav
  padding: 30px
  text-align: center
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
</style>
