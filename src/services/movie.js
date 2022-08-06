import { request } from '../configs/axios'

const fetchMovieListApi = () => {
    return request({
        url: '/QuanLyPhim/LayDanhSachPhim?maNhom=GP03',
        method: 'GET',
    })
}

const fetchMovieDetailApi = (movieId) => {
    return request({
        url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`,
        method: 'GET',
    })
}

export { fetchMovieListApi, fetchMovieDetailApi }
