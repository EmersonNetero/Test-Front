<template>
  <v-app class="app">
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    // 
  }),
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'roboto', sans-serif;
}
.app {
  background-color: #f1f1f1 !important;
}

</style>
