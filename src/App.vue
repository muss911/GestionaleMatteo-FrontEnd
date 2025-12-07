<script setup>
 import { RouterLink, RouterView } from 'vue-router';
import Navbar from "@/components/Navbar.vue";
import Scadenziario from "@/components/Scadentiary.vue";
</script>

<template>
   <Navbar>
    
   </Navbar>
   <main>
    <RouterView />
   </main><!--
  <h1 id="title">Benvenuto sul Gestionale Matteo</h1>
  <div class="scadenzionario">
  <Scadenziario></Scadenziario>
  </div>-->
</template>

<style scoped>
#title
{
  text-align: center;
}
.scadenzionario
{
  display: flex;
  flex-direction: column;
  align-items: center;
  /*border: 2px  solid green;*/
}
</style>
