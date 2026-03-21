import {FC, PropsWithChildren} from 'react';

export type Props = PropsWithChildren;

export type Component = FC<Props>;

export type Candidate = {
    key: number;
    id: number;
    date: string;
    name: string;
    grade: number;
}
