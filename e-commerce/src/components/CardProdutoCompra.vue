<template>
  <div class="container_compra">
    <div v-if="produto.discount > 0">
      <span class="valorAntigo"></span>
      <span class="desconto"></span>
    </div>

    <h3>R$ {{produto.price}}</h3>
    <p>em 1x no <strong>cartão de crédito</strong></p>
    <span>Mais formas de pagamento</span>

    <v-divider></v-divider>

    <div class="cep">
      <v-text-field
            outlined
            label="digite o CEP"
          ></v-text-field>
      <button class="ok">OK</button>
    </div>

    <v-divider></v-divider>

    <div class="button_wrapper">
      <button id="comprar">Comprar</button>

      <p>
        Este produto é vendido e entregue por Lenovo. O <strong>Nextclub</strong> garante a sua compra, do pedido à entrega. 
      </p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'CardProdutoCompra',
    props: {
      produto: Object
    },
    data() {
      return {

      }
    }
  }
</script>

<style>
  @import url('./CardProdutoCompra.css');
</style>