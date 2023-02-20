<template>
  <div id="app">
    <div class="top-header"> </div>
    <div id="entete">
      <img alt="Engage logo" src="./assets/Logo.png">

      <div id="title">
          <h1 id="societal">
            Societal Outreach methodology
          </h1> 
          <p id="howto"> 
            How to improve the level of Societal outreach in your university?
          </p>
      </div>
    </div>

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
