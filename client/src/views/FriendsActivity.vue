<script setup lang="ts">
import { isReactive, ref } from "vue"
import AddWorkoutForm from "@/components/AddWorkoutForm.vue"
import users from '@/data/users.json';
import { getUsers } from '@/model/users';

const show1 = ref(true);
const show2 = ref(true);
const show3 = ref(true);
const isActive = ref(false);

const newuser = await getUsers();

</script>

<template>

  
    <div>
      <h1 class="title">Friends Activity</h1>
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <button @click="isActive = !isActive" class="button is-info is-fullwidth">Add Workout</button>
          <form v-if="isActive">
           <AddWorkoutForm :isActive= "!isActive"/>
           
          </form><br>
          <div v-if="show1" v-for="user in newuser" :key= "user.id">
            <article class="media box">
              <figure class="media-left">
                <p class="image is-64x64"><img
                    :src="user.image">
                </p>
              </figure>
              <div class="media-content">
              <div class="content">
                <p><strong>{{ user.firstName }} {{ user.lastName }}</strong> &nbsp;<small>{{ user.username }}</small> &nbsp; <small>{{ user.time }}</small><br>
                  {{ user.workout.type }} - {
                  "lat": {{ user.workout.coordinates.lat }},
                  "lng": {{ user.workout.coordinates.lng }}
                  }
                <div class="columns">
                  <div class="column has-text-centered"
                    style="display: flex; justify-content: space-around; align-items: center;">
                    <div>
                      <div class="title" style="margin: 0px;"> {{ user.workout.distance }}</div>
                      <div class="heading">Distance</div>
                    </div>
                    <div>
                      <div class="title" style="margin: 0px;">{{ user.workout.duration }}</div>
                      <div class="heading">Duration</div>
                    </div>
                  </div>
                  <div class="column"><img
                      :src="user.workout.picture"
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
      </div>
    </div>


</template>

<style scoped>

</style>

