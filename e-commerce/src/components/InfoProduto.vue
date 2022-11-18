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
        <v-img :src="produto.thumbnail" class="imgPrincipal" @click="openModal(produto.thumbnail)"></v-img>  
      </div>
      
      <v-dialog 
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"  
      >
      <v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="darken-1"
            text
            @click="dialog = false"
          >
            fechar
          </v-btn>
        </v-card-actions>
        <div class="modal">
          <v-img :src="srcModal" id="imgModal" max-height="450"
          max-width="550"></v-img>
        </div>
      </v-card>
      </v-dialog>
      <div class="images-items">
        <img v-for="img in produto.pictures" :src="img" alt="Produto" @click="openModal(img)">
      </div>
    </section>

    <section class="info_section">
      <h4>{{produto.title}}</h4>
      <br/>
      <img src="@/assets/estrelaDourada.png" v-for="aval in +produto.evaluation" alt="avaliação" class="estrela" :key="aval">
      <p>{{produto.info}}</p>

      <span>Mais informações</span>
      <v-divider></v-divider>
      <span>Conheça nossa política de troca</span>
    </section>
  </div>
</template>

<script>
  import Modal from './Modal.vue';
  export default {
    name: 'InfoProduto',
    props: {
      produto: Object
    },
    components: {
      Modal
    },
    data() {
      return {
        dialog: false,
        srcModal: ''
      }
    },
    methods: {
      openModal(src) {
        this.dialog = true;
        this.srcModal = src;
      }
    },
  }
</script>

<style scoped>
  @import url('./InfoProduto.css');
</style>