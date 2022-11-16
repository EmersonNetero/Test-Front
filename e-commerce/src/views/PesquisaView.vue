<template>
  <div>
    <Header />
    <main>
      <div class="cards">
        <div class="card_container" v-for="produto in produtos">
          <Card :produto="produto" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Card from '../components/Card'
  import {getProdutosCategoria} from '@/services/api'

  export default {
    name: "PesquisaView",
    components: {
      Header,
      Card
    },

    data() {
      return {
        produtos: [],
      }
    },
    methods: {
      async listarProdutosCategoria() {
        const categoria = this.$route.params.categoria;
        this.produtos = await getProdutosCategoria(categoria);
        this.produtos = this.produtos.data.products;
      }
    },
    mounted() {
      this.listarProdutosCategoria();
    },
  }
</script>

<style scoped>
  .cards {
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2em;
  }
  .card_wrapper {
    max-height: 580px;
    max-width: 100vw;
  }

  @media only screen and (max-width: 770px){
    .cards {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
</style>