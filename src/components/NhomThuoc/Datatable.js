// import React, {useState, useEffect, useRef} from "react";
// import {Table, Button, Dropdown, Menu, Checkbox} from "antd";
// import ThaoTac from "./ThaoTac";
// import {viewServiceGroupDuoc} from "../../services/NhomThuocService";
//
// const Datatable = (props) => {
//   const {data} = props;
//
//   const columns = [
//       //dataIndex: tên trường trong data nạp vào bảng
//       //key: xác định cột
//
//     {title: "STT", dataIndex: "STT", key: ""},
//     {title: "Mã nhóm", dataIndex: "ServiceGroupCode", key: ""},
//     {title: "Tên nhóm", dataIndex: "ServiceGroupName", key: ""},
//     {title: "Phân hệ", dataIndex: "ServiceGroup_ID", key: ""},
//     {title: "Nhóm BHYT", dataIndex: "ServiceGroupBHYT_ID", key: ""},
//
//     {
//       title: "Thao tác",
//       key: "action",
//       width: "10%",
//       render: (_, record, index) => <ThaoTac index={index}/>,
//     },
//   ];
//
//   return (
//       <Table
//           columns={columns}
//           dataSource={data}
//           rowKey="nhom"
//           scroll={{x: "max-content"}}
//           className="data-table"
//       />
//   );
// };
//
// export default Datatable;

/**
 * BLACKBOX UPDATE
 */
// import React, { useState, useEffect } from "react";
// import { Table, Button, Dropdown, Menu, Checkbox, message } from "antd";
// import ThaoTac from "./ThaoTac";
// import { viewServiceGroupDuoc } from "../../services/NhomThuocService"; // Import API
//
// const Datatable = () => {
//   const [data, setData] = useState([]);
//
//   // Fetch data from API
//   const fetchData = async () => {
//     try {
//       const response = await viewServiceGroupDuoc(); // Gọi API
//       const records = response.recordsets[0]; // Lấy dữ liệu từ recordsets
//       setData(records); // Cập nhật state với dữ liệu nhận được
//     } catch (error) {
//       message.error("Failed to fetch data from API");
//       console.error("Error fetching data: ", error);
//     }
//   };
//
//   useEffect(() => {
//     fetchData(); // Gọi hàm fetchData khi component mount
//   }, []);
//
//   const columns = [
//     { title: "Mã nhóm", dataIndex: "ServiceGroup_ID", key: "ServiceGroup_ID" },
//     { title: "Tên nhóm", dataIndex: "ServiceGroupName", key: "ServiceGroupName" },
//     { title: "Phân hệ", dataIndex: "ServiceModuleCode", key: "ServiceModuleCode" },
//     { title: "Nhóm BHYT", dataIndex: "ServiceGroupBHYT_ID", key: "ServiceGroupBHYT_ID" },
//     { title: "Điện thoại", dataIndex: "EmployeeID", key: "EmployeeID" }, // Giả sử EmployeeID là điện thoại
//
//     {
//       title: "Thao tác",
//       key: "action",
//       width: "10%",
//       render: (_, record, index) => <ThaoTac index={index} />,
//     },
//   ];
//
//   return (
//       <Table
//           columns={columns}
//           dataSource={data}
//           rowKey="ServiceGroup_ID" // Sử dụng ServiceGroup_ID làm khóa
//           scroll={{ x: "max-content" }}
//           className="data-table"
//       />
//   );
// };
//
// export default Datatable;

/**
 * CHUYỂN ĐỔI CODE SANG REACT, KHÔNG SỬ DỤNG THƯ VIỆN
 */

// import React from "react";
// import ThaoTac from "./ThaoTac";
//
// const Datatable = (props) => {
//   const { data = [] } = props; // Cung cấp giá trị mặc định cho data
//
//   const renderTableHeader = () => {
//     return (
//         <tr>
//           <th>STT</th>
//           <th>Mã nhóm</th>
//           <th>Tên nhóm</th>
//           <th>Phân hệ</th>
//           <th>Nhóm BHYT</th>
//           <th>Thao tác</th>
//         </tr>
//     );
//   };
//
//   const renderTableBody = () => {
//     // Kiểm tra data trước khi gọi map
//     if (!Array.isArray(data)) {
//       return <tr><td colSpan="6">Không có dữ liệu</td></tr>; // Thông báo không có dữ liệu
//     }
//
//     return data.map((record, index) => (
//         <tr key={index}>
//           <td>{record.STT}</td>
//           <td>{record.ServiceGroupCode}</td>
//           <td>{record.ServiceGroupName}</td>
//           <td>{record.ServiceGroup_ID}</td>
//           <td>{record.ServiceGroupBHYT_ID}</td>
//           <td><ThaoTac index={index} /></td>
//         </tr>
//     ));
//   };
//
//   return (
//       <div className="data-table">
//         <table>
//           <thead>
//           {renderTableHeader()}
//           </thead>
//           <tbody>
//           {renderTableBody()}
//           </tbody>
//         </table>
//       </div>
//   );
// };
//
// export default Datatable;
/**
 * BLACKBOX UPDATE 03/11/2024 - 17h:20
 */
