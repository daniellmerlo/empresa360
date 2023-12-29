<script setup>
import { onMounted } from 'vue'
//import { useRoute } from 'vue-router'

//const route = useRoute()
const props = defineProps({
  id: String
})

onMounted(() => {
  console.log('Indicadores', props.id)
})
</script>

<template>
  <h5>Componente Indicadores</h5>
  <p>Poderiamos recuperar as opções do serviço {{ id }}</p>
</template>
