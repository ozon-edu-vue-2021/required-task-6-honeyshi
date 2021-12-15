<template>
  <Spin :spinning="loading" id="todos">
    <table>
      <thead>
        <TableHead head="User Id" />
        <TableHead head="Id" />
        <TableHead head="Title" />
        <TableHead head="Completed" />
      </thead>
      <tbody v-for="item in todos" :key="`${item.id}-${getUniqueId()}`">
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

import { v4 as uuidv4 } from "uuid";

import { Spin } from "ant-design-vue";

export default {
  components: { TableHead, TableCell, TableRow, Spin },
  name: "TableInfiniteScroll",
  data() {
    return {
      todos: null,
      loading: true,
    };
  },
  methods: {
    getNextTodos() {
      window.onscroll = () => {
        const height = window.innerHeight;
        const bottom = document
          .getElementById("todos")
          ?.getBoundingClientRect().bottom;
        if (Math.abs(height - bottom) < 0.5) {
          this.loading = true;
          axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then((response) => (this.todos = this.todos.concat(response.data)))
            .finally(() => (this.loading = false));
        }
      };
    },
    getUniqueId() {
      return uuidv4();
    },
  },
  beforeMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => (this.todos = response.data))
      .finally(() => (this.loading = false));
  },
  mounted() {
    this.getNextTodos();
  },
};
</script>

<style scoped>
table {
  width: 100%;
}
</style>