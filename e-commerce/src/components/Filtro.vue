<template>
  <div>
    <section class="filtro">
      <h4>filtrar por</h4>
      <div class="filtro_radios">
        <input type="radio" name="preco" id="preco">
        <label for="preco">Preço</label>
        <br/>
        <input type="radio" name="avaliacao" id="avaliacao">
        <label for="avaliacao">Avaliação</label>
        <br/>
        <input type="radio" name="desconto" id="desconto">
        <label for="preco">Desconto</label>
      </div>
    </section>
  </div>
</template>

<script>

  export default {
    name: "Filtro"
  }

</script>


<style scoped>
  @import url('./filtro.css');
</style>