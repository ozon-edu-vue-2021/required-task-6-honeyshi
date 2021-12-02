<template>
  <th>
    <div class="wrapper">
      {{ head }}
      <div class="operations">
        <div class="icon-container">
          <FilterIcon v-if="showFilter" v-on:filter="toggleFilter()" />
          <SorterIcon v-if="showSorter" v-on:sort="sort()" />
        </div>
        <div v-if="openFilter">
          <input @change="handleInput" />
        </div>
      </div>
    </div>
  </th>
</template>

<script>
import FilterIcon from "../icons/FilterIcon.vue";
import SorterIcon from "../icons/SorterIcon.vue";
export default {
  components: { FilterIcon, SorterIcon },
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
  data() {
    return {
      openFilter: false,
    };
  },
  methods: {
    sort() {
      this.$emit("sort");
    },
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    toggleFilter() {
      this.openFilter = !this.openFilter;
      this.$emit("filter");
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.icon-container > svg {
  margin-left: 0.5rem;
}
</style>