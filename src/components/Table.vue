<template>
  <Spin :spinning="loading">
    <table>
      <thead>
        <TableHead
          showSorter
          showFilter
          head="User Id"
          v-on:sort="toggleSort('userId')"
          v-on:filter="toggleFilter('userId')"
          :onFilter="setFilterText"
          :filterText="filteredValue('userId')"
        />
        <TableHead
          showSorter
          showFilter
          head="Id"
          v-on:sort="toggleSort('id')"
          v-on:filter="toggleFilter('id')"
          :onFilter="setFilterText"
          :filterText="filteredValue('id')"
        />
        <TableHead
          showSorter
          showFilter
          head="Title"
          v-on:sort="toggleSort('title')"
          v-on:filter="toggleFilter('title')"
          :onFilter="setFilterText"
          :filterText="filteredValue('title')"
        />
        <TableHead
          showFilter
          head="Completed"
          v-on:filter="toggleFilter('completed')"
          :onFilter="setFilterText"
          :filterText="filteredValue('completed')"
        />
      </thead>
      <tbody v-for="item in memoizedTodos" :key="item.id">
        <TableRow>
          <TableCell :value="item.userId" />
          <TableCell :value="item.id" />
          <TableCell :isBig="true" :value="item.title" />
          <TableCell :value="item.completed" />
        </TableRow>
      </tbody>
    </table>
  </Spin>
</template>

<script>
import TableCell from "./TableCell.vue";
import TableHead from "./TableHead.vue";
import TableRow from "./TableRow.vue";

import axios from "axios";
import { orderBy } from "lodash/collection";
import { Spin } from "ant-design-vue";

export default {
  components: { TableHead, TableCell, TableRow, Spin },
  name: "Table",
  data() {
    return {
      todos: null,
      loading: true,
      sortProp: "",
      sortDirection: "",
      filterProp: "",
      filterValue: "",
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => (this.todos = response.data))
      .finally(() => (this.loading = false));
  },
  computed: {
    memoizedTodos() {
      let res;
      if (!this.sortProp) {
        res = this.todos;
      }
      res = orderBy(this.todos, [this.sortProp], [this.sortDirection]);
      if (this.filterValue) {
        res = res.filter((row) =>
          String(row[this.filterProp]).includes(this.filterValue)
        );
      }
      return res;
    },
  },
  methods: {
    toggleSort(prop) {
      if (this.sortProp !== prop) this.sortDirection = "";
      this.sortProp = prop;
      this.sortDirection =
        this.sortDirection === "desc" || !this.sortDirection ? "asc" : "desc";
    },
    toggleFilter(prop) {
      this.filterValue = "";
      this.filterProp = prop;
    },
    setFilterText(e) {
      this.filterValue = e.target.value;
    },
    filteredValue(prop) {
      return prop === this.filterProp ? this.filterValue : "";
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
}
</style>