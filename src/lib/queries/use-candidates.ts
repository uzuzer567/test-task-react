import {useQuery} from '@tanstack/react-query';
import {apiInstance} from 'lib/api/candidates-api';
import {CANDIDATES_QUERY_KEY} from 'lib/constants/query-keys';

export const useCandidates = () => {
    return useQuery(
        {
            queryKey: [CANDIDATES_QUERY_KEY],
            queryFn: async () => {
                return await apiInstance.request().then(response => {
                    return response.data;
                });
            },
        },
    );
};
