import { GROUP_ID } from 'constants/common'
import { request } from '../configs/axios'

const fetchMovieShowTimesApi = (movieId) => {
    return request({
        url: `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`,
        method: 'GET',
    })
}

const fetchCinemaListApi = () => {
    return request({
        url: '/QuanLyRap/LayThongTinHeThongRap',
        method: 'GET',
    })
}

const scheduleCinemaApi = () => {
    return request({
        url: `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap?maNhom=${GROUP_ID}`,
        method: 'GET',
    })
}

export { fetchMovieShowTimesApi, fetchCinemaListApi, scheduleCinemaApi }
