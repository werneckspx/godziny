<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <h2 class="text-secondary">Novo usuário</h2>
            </div>
            <div class="h-100 p-5 bg-light border rounded-3">
                <div class="mb-3">
                    <label for="basic-url" class="form-label">Nome</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="basic-url"
                            aria-describedby="basic-addon3 basic-addon4">
                    </div>
                </div>
                <div class="mb-3">
                    <label for="basic-url" class="form-label">Email</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="basic-url"
                            aria-describedby="basic-addon3 basic-addon4">
                    </div>
                </div>
                <div class="mb-3">
                    <label for="basic-url" class="form-label">Senha</label>
                    <div class="input-group">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="col-auto mb-3">
                    <label>Tipo de Usuário</label>
                    <select class="form-select form-select" aria-label="Small select example">
                        <option selected disabled>Selecionar</option>
                        <option value="1">Aluno</option>
                        <option value="2">Administrador/Professor</option>
                    </select>
                </div>
                <div class="col-auto mb-3">
                    <label>Curso</label>
                    <select class="form-select form-select" aria-label="Small select example">
                        <option selected disabled>Selecionar</option>
                        <option value="1">Computação</option>
                        <option value="2">Mecatrônica</option>
                        <!--esse select depende se o usuário for "aluno", as opções dependem do banco de dados que 
                        foi cadastrado os cursos ////Atenção! se for professor/ adm tem que colocar o departamento -->>
                    </select>
                </div>
                <div class="row">
                    <div class="col d-flex justify-content-end">
                        <button type="submit" class="btn btn-primary text-white">Adicionar</button>
                    </div>
                </div>
            </div>

        </div>
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
* {
    color: #464545;
}
</style>