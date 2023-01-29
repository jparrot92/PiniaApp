import { computed, watch } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';
import { useClientsStore } from '@/store/clients';

import clientsApi from '@/api/clients-api';
import type { Client } from '@/clients/interfaces/client';

const getClients = async():Promise<Client[]> => {

    const { data } = await clientsApi.get<Client[]>(`/clients?_page=1`);
    return data
}

const useClients = () => {

    const { isLoading, data } = useQuery({
        queryKey: ['clients?page=', 1 ],
        queryFn: getClients
    })

    return {
        isLoading
    }
}


export default useClients