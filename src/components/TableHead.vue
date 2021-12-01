<template>
  <th>{{ head }}</th>
</template>

<script>
export default {
  name: "TableHead",
  props: {
    head: {
      default: "",
      type: String,
    },
  },
};
</script>