<template>
  <th>
    <div class="wrapper">
      {{ head }}
      <div class="operations">
        <div class="icon-container">
          <SorterIcon v-if="showSorter" v-on:sort="sort()" />
        </div>
      </div>
    </div>
    <div class="input-wrapper" v-if="showFilter">
      <SearchIcon />
      <input @change="handleInput" @click="filter()" />
    </div>
  </th>
</template>

<script>
import SearchIcon from "../icons/SearchIcon.vue";
import SorterIcon from "../icons/SorterIcon.vue";
export default {
  components: { SorterIcon, SearchIcon },
  name: "TableHead",
  props: {
    head: {
      default: "",
      type: String,
    },
    showFilter: {
      default: false,
      type: Boolean,
    },
    showSorter: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    sort() {
      this.$emit("sort");
    },
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    filter() {
      this.$emit("filter");
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  margin: 0.5rem;
}
.icon-container > svg {
  margin-left: 0.5rem;
}
.input-wrapper {
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #9fa3a2;
  display: inline-flex;
  padding: 0.25rem 0.75rem;
}
input {
  background-color: transparent;
  border: none;
  outline: none;
}
</style>