import { ref, onMounted } from "vue";
import { defineProps } from "vue";
import data from "../data/workout.json"
onMounted(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem("workouts") || "[]");

    if (savedWorkouts) {
        workouts.value = savedWorkouts;
    }
});

//save to localstorage
export const saveWorkoutsToLocalStorage = () => {
    localStorage.setItem("workouts", JSON.stringify(workouts.value));
}

const props = defineProps({
    workouts: {
        type: Array,
        required: true
    }
});

export interface workout {
    id: number,
    firstName: string,
    lastName: string,
    userName: string,
    image: string,
    distance: string,
    duration: string,
    location: number,
    picture: string
  }

export const workouts = ref(data.workouts);


