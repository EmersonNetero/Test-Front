<template>
  <header class="header">
    <div class="header_wrapper">
      <img src="@/assets/logonext.png" alt="Logo Next" id="logo">
      <input type="text" id="search" placeholder="busque aqui seu produto"/>
      <v-icon id="search_icon">mdi-magnify</v-icon>
    </div>
    <nav>
      <ul class="categorias">
        <li @click="routerCategorias('SMARTPHONES')">SMARTPHONES</li>
        <li @click="routerCategorias('NOTEBOOKS')">NOTEBOOKS</li>
        <li @click="routerCategorias('GAMES')">GAMES</li>
        <li @click="routerCategorias('TV')">TV</li>
        <li @click="routerCategorias('HOME')">HOME</li>
      </ul>
    </nav>
  </header>
</template>

<script>
 
  export default {
    name: 'Header',
    data() {
      return {
        search: ''
      }
    },

    methods: {
      routerCategorias(categoria) {
        this.$router.push(`/${categoria}`)
      }
    }
  }

</script>

<style scoped>
  @import url('./header.css');
</style>