<script setup>
import { onMounted } from 'vue'

import ApiMixns from '@/mixins/ApiMixins'

const { dados, getDadosApi } = ApiMixns()

onMounted(() => {
  var url = 'http://localhost:3000/servicos'
  getDadosApi(url)
})
</script>

<template>
  <div>
    <h3>Serviços</h3>
    <hr />
    <div class="row">
      <div class="col mb-2" v-for="item in dados" :key="item.id">
        <div class="card" style="width: 11rem">
          <img class="card-img-top" :src="`/img/${item.icone}`" />
          <div class="card-body text-center">
            <router-link :to="{ name: 'servico', params: { id: item.id } }">
              <p class="card-text">{{ item.servico }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view class="mt-3" />
    <router-view name="opcoes" />
    <router-view name="indicadores" />
  </div>
</template>
