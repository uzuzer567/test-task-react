import {FC, PropsWithChildren} from 'react';

export type Props = PropsWithChildren<{
    value?: string;
    onChange?: (value: string, isValid: boolean) => void
}>;

export type Component = FC<Props>;
