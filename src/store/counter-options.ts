import { defineStore } from "pinia";

export const useCounterOptionsStore = defineStore('counterOptions', {
    state: () => ({
        count: 0,
        lastChanged: undefined,
    }),

    getters: {
        squareCount: ( state ) => state.count * state.count,
    },

    actions: {

    }
});