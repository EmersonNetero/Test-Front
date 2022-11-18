<template>
  <v-app class="app">
    <Loading show="" /> 
    <router-view v-if="show"/>
  </v-app>
</template>

<script>


  import {api} from "@/services/api"
  import Loading from '@/components/Loading.vue';

  export default {
    name: 'App',
    components: {
      Loading
    },
    data: () => ({
      show: ''
    }),
    mounted() {
      setTimeout(() => { this.show = true; }, 500)

      api.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
      api.interceptors.request.use(function (config) {
        document.getElementById('overlay').className = "overlay show";
        return config;
    }, (error) => {
        document.getElementById('overlay').className = "overlay hide";
        document.getElementById('spanner').className = "LoadingFullscreen spanner hide";
        return Promise.reject(error);
    });

    api.interceptors.response.use((response) => {
        document.getElementById('overlay').className = "overlay hide";
        document.getElementById('spanner').className = "LoadingFullscreen spanner hide";
        return response;
    }, (error) => {
        document.getElementById('overlay').className = "overlay hide ";
        document.getElementById('spanner').className = "LoadingFullscreen spanner hide";
        return Promise.reject(error);
    });

    }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'roboto', sans-serif;
}
.app {
  background-color: #f1f1f1 !important;
}

</style>
