import {FC, PropsWithChildren} from 'react';

export type Props = PropsWithChildren<{
    value?: string;
    onChange?: (value: string) => void
}>;

export type Component = FC<Props>;
