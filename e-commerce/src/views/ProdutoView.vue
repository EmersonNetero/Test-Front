<template>
  <div>
    <Header />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <InfoProduto :produto="produto" />
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="4">
            <v-sheet rounded="lg" min-height="70vh">
              <CardProdutoCompra :produto="produto" />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import InfoProduto from '@/components/InfoProduto.vue';
import CardProdutoCompra from '@/components/CardProdutoCompra.vue';
import { findProduto } from '@/services/api';
export default {
  name: 'ProdutoView',
  components: {
    Header,
    InfoProduto,
    CardProdutoCompra
  },
  data() {
    return {
      produto: {}
    }
  },
  methods: {
    async infoProduto() {
      const idProduto = this.$route.params.id;
      this.produto = await findProduto(idProduto);
      this.produto = this.produto.data;
    }
  },
  mounted() {
    this.infoProduto();
  }
}
</script>