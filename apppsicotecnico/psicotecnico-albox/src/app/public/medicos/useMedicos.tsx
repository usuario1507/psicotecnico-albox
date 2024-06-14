import { IMedico } from '@/app/interfaces/IMedicos';
import useSWR, { SWRConfiguration } from 'swr';



export const useMedicos = (url: string, config: SWRConfiguration = {}) => {
    const { data, error } = useSWR<IMedico[]>(`http://localhost:3001/api${url}`, config);
    console.log(data);
    return {
        medicos: data || [],
        isLoading: !error && !data,
        isError: error
    }
}


