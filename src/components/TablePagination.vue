<template>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <table>
      <thead>
        <TableHead head="User Id" />
        <TableHead head="Id" />
        <TableHead head="Title" />
        <TableHead head="Completed" />
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
    <Pagination v-model="currentPage" :total="todos.length" />
  </div>
</template>

<script>
import TableCell from "./TableCell.vue";
import TableHead from "./TableHead.vue";
import TableRow from "./TableRow.vue";

import { Pagination } from "ant-design-vue";

import axios from "axios";

export default {
  components: { TableHead, TableCell, TableRow, Pagination },
  name: "TablePagination",
  data() {
    return {
      todos: null,
      loading: true,
      currentPage: 1,
      pageSize: 10,
    };
  },
  computed: {
    memoizedTodos() {
      const startIndex = this.pageSize * (this.currentPage - 1);
      const endIndex = startIndex + (this.pageSize - 1);
      return this.todos.slice(startIndex, endIndex);
    },
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => (this.todos = response.data))
      .finally(() => (this.loading = false));
  },
};
</script>

<style scoped>
table {
  width: 100%;
  margin-bottom: 1rem;
}
</style>