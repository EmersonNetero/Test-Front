<template>
  <div class="produtosSimilares">
    <div class="container">
      <img 
        :src="produto.thumbnail" 
        :key="i" 
        alt="Produtos imagens" 
        v-for="(produto, i) in produtos"
        @click="produtoView(produto.id)"
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'produtosSimilares',
    props: {
      produtos: Array
    },
    data() {
      return {
        
      }
    },
    methods: {
      produtoView(id){
        this.$router.push('/produto/' + id)
        location.reload();
      }
    }
  }
</script>

<style scoped>
  .produtosSimilares {
    overflow: hidden;
    height: 130px;
    width: 100%;
    position: relative;
  }

  .container {
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: translateX(0);
  }

  img {
    object-fit: cover;
    height: 200px;
    width: 200px;
  }
</style>