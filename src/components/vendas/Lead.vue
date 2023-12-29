<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ApiMixns from '@/mixins/ApiMixins'

const { dados, getDadosApi } = ApiMixns()

const router = useRouter()
const props = defineProps({
  id: String,
  outroParametro: String
})

function voltar() {
  router.push({ name: 'leads' })
}

onMounted(() => {
  console.log(props)
  var url = `http://localhost:3000/leads/${props.id}`
  getDadosApi(url)
})
</script>

<template>
  <h3>Detalhe da Lead {{ dados.id }} - {{ dados.nome }}</h3>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">ID</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" :value="dados.id" />
    </div>
  </div>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Nome</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control" :value="dados.nome" />
    </div>
  </div>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Telefone</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control" :value="dados.telefone" />
    </div>
  </div>
  <div class="col-auto d-flex justify-content-between">
    <button type="button" class="btn btn-warning" @click="voltar">Voltar</button>&nbsp;
    <button type="button" class="btn btn-primary">Atualizar</button>
  </div>
</template>
