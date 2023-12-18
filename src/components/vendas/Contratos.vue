<script setup>
import { onMounted } from 'vue'

import ApiMixns from '@/mixins/ApiMixins'

const { dados, getDadosApi } = ApiMixns()

onMounted(() => {
  var url = 'http://localhost:3000/contratos'
  getDadosApi(url)
})
</script>

<template>
  <div>
    <h3>Contratos</h3>
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
          <td>{{ item.leadId }}</td>
          <td>{{ item.servicoId }}</td>
          <td>{{ item.data_inicio }}</td>
          <td>{{ item.data_fim }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
