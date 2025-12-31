<script>
    import Vue3DraggableResizable from 'vue3-draggable-resizable'
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
import {mapWritableState,mapActions} from "pinia";
import {useUserStore} from "@/stores/users.js";
import {useUiStore} from "@/stores/ui.js"
export default
{
    components:{Vue3DraggableResizable,useUiStore},
    data()
    {
        return{
            open:false
        }
    },
      computed: {
        ...mapWritableState(useUserStore, ['users']),
         ...mapWritableState(useUiStore, ['menuVisible']),//variabile nel file ui.js
        
    },
     methods: {
    ...mapActions(useUserStore, ['getUsers']),
    
  },
     created() {
        this.getUsers();
        
        
    },
}
</script>
<template>
 
   <div class="page":class="{ 'navbar-open': menuVisible }">
  Navbar aperta? {{ menuVisible }}
</div>
  
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">Cognome</th>
      <th scope="col">Mail</th>
      <th scope="col">Ruolo</th>
      
    </tr>
  </thead>
  <tbody v-for="user in users">
    <tr>
     
      <td>{{user.name}}</td>
      <td>{{user.surname}}</td>
      <td>{{user.mail}}</td>
      <td>{{ user.role.description }}</td>
    </tr>
    
  </tbody>
</table>
</template>
<style scoped>
  /* per fare il padding al div */
.page {
  padding: 1rem;
}

.page.navbar-open {
  margin-left: 200px;
}
</style>