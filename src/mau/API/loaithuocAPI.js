import axios from "axios";
import REACT_LOCALHOST from "../../API_URL/host";
// import { authHeader } from '../../helpers';
const loaithuocAPI = {
    getAll: (obj) => {
        // console.log(`${REACT_LOCALHOST}api/view-service-category-duoc`,obj);
        return axios.post(`${REACT_LOCALHOST}/api/view-service-category-duoc `,obj);
        //return axios.get(`${REACT_LOCALHOST}/api/show-employee`, {"headers":authHeader()});
    },
    create: (obj) => {
        return axios.post(`${REACT_LOCALHOST}/api/add-service-category-duoc`, obj);
    },
    update: (obj) => {
        return axios.put(`${REACT_LOCALHOST}/api/update-service-category-duoc`, obj);
    },
    delete: (ServiceCategoryID,EmployeeID) => {
        return axios.delete(`${REACT_LOCALHOST}/api/delete-service-category-duoc/${ServiceCategoryID}/${EmployeeID}`);
    },
};

export default loaithuocAPI;
