<template>
  <div id="Loading">
    <div id="overlay" :class="'overlay' + show"></div>
    <div id="spanner" :class="'LoadingFullscreen spanner ' + show">
      <v-overlay>
        <div class="lds-circle" id="loadingSpinner">
          <div></div>
        </div>
        <p class="mt-2" id="loadingP">Carregando...</p>
      </v-overlay>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: ['show']
}
</script>

<style scoped>
@import url('./Loading.css');
</style>