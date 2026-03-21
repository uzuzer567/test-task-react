import {FC, PropsWithChildren} from 'react';

import {Candidate} from '../../modules/candidates/types';

export type Props = PropsWithChildren<{
    isVisible: boolean;
    editableCandidate?: Candidate;
    handleSubmit: (newCandidate: Candidate) => void;
    handleCancel: () => void;
}>;

export type Component = FC<Props>;
