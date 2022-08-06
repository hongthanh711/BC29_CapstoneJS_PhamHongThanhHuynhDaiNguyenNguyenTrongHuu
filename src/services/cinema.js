import { request } from '../configs/axios';

const fetchMovieShowTimesApi = (movieId) => {
  return request({
    url: `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`,
    method: 'GET',
  });
};

export { fetchMovieShowTimesApi };
