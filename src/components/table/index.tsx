import {Table as StyledTable, Empty} from 'antd';
import React, {memo} from 'react';

import {getColumns} from './consts';
import {Component} from './types';

const Table: Component = ({
    searchText,
    candidates = [],
    editTableRow,
    deleteTableRow,
    isLoading,
}) => {
    const scores = candidates.map(item => item.grade);
    const minGrade = Math.min(...scores);
    const maxGrade = Math.max(...scores);

    const handleEditTableRow = (id: number) => {
        editTableRow(id);
    };

    const handleDeleteTableRow = (id: number) => {
        deleteTableRow(id);
    };

    return (
        <StyledTable
            loading={isLoading}
            className="table"
            dataSource={candidates}
            columns={
                getColumns(minGrade, maxGrade, searchText, handleEditTableRow, handleDeleteTableRow)
            }
            scroll={{x: '100%'}}
            showSorterTooltip={false}
            pagination={false}
            locale={{emptyText: <Empty description={searchText ? 'Кандидаты не найдены' : 'Кандидатов нет'} />}}
        />
    );
};

export default memo(Table);
