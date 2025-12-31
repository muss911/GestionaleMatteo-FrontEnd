<script>
import { RouterLink, useRoute } from 'vue-router';
import { mapActions, mapState } from 'pinia';
import {useUiStore} from "@/stores/ui.js"
//import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons';
// import { fas, far, fad, fass, fasds, fak } from '@awesome.me/kit-KIT_CODE/icons'

export default {
   setup()
   {
    const ui = useUiStore();
    return {ui}
   },
    data() {
        return {
            rami: {
                gestioneUtenti: false,
                magazzino: false,
                produzione: false,
                amministrazione: false,
                documenti: false
            },
            menuVisible: false,
            submenuVisible: false,
        };

    },
    mounted() {

    },
    methods: {
        aperturaNav() {
             this.ui.aperturaNavbar()
        },
        toggleSubmenu(key) {
            console.log("cliccato submenu");
            //document.getElementById(id_cliccato).visible = true;
            //this.submenuVisible = !this.submenuVisible;
            this.rami[key] = !this.rami[key]
        }
    }
}
</script>

<template>

    <nav class="navbar navbar-light" style="background-color: #1E90FF;">
        <div class="humburger">
            <font-awesome-icon icon="fa-solid fa-bars" size="2x" @click="aperturaNav" />
        </div>
        <h2 id="navBarTitle">Gestionale Matteo</h2>
        <div class="d-flex justify-content-evenly align-items-center">
            <div class="container" id="navbarContainer">
                <label>RICERCA:</label>
            </div>
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </div>
    </nav>
    <!--menu a comparsa-->
    <div class="menu" :class="{ visible: ui.menuVisible }">
        <ul>
            <li class="d-flex align-items-center" @click="toggleSubmenu('Home')">
                <font-awesome-icon icon="fa-solid fa-house" />
                    <span><RouterLink to="/">Home</RouterLink></span>
               
                
            </li>
            <li class="d-flex align-items-center" @click="toggleSubmenu('gestioneUtenti')">
                <font-awesome-icon icon="fa-solid fa-arrow-right" :class="{ rotated: rami.gestioneUtenti }" />
                <span>Gestione Utenti</span>
            </li>
            <ul v-show="rami.gestioneUtenti" class="ms-4 mt-2">
                <li><a><RouterLink to="/users">Lista utenti</RouterLink></a></li>
                <li><a href="#">Aggiungi utente</a></li>
            </ul>
        

        
            <li class="d-flex align-items-center" @click="toggleSubmenu('magazzino')">
                <font-awesome-icon icon="fa-solid fa-arrow-right"
                    :class="{ rotated: rami.magazzino }" />
                    <span>Magazzino</span>
            </li>
            <ul v-show="rami.magazzino" class="ms-4 mt-2">
                <li>Giacenza</li>
                <li>Articoli</li>
            </ul>
            <li class="d-flex align-items-center gap-2" @click="toggleSubmenu('documenti')">
                <font-awesome-icon icon="fa-solid fa-arrow-right"
                    :class="{ rotated: rami.documenti }" /><span>Documenti</span>
            </li>
            <ul v-show="rami.documenti" class="ms-4 mt-2">
                <li>Emissione Documenti</li>
                <li>Elenco Documenti</li>
            </ul>
            <li class="d-flex align-items-center gap-2" id="amministraioneId" @click="toggleSubmenu(this.id)">
                <font-awesome-icon icon="fa-solid fa-arrow-right"
                    :class="{ rotated: rami.produzione }" /><span>Produzione</span>
            </li>
            <ul v-show="rami.produzione" class="ms-4 mt-2">
                <li>Emissione Ordini di lavoro</li>
                <li>Pianificazione Produzione</li>
            </ul>
            <li class="d-flex align-items-center gap-2" @click="toggleSubmenu('amministrazione')">
                <font-awesome-icon icon="fa-solid fa-arrow-right"
                    :class="{ rotated: rami.amministrazione }" /><span>Amministrazione</span>
            </li>
            <ul v-show="rami.amministrazione" class="ms-4 mt-2">
                <li>Personale</li>
                <li>Buste paga</li>
            </ul>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.navbar {
    margin-left: auto;
    margin-right: auto;
}

#navBarTitle {
    text-align: center;
    color: whitesmoke;
}

.navbar-brand {
    font-size: 1.25rem;

    img {
        max-width: 200px;
    }
}

#navbarContainer {
    max-width: 100px;
}

.nav-link {
    font-size: 0.875rem;
}

.cta {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.25rem;
    padding: 0;
}

.menu {
    display: none;
    position: absolute;
    /*right: 15%;
    top: 56px;*/
    background-color: #FFFFE0;
    width: 200px;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    color: black;
    padding-inline: 1rem;
    z-index: 1000;
}

.menu.visible {
    display: block;
}

a {
    color: black;
    text-decoration: none;
}

li {
    text-decoration: none;
    padding-top: 0.5rem;
    cursor: pointer;
}
.menu ul
{
    padding: 1rem;
    margin: 1rem;
}


.rotated {
    transform: rotate(90deg);

}

</style>