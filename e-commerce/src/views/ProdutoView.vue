<template>
  <div>
    <Header />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg" v-if="produto">
              <InfoProduto :produto="produto" />
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="4">
            <v-sheet rounded="lg" min-height="70vh" v-if="produto">
              <CardProdutoCompra :produto="produto" />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <h3>Produtos similares</h3>
        <v-row>
          <v-col>
            <v-sheet rounded="lg">
              <ProdutosSimilares :produtos="produtos"/>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ProdutosSimilares from '@/components/ProdutosSimilares.vue';
import InfoProduto from '@/components/InfoProduto.vue';
import CardProdutoCompra from '@/components/CardProdutoCompra.vue';
import { findProduto, getProdutosCategoria } from '@/services/api';
export default {
  name: 'ProdutoView',
  components: {
    Header,
    InfoProduto,
    CardProdutoCompra,
    ProdutosSimilares
  },
  data() {
    return {
      produto: {},
      categoria: '',
      produtos: []
    }
  },
  methods: {
    async infoProduto() {
      const idProduto = this.$route.params.id;
      this.produto = await findProduto(idProduto);
      this.produto = this.produto.data;
      this.categoria = this.produto.category;
    },
    async produtoSimilares() {
      this.produtos = await getProdutosCategoria(this.categoria, 10);
      this.produtos = this.produtos.data.products;
    }
  },
  async mounted() {
    await this.infoProduto();
    await this.produtoSimilares();
  }
}
</script>