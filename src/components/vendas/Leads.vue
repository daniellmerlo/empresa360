<script setup>
import { onMounted } from 'vue'

import ApiMixns from '@/mixins/ApiMixins'
import { onBeforeRouteLeave } from 'vue-router'

const { dados, getDadosApi } = ApiMixns()

onMounted(() => {
  var url = 'http://localhost:3000/leads'
  getDadosApi(url)
})

/*
Não funciona no Compositon
//beforeRouteEnter (to, from, next) {
beforeRouteEnter() {
  console.log('Guarda de componente beforeRouteEnter')
}
*/
//onBeforeRouteLeave((to, from, next) => {
onBeforeRouteLeave(() => {
  console.log('Gurada de componente beforRouteLeave')
})
</script>

<template>
  <div>
    <h3>Leads</h3>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NOME</th>
          <th scope="col">TELEFONE</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dados" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.nome }}</td>
          <td>{{ item.telefone }}</td>
          <td>
            <router-link
              :to="{ name: 'lead', params: { id: item.id, outroParametro: `teste_${item.id}` } }"
              class="btn btn-sm btn-primary"
            >
              <i class="bi bi-pencil-square" style="cursor: pointer"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
