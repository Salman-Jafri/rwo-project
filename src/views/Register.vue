  <template>
    <div class="container mt-5 pt-5 register">
      <div class="row">
        <div class="col-12 col-sm-8 col-md-4 m-auto">
          <div class="card border-0 shadow">
            <div class="card-body">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#2c3e50"
                class="bi bi-person-circle mx-auto my-3" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
              <h1 class="fw-bold" style="color: #2c3e50;">Register</h1>
              <form action="">
                <input  type="text" id="username" v-model="username" class="form-control my-4 py-2" placeholder="Enter Username" required>
                <input type="email" id="email" v-model="email" class="form-control my-4 py-2" placeholder="Enter Email" required>
                <input type="password" id="password" v-model="password" class="form-control my-4 py-2" placeholder="Enter Password"
                  required>
                <div class="text-center mt-3">
                  <button type="submit" class="btn btn-primary">Register</button>
                  <p class="my-2 py-3">Already have an account?
                    <router-link to="/login">Login here</router-link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
</div></template>
  <script>
  import { useAuthStore } from '@/store/auth';
  import { ref } from 'vue';
  
  export default {
    setup() {
      const authStore = useAuthStore();
      const username = ref('');
      const email = ref('');
      const password = ref('');
  
      const register = async () => {
        try {
          await authStore.register(username.value, email.value, password.value);
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
  <style>
  .register{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>