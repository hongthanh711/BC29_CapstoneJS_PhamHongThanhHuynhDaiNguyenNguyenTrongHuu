import { Button, Form, Input, InputNumber, notification, Select } from 'antd'
import { GROUP_ID } from 'constants/common'
import { useAsync } from 'hooks/useAsync'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUserInfoAdminApi } from 'services/user'
import { fetchUserInfoAdminApi } from 'services/user'
import { addUserAdminApi } from 'services/user'
import { fetchTypeUserApi } from 'services/user'
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}

export default function UserForm() {
    const navigate = useNavigate()
    const params = useParams()

    const [form] = Form.useForm()

    const { state: userInfo } = useAsync({
        service: () => fetchUserInfoAdminApi(params.userId),
        condition: !!params.userId,
        dependencies: [params.userId],
    })

    useEffect(() => {
        if (userInfo) {
            form.setFieldsValue(userInfo)
        }
    }, [userInfo])

    const { state: TypeUser } = useAsync({ service: () => fetchTypeUserApi() })

    const onFinish = async (values) => {
        const data = { ...values, maNhom: GROUP_ID }

        console.log(data)
        if (params.userId) {
            await updateUserInfoAdminApi(data)
        } else {
            await addUserAdminApi(data)
        }
        notification.success({ message: 'Successfully' })
    }
    return TypeUser ? (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <Form form={form} {...layout} onFinish={onFinish}>
                        <div className="form-group text-center">
                            {params.userId ? <h1>UPDATE USER</h1> : <h1>ADD USER</h1>}
                        </div>
                        <Form.Item
                            name="taiKhoan"
                            label="Username "
                            rules={[
                                {
                                    required: true,
                                    message: 'T??i kho???n kh??ng ???????c b??? tr???ng.',
                                },
                                {
                                    pattern: '[a-zA-Z]{4,}',
                                    message: 'T??i kho???n kh??ng ????ng ?????nh d???ng.',
                                },
                                {
                                    min: 6,
                                    max: 15,
                                    message: 'T??i kho???n ph???i t??? 6-15 k?? t???.',
                                },
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
                                    message: 'M???t kh???u kh??ng ???????c b??? tr???ng.',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="hoTen"
                            label="Full name "
                            rules={[
                                {
                                    required: true,
                                    message: 'H??? v?? t??n kh??ng ???????c b??? tr???ng.',
                                },
                                {
                                    pattern: '[a-zA-Z]{4,}',
                                    message: 'H??? v?? t??n kh??ng ????ng ?????nh d???ng.',
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
                                    message: 'Email kh??ng ???????c b??? tr???ng.',
                                },
                                {
                                    pattern: '[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+.[a-zA-Z]{2,4}',
                                    message: 'Email kh??ng ????ng ?????nh d???ng.',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="soDT"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'S??? phone kh??ng ???????c b??? tr???ng.',
                                },
                                {
                                    pattern: /^[0-9\b]+$/,
                                    message: 'Vui l??ng kh??ng nh???p ch???.',
                                },
                                {
                                    min: 0,
                                    max: 10,
                                    message: 'S??? phone kh??ng nh???p qu?? 10 s???.',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item name="maLoaiNguoiDung" label="Select">
                            <Select>
                                {TypeUser.map((ele) => {
                                    return (
                                        <Select.Option
                                            key={ele.maLoaiNguoiDung}
                                            value={ele.maLoaiNguoiDung}
                                        >
                                            {ele.tenLoai}
                                        </Select.Option>
                                    )
                                })}
                            </Select>
                        </Form.Item>

                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <div className="text-right">
                                <Button type="primary" htmlType="submit" className="mr-2">
                                    {params.userId ? 'Update' : 'Add'}
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                    <a onClick={() => navigate('/admin/user-management')} className="text-primary">
                        &lt;&lt; Back
                    </a>
                </div>
            </div>
        </div>
    ) : (
        'loading'
    )
}
