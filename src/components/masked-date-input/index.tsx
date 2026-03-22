import {Input} from 'antd';
import React, {memo} from 'react';

import {Component} from './types';
import {getFormattedDate} from './utils';

const MaskedDateInput: Component = ({
    value = '',
    onChange,
}) => {
    return (
        <div>
            <Input
                placeholder="ДД.MM.ГГГГ"
                value={value}
                onChange={e => {
                    const formattedDate = getFormattedDate(e.target.value);
                    onChange?.(formattedDate);
                }}
                maxLength={10}
            />
        </div>
    );
};

export default memo(MaskedDateInput);
