<template>
  <div class="card" @click="produtoView">
    <div class="container d-flex flex-column justify-content-center">
      <img :src="produto.thumbnail" class="card_img">
      <div class="card_content">

        <h4>{{ produto.title }}</h4>

        <img src="@/assets/estrelaDourada.png" v-for="aval in +produto.evaluation" alt="avaliação" class="estrela"
          :key="aval">
        <br />
        <span class="preco">R${{ produto.price }}</span>
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
  methods: {
    produtoView() {
      this.$router.push("/produto/" + this.$props.produto.id)
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
@import url('./card.css');
</style>