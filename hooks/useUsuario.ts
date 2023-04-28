import useSWR from "swr";
import { Usuario } from "../types/interfaces";

const fetcher = (args: string) => fetch(args).then(res => res.json());

interface UseUsuariosParams {
    queryParams?: {
        search?: number | string | null,
    },
}

export default function useUsuario({ queryParams }: UseUsuariosParams = {}) {
    const queryString = new URLSearchParams(queryParams as Record<string, any>);

    const url = `/api/testing/user?${queryString}`;

    const { data, error, isValidating } = useSWR<Usuario[]>(url, fetcher);

    return {
        usuarios: data,
        isError: !!error,
        isLoading: isValidating,
    }
}