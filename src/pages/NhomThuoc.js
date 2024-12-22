//src/pages/NhomThuoc.js
// import React, { useEffect, useState } from "react";
// import Header from "../components/NhomThuoc/Header";
// import Datatable from "../components/NhomThuoc/Datatable";
// import axios from 'axios';
// import BASE_URL from "../API_URL/ApiUrl";
//
// const NhomThuoc = () => {
//     const [serviceModules, setServiceModules] = useState([]);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.post(`${BASE_URL}/api/view-service-module`, { ServiceModuleCode: '' });
//                 setServiceModules(response.data); // Lưu trữ dữ liệu vào state
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };
//
//         fetchData();
//     }, []);
//
//     return (
//         <div className="dashboard">
//             <Header serviceModules={serviceModules} /> {/* Truyền dữ liệu vào Header */}
//             <Datatable />
//         </div>
//     );
// };
//
// export default NhomThuoc;
/**
 * 200 OK
 */
// import React, { useEffect, useState } from "react";
// import Header from "../components/NhomThuoc/Header";
// import Datatable from "../components/NhomThuoc/Datatable";
// import {fetchServiceModules, fetchServiceGroupBHYT, viewServiceGroupDuoc} from "../services/NhomThuocService"; // Import service
//
// const NhomThuoc = () => {
//     const [serviceModules, setServiceModules] = useState([]);
//     const [serviceGroupBHYT, setServiceGroupBHYT] = useState([]);
//     const [serviceGroup, setServiceGroup] = useState([]);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const serviceModule = await fetchServiceModules();
//                 // console.log('Service Modules:', serviceModule);
//                 setServiceModules(serviceModule);
//
//                 const serviceGroupBHYT = await fetchServiceGroupBHYT();
//                 // console.log('Service Group BHYT:', serviceGroupBHYT);
//                 setServiceGroupBHYT(serviceGroupBHYT);
//                 //test
//                 const serviceGroup = await viewServiceGroupDuoc();
//                 console.log('Service Group -> recordset:', serviceGroup);
//                 setServiceGroup(serviceGroup);
//
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };
//
//         fetchData();
//     }, []);
//
//     return (
//         <div className="dashboard">
//             <Header serviceModules={serviceModules} serviceGroupBHYT={serviceGroupBHYT} />
//             <Datatable serviceGroup={serviceGroup} />
//         </div>
//     );
// };
//
// export default NhomThuoc;
// //

/**
 * CLAUDE UPDATE 05/11/2024 - 11h:20m
 */
import React, { useEffect, useState } from "react";
import Header from "../components/NhomThuoc/Header";
import Datatable from "../components/NhomThuoc/Datatable";
import {
    fetchServiceModules,
    fetchServiceGroupBHYT,
    viewServiceGroupDuoc
} from "../services/NhomThuocService";

const NhomThuoc = () => {
    const [serviceModules, setServiceModules] = useState([]);
    const [serviceGroupBHYT, setServiceGroupBHYT] = useState([]);
    const [serviceGroup, setServiceGroup] = useState([]);

    const fetchData = async () => {
        try {
            const [moduleData, bhytData, groupData] = await Promise.all([
                fetchServiceModules(),
                fetchServiceGroupBHYT(),
                viewServiceGroupDuoc()
            ]);

            setServiceModules(moduleData);
            setServiceGroupBHYT(bhytData);
            setServiceGroup(groupData);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="dashboard">
            <Header
                serviceModules={serviceModules}
                serviceGroupBHYT={serviceGroupBHYT}
            />
            <Datatable
                serviceGroup={serviceGroup}
                serviceModules={serviceModules}
                serviceGroupBHYT={serviceGroupBHYT}
                onRefresh={fetchData}
            />
        </div>
    );
};

export default NhomThuoc;