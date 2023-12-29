<script setup>
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

import ApiMixns from '@/mixins/ApiMixins'

const { dados, getDadosApi } = ApiMixns()
const parametrosDeRelacionamento = ref('_expand=lead&_expand=servico')
const formPesquisa = ref({
  id_like: '',
  data_inicio_gte: '',
  data_inicio_lte: ''
})

//URL para Filtros novo Formulario:
//http://localhost:3000/contratos?_expand=lead&_expand=servico&id_like=3&data_inicio_gte=2022-01-01&data_inicio_lte=2023-12-31

function pesquisar() {
  console.log(formPesquisa.value)

  Object.keys(formPesquisa.value).forEach(chave => {
    if (formPesquisa.value[chave] == '') {
      delete formPesquisa.value[chave]
    }
  })
  console.log(formPesquisa.value)
  const queryParams = new URLSearchParams(formPesquisa.value).toString()
  const url = `http://localhost:3000/contratos?${parametrosDeRelacionamento.value}&${queryParams}`
  getDadosApi(url)
  console.log(queryParams)
}

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
    <div class="card mb-4">
      <div class="card-header">Contratos</div>
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <label class="form-label">ID Contrato:</label>
            <input type="text" class="form-control" v-model="formPesquisa.id_like" />
          </div>
          <div class="col-6">
            <label class="form-label">Data início:</label>
            <div class="input-group">
              <input type="date" class="form-control" v-model="formPesquisa.data_inicio_gte" />
              <input type="date" class="form-control" v-model="formPesquisa.data_inicio_lte" />
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-primary" @click="pesquisar">Pesquisar</button>
      </div>
    </div>

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
