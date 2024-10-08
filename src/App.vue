<script>
import { computed } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container-fluid my-border my-container ">

    <h1>Feladat</h1>

    <div class="wrapper">
      <nav class="my-border">
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/tablazat">Táblázat</RouterLink> |
        <RouterLink to="/kepek">Képek</RouterLink> |
      </nav>
    </div>
    
    <RouterView/>
  </div>

</template>

<style scoped>
</style>
