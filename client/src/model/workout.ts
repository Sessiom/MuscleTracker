import { ref } from "vue";
import { defineProps } from "vue";

const props = defineProps({
    workouts: {
        type: Array,
        required: true
    }
});

export const workouts = ref([
    {id: 1, 
     firstName: "Terry",
     lastName: "Medhurst",
     userName: "atuny0",
     image: "https://robohash.org/hicveldicta.png",
     title: "Parkour Training",
     date: "5 min ago",
     distance: "1.12 mi",
     duration: "25:30",
     location: "San Francisco, CA",
     picture: "https://images.ctfassets.net/uwf0n1j71a7j/5GhVEraYQrWD6pA5JPIoYF/30e9b4a2ef2d10f43753aab65f31f7ff/parkour.jpg",

    },
    {id: 2, 
     firstName: "Sheldon",
     lastName: "Quigley",
     userName: "hbingley1",
     image: "https://robohash.org/doloremquesintcorrupti.png",
     title: "Downhill Biking",
     date: "1 hour ago",
     distance: "1.24 mi",
     duration: "6:21",
     location: "San Francisco, CA",
     picture: "https://www.twowheeledwanderer.com/wp-content/uploads/2021/07/Downhill-mountain-biking-2.jpg",
     
    },
    {id: 3, 
     firstName: "Terrill",
     lastName: "Hills",
     userName: "rshawe2",
     image: "https://robohash.org/consequunturautconsequatur.png",
     title: "Breakdancing",
     date: "2 days ago",
     distance: "0.23 mi",
     duration: "11:58",
     location: "San Francisco, CA",
     picture: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2019/10/11/8e9ca35b-f25c-426a-bb40-338feabff9cb/world-urban-games-2019-shigekix-chairfreeze",
     
    }
]);


