<script setup>
import { onMounted, ref } from 'vue'

const dados = ref([])

function getDadosApi(url) {
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      dados.value = response
    })
}

onMounted(() => {
  getDadosApi('http://0.0.0.0:3000/leads')
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
            <router-link :to="`/home/vendas/lead/${item.id}`" class="btn btn-sm btn-primary">
              <i class="bi bi-pencil-square" style="cursor: pointer"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
