<template>
  <div class="infoCard">
    <section class="image_section">
      <div class="actions">
        <span>
          <v-icon>mdi-cards-heart-outline</v-icon> Favoritar   
        </span>
        <span>
          <v-icon>mdi-share-variant-outline</v-icon> Compartilhar 
        </span>
      </div>
      <div>
        <v-img :src="produto.thumbnail" class="imgPrincipal"></v-img>
      </div>
  
      <div class="images-items">
        <img v-for="img in produto.pictures" :src="img" alt="Produto">
      </div>
    </section>

    <section class="info_section">
      <h4>{{produto.title}}</h4>
      <br/>
      <img src="@/assets/estrelaDourada.png" v-for="aval in +produto.evaluation" alt="avaliação" class="estrela" :key="aval">
      <p>{{produto.info}}</p>

      <span>Mais informações</span>
      <v-divider></v-divider>

    </section>
  </div>
</template>

<script>
  import Carrossel from './Carrossel.vue';
  export default {
    name: 'InfoProduto',
    props: {
      produto: Object
    },
    components: {
      Carrossel
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style scoped>
  @import url('./InfoProduto.css');
</style>