<script setup lang="ts">
import { ref } from "vue"
import { useLogin } from '@/model/session'
const email = ref("");
const password = ref("");


function tryLogin() {
  const { login } = useLogin()
  login(email.value, password.value)
}

</script>

<template>
  <div class="column is-full">
      <h1 class="title">Please login first</h1>

    </div>
    <form @submit.prevent="tryLogin">
  <div class="hero-body">
    <div class="column is-half is-offset-one-quarter">
      <div class="box">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" v-model="email" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" v-model="password" />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success">Login</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</form>
</template>

<style scoped></style>