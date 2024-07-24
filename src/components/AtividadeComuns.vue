<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>
    <div class="card">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ sigla }}</li>
            <li class="list-group-item">{{ nome }}</li>
            <li class="list-group-item">{{ cargaHorariaComplementar }}</li>
        </ul>
    </div>
</template>

<!-- ---------------------------------------------------------------------- -->
<!-- JavaScript                                                             -->
<!-- ---------------------------------------------------------------------- -->
<script setup>
import {defineProps} from 'vue';

defineProps({
    sigla: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  cargaHorariaComplementar:{
    type: String,
    required: true
  },
})
</script>

<!-- ---------------------------------------------------------------------- -->
<!-- CSS                                                                    -->
<!-- ---------------------------------------------------------------------- -->
<style scoped></style>