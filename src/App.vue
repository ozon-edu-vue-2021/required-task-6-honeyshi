<template>
  <div id="app">
    <div class="header-container">
      <h2 class="header">Users' tasks</h2>
      <span class="subheader">Please choose table to view</span>
    </div>
    <div class="variants">
      <router-link to="/default"><button>Default</button></router-link>
      <router-link to="/pagination">
        <button>Pagination</button>
      </router-link>
      <router-link to="/infinite-scroll">
        <button>Infinite scroll</button>
      </router-link>
    </div>
    <div class="table-container">
      <router-view> </router-view>
    </div>
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
button {
  background-color: #127d82;
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: none;
  margin-right: 0.5rem;
  cursor: pointer;
}
button:hover {
  background-color: #09646f;
}
.header-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
.subheader,
.header {
  color: #81827d;
}
.subheader {
  font-size: 1rem;
}
.variants {
  display: flex;
  justify-content: center;
}
.table-container {
  margin: 2rem 7rem;
}
thead {
  background-color: #f9fbfc;
}
th,
td {
  padding: 0.5rem 0.75rem;
}
th {
  font-size: 1rem;
}
</style>
