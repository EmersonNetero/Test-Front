<template>
  <div class="card">
    <div class="card_wrapper">
      <img :src="produto.thumbnail" class="card_img">
      <div class="card_content">
        <div class="title">
          <h4>{{produto.title}}</h4>
        </div>
        <img src="@/assets/estrelaDourada.png" v-for="aval in +produto.evaluation" alt="avaliação" class="estrela" :key="aval">
        <span class="preco">R${{produto.price}}</span>
        <p>em 1x no cartão de crédito</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      produto: Object
    },
    data() {
      return {
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  @import url('./card.css');
</style>