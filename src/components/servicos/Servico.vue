<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ApiMixns from '@/mixins/ApiMixins'

const { dados, getDadosApi } = ApiMixns()

const route = useRoute()

onMounted(() => {
  var url = `http://localhost:3000/servicos/${route.params.id}`
  getDadosApi(url)
})
</script>

<template>
  <div class="card">
    <div class="card-header bg-primary text-white">{{ dados.servico }}</div>
    <div class="card-body">
      <p class="card-text">{{ dados.descricao }}</p>
    </div>
  </div>
</template>
