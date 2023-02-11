<script setup lang="ts">
import { useRoute } from 'vue-router'

import LoadingModal from '@/shared/components/LoadingModal.vue'
import useClient from '@/clients/composables/useClient'

const route = useRoute()

const {
    client,
    isLoading,
} = useClient( +route.params.id )

</script>

<template>
    <h3>Guardando...</h3>
    <h3>Guardado</h3>

    <LoadingModal v-if="isLoading"/>

    <div>
        <h1>Jaume Parrot</h1>
        <form>
            <input
                type="text"
                placeholder="Nombre"
            />
            <br>
            <input
                type="text"
                placeholder="Dirección"
            />
            <br>

            <button type="submit">Guardar</button>
        </form>
    </div>

    <code>
        {{ client }}
    </code>
</template>

<style scoped>
input {
    width: 100%;
    padding: 5px 10px;
    margin-bottom: 10px;
}

button {
    margin-bottom: 10px;
}
</style>