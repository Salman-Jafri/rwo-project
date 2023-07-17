import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedIn: false,
  }),
  actions: {
    async login(username, password) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
          username,
          password,
        });

        if (response.status === 200) {
          this.loggedIn = true;
        } else {
          throw new Error('Login failed');
        }
      } catch (error) {
        throw new Error('Login failed');
      }
    },
    async register(username, email, password) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', {
          username,
          email,
          password,
        });

        if (response.status === 200) {
          this.loggedIn = true;
        } else {
          throw new Error('Registration failed');
        }
      } catch (error) {
        throw new Error('Registration failed');
      }
    },
  },
});