// import React, { useState, useEffect } from "react";
// import { Table } from "antd";
// import ThaoTac from "./ThaoTac";
// import { viewServiceGroupDuoc } from "../../services/NhomThuocService";
//
// const Datatable = () => {
//     const [data, setData] = useState([]);
//
//     // Gọi API khi component được mount
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const result = await viewServiceGroupDuoc();
//                 setData(result); // Giả sử result là mảng dữ liệu
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };
//
//         fetchData();
//     }, []); // Chỉ chạy một lần khi component được mount
//
//     const columns = [
//         { title: "STT", dataIndex: "STT", key: "STT" },
//         { title: "Mã nhóm", dataIndex: "ServiceGroupCode", key: "ServiceGroupCode" },
//         { title: "Tên nhóm", dataIndex: "ServiceGroupName", key: "ServiceGroupName" },
//         { title: "Phân hệ", dataIndex: "ServiceGroup_ID", key: "ServiceGroup_ID" },
//         { title: "Nhóm BHYT", dataIndex: "ServiceGroupBHYT_ID", key: "ServiceGroupBHYT_ID" },
//         {
//             title: "Thao tác",
//             key: "action",
//             width: "10%",
//             render: (_, record, index) => <ThaoTac index={index} />,
//         },
//     ];
//
//     return (
//         <Table
//             columns={columns}
//             dataSource={data}
//             rowKey="ServiceGroupCode" // Hoặc bất kỳ trường nào duy nhất trong dữ liệu
//             scroll={{ x: "max-content" }}
//             className="data-table"
//         />
//     );
// };
//
// export default Datatable;

/**
 * BLACKBOX UPDATE 03/11/2024 - 19h:07
 */
//
// import React from "react";
// import { Table } from "antd";
// import ThaoTac from "./ThaoTac";
//
// const Datatable = (props) => {
//     const { data } = props; // Nhận dữ liệu từ props
//
//     console.log('Data Table',data);
//
//     const columns = [
//         { title: "STT", dataIndex: "STT", key: "STT" },
//         { title: "Mã nhóm", dataIndex: "ServiceGroupCode", key: "ServiceGroupCode" },
//         { title: "Tên nhóm", dataIndex: "ServiceGroupName", key: "ServiceGroupName" },
//         { title: "Phân hệ", dataIndex: "ServiceGroup_ID", key: "ServiceGroup_ID" },
//         { title: "Nhóm BHYT", dataIndex: "ServiceGroupBHYT_ID", key: "ServiceGroupBHYT_ID" },
//         {
//             title: "Thao tác",
//             key: "action",
//             width: "10%",
//             render: (_, record, index) => <ThaoTac index={index} />,
//         },
//     ];
//
//     return (
//         <Table
//             columns={columns}
//             dataSource={data} // Sử dụng data từ props
//             rowKey="ServiceGroupCode" // Hoặc bất kỳ trường nào duy nhất trong dữ liệu
//             scroll={{ x: "max-content" }}
//             className="data-table"
//         />
//     );
// };
//
// export default Datatable;

/**
 * BLACKBOX UPDATE 03/11/2024 - 19h:50
 */

// import React, { useEffect, useState } from "react";
// import { Table } from "antd";
// import ThaoTac from "./ThaoTac";
// import { viewServiceGroupDuoc } from "../../services/NhomThuocService"; // Import API
//
// const Datatable = () => {
//     const [data, setData] = useState([]); // State để lưu trữ dữ liệu
//
//     // Gọi API khi component được mount
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const result = await viewServiceGroupDuoc(); // Gọi API
//                 console.log('Service Group Duoc:', result);
//                 setData(result); // Cập nhật state với dữ liệu nhận được
//             } catch (error) {
//                 console.error('Error fetching service group duoc:', error);
//             }
//         };
//
//         fetchData();
//     }, []); // Chạy một lần khi component được mount
//
//     const columns = [
//         { title: "STT", dataIndex: "STT", key: "STT" },
//         { title: "Mã nhóm", dataIndex: "ServiceGroupCode", key: "ServiceGroupCode" },
//         { title: "Tên nhóm", dataIndex: "ServiceGroupName", key: "ServiceGroupName" },
//         { title: "Phân hệ", dataIndex: "ServiceGroup_ID", key: "ServiceGroup_ID" },
//         { title: "Nhóm BHYT", dataIndex: "ServiceGroupBHYT_ID", key: "ServiceGroupBHYT_ID" },
//         {
//             title: "Thao tác",
//             key: "action",
//             width: "10%",
//             render: (_, record, index) => <ThaoTac index={index} />,
//         },
//     ];
//
//     return (
//         <Table
//             columns={columns}
//             dataSource={data} // Sử dụng data từ state
//             rowKey="ServiceGroupCode" // Hoặc bất kỳ trường nào duy nhất trong dữ liệu
//             scroll={{ x: "max-content" }}
//             className="data-table"
//         />
//     );
// };
//
// export default Datatable;

