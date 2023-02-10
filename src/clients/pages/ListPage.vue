<script setup lang="ts">
import ClientList from '@/clients/components/ClientList.vue';
import PaginationNumbers from '@/clients/components/PaginationNumbers.vue';
import useClients from '@/clients/composables/useClients';
import LoadingModal from '@/shared/components/LoadingModal.vue';

const { isLoading } = useClients();

</script>

<template>
    <div>
        <h1>Listado de clientes</h1>

        <!-- Client List -->
        <ClientList />

        <!-- PaginationNumbers -->
        <PaginationNumbers />

        <!-- LoadingModal -->
        <LoadingModal v-if="isLoading"/>
    </div>
</template>

<style scoped>

</style>