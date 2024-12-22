import axios from "axios";
import REACT_LOCALHOST from "../../API_URL/host";
// import { authHeader } from '../../helpers';
const donvitinhAPI = {
    getAll: (obj) => {
        // console.log(`${REACT_LOCALHOST}api/view-service-category-duoc`,obj);
        return axios.post(`${REACT_LOCALHOST}/api/view-unitOfmeasure-duoc`,obj);
        //return axios.get(`${REACT_LOCALHOST}/api/show-employee`, {"headers":authHeader()});
    },
    create: (obj) => {
        return axios.post(`${REACT_LOCALHOST}/api/add-unitOfmeasure-duoc`, obj);
    },
    update: (obj) => {
        return axios.put(`${REACT_LOCALHOST}/api/update-unitOfmeasure-duoc`, obj);
    },
    delete: (UnitID,EmployeeID) => {
        return axios.delete(`${REACT_LOCALHOST}/api/delete-unitOfmeasure-duoc/${UnitID}/${EmployeeID}`);
    },
    //
    // getServiceModule: (obj) => {
    //     return axios.post(`${REACT_LOCALHOST}/api/view-service-module`,obj);
    //     // return axios.post(`${REACT_LOCALHOST}/api/view-service-module`,obj,{"headers":authHeader()});
    // },
    // getServiceGroupBHYT: (obj) => {
    //     return axios.post(`${REACT_LOCALHOST}/api/view-service-group-bhyt`,obj);
    //     // return axios.post(`${REACT_LOCALHOST}/api/view-service-group-bhyt`,obj,{"headers":authHeader()});
    // },
};

export default donvitinhAPI;
