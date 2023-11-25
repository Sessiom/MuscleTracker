import { ref } from 'vue'

const workout = ref([

]);

const handleWorkoutSubmitted = (workoutData) => {
    workout.value.push({
        id: generateUniqueId(),
        title: workoutData.title,
        date: workoutData.date,
        duration: workoutData.duration,
        location: workoutData.location,
        picture: workoutData.picture,
        type: workoutData.type,
    });

}

//generate unique ID
const generateUniqueId = () => {
    return Math.floor(Math.random() * 1000000;
}