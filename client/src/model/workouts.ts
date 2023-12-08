import { ref, onMounted } from "vue";
import { defineProps } from "vue";
import data from "../data/workouts.json";
import { api } from "./session"

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
export const workouts = ref([] as workout[]);

export interface workout {
    _id?: string,
    firstName: string,
    lastName: string,
    userName: string,
    image: string,
    title: string,
    date: string,
    distance: string,
    duration: string,
    location: number,
    picture: string
  }

export function getWorkouts(): Promise< workout[]> {
    return api("workouts"); 
  }

// set workouts with workouts and userid with api
export function setWorkouts(workouts: workout[], userId: number): Promise< workout[]> {
    return api("workouts", { method: "POST", body: {
        workouts: workouts, 
        userId: userId
       }  }); 
  }
