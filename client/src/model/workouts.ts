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
    userId: string,
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

export function getWorkouts(): Promise<workout[]> {
    return api("workouts");
}

//addAWorkout
export function addAWorkout(workout: workout): Promise<workout[]> {
    return api("workouts", {
        method: "POST", body: {
            workout: workout
        }
    });
}

export function deleteAWorkout(workout: workout): Promise<workout[]> {
    return api("workouts", {
        method: "DELETE", body: {
            workout: workout
        }
    });
}
