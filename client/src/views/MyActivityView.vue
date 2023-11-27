<script setup lang="ts">
import { ref } from "vue"
import AddWorkoutForm from "@/components/AddWorkoutForm.vue"
import NewWorkoutPost from "@/components/NewWorkoutPost.vue";
import WorkoutList from "@/components/WorkoutList.vue";
const isActive = ref(false);
</script>

<template>

  
    <div>
      <h1 class="title">My Activity</h1>
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <button @click="isActive = !isActive" class="button is-info is-fullwidth">Add Workout</button>
          <div v-if="isActive">
           <AddWorkoutForm/>
          </div><br> 
          <NewWorkoutPost/> 
        </div> 
      </div>
    </div>
</template>



<style scoped>

</style>


