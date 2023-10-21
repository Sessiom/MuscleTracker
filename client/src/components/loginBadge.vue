<script setup lang="ts">
  import { ref } from "vue"
  import { getSession, useLogin } from '@/model/session'

  const session = getSession()
  const { login, logout } = useLogin()

  const doLogin = () => {
    login('hbingley1@plala.or.jp', 'CQutx25i8r')
  }

  const doLogout = () => {
    logout();
  }
  const isActive = ref(true);

</script>

<template>
  <div class="has-text-right" v-if="session.user">
    Welcome, {{ session.user.firstName }} {{ session.user.lastName }} <br>
    <small>
      {{ session.user.email }}
      <a class="button is-small is-light is-warning" @click.prevent="doLogout">
        <span class="icon">
          <i class="fas fa-sign-out-alt"></i>
        </span>
      </a>
    </small>
  </div>
  <div class="buttons" v-else>

    <div class="navbar-item has-dropdown is-hoverable">
    <a class="button is-light">
      Log in
    </a>
    <div class="navbar-dropdown">
            <a class="navbar-item" @click.prevent="doLogin">
              Sheldon
            </a>
            <a class="navbar-item">
              Jeff
            </a>
            <a class="navbar-item">
              Bob
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Other Account
            </a>
          </div>
        </div>
    <a class="button is-primary">
      <strong>Sign up</strong>
    </a>
  </div>
</template>


<style scoped>

</style>