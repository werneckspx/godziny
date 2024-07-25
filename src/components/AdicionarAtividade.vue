<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>
  <!--Estrutura básica de uma classe modal, dentro dela se encontra um formulário com seus respectivos campos.
    Cada campo está ligado a uma variável do Vue usando v-model. Quando o formulário é submetido, ele chama a 
    função adicionarAtividade definida no script. O modificador prevent no evento submit impede a recarga da página.-->

    <div class="modal fade" id="atividadePopup" tabindex="-1" aria-labelledby="atividadePopupLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="atividadePopupLabel">Adicionar Atividade</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-start" >
            <form @submit.prevent="adicionarAtividade">
              <div class="mb-3">
                <label for="sigla" class="form-label">Sigla</label>
                <input type="text" id="sigla" v-model="sigla" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="nome" class="form-label">Nome</label>
                <input type="text" id="nome" v-model="nome" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="cargaHoraria" class="form-label">Carga Horária</label>
                <input type="text" id="cargaHoraria" v-model="cargaHoraria" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Adicionar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <!-- ---------------------------------------------------------------------- -->
  <!-- JavaScript                                                             -->
  <!-- ---------------------------------------------------------------------- -->
  <script setup>
  import { ref, defineEmits } from 'vue';
  import { Modal } from 'bootstrap';
  
  const sigla = ref('');
  const nome = ref('');
  const cargaHoraria = ref('');

  /* defineEmits é usado para definir um evento customizado chamado atividade-adicionada. Este evento será.
  emitido quando uma nova atividade for adicionada.*/
  const emit = defineEmits(['atividade-adicionada']);
  

  const adicionarAtividade = () => {
    //Cria um novo objeto novaAtividade usando os valores dos campos do formulário.
    const novaAtividade = {
      sigla: sigla.value,
      nome: nome.value,
      cargaHorariaComplementar: cargaHoraria.value
    };
  
    // Emite o evento atividade-adicionada com o novo objeto.
    emit('atividade-adicionada', novaAtividade);
  
    // Fechar o modal após adicionar.
    const modalElement = document.getElementById('atividadePopup');
    const modal = Modal.getInstance(modalElement) || new Modal(modalElement);
    modal.hide();
  
    // Limpar campos.
    sigla.value = '';
    nome.value = '';
    cargaHoraria.value = '';
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
  