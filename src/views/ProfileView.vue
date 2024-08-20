<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>
      <div class="d-flex align-items-center py-4  h-100">
      <main class="w-100 m-auto form-container">
        <form>
          <h1 class="h3 mb-3 fw-normal">Atualizar Dados</h1>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingInput"/>
            <label for="floatingInput">Nova senha</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword"/>
            <label for="floatingPassword">Confirmar senha</label>
          </div>
          <RouterLink to="/perfil">
            <button type="button" class="btn btn-primary w-100 py-2" @click="toggleActive">Confirmar Mudanças</button>
          </RouterLink>
        </form>
      </main>
    </div>
</template>

<!-- ---------------------------------------------------------------------- -->
<!-- JavaScript                                                             -->
<!-- ---------------------------------------------------------------------- -->
<script setup>
</script>

<!-- ---------------------------------------------------------------------- -->
<!-- CSS                                                                    -->
<!-- ---------------------------------------------------------------------- -->
<style scoped>
  .form-container {
    max-width: 350px;
    padding: 1rem;
  }
  
  * {
    color: #464545;
  }
</style>
