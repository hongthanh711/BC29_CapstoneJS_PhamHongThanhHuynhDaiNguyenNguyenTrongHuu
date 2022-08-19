import { GROUP_ID } from 'constants/common'
import { request } from '../configs/axios'

const loginApi = (data) => {
    return request({
        data: data,
        url: '/QuanLyNguoiDung/DangNhap',
        method: 'POST',
    })
}

const fetchUserListApi = () => {
    return request({
        url: `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`,
        method: 'GET',
    })
}

export { loginApi, fetchUserListApi }
