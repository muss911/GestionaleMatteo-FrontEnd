<script>
import History from '@/components/History.vue';
import Scadentiary from '@/components/Scadentiary.vue';

export default
    {
        components: {
            Scadentiary,
            History
        },
    }

</script>
<template>
    <div class="container mt-4" id="boxPanel">
        <div class="row d-flex justify-content-between">
            <div class="col-4">
                <Scadentiary></Scadentiary>
            </div>
            <div class="col-3">
               <History/>
            </div>
            <div class="col-3">
                Preferiti
            </div>
        </div>

    </div>


</template>
<style scoped>
#boxPanel {
    position: relative;
    left: 100px;
    
    
    border: 2px solid;




}

.row {
    border: 2px solid red;
}

.col-3 {
     border: 5px dashed gray;
}
</style>