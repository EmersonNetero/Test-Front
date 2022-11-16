<template>
  <section class="container">
    <v-app class="app">
      <v-carousel
        class="carrossel"
      >
        <v-carousel-item class="item_carrossel"
          v-for="produto in produtos"
          :key="produto.id"
          :src="produto.thumbnail"
        >
          <div class="title_produto">
            <strong>{{produto.title}}</strong>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-app>
  </section>
</template>

<script>
  import { getProdutos } from '@/services/api';

  export default {
    name: "Carrossel",
    data() {
      return {
        produtos: []
      }
    },
    methods: {
      async produtosCarrossel() {
        this.produtos = await getProdutos(8)
        this.produtos = this.produtos.data.products;
      }
    },
    mounted() {
      this.produtosCarrossel();
    }
  }
</script>


<style>

  .carrossel {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item_carrossel {
    max-width: 400px;
    height: 300px;
    position: relative;
    display: flex;
    justify-content: center;
  }

  .title_produto {
    background-color: whitesmoke;
    border-radius: 10px;
    text-align: center;
  }
  .app {
    background-color: #f1f1f1 !important;
  }
</style>