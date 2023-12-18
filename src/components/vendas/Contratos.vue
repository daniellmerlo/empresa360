<script setup>
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

import ApiMixns from '@/mixins/ApiMixins'

const { dados, getDadosApi } = ApiMixns()
const parametrosDeRelacionamento = ref('_expand=lead&_expand=servico')

onMounted(() => {
  const route = useRoute()
  const queryParams = new URLSearchParams(route.query).toString()
  const url = `http://localhost:3000/contratos?${parametrosDeRelacionamento.value}&${queryParams}`
  getDadosApi(url)
})

onBeforeRouteUpdate((to, from, next) => {
  const queryParams = new URLSearchParams(to.query).toString()
  console.log(to.query)
  console.log(queryParams)
  const url = `http://localhost:3000/contratos?${parametrosDeRelacionamento.value}&${queryParams}`
  console.log(url)
  getDadosApi(url)
  next()
})
</script>

<template>
  <div>
    <h3>Contratos</h3>

    <router-link class="btn btn-primary" :to="{ name: 'contratos', query: { leadId_like: 1 } }"
      >LeadId = 1</router-link
    >&nbsp;
    <router-link class="btn btn-primary" to="/home/vendas/contratos?servicoId_like=2">
      ServicoId = 2</router-link
    >&nbsp;

    <router-link
      class="btn btn-success"
      :to="{ name: 'contratos', query: { leadId_like: 1, servicoId_like: 2 } }"
      >LeadId = 1 e ServicoId = 2</router-link
    >&nbsp;
    <router-link class="btn btn-success" to="/home/vendas/contratos?servicoId_like=2&leadId_like=2"
      >ServicoId = 1 e LeadId = 2</router-link
    >&nbsp;

    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">LEAD</th>
          <th scope="col">SERVICO</th>
          <th scope="col">DATA INICIO</th>
          <th scope="col">DATA FIM</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dados" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.lead.nome }}</td>
          <td>{{ item.servico.servico }}</td>
          <td>{{ item.data_inicio }}</td>
          <td>{{ item.data_fim }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
