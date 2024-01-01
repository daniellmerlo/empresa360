<script setup>
import { onMounted } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
//import { useRoute } from 'vue-router'

//const route = useRoute()
const props = defineProps({
  id: String
})

onMounted(() => {
  console.log('Opçoes', props.id)
})

//onBeforeRouteUpdate((to, from, next) => {
onBeforeRouteUpdate(() => {
  console.log('Guarda de componente onBeforRouteUpdate')
})

</script>

<template>
  <h5>Componente Opções</h5>
  <p>Poderiamos recuperar as opções do serviço {{ id }}</p>
</template>
