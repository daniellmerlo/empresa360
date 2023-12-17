<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const dados = ref({})

function getDadosApi(url) {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            dados.value = response
        })
}

onMounted(() => {
    var url = `http://localhost:3000/leads/${route.params.id}`
    getDadosApi(url)
})

</script>

<template>
    <h3>Detalhe da Lead {{ dados.id }} - {{ dados.nome }}</h3>
    <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">ID</label>
        <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" :value="dados.id">
        </div>
    </div>
    <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Nome</label>
        <div class="col-sm-10">
            <input type="text" readonly class="form-control" :value="dados.nome">
        </div>
    </div>
    <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Telefone</label>
        <div class="col-sm-10">
            <input type="text" readonly class="form-control" :value="dados.telefone">
        </div>
    </div>
    <div class="col-auto">
        <button type="button" class="btn btn-primary">Atualizar</button>
    </div>
</template>