import useSWR from "swr";
import { Admin } from "../types/interfaces";

const fetcher = (args: string) => fetch(args).then(res => res.json());

interface UseAdminsParams {
    queryParams?: {
        search?: number | string | null,
    },
}

export default function useAdmin({ queryParams }: UseAdminsParams = {}) {
    const queryString = new URLSearchParams(queryParams as Record<string, any>);

    const url = `/api/testing/admin?${queryString}`;

    const { data, error, isValidating } = useSWR<Admin[]>(url, fetcher);

    return {
        admins: data,
        isError: !!error,
        isLoading: isValidating,
    }
}