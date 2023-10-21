<script setup lang="ts">
import { ref } from "vue"
import { getSession, useLogin } from '@/model/session'
const show1 = ref(true);
const session = getSession();

</script>


<template>

<div v-if="show1">
    <article class="media box">
      <figure class="media-left">
        <p v-if="session.user" class="image is-64x64"><img
            :src= "session.user.image">
        </p>
      </figure>
      <div class="media-content">
      <div class="content">
        <p v-if="session.user"><strong> {{ session.user.firstName }} {{ session.user.lastName }} </strong> &nbsp;<small>@JewPaltz</small> &nbsp; <small>24 min ago</small><br>
          Biked through campus - {
          "lat": 41.7459793,
          "lng": -74.082801
          }
        <div class="columns">
          <div class="column has-text-centered"
            style="display: flex; justify-content: space-around; align-items: center;">
            <div>
              <div class="title" style="margin: 0px;">1.0 mi</div>
              <div class="heading">Distance</div>
            </div>
            <div>
              <div class="title" style="margin: 0px;">0:30</div>
              <div class="heading">Duration</div>
            </div>
          </div>
          <div class="column"><img
              src="https://www.rei.com/dam/content_team_080317_61569_mountain_biking_beginners_lg.jpg"
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

</template>

<style scoped>

</style>

