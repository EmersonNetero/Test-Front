<template>
  <header class="header">
    <div class="header_wrapper">
      <img src="@/assets/logonext.png" alt="Logo Next" id="logo">
      <input type="text" id="search" placeholder="busque aqui seu produto"/>
      <v-icon id="search_icon">mdi-magnify</v-icon>
    </div>
    <nav>
      <ul class="categorias">
        <li><a href="#">SMARTPHONES</a></li>
        <li><a href="#">NOTEBOOKS</a></li>
        <li><a href="#">GAMES</a></li>
        <li><a href="#">TV</a></li>
        <li><a href="#">HOME</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
 
  export default {
    name: 'Header',
    data() {
      return {
        search: ''
      }
    },
  }

</script>

<style scoped>
  .header {
    width: 100%;
    background-color: #663399;
    padding-right: 44px;
    padding-left: 20px;
  }

  .header_wrapper {
    display: flex;
    align-items: center;
    position: relative;
  }
  img {
    max-width: 270px;
    max-height: 130px;
  }

  #search {
    background-color: ghostwhite;
    width: 100%;
    height: 50px;
    border-radius: 8px;
    padding: 5px;
    outline: 0;
  }

  #search_icon {
    position: absolute;
    left: calc(100% - 24px);
  }
  #search_icon:hover {
    cursor: pointer;
  }

  nav {
    position: relative;
  }

  .categorias {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    text-decoration: none;
    height: 10%;
  }

  li {
    background-color: transparent;
    padding:0.2em 1em;
    border-radius: 5px;
    transition: 0.4s;
    cursor: pointer;
  }
  li:hover {
    background-color: #582c84;
  }
  a {
    font-weight: 500;
    font-size: 1.2rem;
    color: ghostwhite
  }

  li > a:link {
    text-decoration: none;
  }

  @media only screen and (max-width: 400px) {
    .header_wrapper {
      flex-direction: column;
      width: 100%;
    }

    #search_icon {
      bottom: 10px;
    }

    .categorias {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

  }
</style>