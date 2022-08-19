import { Button, Space, Table, Tag } from 'antd'
import { useAsync } from 'hooks/useAsync'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchUserListApi } from 'services/user'

export default function UserTable() {
    const navigate = useNavigate()

    const { state: data = [] } = useAsync({
        service: () => fetchUserListApi(),
    })

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            render: (text, record) => {
                // console.log(record)
                // console.log(text)
            },
        },
        {
            title: 'Tài Khoản',
            dataIndex: 'taiKhoan',
            key: 'taiKhoan',
        },
        {
            title: 'Mật khẩu',
            dataIndex: 'matKhau',
            key: 'matKhau',
        },
        {
            title: 'Họ tên',
            key: 'hoTen',
            dataIndex: 'hoTen',
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email',
        },
        {
            title: 'Số điện thoại',
            key: 'soDT',
            dataIndex: 'soDT',
        },
        {
            title: 'Thao tác',
            key: 'thaoTac',
            render: (_, record) => (
                <Space size="middle">
                    <button className="btn btn-success">Sửa</button>
                    <button className="btn btn-danger">Xóa</button>
                </Space>
            ),
        },
    ]
    return (
        <>
            <div className="text-right mb-3">
                <Button onClick={() => navigate('/admin/user-management/create')} type="primary">
                    CREATE USER
                </Button>
            </div>
            <Table rowKey="taiKhoan" columns={columns} dataSource={data} />
        </>
    )
}
