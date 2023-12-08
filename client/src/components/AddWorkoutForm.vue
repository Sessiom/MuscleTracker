<script setup lang="ts">
import { ref } from "vue"
import { useToast } from "vue-toastification";

const toast = useToast();
const emit = defineEmits(["workoutAdded"]);

const title = ref("a");
const date = ref("1/1/1");
const duration = ref("1");
const location = ref("1");
const picture = ref("1");
const type = ref("run");

const onSubmit = () => {
    if(!title.value || !date.value || !duration.value || !location.value || !picture.value || !type.value) {
        toast.error("Please fill out all fields");
        return;
    }

     const workoutData ={
        title: title.value,
        date: date.value,
        duration: duration.value,
        location: location.value,
        picture: picture.value,
        type: type.value
    }

    emit('workoutAdded', workoutData);

    //clear from
    title.value = "";
    date.value = "";
    duration.value = "";
    location.value = "";
    picture.value = "";
    type.value = "";

}



</script>


<template>

        
        <div class="modal-card">

            <header class="modal-card-head">
                <p class="modal-card-title">Add a Workout</p>
            </header>

            <form id="form" @submit.prevent="onSubmit"> 
            <section class="modal-card-body">

                <div class="field"><label class="label" for="Title" >Title</label>
                        <input type="text" class="input" id="title" v-model="title" ></div>

                <div class="field"><label class="label" for="Date">Date</label>
                        <input type="date" class="input" id="date" v-model="date"></div>

                <div class="field"><label class="label" for="Duration">Duration</label>
                        <input type="text" class="input" id="duration" v-model="duration"></div>

                <div class="field"><label class="label" for="Location">Location</label>
                        <input type="text" class="input" id="location" v-model="location"></div>

                <div class="field"><label class="label" for="Picture" >Picture</label>
                        <input type="text" class="input" id="location" v-model="picture"></div>

            <div class="field"><label class="label" for="Type" >Type</label>
                <div class="select is-full-width" data="">
                        <select class="form-control" id="type" v-model="type">
                        <option value="run" data="">Run</option>
                        <option value="bike" data="">Bike</option>
                        <option value="swim" data="">Walk</option>
                        <option value="cardio" data="">Cardio</option>
                        <option value="strength" data="">Strength</option>
                    </select>
                </div>
            </div>

        </section>
       

        <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
            </footer>

        </form>

    </div>
</template>


<style scoped>

.modal-card {
    margin: 10px;
    overflow:scroll !important;
}

</style>

