import {FC, PropsWithChildren} from 'react';

import {Candidate} from '../../modules/candidates/types';

export type Props = PropsWithChildren<{
    searchText: string;
    candidates: Candidate[];
    editTableRow: (id: number) => void;
    deleteTableRow: (id: number) => void;
    isLoading: boolean;
}>;

export type Component = FC<Props>;
