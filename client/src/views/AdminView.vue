<script setup lang="ts"> 
import users from '@/data/users.json';
import UserList from "@/components/UserList.vue";

</script>


<template>
    <div class="container">
        <div data-v-6173b8aa="">
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul data="">
                    <li data=""><a href="#" data="">My Exercise</a></li>
                    <li data=""><a href="#" data="">Admin</a></li>
                    <li class="is-active" data-v-6173b8aa=""><a href="#" aria-current="page" data="">Users</a>
                    </li>
                </ul>
            </nav>
            <div data=""><button class="button is-primary" data=""><span class="icon"
                        data=""><i class="fas fa-plus" data=""></i></span><span data="">Add
                        User</span></button></div>
            <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth" data="">

            <tr data="">
                <th data=""></th>
                <th data="">First Name</th>
                <th data="">Last Name</th>
                <th data="">Emails</th>
                <th data="">Handle</th>
                <th data="">Is Admin</th>
                <th data=""></th>
            </tr>

            <UserList :users="users"/>

        </table>
    </div>
</div>

</template>


<style scoped>

</style>