<template>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title text-center">Login Form</h2>
              <form @submit.prevent="login">
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input type="text" id="username" v-model="username" class="form-control" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" id="password" v-model="password" class="form-control" required>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Login</button>
                  <router-link to="/register" class="btn btn-link">Register</router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  
  export default {
    setup() {
      const username = ref('');
      const password = ref('');
  
      const login = async () => {
        try {
          const response = await axios.post('http://your-laravel-api-url/login', {
            username: username.value,
            password: password.value,
          });
  
          if (response.status === 200) {
            console.log('Login successful');
            // Handle successful login, e.g., redirect to dashboard
          } else {
            console.log('Login failed');
          }
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
  