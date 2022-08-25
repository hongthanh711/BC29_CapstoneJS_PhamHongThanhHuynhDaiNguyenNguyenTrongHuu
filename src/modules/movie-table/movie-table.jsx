import { Button, message, notification, Space, Table, Tag } from 'antd'
import { useAsync } from 'hooks/useAsync'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchMovieListApi } from 'services/movie'
import { formatDate } from 'utils/common'
import { DeleteFilled, EditFilled, DiffFilled } from '@ant-design/icons'
import { deleteMovieApi } from 'services/movie'

export default function MovieTable() {
    const navigate = useNavigate()
    const { state: data = [] } = useAsync({
        service: () => fetchMovieListApi(),
    })

    const deleteMovie = (movieId) => {
        deleteMovieApi(movieId)
        notification.warning({ message: 'Xóa phim thành công' })
    }

    const columns = [
        {
            title: 'Movie Name',
            dataIndex: 'tenPhim',
            key: 'tenPhim',
        },
        {
            title: 'Show Date',
            dataIndex: 'ngayKhoiChieu',
            key: 'ngayKhoiChieu',
            render: (text) => {
                return <span> {formatDate(text)} </span>
            },
        },
        {
            title: 'Rate',
            dataIndex: 'danhGia',
            key: 'danhGia',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button
                        onClick={() => navigate(`/admin/movie-management/${record.maPhim}/update`)}
                        className="btn btn-success"
                    >
                        <EditFilled />
                    </button>
                    <button onClick={() => deleteMovie(record.maPhim)} className="btn btn-danger">
                        <DeleteFilled />
                    </button>
                    <button className="btn btn-info">
                        <DiffFilled />
                    </button>
                </Space>
            ),
        },
    ]

    return (
        <>
            <div className="text-right mb-3">
                <Button onClick={() => navigate('/admin/movie-management/create')} type="primary">
                    CREATE
                </Button>
            </div>
            <Table rowKey="maPhim" columns={columns} dataSource={data} />
        </>
    )
}
