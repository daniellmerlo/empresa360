<script setup>
//import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

/*
onMounted(() => {
    console.log(route.params.id)
})
*/

</script>

<template>
    <h3>Detalhe da Lead {{ route.params.id }}</h3>
</template>