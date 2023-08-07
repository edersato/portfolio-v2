<template>
  <div>
    <h1>AAAAA</h1>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@mixin heading {
  h1, h2, h3, h4, h5, h6 {
    color: #5ebcfa;
  }
}

@include heading()
</style>
