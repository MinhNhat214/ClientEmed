import axios from "axios";
import REACT_LOCALHOST from "../../API_URL/host";
// import { authHeader } from '../../helpers';
const hangsanxuatAPI = {
    getAll: (obj) => {
        return axios.post(`${REACT_LOCALHOST}/api/view-medproducer-duoc`,obj);
        //return axios.get(`${REACT_LOCALHOST}/api/show-employee`, {"headers":authHeader()});
    },
    create: (obj) => {
        return axios.post(`${REACT_LOCALHOST}/api/add-medproducer-duoc`, obj);
    },
    update: (obj) => {
        return axios.put(`${REACT_LOCALHOST}/api/update-medproducer-duoc`, obj);
    },
    delete: (ServiceGroupID,EmployeeID) => {
        return axios.delete(`${REACT_LOCALHOST}/api/delete-medproducer-duoc/${ServiceGroupID}/${EmployeeID}`);
    },
};

export default hangsanxuatAPI;
