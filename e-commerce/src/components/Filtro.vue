<template>
  <div>
    <section class="filtro">
      <h4>Preço</h4>
      <div class="filtro_radios">
        <label for="preco1"> 
          <input type="checkbox" name="preco1" id="preco1" v-model="filtrosP.preco1">
           Mais de R$ 5000,00
          <span class="checkmark"></span>
        </label>
        <br />
        <label for="preco2"> 
          <input type="checkbox" name="preco2" id="preco2" v-model="filtrosP.preco2">
          De R$ 3000,00 até R$ 5000,00
          <span class="checkmark"></span>
        </label>
        <br />
        <label for="preco3"> 
          <input type="checkbox" name="preco3" id="preco3" v-model="filtrosP.preco3">
          De R$ 1000,00 até R$ 3000,00
          <span class="checkmark"></span>
        </label>
        <br />
        <label for="preco4"> 
          <input type="checkbox" name="preco4" id="preco4" v-model="filtrosP.preco4">
          Até R$ 1000,00
          <span class="checkmark"></span>
        </label>
      </div>
    </section>
    <v-divider></v-divider>
    <section class="filtro">
      <h4>Avaliação</h4>
      <div class="filtro_radios">
        <label for="avaliacao5"> 
          <input type="checkbox" name="avaliacao5" id="avaliacao5" @click="">
          <img src="@/assets/estrelaDourada.png" v-for="aval in 5" alt="avaliação" class="estrela"
          :key="aval">
          <span class="checkmark"></span>
        </label>
        <br />
        <label for="avaliacao4"> 
          <input type="checkbox" name="avaliacao4" id="avaliacao4">
          <img src="@/assets/estrelaDourada.png" v-for="aval in 4" alt="avaliação" class="estrela"
          :key="aval">
          <span class="checkmark"></span>
        </label>
        <br />
        <label for="avaliacao3"> 
          <input type="checkbox" name="avaliacao3" id="avaliacao3">
          <img src="@/assets/estrelaDourada.png" v-for="aval in 3" alt="avaliação" class="estrela"
          :key="aval">
          <span class="checkmark"></span>
        </label>
        <br />
        <label for="avaliacao2"> 
          <input type="checkbox" name="avaliacao2" id="avaliacao2">
          <img src="@/assets/estrelaDourada.png" v-for="aval in 2" alt="avaliação" class="estrela"
          :key="aval">
          <span class="checkmark"></span>
        </label>
        <br />
        <label for="avaliacao1"> 
          <input type="checkbox" name="avaliacao1" id="avaliacao1">
          <img src="@/assets/estrelaDourada.png" v-for="aval in 1" alt="avaliação" class="estrela"
          :key="aval">
          <span class="checkmark"></span>
        </label>
      </div>
    </section>
    <v-divider></v-divider>
    <section class="filtro">
      <h4>Descontos</h4>
      <div class="filtro_radios">
        <label for="desconto1"> 
          <input type="checkbox" name="desconto1" id="desconto1">
           Mais de 80%
          <span class="checkmark"></span>
        </label>
        <br />
        <label for="desconto2"> 
          <input type="checkbox" name="desconto2" id="desconto2">
          De 60% até 80%
          <span class="checkmark"></span>
        </label>
        <br />
        <label for="desconto3"> 
          <input type="checkbox" name="desconto3" id="desconto3">
          De 30% até 60%
          <span class="checkmark"></span>
        </label>
        <br />
        <label for="desconto4"> 
          <input type="checkbox" name="desconto4" id="desconto4">
          De 10% até 30%
          <span class="checkmark"></span>
        </label>
        <br />
        <label for="desconto5"> 
          <input type="checkbox" name="desconto5" id="desconto5">
          Até 10%
          <span class="checkmark"></span>
        </label>
      </div>
    </section>
    <v-btn color="purple darken-3" dark @click="filtroEscolha">
      Aplicar filtro
    </v-btn>
    <span v-if="filtroAviso">Um filtro por vez!</span>
  </div>
</template>

<script>

export default {
  name: "Filtro",
  data() {
    return {
      filtrosP: {
        preco1: false,
        preco2: false,
        preco3: false,
        preco4: false,
      },
      filtrosA: {
        aval1: false,
        aval2: false,
        aval3: false,
        aval4: false,
      },
      filtroAviso: false

    }
  },
  methods: {
    filtroEscolha() {
      this.filtroAviso = true;
      this.$emit('filtroEscolha', this.filtrosP, this.filtrosA)
    }
  }
}

</script>


<style scoped>
@import url('./filtro.css');
</style>