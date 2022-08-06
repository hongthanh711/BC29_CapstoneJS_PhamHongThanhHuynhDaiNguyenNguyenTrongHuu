import { request } from "../configs/axios";

const loginApi = (data) => {
  return request({
    data: data,
    url: "/QuanLyNguoiDung/DangNhap",
    method: "POST",
  });
};

export { loginApi };