/**
 * Chạy được - BLACKBOX UPDATE - 03/11/2024 - 20h:20p - CODE REACT
 */

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
//
// const ServiceGroupTable = () => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.post('http://localhost:5000/api/view-service-group-duoc', {
//                     ServiceGroup_ID: '' // Gửi ServiceGroup_ID là chuỗi rỗng
//                 });
//                 setData(response.data.recordsets);
//             } catch (err) {
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         };
//
//         fetchData();
//     }, []);
//
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error fetching data: {error.message}</div>;
//
//     return (
//         <div>
//             <h1>Service Group Table</h1>
//             <table>
//                 <thead>
//                 <tr>
//                     <th>ServiceGroup_ID</th>
//                     <th>ServiceGroupCode</th>
//                     <th>ServiceGroupName</th>
//                     <th>ServiceModuleCode</th>
//                     <th>STT</th>
//                     <th>ServiceGroupBHYT_ID</th>
//                     <th>EmployeeID</th>
//                     <th>Type_</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {data.map((item) => (
//                     <tr key={item.ServiceGroup_ID}>
//                         <td>{item.ServiceGroup_ID}</td>
//                         <td>{item.ServiceGroupCode}</td>
//                         <td>{item.ServiceGroupName}</td>
//                         <td>{item.ServiceModuleCode}</td>
//                         <td>{item.STT}</td>
//                         <td>{item.ServiceGroupBHYT_ID}</td>
//                         <td>{item.EmployeeID}</td>
//                         <td>{item.Type_}</td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
//
// export default ServiceGroupTable;
//

/**
 * 200 OK
 */

// import React from 'react';
// import {Table} from 'antd';
// import ThaoTac from "../NhaCungCap/ThaoTac";
//
// const Datatable = ({serviceGroup}) => {
//
//     const columns = [
//         {title: 'ServiceGroup_ID', dataIndex: 'ServiceGroup_ID', key: 'ServiceGroup_ID'},
//         {title: 'ServiceGroupCode', dataIndex: 'ServiceGroupCode', key: 'ServiceGroupCode',},
//         {title: 'ServiceGroupName', dataIndex: 'ServiceGroupName', key: 'ServiceGroupName',},
//         {title: 'ServiceModuleCode', dataIndex: 'ServiceModuleCode', key: 'ServiceModuleCode',},
//         {title: 'STT', dataIndex: 'STT', key: 'STT',},
//         {title: 'ServiceGroupBHYT_ID', dataIndex: 'ServiceGroupBHYT_ID', key: 'ServiceGroupBHYT_ID',},
//         {title: 'EmployeeID', dataIndex: 'EmployeeID', key: 'EmployeeID',},
//         {title: 'Type_', dataIndex: 'Type_', key: 'Type_',},
//         {title: "Thao tác", key: "action", width: "10%",
//             render: (_, record, index) => <ThaoTac index={index}/>,},
//     ];
//
//     return (
//         <div>
//             <h1>Service Group Table</h1>
//             <Table
//                 dataSource={serviceGroup}
//                 columns={columns}
//                 rowKey="ServiceGroup_ID"
//                 scroll={{x: "max-content"}}
//             />
//         </div>
//     );
// };
//
// export default Datatable;

import React from 'react';
import { Table } from 'antd';
import ThaoTac from "../NhomThuoc/ThaoTac";

const Datatable = ({ serviceGroup, serviceModules, serviceGroupBHYT, onRefresh }) => {
    const columns = [
        {title: 'ServiceGroup_ID', dataIndex: 'ServiceGroup_ID', key: 'ServiceGroup_ID'},
        {title: 'ServiceGroupCode', dataIndex: 'ServiceGroupCode', key: 'ServiceGroupCode',},
        {title: 'ServiceGroupName', dataIndex: 'ServiceGroupName', key: 'ServiceGroupName',},
        {title: 'ServiceModuleCode', dataIndex: 'ServiceModuleCode', key: 'ServiceModuleCode',},
        {title: 'STT', dataIndex: 'STT', key: 'STT',},
        {title: 'ServiceGroupBHYT_ID', dataIndex: 'ServiceGroupBHYT_ID', key: 'ServiceGroupBHYT_ID',},
        {title: 'EmployeeID', dataIndex: 'EmployeeID', key: 'EmployeeID',},
        {title: 'Type_', dataIndex: 'Type_', key: 'Type_',},
        {
            title: "Thao tác",
            key: "action",
            width: "10%",
            render: (_, record) => (
                <ThaoTac
                    record={record}
                    serviceModules={serviceModules}
                    serviceGroupBHYT={serviceGroupBHYT}
                    onRefresh={onRefresh}
                />
            ),
        },
    ];

    return (
        <div>
            <h1>Service Group Table</h1>
            <Table
                dataSource={serviceGroup}
                columns={columns}
                rowKey="ServiceGroup_ID"
                scroll={{x: "max-content"}}
            />
        </div>
    );
};

export default Datatable;