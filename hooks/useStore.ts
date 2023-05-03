import useSWR from "swr";
import { Tienda } from "../types/interfaces";

const fetcher = (args: string) => fetch(args).then(res => res.json());

interface UseStoreParams {
    queryParams?: {
        search?: number | string | null,
    },
}

export default function useStore({ queryParams }: UseStoreParams = {}) {
    const queryString = new URLSearchParams(queryParams as Record<string, any>);

    const url = `/api/testing/store?${queryString}`;

    const { data, error, isValidating } = useSWR<Tienda[]>(url, fetcher);

    return {
        tiendas: data,
        isError: !!error,
        isLoading: isValidating,
    }
}