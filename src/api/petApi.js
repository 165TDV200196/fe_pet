import { messageShowErr, messageShowSuccess } from "../function";
import axiosClient from "./axiosClient";

class PetApi {
  getAll = (params) => {
    const url = "/pets";
    return axiosClient.get(url, { params });
  };
  getOne = (params) => {
    const url = `/pets/${params}`;
    return axiosClient.get(url).then((data) => {
      return data.data;
    });
  };
  postpet = (params) => {
    const url = "/pets";
    return axiosClient
      .post(url, params)
      .then((data) => {
        messageShowSuccess("Tạo mới thành công!");
      })
      .catch((err) => {
        messageShowErr("Có lỗi xảy ra!");
      });
  };
  deletepet = (id) => {
    const url = `/pets/${id}`;
    return axiosClient
      .delete(url)
      .then((data) => {
        messageShowSuccess("Xoá thành công!");
      })
      .catch((err) => {
        messageShowErr("Có lỗi xảy ra!");
      });
  };
  editpet = (params) => {
    const url = `/pets/${params.id}`;
    return axiosClient
      .patch(url, params)
      .then((data) => {
        messageShowSuccess("Sửa thành công!");
      })
      .catch((err) => {
        messageShowErr("Có lỗi xảy ra!");
      });
  };
}
const petApi = new PetApi();
export default petApi;
