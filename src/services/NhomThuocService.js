/**
 * 200 OK - CODE CỦA MÌNH
 */

import axios from 'axios';
// import BASE_URL from "../API_URL/ApiUrl";
import BASE_URL from "../Mock/env";

export const fetchServiceModules = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/api/view-service-module/`,
            { ServiceModuleCode: '' });
        return response.data;
    } catch (error) {
        console.error('Error fetching "service module"', error);
        throw error;
    }
};

export const fetchServiceGroupBHYT = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/api/view-service-group-bhYT`,
            { ServiceGroupBHYT_ID: '' });
        return response.data;
    } catch (error) {
        console.error('Error fetching "service group BHYT"');
        throw error;
    }
}
//add
export const addServiceGroupDuoc = async (data) => {
    try{
        const response = await axios.post(`${BASE_URL}/api/add-service-group-duoc`, data)
        return response.data;
    }catch (error) {
        console.error('Error creating service group', error);
        throw error;
    }
}

//index
export const viewServiceGroupDuoc = async (data) => {
    try{
        const response = await axios.post(`${BASE_URL}/api/view-service-group-duoc/`,
            { ServiceGroup_ID: '' });
        // console.log('recordset tu fetch', response.data.recordset)
        return response.data.recordset;
    }catch (error) {
        console.error('Error get service group', error);
        throw error;
    }
}

export const updateServiceGroupDuoc = async (data) => {
    try{
        const response = await axios.post(`${BASE_URL}/api/update-service-group-duoc/`);
        // console.log('recordset tu fetch', response.data.recordset)
        return response.data;
    }catch (error) {
        console.error('Error update service group', error);
        throw error;
    }
}


/**
 * FORMAT
 */
// import axios from "axios";
// import REACT_LOCALHOST from "../host";
// import { authHeader } from '../../helpers';
// const nhomthuocAPI = {
//     getAll: (obj) => {
//         return axios.post(`${REACT_LOCALHOST}/api/view-service-group-duoc`,obj);
//         //return axios.get(`${REACT_LOCALHOST}/api/show-employee`, {"headers":authHeader()});
//     },
//     create: (obj) => {
//         return axios.post(`${REACT_LOCALHOST}/api/add-service-group-duoc`, obj);
//     },
//     update: (obj) => {
//         return axios.put(`${REACT_LOCALHOST}/api/update-service-group-duoc`, obj);
//     },
//     delete: (ServiceGroup_ID,EmployeeID) => {
//         return axios.delete(`${REACT_LOCALHOST}/api/delete-service-group-duoc/${ServiceGroup_ID}/${EmployeeID}`);
//     },
//
//     getServiceModule: (obj) => {
//         return axios.post(`${REACT_LOCALHOST}/api/view-service-module`,obj);
//         // return axios.post(`${REACT_LOCALHOST}/api/view-service-module`,obj,{"headers":authHeader()});
//     },
//     getServiceGroupBHYT: (obj) => {
//         return axios.post(`${REACT_LOCALHOST}/api/view-service-group-bhyt`,obj);
//         // return axios.post(`${REACT_LOCALHOST}/api/view-service-group-bhyt`,obj,{"headers":authHeader()});
//     },
// };
//
// export default nhomthuocAPI;
//
