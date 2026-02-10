<template>
  <div>
    <header>
      <HeadNav />
    </header>
    <main>
      <PresentationVue />
      <AboutVue />
      <HistoryVue />
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
import HistoryVue from './sections/HistoryVue.vue'
import ProjectsVue from './sections/ProjectsVue.vue'
import ContactVue from './sections/ContactVue.vue'
import FooNav from './sections/FooNav.vue'



export default {
  name: 'HomePage',
  components: {
    HeadNav ,PresentationVue, AboutVue, HistoryVue, ProjectsVue, ContactVue, FooNav
  }
}
</script>