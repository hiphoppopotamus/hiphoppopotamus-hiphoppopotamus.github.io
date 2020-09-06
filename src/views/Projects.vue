<template>
  <div id="projects">
    <NavigationHeader/>
    <ProjectsComponent/>
  </div>
</template>

<script>
import NavigationHeader from '../components/NavigationHeader.vue'
import ProjectsComponent from '../components/ProjectsComponent.vue'

export default {
  name: 'Projects',
  components: {
    ProjectsComponent, NavigationHeader,
  }
}
</script>

<style>

</style>
