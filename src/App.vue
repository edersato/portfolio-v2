<template>
  <HomePage />
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style lang="scss">
@import './assets/styles/mixins.scss';

html {
  background: #242122;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  background: #242122;
  text-align: center;
}

@include heading();

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #4591C4 #242122;
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: 10px;
  width: 10px;

  &::-webkit-scrollbar-track {
    border-radius: 4px;
    background-color: #242122;
  
    &:hover {
      background-color: #242122;
    }
  
    &:active {
      background-color: #242122;
    }
  }
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #4591C4;

  &:hover {
    background-color: #306589;
  }

  &:active {
    background-color: #4591C4;
  }
}
</style>