<script setup lang="ts">
import { ref } from "vue"
import { useToast } from "vue-toastification";

const toast = useToast();

const title = ref("");
const date = ref("");
const duration = ref("");
const location = ref("");
const picture = ref("");
const type = ref("");


const emit = defineEmits(['workoutAdded']);

const onSubmit = () => {
    if (!title.value) {
        toast.error("Please add a title");
        return;
    }
    if (!date.value) {
        toast.error("Please add a date");
        return;
    }
    if (!duration.value) {
        toast.error("Please add a duration");
        return;
    }
    if (!location.value) {
        toast.error("Please add a location");
        return;
    }
    if (!picture.value) {
        toast.error("Please add a picture");
        return;
    }
    if (!type.value) {
        toast.error("Please add a type");
        return;
    }

    const workoutData = {
        title: title.value,
        date: date.value,
        duration: duration.value,
        location: location.value,
        picture: picture.value,
        type: type.value,
    };

    emit('workoutAdded', workoutData);

    title.value = "";
    date.value = "";
    duration.value = "";
    location.value = "";
    picture.value = "";
    type.value = "";
};


</script>


<template>
  
        
        <div class="modal-card">
           

            
            <form @submit.prevent="onSubmit" id="form">
            <section class="modal-card-body">
                <div class="form-control">
                    <label class="label" for="title" id="title">Title</label>
                        <input type="text" class="input" id="title" v-model="title"></div>

                <div class="field" data="">
                    <label class="label" for="date" id="date">Date</label>
                        <input type="text" class="input" id="date" v-model="date"></div>

                <div class="field" data="">
                    <label class="label" for="duration" id="duration">Duration</label>
                        <input type="text" class="input" id="duration" v-model="duration"></div>

            <div class="field" data="">
                <label class="label" for="location" id="location">Location</label>
                        <input type="text" class="input" id="location" v-model="location"></div>

            <div class="field" data="">
                <label class="label" for="picture" id="picture">Picture</label>
                        <input type="text" class="input" id="picture" v-model="picture"></div>

            <div class="field" data="">
                <label class="label" for="type" id="type">Type</label>
                <div class="select is-full-width">
                        <select class="form-control" id="type" v-model="type">
                        <option value="run">Run</option>
                        <option value="bike">Bike</option>
                        <option value="swim">Walk</option>
                        <option value="cardio">Cardio</option>
                        <option value="strength">Strength</option>
                    </select>
                </div>
            </div>
        </section>
        </form>

        <footer class="modal-card-foot">
                <button class="button is-success" >Save changes</button>
            
        </footer>
                
    </div>
</template>


<style scoped>

</style>