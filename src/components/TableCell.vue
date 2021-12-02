<template>
  <td :class="cellClass">{{ value }}</td>
</template>

<script>
export default {
  name: "TableCell",
  props: {
    value: {
      type: [String, Number, Boolean],
    },
    isBig: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    cellClass() {
      return this.isBig ? "big" : "small";
    },
  },
};
</script>

<style scoped>
.big {
  width: 70%;
}
.small {
  width: 10%;
}
</style>