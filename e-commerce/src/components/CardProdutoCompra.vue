<template>
  <div class="container_compra">
    <div v-if="produto.discount > 0">
      <p>
        R$ <span class="valorAntigo">{{valorAntigo}}</span>
        <span class="desconto">  -{{produto.discount}}%</span>
      </p>
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
        valorAntigo: 0,
        novoValor: 0
      }
    },
    methods: {
      calculaDesconto() {
        const price = this.$props.produto.price;
        const desconto = this.$props.produto.discount
        
        if(desconto > 0) {
          this.novoValor = price - (price*desconto / 100)
          this.valorAntigo = price;
          this.$props.produto.price = this.novoValor;
        }
      }
    },
    mounted() {
      this.calculaDesconto();
    },
  }
</script>

<style>
  @import url('./CardProdutoCompra.css');
</style>