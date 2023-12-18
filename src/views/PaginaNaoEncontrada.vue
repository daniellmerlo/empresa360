<script setup>
import { useRouter } from "vue-router";


const router = useRouter()

function voltar() {
    router.back()
}

</script>
<template>
    <h5>Ops... Página não existe</h5>
    <button class="btn btn-primary" @click="voltar">Voltar</button>
</template>