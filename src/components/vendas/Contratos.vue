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
  const url = `http://localhost:3000/contratos?${parametrosDeRelacionamento.value}`
  getDadosApi(url, formPesquisa.value)
}

onMounted(() => {
  const route = useRoute()
  const url = `http://localhost:3000/contratos?${parametrosDeRelacionamento.value}`
  getDadosApi(url, route.query)
})

onBeforeRouteUpdate((to, from, next) => {
  const url = `http://localhost:3000/contratos?${parametrosDeRelacionamento.value}`
  getDadosApi(url, to.query)
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
