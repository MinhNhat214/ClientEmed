import axios from "axios";
import REACT_LOCALHOST from "../../API_URL/host";
// import { authHeader } from '../../helpers';

const dichvukythuatAPI = {
    getAll: (obj) => {
        // console.log(`${REACT_LOCALHOST}/api/view-service-group-duoc`,obj);
        return axios.post(`${REACT_LOCALHOST}/api/view-med-services-vien-phi`,obj);
        //return axios.get(`${REACT_LOCALHOST}/api/show-employee`, {"headers":authHeader()});
    },

    // create: (obj) => {
    //     return axios.post(`${REACT_LOCALHOST}/api/add-items-duoc`, obj);
    // },
    // update: (obj) => {
    //     return axios.put(`${REACT_LOCALHOST}/api/update-items-duoc`, obj);
    // },
    // // delete: (ServiceGroupID,EmployeeID) => {
    // //     return axios.delete(`${REACT_LOCALHOST}/api/delete-service-group-duoc/${ServiceGroupID}/${EmployeeID}`);
    // // },
    //
    // //NHÓM THUỐC
    // getServiceGroup: (obj) => {
    //     return axios.post(`${REACT_LOCALHOST}/api/view-service-group-duoc`,obj);
    // },
    // //PHÂN LOẠI
    // getServiceCategory: (obj) => {
    //     return axios.post(`${REACT_LOCALHOST}/api/view-service-category-duoc `,obj);
    // },
    // //ĐƠN VỊ TÍNH
    // getUnitOfMeasure: (obj) => {
    //     return axios.post(`${REACT_LOCALHOST}/api/view-unitOfmeasure-duoc`,obj);
    // },
    //
    // //NHÓM IN
    // getGroupPrinter: (obj) => {
    //     return axios.post(`${REACT_LOCALHOST}/api/view-group-printer-duoc`,obj);
    // },
    // //HÃNG SẢN XUẤT
    // getMedProducer: (obj) => {
    //     return axios.post(`${REACT_LOCALHOST}/api/view-medproducer-duoc`,obj);
    // },
    // //NƯỚC SẢN XUẤT
    // getMedCountry: (obj) => {
    //     return axios.post(`${REACT_LOCALHOST}/api/view-medcountry-duoc`,obj);
    // },
    // //ĐƯỜNG DÙNG
    // getMedUsageDuoc: (Hide, UsageID) => {
    //     return axios.post(`${REACT_LOCALHOST}/api/view-med-usage-duoc`,Hide, UsageID);
    // },
};

export default dichvukythuatAPI;
