<template>
  <div class="container" id="app"><formComponents /></div>
</template>

<script>
import formComponents from "./components/formComponents";
export default {
  name: "App",
  components: {
    formComponents
  },
  methods: {
    submit() {
      const data = {
        form: this.form
      };
      alert(JSON.stringify(data, null, 2));
    }
  }
};
</script>

<style></style>
