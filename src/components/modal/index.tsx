import {
    Modal as StyledModal,
    Form,
    Button,
    Input,
} from 'antd';
import React, {memo, useEffect} from 'react';

import MaskedDateInput from '../masked-date-input';

import {Component} from './types';

const Modal: Component = ({
    isVisible,
    editableCandidate,
    handleSubmit,
    handleCancel,
}) => {
    const [form] = Form.useForm();

    const handleOk = () => {
        form.validateFields().then(values => {
            handleSubmit({
                id: editableCandidate ? editableCandidate.id : Math.random(),
                ...values,
            });
        }).catch();
    };

    useEffect(() => {
        if (editableCandidate) {
            form.setFieldsValue(editableCandidate);
        }
    }, [form, editableCandidate]);

    return (
        <StyledModal
            title="Добавить кандидата"
            open={isVisible}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>Отмена</Button>,
                <Button
                    key="submit"
                    type="primary"
                    onClick={handleOk}
                >
                    {editableCandidate ? 'Редактировать' : 'Добавить'}
                </Button>,
            ]}
        >
            <Form layout="vertical" form={form}>
                <Form.Item
                    label="ФИО"
                    name="name"
                    rules={[{required: true, message: 'Введите ФИО'}]}
                >
                    <Input placeholder="ФИО" />
                </Form.Item>

                <Form.Item
                    label="Дата проведения собеседования"
                    name="date"
                >
                    <MaskedDateInput />
                </Form.Item>

                <Form.Item
                    label="Оценка"
                    name="grade"
                    rules={[
                        {required: true, message: 'Введите число'},
                        {
                            validator: (_, value) => {
                                if (+value >= 0 && +value <= 10) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('Введите число от 0 до 10'));
                            },
                        },
                    ]}
                >
                    <Input placeholder="Оценка" />
                </Form.Item>
            </Form>
        </StyledModal>
    );
};

export default memo(Modal);
