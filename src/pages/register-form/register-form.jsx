import { Button, Form, Input, InputNumber } from 'antd';
import React from 'react';
const layout = {
    labelCol: { span: 8, },
    wrapperCol: { span: 16, },
};

// const validateMessages = {
//     required: '${label} is required!',
//     types: {
//         email: '${label} is not a valid email!',
//         number: '${label} is not a valid number!',
//     },
//     number: {
//         range: '${label} must be between ${min} and ${max}',
//     },
// };
export default function RegisterForm() {
    const onFinish = (values) => {
        console.log(values);
    };
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-6'>
                    {/* validateMessages={validateMessages}  name="nest-messages"*/}
                    <Form {...layout} onFinish={onFinish} >
                        <div className='form-group text-center'>
                            <h4 className='text-warning'>Register Form</h4>
                        </div>
                        <Form.Item
                            name='userName'
                            label="User Name "
                            rules={[{
                                required: true,
                                message: 'User Name không được bỏ trống.'
                            },
                            {
                                pattern: '^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$',
                                message: 'User Name không đúng định dạng.'
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name='password'
                            label="Password "
                            rules={[{
                                required: true,
                                message: 'Password không được bỏ trống.'
                            }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name='firstAndLastName'
                            label="First and last name "
                            rules={[{
                                required: true,
                                message: 'Họ và tên không được bỏ trống.'
                            },
                            {
                                pattern: '^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$',
                                message: 'Họ và tên không đúng định dạng.'
                            }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['user', 'email']}
                            label="Email"
                            rules={[{
                                required: true,
                                message: 'Email không được bỏ trống.'
                            },
                            {
                                pattern: '[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}',
                                message: 'Email không đúng định dạng.'
                            }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['phoneNumber']}
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Phone Number không được bỏ trống',
                                    min: 0,
                                    max: 99,
                                },
                                {
                                    pattern: /^[0-9\b]+$/,
                                    message: 'vui lòng không nhập chữ.'
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}
