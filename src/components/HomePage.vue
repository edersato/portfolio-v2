<template>
  <div>
    <header>
      <HeadNav />
    </header>
    <main>
      <PresentationVue />
      <AboutVue />
      <ProjectsVue />
      <ContactVue />
    </main>
    <footer>
      <FooNav />
    </footer>
  </div>
</template>

<script>
import HeadNav from './sections/HeadNav.vue'
import PresentationVue from './sections/PresentationVue.vue'
import AboutVue from './sections/AboutVue.vue'
import ProjectsVue from './sections/ProjectsVue.vue'
import ContactVue from './sections/ContactVue.vue'
import FooNav from './sections/FooNav.vue'



export default {
  name: 'HomePage',
  components: {
    HeadNav ,PresentationVue, AboutVue, ProjectsVue, ContactVue, FooNav
  }
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
