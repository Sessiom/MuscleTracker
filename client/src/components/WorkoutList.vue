<script setup lang="ts">
import {  ref } from "vue"
import workoutData from "@/components/AddWorkoutForm.vue"
import { getSession } from '@/model/session'
import { defineProps } from 'vue'

const session = getSession();

const props = defineProps({
    workout: {
        type: Array,
        required: true
    }
})

const show1 = ref(true);


</script>

<template>

  
    <div>
          <div v-if="show1">
            <article class="media box">
              <figure class="media-left">
                <p v-if="session.user" class="image is-64x64"><img
                    :src="session.user.image">
                </p>
              </figure>
              <div class="media-content">
              <div class="content">
                <p v-if="session.user"><strong>{{ session.user.firstName }} {{ session.user.lastName }}</strong> &nbsp;
                  <small>{{ session.user.username }}</small> &nbsp; 
                  <small>{{ session.user.time }}</small><br>
                  {{ workoutData.type }} - {
                  "lat": {{ session.user.workout.coordinates.lat }},
                  "lng": {{ session.user.workout.coordinates.lng }}
                  }
                <div class="columns">
                  <div class="column has-text-centered"
                    style="display: flex; justify-content: space-around; align-items: center;">
                    <div>
                      <div class="title" style="margin: 0px;"> {{ workoutData.distance }}</div>
                      <div class="heading">Distance</div>
                    </div>
                    <div>
                      <div class="title" style="margin: 0px;">{{ workoutData.duration }}</div>
                      <div class="heading">Duration</div>
                    </div>
                  </div>
                  <div class="column"><img
                      :src="workoutData.picture"
                      style="max-height: 100%;"></div>
                </div>
                </p>
              </div>
              <nav class="level is-mobile">
                <div class="level-left"><a class="level-item"><span class="icon is-small"><i
                        class="fas fa-reply"></i></span></a><a class="level-item"><span class="icon is-small"><i
                        class="fas fa-retweet"></i></span></a><a class="level-item"><span class="icon is-small"><i
                        class="fas fa-heart"></i></span></a></div>
              </nav>
            </div>
            <div class="media-right"><button @click="show1 = !show1" class="delete"></button></div>
          </article>
        </div>
       </div>


</template>

<style scoped>

</style>