<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {};
</script>


<style lang="sass">
html
  box-sizing: border-box
  font-size: 12px
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

@media all and (min-width: 768px)
  html
    font-size: 14px

@media all and (min-width: 1280px)
  html
    font-size: 16px
    
*
  box-sizing: inherit
  &:before, &:after
    box-sizing: inherit

body
  margin: 0
  padding: 0

h1, h2, h3, h4, h5, h6, p, ol, ul
  margin-top: 0
  margin-bottom: 0.5rem;
  font-weight: normal
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

ol, ul
  list-style: none

img
  max-width: 100%
  height: auto

#nav
  padding: 30px
  text-align: center
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
</style>
