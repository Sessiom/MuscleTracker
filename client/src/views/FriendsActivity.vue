<script setup lang="ts">
import { ref } from "vue"
import { workouts, saveWorkoutsToLocalStorage } from '../model/workouts';
import { useToast } from "vue-toastification";
import { getSession } from '@/model/session';
import AddWorkoutForm from "@/components/AddWorkoutForm.vue"
import WorkoutList from "@/components/WorkoutList.vue";


const toast = useToast();
const session = getSession();
const isActive = ref(false);

// Add a workout
const handleWorkoutAdded = (workoutData: any) => {
  workouts.value.push({
    id: generateUniqueId(),
    firstName: session.user?.firstName ?? '',
    lastName: session.user?.lastName ?? '',
    userName: session.user?.username ?? '',
    image: session.user?.image ?? '',
    distance: workoutData.distance,
    title: workoutData.title,
    date: workoutData.date,
    duration: workoutData.duration,
    location: workoutData.location,
    picture: workoutData.picture,
  });

  saveWorkoutsToLocalStorage();
  toast.success("Workout added ");
}

// Generate a unique id
const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000)
}


</script>

<template>

  
    <div>
      <h1 class="title">Friends Activity</h1>
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <button @click="isActive = !isActive" class="button is-info is-fullwidth">Add Workout</button>
          <div v-if="isActive">
           <AddWorkoutForm :isActive= "!isActive" @workoutAdded="handleWorkoutAdded"/>
          </div>
          <WorkoutList :workouts="workouts"/>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>
