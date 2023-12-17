import { ref } from 'vue'

export default function ApiMixins() {
  const dados = ref({})

  function getDadosApi(url) {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        dados.value = response
      })
  }
  return {
    dados,
    getDadosApi
  }
}
