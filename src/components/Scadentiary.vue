<script>
import Vue3DraggableResizable from 'vue3-draggable-resizable'
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
export default {
  components: { Vue3DraggableResizable },
  data() {
    return {
      myDate: new Date(),
      showForm: false,
      frameHeight: 200,
      frameWidth: 300,

    }
  },
  mounted() {
    this.myDate = new Date()
  },
  methods:
  {
    apriForm()
    {
      this.showForm = ! this.showForm
    },
    close()
    {
      console.log("chiudo il form");
      this.showForm = false
    },
    large()
    {
        console.log("allarga")
        /*const riquadro = document.getElementById("frameInterno");
        riquadro.style.width = "100%"; */
        this.frameHeight = window.innerHeight;
        this.frameWidth = window.innerWidth;
    }
  }
}
</script>

<template>
  <!--<div class="component">-->
  <div class="riquadroScadenziario">
    
    <h4 class="titleParagrafo">Data Odierna: {{ myDate.getDate() }}/{{ myDate.getMonth() + 1 }}/{{ myDate.getFullYear() }}</h4>
    <!--<div class="riquadro">-->
     <div class="nota"></div>
      <div class="nota"></div>
       <div class="nota"></div>
     <!--<div >-->
    <button type="button" class="btn btn-primary" @click="apriForm">Aggiungi Scandeza</button>
  </div>
  <!--<div>-->
     <Vue3DraggableResizable
  v-if="showForm"
  :x="100"
  :y="100"
  :w="frameWidth"
  :h="frameHeight"
  :active="true"
  id="frameInterno"
>
    <div id="formFrame">
      <nav class="navBar-chiusura">
        <div class="pulsanti">
          <button @click="large"><font-awesome-icon icon="fa-solid fa-expand" /></button>
          <button @click="close">X</button>
          
        </div>
      </nav>
      <div class="internalFrame">
      <h4>Nuova Scadenza</h4>
      <input v-model="nuovaNota" placeholder="Inserisci testo..." class="form-control mb-2"/>
      <button class="btn btn-success">Salva</button>
      </div>
    </div>
  </Vue3DraggableResizable>
</template>
<style scoped>
.riquadroScadenziario {
  
  width: 200px;
  
  border: 1px solid red;
  background-color: #f0f8ff;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border:2px solid green;

}
.nota
{
  width: 80%;
  border-top: 1px solid black;
  height: 30px; /* 👈 aggiungi altezza */
  margin-bottom: 5px; 
}
#formFrame {
  /*width: 100%;
  height: 100%;*/
  background: white;
  border: 1px solid #aaa;
  border-radius: 8px;
  
}
#frameInterno
{
  position: absolute;
  width: 100px;
  height: 200px;
  

}
.internalFrame
{
   padding: 1rem;
}
.pulsanti
{
  position: absolute;
  right:0px
}
</style>
