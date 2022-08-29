import { GROUP_ID } from 'constants/common'
import { request } from '../configs/axios'

const loginApi = (data) => {
    return request({
        data,
        url: '/QuanLyNguoiDung/DangNhap',
        method: 'POST',
    })
}

const registerApi = (data) => {
    return request({
        data: data,
        url: '/QuanLyNguoiDung/DangKy',
        method: 'POST',
    })
}

const fetchUserListApi = () => {
    return request({
        url: `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`,
        method: 'GET',
    })
}

const fetchBookingHistoryApi = () => {
    return request({
        url: '/QuanLyNguoiDung/ThongTinTaiKhoan',
        method: 'POST',
    })
}

const updateUserInfoApi = (data) => {
    return request({
        url: '/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
        method: 'POST',
        data,
    })
}

const deleteUserApi = (taiKhoan) => {
    return request({
        url: `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
        method: 'DELETE',
    })
}

export {
    loginApi,
    fetchUserListApi,
    registerApi,
    fetchBookingHistoryApi,
    updateUserInfoApi,
    deleteUserApi,
}
