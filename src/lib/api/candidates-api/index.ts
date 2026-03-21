import {api} from 'lib/utils/http';

export class CandidatesApi {
    public request = async () => {
        return api.get('/people');
    };
}

export const apiInstance = new CandidatesApi();
