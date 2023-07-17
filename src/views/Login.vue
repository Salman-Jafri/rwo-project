<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from '@/store/auth';
  import { ref } from 'vue';
  
  export default {
    setup() {
      const authStore = useAuthStore();
      const username = ref('');
      const password = ref('');
  
      const login = async () => {
        try {
          await authStore.login(username.value, password.value);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      return {
        username,
        password,
        login,
      };
    },
  };
  </script>
  