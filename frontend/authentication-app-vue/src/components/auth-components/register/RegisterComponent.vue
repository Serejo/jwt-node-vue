<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5"
          style="margin-top: 70px; height: auto; padding-top: 100px !important"
          v-on:submit.prevent="loginSubmitUserForm()"
        >
          <div class="form-group">
            <input
              type="text"
              id="name"
              name="name"
              class="form-control mb-5"
              placeholder="Digite o seu Nome"
              v-model="registerForm.name"
              :class="{
                'is-invalid': isSubmitted && $v.registerForm.name.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.registerForm.name.required"
              class="invalid-feedback"
            >
              Nome é obrigatório
            </div>
          </div>

          <div class="form-group">
            <input
              type="email"
              id="email"
              name="email"
              class="form-control mb-5"
              placeholder="Digite seu E-mail"
              v-model="registerForm.email"
              :class="{
                'is-invalid': isSubmitted && $v.registerForm.email.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.registerForm.email.required"
              class="invalid-feedback"
            >
              Email é obrigatório
            </div>
          </div>

          <div class="form-group">
            <input
              type="password"
              id="password"
              name="password"
              class="form-control mb-5"
              placeholder="Digite sua senha"
              v-model="registerForm.password"
              :class="{
                'is-invalid': isSubmitted && $v.registerForm.password.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.registerForm.password.required"
              class="invalid-feedback"
            >
              Senha é obrigatório
            </div>
          </div>

          <p class="center">
            Já possui uma conta cadastrada?
            <router-link to="/">Faça o Login</router-link>
          </p>
          <center>
            <button
              @click="submitRegisternUser"
              class="btn btn-primary btn-block w-75 my-4"
            >
              Cadastrar
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./Register.js"></script>

<style>
</style>
