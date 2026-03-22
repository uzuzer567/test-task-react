import {
    Modal as StyledModal,
    Form,
    Button,
    Input,
} from 'antd';
import React, {memo, useEffect, useState} from 'react';

import MaskedDateInput from '../masked-date-input';
import {isValidDate} from '../masked-date-input/utils';

import {Component} from './types';

const Modal: Component = ({
    isVisible,
    editableCandidate,
    handleSubmit,
    handleCancel,
}) => {
    const [form] = Form.useForm();
    const formValues = Form.useWatch([], form);

    const [isFormValid, setIsFormValid] = useState<boolean>();

    const handleOk = () => {
        form.validateFields().then(values => {
            handleSubmit({
                id: editableCandidate ? editableCandidate.id : Math.random(),
                ...values,
            });
        }).catch();
    };

    useEffect(() => {
        form.validateFields({validateOnly: true}).then(
            () => setIsFormValid(true),
            () => setIsFormValid(false),
        );
    }, [form, formValues]);

    return (
        <StyledModal
            title={editableCandidate ? 'Редактировать кандидата' : 'Добавить кандидата'}
            open={isVisible}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>Отмена</Button>,
                <Button
                    disabled={!isFormValid}
                    key="submit"
                    type="primary"
                    onClick={handleOk}
                >
                    {editableCandidate ? 'Редактировать' : 'Добавить'}
                </Button>,
            ]}
        >
            <Form layout="vertical" form={form} initialValues={editableCandidate}>
                <Form.Item
                    label="ФИО"
                    name="name"
                    rules={[
                        {required: true, message: 'Введите ФИО'},
                        {
                            validator: (_, value) => {
                                if (!value) {
                                    return Promise.resolve();
                                }

                                if (value.length < 10) {
                                    return Promise.reject('ФИО должно содержать минимум 10 символов');
                                }

                                const fioRegex = /^[А-ЯЁа-яё-]+(\s[А-ЯЁа-яё-]+){1,2}$/;
                                if (!fioRegex.test(value)) {
                                    return Promise.reject('Введите корректное ФИО');
                                }

                                return Promise.resolve();
                            },
                        },
                    ]}
                >
                    <Input placeholder="ФИО" />
                </Form.Item>

                <Form.Item
                    label="Дата проведения собеседования"
                    name="date"
                    rules={[
                        {required: true, message: 'Введите дату'},
                        {
                            validator: (_, value) => {
                                if (!value) {
                                    return Promise.resolve();
                                }

                                if (!isValidDate(value)) {
                                    return Promise.reject('Введите корректную дату');
                                }

                                return Promise.resolve();
                            },
                        },
                    ]}
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
