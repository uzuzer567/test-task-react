import {Input, Button} from 'antd';
import React, {memo, useEffect, useState} from 'react';

import './styles.css';

import Modal from '../../components/modal';
import Table from '../../components/table';
import {useCandidates} from '../../lib/queries/use-candidates';

import {Candidate, Component} from './types';

const Candidates: Component = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [searchText, setSearchText] = useState('');

    const {data: dataSource = [], isLoading} = useCandidates();
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const filteredCandidates = candidates.filter((candidate: Candidate) => {
        const preparedSearchText = searchText.toLowerCase();
        return Object.values(candidate).some(value =>
            value?.toString().toLowerCase().includes(preparedSearchText),
        );
    });
    const [editableCandidate, setEditableCandidate] = useState<Candidate>();

    const addTableRow = (candidate: Candidate) => {
        setCandidates([...candidates, {...candidate, key: candidate.id}]);
        setIsModalVisible(false);
    };

    const editTableRow = (id: number) => {
        const candidateForEditing = candidates.find(
            candidate => candidate.id == id,
        );
        setEditableCandidate(candidateForEditing);
        setIsModalVisible(true);
    };

    const editCandidate = (updatedCandidate: Candidate) => {
        setCandidates(prevCandidates =>
            prevCandidates.map(candidate =>
                candidate.id == updatedCandidate.id ?
                    {...updatedCandidate, key: updatedCandidate.id} :
                    candidate,
            ),
        );
        setEditableCandidate(undefined);
        setIsModalVisible(false);
    };

    const deleteTableRow = (id: number) => {
        const updatedCandidates =
            candidates.filter(candidate => candidate.id !== id);
        setCandidates(updatedCandidates);
    };

    const cancel = () => {
        if (editableCandidate) {
            setEditableCandidate(undefined);
        }
        setIsModalVisible(false);
    };

    useEffect(() => {
        const preparedDataSource = dataSource.map(
            (candidate: Candidate) => ({...candidate, key: candidate.id}),
        );
        setCandidates(prevCandidates => {
            if (JSON.stringify(prevCandidates) == JSON.stringify(preparedDataSource)) {
                return prevCandidates;
            }
            return preparedDataSource;
        });
    }, [dataSource]);

    return (
        <div className="wrapper">
            <div className="actions">
                <Button
                    onClick={() => setIsModalVisible(true)}
                >
                    Добавить
                </Button>
                <Input
                    placeholder="Введите текст для поиска"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                />
            </div>
            <Table
                searchText={searchText}
                candidates={filteredCandidates}
                editTableRow={editTableRow}
                deleteTableRow={deleteTableRow}
                isLoading={isLoading}
            />
            {isModalVisible && (
                <Modal
                    isVisible={isModalVisible}
                    editableCandidate={editableCandidate}
                    handleSubmit={formValue =>
                        editableCandidate ? editCandidate(formValue) : addTableRow(formValue)
                    }
                    handleCancel={cancel}
                />
            )}
        </div>
    );
};

export default memo(Candidates);
