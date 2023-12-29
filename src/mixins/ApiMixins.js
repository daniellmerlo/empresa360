import { ref } from 'vue'

export default function ApiMixins() {
  const dados = ref({})

  function getDadosApi(url, queryParams = {}) {

    Object.keys(queryParams).forEach((chave) => {
      if (queryParams[chave] == '') {
        delete queryParams[chave]
      }
    })

    const urlQueryParams = new URLSearchParams(queryParams).toString()

    const urlCompleta = urlQueryParams ? `${url}&${urlQueryParams}` : url

    fetch(urlCompleta)
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
