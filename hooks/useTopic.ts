import useSWR from "swr";
import { Topico } from "../types/interfaces";

const fetcher = (args: string) => fetch(args).then(res => res.json());

interface UseTopicsParams {
    queryParams?: {
        search?: number | string | null,
    },
}

export default function useTocpic({ queryParams }: UseTopicsParams = {}) {
    const queryString = new URLSearchParams(queryParams as Record<string, any>);

    const url = `/api/testing/topic?${queryString}`;

    const { data, error, isValidating } = useSWR<Topico[]>(url, fetcher);

    return {
        topics: data,
        isError: !!error,
        isLoading: isValidating,
    }
}