<template>
  <div>
    <Header />
    <main>
      <Carrossel />
    </main>
  </div>
</template>

<script>
import Header from '../components/Header';
import Carrossel from '@/components/Carrossel.vue';

export default {
  name: 'Home',

  components: {
    Header,
    Carrossel
  },
}
</script>

