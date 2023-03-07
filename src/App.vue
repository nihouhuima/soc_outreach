<template>
  <div id="app">
    <!-- <div class="top-header"> </div>
    <div id="entete">
      <img alt="Engage logo" src="./assets/Logo.png">

      <div id="title">
          <h1 id="societal">
            Societal Outreach Approach
          </h1> 
          <h1 id="howto"> 
            Let's be inspired !
          </h1>
      </div>
      <div id="no_content"></div>
    </div> -->

    <router-view></router-view>
  </div>
</template>

<script>

// import Mission from './components/Mission.vue'
// import Home from './pages/Home.vue'

export default {
  name: 'App',
  components: {
    // Home,
    // Mission
  }
}
</script>

<style>

</style>
