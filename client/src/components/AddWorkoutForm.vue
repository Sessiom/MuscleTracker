<script setup lang="ts">
import { ref } from "vue"

const isActive = ref(true);
</script>


<template>

        
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Add a Workout</p>
            </header>
            <section class="modal-card-body">
                <div class="field" data=""><label class="label" for="name" data="">Title</label>
                        <input type="text" class="input" name="title" id="title" data=""></div>

                <div class="field" data=""><label class="label" for="date" data="">Date</label>
                        <input type="date" class="input" id="date" data=""></div>

                <div class="field" data=""><label class="label" for="duration" data="">Duration</label>
                        <input type="text" class="input" id="duration" data=""></div>

            <div class="field" data=""><label class="label" for="location" data="">Location</label>
                        <input type="text" class="input" id="location" data=""></div>

            <div class="field" data=""><label class="label" for="location" data="">Picture</label>
                        <input type="text" class="input" id="location" data=""></div>

            <div class="field" data=""><label class="label" for="type" data="">Type</label>
                <div class="select is-full-width" data="">
                        <select class="form-control" id="type" data="">
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
    </div>
</template>


<style scoped>

.modal-card {
    margin: 10px;
}

</style>

