import { Button, Form, Input, InputNumber, Select } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}

export default function CreateUserForm() {
    const navigate = useNavigate()

    const onFinish = (values) => {
        console.log(values)
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    {/* validateMessages={validateMessages}  name="nest-messages"*/}
                    <Form {...layout} onFinish={onFinish}>
                        <div className="form-group text-center">
                            <h1>ADD USER</h1>
                        </div>
                        <Form.Item
                            name="userName"
                            label="User Name "
                            rules={[
                                {
                                    required: true,
                                    message: 'User Name không được bỏ trống.',
                                },
                                {
                                    pattern: '^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$',
                                    message: 'User Name không đúng định dạng.',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Password "
                            rules={[
                                {
                                    required: true,
                                    message: 'Password không được bỏ trống.',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="firstAndLastName"
                            label="First and last name "
                            rules={[
                                {
                                    required: true,
                                    message: 'Họ và tên không được bỏ trống.',
                                },
                                {
                                    pattern:
                                        '^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹsW|_]+$',
                                    message: 'Họ và tên không đúng định dạng.',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['user', 'email']}
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Email không được bỏ trống.',
                                },
                                {
                                    pattern: '[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+.[a-zA-Z]{2,4}',
                                    message: 'Email không đúng định dạng.',
                                },
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
                                    message: 'vui lòng không nhập chữ.',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item label="Select">
                            <Select>
                                <Select.Option value="KhachHang">Khách hàng</Select.Option>
                                <Select.Option value="QuanTri">Quản trị</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <div className="text-right">
                                <Button type="primary" htmlType="submit" className="mr-2">
                                    Add
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                    <a onClick={() => navigate('/admin/user-management')} className="text-primary">
                        &lt;&lt;Back
                    </a>
                </div>
            </div>
        </div>
    )
}
