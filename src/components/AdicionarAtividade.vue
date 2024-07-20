<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>
    <!-- Modal -->
    <div class="modal fade" id="atividadePopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container text-start">
                        <div class="row">
                            <div class="col">
                                <label class="form-label">Sigla</label>
                                <input type="text" class="form-control" v-model="sigla">
                                <label class="form-label">Nome</label>
                                <input type="text" class="form-control" v-model="nome">
                                <label class="form-label">Carga Horária Complementar</label>
                                <input type="text" class="form-control" v-model="cargaHorariaComplementar">
                                {{ sigla }} | {{ nome }} |{{ cargaHorariaComplementar }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Adicionar</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <!-- ---------------------------------------------------------------------- -->
  <!-- JavaScript                                                             -->
  <!-- ---------------------------------------------------------------------- -->
  <script setup>
  import {ref} from 'vue';
    
  const sigla = ref('');
  const nome = ref('');
  const cargaHorariaComplementar = ref('');
  
  </script>
  
  <!-- ---------------------------------------------------------------------- -->
  <!-- CSS                                                                    -->
  <!-- ---------------------------------------------------------------------- -->
  <style scoped>
  *{
    color: #333;
  }
  </style>
  