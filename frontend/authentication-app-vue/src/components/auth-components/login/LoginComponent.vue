<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5"
          style="margin-top: 70px; height: auto; padding-top: 100px !important"
          v-on:submit.prevent="loginSubmitUserForm()"
        >
          <input
            type="email"
            id="email"
            name="email"
            class="form-control mb-5"
            placeholder="Digite o seu E-mail"
            v-model="loginForm.email"
          />

          <input
            type="password"
            id="password"
            name="password"
            class="form-control mb-5"
            placeholder="Digite sua senha"
            v-model="loginForm.password"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./Login.js"></script>

<style>
</style>
