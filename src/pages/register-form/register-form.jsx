import { Button, Form, Input, InputNumber, notification } from 'antd'
import { GROUP_ID } from 'constants/common'
import React, { useEffect } from 'react'
import { updateUserInfoApi } from 'services/user'
import { registerApi } from 'services/user'
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}

export default function RegisterForm(props) {
    const [form] = Form.useForm()

    useEffect(() => {
        if (props.userInfoFormApi) {
            form.setFieldsValue(props.userInfoFormApi)
        }
    }, [props.userInfoFormApi])

    const onFinish = async (values) => {
        if (props.userInfoFormApi) {
            const dataUpdated = {
                ...values,
                maNhom: GROUP_ID,
                maLoaiNguoiDung: props.userInfoFormApi.maLoaiNguoiDung,
            }
            await updateUserInfoApi(dataUpdated)
            console.log(dataUpdated)
            console.log(props.userInfoFormApi)
        } else {
            const data = { ...values, maNhom: GROUP_ID }

            console.log(data)

            await registerApi(data)
        }

        notification.success('Successfully')
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <Form form={form} {...layout} onFinish={onFinish}>
                        <div className="form-group text-center">
                            <h4 className="text-warning">Register Form</h4>
                        </div>
                        <Form.Item
                            name="taiKhoan"
                            label="User Name "
                            rules={[
                                {
                                    required: true,
                                    message: 'User Name không được bỏ trống.',
                                },
                                // {
                                //     pattern: '^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$',
                                //     message: 'User Name không đúng định dạng.',
                                // },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="matKhau"
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
                            name="hoTen"
                            label="First and last name "
                            rules={[
                                {
                                    required: true,
                                    message: 'Họ và tên không được bỏ trống.',
                                },
                                {
                                    // pattern:
                                    //     '^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹsW|_]+$',
                                    message: 'Họ và tên không đúng định dạng.',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="email"
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
                            name="soDt"
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
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}
