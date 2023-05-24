import useSWR from "swr";
import { Ayuda } from "../types/interfaces";

const fetcher = (args: string) => fetch(args).then(res => res.json());

interface UseContectsParams {
    queryParams?: {
        search?: number | string | null,
    },
}

export default function useContect({ queryParams }: UseContectsParams = {}) {
    const queryString = new URLSearchParams(queryParams as Record<string, any>);

    const url = `/api/testing/contect?${queryString}`;

    const { data, error, isValidating } = useSWR<Ayuda[]>(url, fetcher);

    return {
        contects: data,
        isError: !!error,
        isLoading: isValidating,
    }
}