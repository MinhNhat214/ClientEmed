import axios from "axios";
import REACT_LOCALHOST from "../../API_URL/host";
// import { authHeader } from '../../helpers';
const nhominAPI = {
    getAll: (obj) => {
        return axios.post(`${REACT_LOCALHOST}/api/view-group-printer-duoc`,obj);
        //return axios.get(`${REACT_LOCALHOST}/api/show-employee`, {"headers":authHeader()});
    },
    create: (obj) => {
        return axios.post(`${REACT_LOCALHOST}/api/add-group-printer-duoc`, obj);
    },
    update: (obj) => {
        return axios.put(`${REACT_LOCALHOST}/api/update-group-printer-duoc`, obj);
    },
    delete: (GroupPrinterID,EmployeeID) => {
        return axios.delete(`${REACT_LOCALHOST}/api/delete-group-printer-duoc/${GroupPrinterID}/${EmployeeID}`);
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

export default nhominAPI;
