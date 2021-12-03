<template>
  <div id="app">
    <h2>Users' tasks</h2>
    <router-link to="/default"> <button>Default table</button> </router-link>
    <router-link to="/pagination">
      <button>Pagination table</button>
    </router-link>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
