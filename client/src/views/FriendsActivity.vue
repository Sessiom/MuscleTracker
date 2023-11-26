<script setup lang="ts">
import { ref } from "vue"
import { workouts } from '../model/workout';
import AddWorkoutForm from "@/components/AddWorkoutForm.vue"
import WorkoutList from "@/components/WorkoutList.vue";



const show1 = ref(true);
const show2 = ref(true);
const show3 = ref(true);
const isActive = ref(false);


</script>

<template>

  
    <div>
      <h1 class="title">Friends Activity</h1>
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <button @click="isActive = !isActive" class="button is-info is-fullwidth">Add Workout</button>
          <div v-if="isActive">
           <AddWorkoutForm :isActive= "!isActive"/>
          </div>
          <WorkoutList :workouts="workouts"/>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>

