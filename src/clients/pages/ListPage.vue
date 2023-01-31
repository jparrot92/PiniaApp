<script setup lang="ts">
import ClientList from '@/clients/components/ClientList.vue';
import PaginationNumbers from '@/clients/components/PaginationNumbers.vue';


</script>

<template>
    <div>
        <h1>Listado de clientes</h1>

        <!-- Client List -->
        <ClientList />

        <!-- PaginationNumbers -->
        <PaginationNumbers />

        <!-- LoadingModal -->
    </div>
</template>

<style scoped>

</style>