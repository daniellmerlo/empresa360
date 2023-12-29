<script setup>
//import { onMounted, watch } from 'vue'
import { onMounted } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import ApiMixns from '@/mixins/ApiMixins'

const { dados, getDadosApi } = ApiMixns()

//const route = useRoute()
const props = defineProps({
  id: String
})

onBeforeRouteUpdate((to, from, next) => {
  if (to.params.id != undefined) {
    var url = `http://localhost:3000/servicos/${to.params.id}`
    getDadosApi(url)
  }

  next()
})

/*
watch(route, (to) => {
  if (to.params.id != undefined) {
    var url = `http://localhost:3000/servicos/${to.params.id}`
    getDadosApi(url)
  }
})
*/

onMounted(() => {
  //console.log('Via Props', props.id)
  //console.log('Serviço', route.params.id)
  var url = `http://localhost:3000/servicos/${props.id}`
  getDadosApi(url)
})
</script>

<template>
  <div class="card">
    <div class="card-header bg-primary text-white">{{ dados.servico }}</div>
    <div class="card-body">
      <p class="card-text">{{ dados.descricao }}</p>
    </div>
  </div>
</template>
