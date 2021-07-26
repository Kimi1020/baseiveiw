<template>
  <div class="about">
    <h1>This is an about page</h1>

    <i-button @click="show">Click me!</i-button>
    <Modal v-model="visible" title="Welcome">Welcome to ViewUI</Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    show: function () {
      this.visible = true;
    },
  },
};
</script>

