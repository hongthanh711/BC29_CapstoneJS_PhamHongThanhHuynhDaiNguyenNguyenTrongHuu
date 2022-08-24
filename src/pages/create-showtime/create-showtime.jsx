import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
import React, { useState } from 'react';

export default function CreateShowtime() {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-7'>
                    <Form
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        layout="horizontal"
                        initialValues={{
                            size: componentSize,
                        }}
                        onValuesChange={onFormLayoutChange}
                        size={componentSize}
                    >
                        <Form.Item label="Cinemas cluster">
                            <Select>
                                <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Theater cluster">
                            <Select>
                                <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Date">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item label="Price">
                            <Input />
                        </Form.Item>
                        <Form.Item label='Function'>
                            <Button type='primary'>Thêm Lịch Chiếu</Button>
                        </Form.Item>
                    </Form >
                </div>
            </div>
        </div>
    );
}
