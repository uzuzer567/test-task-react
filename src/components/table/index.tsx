import {Table as StyledTable} from 'antd';
import React, {memo} from 'react';

import {getColumns} from './consts';
import {Component} from './types';

const Table: Component = ({
    candidates = [],
    editTableRow,
    deleteTableRow,
    searchText,
    isLoading,
}) => {
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
                getColumns(searchText, handleEditTableRow, handleDeleteTableRow)
            }
            pagination={false}
        />
    );
};

export default memo(Table);
