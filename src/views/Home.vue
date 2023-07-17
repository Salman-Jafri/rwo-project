<template>
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Logged in: {{ $pinia.state.auth.loggedIn }}</p>
      <p v-if="$pinia.state.auth.loggedIn">
        You can put your authenticated content here.
      </p>
      <router-link v-if="!$pinia.state.auth.loggedIn" to="/login">Login</router-link>
      <router-link v-if="!$pinia.state.auth.loggedIn" to="/register">Register</router-link>
    </div>
  </template>
  