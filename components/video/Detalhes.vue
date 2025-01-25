<script setup lang="ts">
const {diasPassados, diferencaEmDias} = useFormatacao()

const dataVideo = new Date(2024, 1, 1);

diasPassados(dataVideo);

</script>

<template>
    <h1>Componenetes - Nuxt 3</h1>
    <p>Autor: Fernando Fernandes</p>
    <p>{{ diferencaEmDias }} dias atrás</p>
</template>