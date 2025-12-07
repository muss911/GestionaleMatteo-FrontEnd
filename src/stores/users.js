import { defineStore } from "pinia";
import axios from 'axios';

export const useUserStore = defineStore('users', {
    state: () => ({
        users: [],   
        user: null,
    }),
    actions: {
        getUsers(){
            console.log("entro nel metodo get user")
            return axios
            .get("http://localhost:8080/users")
            .then(response=>{
                this.users = response.data
            })
            .catch(error=>{
                console.log ("errore" + error)
            });
            
        },
        setUser(user)
        {
            this.user = user
        }
    }
})