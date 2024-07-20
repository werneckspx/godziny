<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <h2  class="text-secondary">Atividades</h2>
      </div>
      <div class="col">
        <div class="text-end">
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#atividadePopup" @click="showPopup">
            Adicionar atividade
          </button>
          <AdicionarAtividade/>
        </div>
      </div>
    </div>

    <div class="h-100 p-5 bg-light border rounded-3">
      <form class="row justify-content-end">
        <div class="col-auto">
          <label class="text-secondary">Pesquisar tarefa</label>
          <input type="text" class="form-control" placeholder="Pesquisar">
        </div>
        <div class="col-auto">
          <label class="text-secondary">Ativo</label>
          <select class="form-select form-select" aria-label="Small select example" >
            <option selected>Selecionar</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </form>
      <div class="row mt-5 justify-content-end">
        <div class="col-auto">
          <PaginacaoComuns />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <!-- ---------------------------------------------------------------------- -->
  <!-- JavaScript                                                             -->
  <!-- ---------------------------------------------------------------------- -->
  <script setup>
  import PaginacaoComuns from '@/components/PaginacaoComuns.vue';
  import AdicionarAtividade from '@/components/AdicionarAtividade.vue';
  import { onMounted, ref } from 'vue';
  import { Modal } from 'bootstrap';
  
  const myModal = ref(null);
  
  onMounted(() => {
    myModal.value = new Modal(document.getElementById('atividadePopup'));
  });
  
  const showPopup = () => {
    if (myModal.value) {
      myModal.value.show();
    }
  };
  </script>
  
  <!-- ---------------------------------------------------------------------- -->
  <!-- CSS                                                                    -->
  <!-- ---------------------------------------------------------------------- -->
  <style scoped>
  * {
    color: #464545;
  }
  </style>
  