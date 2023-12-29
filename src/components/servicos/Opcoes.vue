<script setup>
import { onMounted } from 'vue'
//import { useRoute } from 'vue-router'

//const route = useRoute()
const props = defineProps({
  id: String
})

onMounted(() => {
  console.log('Opçoes', props.id)
})
</script>

<template>
  <h5>Componente Opções</h5>
  <p>Poderiamos recuperar as opções do serviço {{ id }}</p>
</template>
