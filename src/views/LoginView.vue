<template>
  <div class="d-flex align-items-center py-4  h-100 ">
    <main class="w-100 m-auto form-container">
      <form>
        <div class="row mb-4">
          <div class="col-12 d-flex justify-content-center">
            <img src="../assets/godfinal.png" class="mb-4" height="80" width="110" alt="Logo" />

          </div>
          <div class="col-12 d-flex justify-content-center">
            <label>Godziny APP</label>
          </div>
        </div>

        <div class="row h-100 p-3 bg-light border rounded-3">
          <div class="col">
            <h1 class="h4 mb-3 fw-normal">Entrar no sistema</h1>
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="your-email@gmail.com"
                v-model="email" />
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="floatingPassword" placeholder="your-password"
                v-model="senha" />
              <label for="floatingPassword">Senha</label>
            </div>
            <div class="form-check text-start my-3">
              <input type="checkbox" class="form-check-input" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">Lembrar senha</label>
            </div>
            <RouterLink to="/perfil">
              <button type="button" class="btn btn-primary w-100 py-2 text-white"
                @click="toggleActive(); fazerLogin();">Entrar</button>
            </RouterLink>
          </div>
        </div>


      </form>
    </main>

  </div>
</template>
<script setup>

import { ref, defineEmits} from 'vue';
import auth from '../lib/autentication'

//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------!
//Lógica para fazer a requisição do backend e definir os valores do objeto como login geral
const email = ref('');
const senha = ref('');

const fazerLogin = async () => {
  try {
        let loginResponse = await auth.autenticacaoGlobal(email.value, senha.value);
        console.log('Login bem-sucedido:', loginResponse);
        // Lógica adicional após login bem-sucedido
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        // Lógica para tratar o erro
      }
}


//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------!
// Estado para controlar o ativo
const isActive = ref(false);

// Emitir evento para o pai
const emit = defineEmits(['update-is-active']);
const toggleActive = () => {
  isActive.value = !isActive.value;
  emit('update-is-active', isActive.value);
};
</script>

<style scoped>
.form-container {
  max-width: 370px;
  padding: 1rem;
}

* {
  color: #464545;
}
</style>