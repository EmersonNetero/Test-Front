<template>
  <v-dialog 
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"  
  >
  <template v-slot:activator="{ on, attrs }">
    <v-btn
      color="primary"
      dark
      v-bind="attrs"
      v-on="on"
    >
      Open 
    </v-btn>
  </template>
  </v-dialog>
</template>


<script>
  export default {
    name: 'Modal',
    data() {
      return {
        dialog: false
      }
    }
  }
</script>

<style scoped>
</style>