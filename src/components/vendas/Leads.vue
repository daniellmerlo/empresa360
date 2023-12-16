<script setup>
import { onMounted, ref } from "vue";


const dados = ref([])

function getDadosApi(url) {
  fetch(url)
  .then(response => response.json())
  .then(response => {
    dados.value = response
  })
}

onMounted(() => {
  getDadosApi("http://0.0.0.0:3000/leads")
})

</script>

<template>
  <h3>Leads</h3>
  {{ dados }}
</template>
