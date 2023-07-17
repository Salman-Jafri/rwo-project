<template>
    <div>
      <h2>Registration Form</h2>
      <form @submit.prevent="register">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" id="username" v-model="username" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" v-model="email" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" id="password" v-model="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
        <router-link to="/login">Login</router-link>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  
  export default {
    setup() {
      const username = ref('');
      const email = ref('');
      const password = ref('');
  
      const register = async () => {
        try {
          const response = await axios.post('http://your-laravel-api-url/register', {
            username: username.value,
            email: email.value,
            password: password.value,
          });
  
          if (response.status === 200) {
            console.log('Registration successful');
            // Handle successful registration, e.g., redirect to login page
          } else {
            console.log('Registration failed');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      return {
        username,
        email,
        password,
        register,
      };
    },
  };
  </script>
  