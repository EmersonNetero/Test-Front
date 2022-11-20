<template>
  <div>
    <Header />
    <main>
      <div>
        <Filtro @filtroEscolha="filtrosProdutos"/>
        <v-select :items="item" outlined>
        </v-select>
      </div>
      <div class="cards">
        <div class="container" v-for="produto in produtos">
          <Card :produto="produto" :key="produto.id" @click="" />
        </div>
      </div>
    </main>
    <div class="text-center">
      <v-responsive>
        <v-pagination v-model="page" :length="length" @input="next">
        </v-pagination>
      </v-responsive>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Card from '../components/Card'
import Filtro from '../components/Filtro'
import { getProdutosCategoria, getProdutos, getNextPage, filtroPrice } from '@/services/api'

export default {
  name: "PesquisaView",
  components: {
    Header,
    Card,
    Filtro
  },

  data() {
    return {
      produtos: [],
      produtosAnt: [],
      item: ['Menores preços', 'Maiores preços', 'Mais avaliados'],
      categorias: ['HOME', 'TV', 'SMARTPHONES', 'NOTEBOOKS', 'GAMES'],
      count: 0,
      page: 0,
      length: 5,
      filtroON: false
    }
  },
  methods: {
    async listarProdutosCategoria(categoria) {
      this.produtos = await getProdutosCategoria(categoria);
      this.produtos = this.produtos.data.products;
    },

    async procurarProduto(nomeProduto) {
      let todosProdutos = await getProdutos(1);
      todosProdutos = todosProdutos.data;
      this.count = todosProdutos.count // pega o contador para exibir como resultado 
      todosProdutos = await getProdutos(this.count); // para fazer somente uma request para procurar o produto
      todosProdutos = todosProdutos.data.products;
      this.produtos = todosProdutos.filter((p) => p.title.toLocaleLowerCase().includes(nomeProduto))
    },

    async next(page) {
      const categoria = this.$route.params.categoria;
      if (this.categorias.includes(categoria)) {
        this.produtos = await getNextPage(page, categoria);
        this.produtos = this.produtos.data.products;
      }
    },

    async filtroPreco(query) {
      const categoria = this.$route.params.categoria;
      if (this.categorias.includes(categoria)) {
        query += '&category='+categoria
      }
      this.produtos = await filtroPrice(query);
      this.produtos = this.produtos.data.products;
    },

    filtrosProdutos(event, filtro, value) {
      switch (filtro) {
        case 'preco':
          if(event) {
            let query = '';
            const keys = Object.keys(value);
            for (let param of keys) {
              if (param === 's') {
                query += '&startPrice='+value[param]
              }
              if (param === 'e') query += '&endPrice='+value[param]
              this.filtroPreco(query);
            }
          }
          break;
        case 'avaliacao':
          break;
        case 'desconto':
          break;
        default:
          break;
      }
    }
  },
  mounted() {
    const categoria = this.$route.params.categoria;
    if (this.categorias.includes(categoria)) {
      this.listarProdutosCategoria(categoria);
    } else if (categoria) {
      const nomeProduto = categoria
      this.procurarProduto(nomeProduto);
    }
    this.produtosAnt = this.produtos
  },
}
</script>

<style scoped>
main {
  margin-top: 8px;
  display: flex;
  gap: 10px;
  justify-content: space-around;
}

.cards {
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
}


@media only screen and (max-width: 770px) {
  .cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>