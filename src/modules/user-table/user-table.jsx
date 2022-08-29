import { Button, notification, Space, Table, Tag } from 'antd'
import { useAsync } from 'hooks/useAsync'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchUserListApi } from 'services/user'

import { EditFilled, DeleteFilled } from '@ant-design/icons'
import { deleteUserApi } from 'services/user'

export default function UserTable() {
    const navigate = useNavigate()

    const { state: data = [] } = useAsync({
        service: () => fetchUserListApi(),
    })

    const deleteUser = (taiKhoan) => {
        deleteUserApi(taiKhoan)
        notification.warning({ message: 'Successfuly' })
    }

    let count = 0

    const columns = [
        {
            title: 'No',
            dataIndex: 'stt',
            key: 'stt',
            render: () => {
                count += 1
                return <p>{count}</p>
            },
        },
        {
            title: 'Username',
            dataIndex: 'taiKhoan',
            key: 'taiKhoan',
        },
        {
            title: 'Password',
            dataIndex: 'matKhau',
            key: 'matKhau',
        },
        {
            title: 'Fullname',
            key: 'hoTen',
            dataIndex: 'hoTen',
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            key: 'soDT',
            dataIndex: 'soDT',
        },
        {
            title: 'Action',
            key: 'thaoTac',
            render: (_, record) => (
                <Space size="middle">
                    <button className="btn btn-success">
                        <EditFilled />
                    </button>
                    <button onClick={() => deleteUser(record.taiKhoan)} className="btn btn-danger">
                        <DeleteFilled />
                    </button>
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
