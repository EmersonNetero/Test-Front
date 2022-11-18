<template>
  <v-dialog 
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"  
  >
  <div class="modal">
    <v-img :src="src">
    </v-img>
  </div>
  </v-dialog>
</template>


<script>
  export default {
    name: 'Modal',
    props: {
      src: String
    },
    data() {
      return {
        dialog: false
      }
    }
  }
</script>

<style scoped>

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>