import { computed, watch } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';
import { useClientsStore } from '@/store/clients';

import clientsApi from '@/api/clients-api';
import type { Client } from '@/clients/interfaces/client';

const getClients = async( page: number ):Promise<Client[]> => {

    const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`);
    return data
}

const useClients = () => {

    const store = useClientsStore()
    const { currentPage, clients, totalPages } = storeToRefs( store )

    const { isLoading, data } = useQuery({
        queryKey: ['clients?page=', currentPage  ],
        queryFn: () => getClients( currentPage.value )
    })

    watch( data, clients => {
        if( clients )
            store.setClients( clients );
    });

    return {
        // Properties
        isLoading,
        clients,
        currentPage,
        totalPages,

        // Methods
        getPage( page: number ){
            store.setPage( page )
        },

        // Getters [1,2,3,4,5], 
        totalPageNumbers: computed(
            () => [...new Array(totalPages.value)].map( (v, i) => i + 1 )
        ),
    }
}


export default useClients