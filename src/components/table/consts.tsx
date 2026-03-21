import {EditFilled, DeleteFilled} from '@ant-design/icons';
import {Button} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import React from 'react';

import {Candidate} from '../../modules/candidates/types';

import {getHighlightedText} from './utils';

const parseDate = (str: string) => {
    const [day, month, year] = str.split('.').map(strItem => +strItem);
    return new Date(year, month - 1, day).getTime();
};

export const getColumns = (
    searchText: string,
    handleEdit: (id: number) => void,
    handleDelete: (id: number) => void,
): ColumnsType<Candidate> => [
    {
        width: '30%',
        title: 'Дата проведения собеседования',
        dataIndex: 'date',
        key: 'date',
        sorter: (a: {date: string}, b: {date: string}) => parseDate(a.date) - parseDate(b.date),
        render: (text: string) => getHighlightedText(text, searchText),
    },
    {
        width: '40%',
        title: 'ФИО',
        dataIndex: 'name',
        key: 'name',
        sorter: (a: {name: string}, b: {name: string}) => a.name.localeCompare(b.name),
        render: (text: string) => getHighlightedText(text, searchText),
    },
    {
        width: '20%',
        title: 'Оценка',
        dataIndex: 'grade',
        key: 'grade',
        sorter: (a: {grade: number}, b: {grade: number}) => a.grade - b.grade,
        render: (text: number) => getHighlightedText(text.toString(), searchText),
    },
    {
        width: '10%',
        title: 'Действия',
        key: 'actions',
        render: (_, record) => (
            <div className="actions">
                <Button
                    className="edit-button"
                    onClick={() => handleEdit(record.id)}
                >
                    <EditFilled className="icon" />
                </Button>
                <Button
                    className="delete-button"
                    onClick={() => handleDelete(record.id)}
                >
                    <DeleteFilled className="icon" />
                </Button>
            </div>
        ),
    },
];

