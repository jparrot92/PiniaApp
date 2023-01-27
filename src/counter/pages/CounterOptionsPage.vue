<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterOptionsStore } from '@/store/counter-options';

const counterStore = useCounterOptionsStore();
const { count, squareCount } = storeToRefs( counterStore );

</script>

<template>
    <div>
        <h1>Pinia Options</h1>
        <h4>Counter: {{ count }}</h4>
        <h4>Square: {{ squareCount }}</h4>
    </div>
</template>

<style scoped>

</style>