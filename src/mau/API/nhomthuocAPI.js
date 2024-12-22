import axios from "axios";
import REACT_LOCALHOST from "../../API_URL/host";
// import { authHeader } from '../../helpers';
const nhomthuocAPI = {
    getAll: (obj) => {
        // console.log(`${REACT_LOCALHOST}/api/view-service-group-duoc`,obj);
        return axios.post(`${REACT_LOCALHOST}/api/view-service-group-duoc`,obj);
        //return axios.get(`${REACT_LOCALHOST}/api/show-employee`, {"headers":authHeader()});
    },
    create: (obj) => {
        return axios.post(`${REACT_LOCALHOST}/api/add-service-group-duoc`, obj);
    },
    update: (obj) => {
        return axios.put(`${REACT_LOCALHOST}/api/update-service-group-duoc`, obj);
    },
    delete: (ServiceGroupID,EmployeeID) => {
        return axios.delete(`${REACT_LOCALHOST}/api/delete-service-group-duoc/${ServiceGroupID}/${EmployeeID}`);
    },

    getServiceModule: (obj) => {
        return axios.post(`${REACT_LOCALHOST}/api/view-service-module`,obj);
       // return axios.post(`${REACT_LOCALHOST}/api/view-service-module`,obj,{"headers":authHeader()});
    },
    getServiceGroupBHYT: (obj) => {
        return axios.post(`${REACT_LOCALHOST}/api/view-service-group-bhyt`,obj);
       // return axios.post(`${REACT_LOCALHOST}/api/view-service-group-bhyt`,obj,{"headers":authHeader()});
    },
};

export default nhomthuocAPI;
