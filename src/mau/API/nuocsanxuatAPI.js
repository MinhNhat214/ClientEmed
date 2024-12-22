import axios from "axios";
import REACT_LOCALHOST from "../../API_URL/host";
// import { authHeader } from '../../helpers';
const nuocsanxuatAPI = {
    getAll: (obj) => {
        // console.log(`${REACT_LOCALHOST}/api/view-service-group-duoc`,obj);
        return axios.post(`${REACT_LOCALHOST}/api/view-medcountry-duoc`,obj);
        //return axios.get(`${REACT_LOCALHOST}/api/show-employee`, {"headers":authHeader()});
    },
    create: (obj) => {
        return axios.post(`${REACT_LOCALHOST}/api/add-medcountry-duoc`, obj);
    },
    update: (obj) => {
        return axios.put(`${REACT_LOCALHOST}/api/update-medcountry-duoc`, obj);
    },
    delete: (CountryID,EmployeeID) => {
        return axios.delete(`${REACT_LOCALHOST}/api/delete-medcountry-duoc/${CountryID}/${EmployeeID}`);
    },

    // getServiceModule: (obj) => {
    //     return axios.post(`${REACT_LOCALHOST}/api/view-service-module`,obj);
    //     // return axios.post(`${REACT_LOCALHOST}/api/view-service-module`,obj,{"headers":authHeader()});
    // },
    // getServiceGroupBHYT: (obj) => {
    //     return axios.post(`${REACT_LOCALHOST}/api/view-service-group-bhyt`,obj);
    //     // return axios.post(`${REACT_LOCALHOST}/api/view-service-group-bhyt`,obj,{"headers":authHeader()});
    // },
};

export default nuocsanxuatAPI;
