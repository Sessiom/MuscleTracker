<script setup lang="ts">
import { ref } from "vue"
import { workouts, type workout, addAWorkout  } from '../model/workouts';
import { getSession } from '@/model/session'
import { useToast } from "vue-toastification";
import AddWorkoutForm from "@/components/AddWorkoutForm.vue"
import WorkoutList from "@/components/WorkoutList.vue";

const toast = useToast();
const isActive = ref(false);
const session = getSession();
const currentUserName = session.user?.firstName;

// Add a workout
const handleWorkoutAdded = (workoutData: any) => {
  const userId = session.user?._id;
  if (!userId) {
    toast.error("Please login");
    return;
  }
  const newWorkout = {
    firstName: session.user?.firstName ?? '',
    lastName: session.user?.lastName ?? '',
    userId: userId,
    userName: session.user?.username ?? '',
    image: session.user?.image ?? '',
    distance: workoutData.distance,
    title: workoutData.title,
    date: workoutData.date,
    duration: workoutData.duration,
    location: workoutData.location,
    picture: workoutData.picture,
  } as workout;


  //setWorkouts(workouts.value, session.user?.id);
  addAWorkout(newWorkout).then((data) => {
    toast.success("Workout added ");
//@ts-expect-error
    workouts.value.push(data);

  });

  //saveWorkoutsToLocalStorage();

  
}


</script>

<template>

  
    <div>
      <h1 class="title">My Activity</h1>
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <button @click="isActive = !isActive" class="button is-info is-fullwidth">Add Workout</button>
          <div v-if="isActive">
           <AddWorkoutForm :isActive= "!isActive" @workoutAdded="handleWorkoutAdded"/>
          </div><br> 
          <WorkoutList :firstName="currentUserName"/> 
        </div> 
      </div>
    </div>
</template>



<style scoped>

</style>


