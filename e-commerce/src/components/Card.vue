<template>
  <div class="card">
    <div class="card_wrapper">
      <img :src="produto.thumbnail" class="card_img">
      <div class="card_content">
        <h3>{{produto.title}}</h3>
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
      return {}
    },
    mounted() {
   
    }
  }
</script>

<style scoped>
  @import url('./card.css');
</style>