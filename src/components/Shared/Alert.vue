<template>
  <b-notification type="is-danger" has-icon closable @close="dismiss">{{text}}</b-notification>
</template>

<script>
export default {
  props: ["text"],
  methods: {
    dismiss() {
      this.$emit("dismissed");
    }
  }
};
</script>

