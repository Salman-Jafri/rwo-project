<template>
  <nav class="navbar navbar-expand navbar-light" style="background-color: #e3f2fd;">
    <router-link class="navbar-brand" to="#">VueJs</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" v-if="!$pinia.state.auth.loggedIn" to="/login">LogIn</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" v-if="!$pinia.state.auth.loggedIn" to="/register">Register</router-link>
        </li> -->
      </ul>
    </div>
    <form class="d-flex ml-3">
      <button v-if="$pinia.state.auth.loggedIn" class="btn btn-primary" type="submit">LogOut</button>
      <router-link v-if="!$pinia.state.auth.loggedIn" class="btn btn-primary" type="button" to="login">LogIn</router-link>      
    </form>
  </nav>
  <div class="text-center col-md-12">
    <h2 v-if="!$pinia.state.auth.loggedIn"> logIn or Register your self to explore more</h2>
    <h2 v-if="$pinia.state.auth.loggedIn"> Welcome to Dashboard</h2>
  </div>
</template>
<script>


</script>