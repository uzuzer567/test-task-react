import {
    Input,
    Typography,
} from 'antd';
const {Text} = Typography;
import React, {memo, useState} from 'react';

import {Component} from './types';
import {isValidDate, getFormattedDate} from './utils';

const MaskedDateInput: Component = ({
    value = '',
    onChange,
}) => {
    const [error, setError] = useState('');

    return (
        <div>
            <Input
                placeholder="ДД.MM.ГГГГ"
                value={value}
                onChange={e => {
                    const formattedDate = getFormattedDate(e.target.value);
                    let isValid;
                    if (formattedDate.length < 10) {
                        isValid = false;
                        setError('Введите дату в формате ДД.ММ.ГГГГ');
                    } else if (!isValidDate(formattedDate)) {
                        isValid = false;
                        setError('Введите корректную дату');
                    } else {
                        isValid = true;
                        setError('');
                    }
                    onChange?.(formattedDate, isValid);
                }}
                maxLength={10}
                status={error ? 'error' : ''}
            />
            {error && (
                <Text type="danger">{error}</Text>
            )}
        </div>
    );
};

export default memo(MaskedDateInput);
