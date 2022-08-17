import { GROUP_ID } from 'constants/common';
import { request } from '../configs/axios';

const fetchMovieListApi = () => {
  return request({
    url: `/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`,
    method: 'GET',
  });
};

const fetchMovieDetailApi = (movieId) => {
  return request({
    url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`,
    method: 'GET',
  });
};

const addMovieUploadImage = (data) => {
  return request({
    url: '/QuanLyPhim/ThemPhimUploadHinh',
    method: 'POST',
    data,
  });
};

const updateMovieUploadImage = (data) => {
  return request({
    url: '/QuanLyPhim/CapNhatPhimUpload',
    method: 'POST',
    data,
  });
};

export {
  updateMovieUploadImage,
  fetchMovieListApi,
  fetchMovieDetailApi,
  addMovieUploadImage,
};
