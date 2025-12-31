// questa classe serve per sapere quando la navbar è aperta oppure no
// sapere quando è aperta cosi sposto la view in modo da rendere più leggibile
import { defineStore } from "pinia";
export const useUiStore = defineStore('ui', {
    state: () => ({
        menuVisible: false
    }),
    actions: {
        aperturaNavbar(){
            this.menuVisible = !this.menuVisible
        },
        chiusuraMenu()
        {
            this.menuVisible = false;
        }
    }
})