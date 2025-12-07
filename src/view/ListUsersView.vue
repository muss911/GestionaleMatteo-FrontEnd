<script>
    import Vue3DraggableResizable from 'vue3-draggable-resizable'
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
import {mapWritableState,mapActions} from "pinia";
import {useUserStore} from "@/stores/users.js";
export default
{
    components:{Vue3DraggableResizable},
    /*data()
    {
        return{
            users:[]
        }
    },*/
      computed: {
        ...mapWritableState(useUserStore, ['users']),
        
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
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">Cognome</th>
      <th scope="col">Mail</th>
      
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