<template>
  <div v-if="loading">Loading...</div>
  <table v-else>
    <thead>
      <TableHead head="User Id" />
      <TableHead head="Id" />
      <TableHead head="Title" />
      <TableHead
        head="Completed
      "
      />
    </thead>
    <tbody v-for="item in todos" :key="item.id">
      <TableRow>
        <TableCell :value="item.userId" />
        <TableCell :value="item.id" />
        <TableCell :value="item.title" />
        <TableCell :value="item.completed" />
      </TableRow>
    </tbody>
  </table>
</template>

<script>
import TableCell from "./TableCell.vue";
import TableHead from "./TableHead.vue";
import TableRow from "./TableRow.vue";

import axios from "axios";
export default {
  components: { TableHead, TableCell, TableRow },
  name: "Table",
  data() {
    return {
      todos: null,
      loading: true,
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => (this.todos = response.data))
      .finally(() => (this.loading = false));
  },
};
</script>