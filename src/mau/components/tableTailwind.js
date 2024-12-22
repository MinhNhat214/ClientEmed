//
// import React, { useState, useRef, useEffect } from "react";
// import { Table, Input, Button, message, Modal } from "antd";
// import "./Combobox.css";
//
// const ComboboxTable = ({ options }) => {
//     const [selectedOption, setSelectedOption] = useState(null);
//     const [query, setQuery] = useState("");
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [focusedIndex, setFocusedIndex] = useState(0);
//     const [selectedDv, setSelectedDv] = useState([]); // Danh sách các dịch vụ được chọn
//     const comboBoxRef = useRef(); // Tham chiếu tới ComboboxTable
//
//     const dropdownRef = useRef();
//
//     // Lọc kết quả dựa trên `query`
//     const filteredOptions = query
//         ? options.filter((option) =>
//             Object.values(option).some((value) =>
//                 value.toString().toLowerCase().includes(query.toLowerCase())
//             )
//         )
//         : options;
//
//     useEffect(() => {
//         if (isDropdownOpen && dropdownRef.current) {
//             const focusedRow = dropdownRef.current.querySelectorAll("tr")[focusedIndex];
//             if (focusedRow) {
//                 focusedRow.scrollIntoView({ block: "nearest" });
//             }
//         }
//     }, [focusedIndex, isDropdownOpen]);
//     /**
//      * RUN
//      */
//     // const handleOptionClick = (option) => {
//     //     const exists = selectedDv.some((dv) => dv.id === option.id);
//     //     if (exists) {
//     //         message.warning(`Dịch vụ "${option.name}" đã tồn tại trong bảng.`);
//     //         return;
//     //     }
//     //     setSelectedDv((prev) => [option, ...prev]);
//     //     setQuery("");
//     //     setIsDropdownOpen(false);
//     // };
//     const handleOptionClick = (option) => {
//         const exists = selectedDv.some((dv) => dv.id === option.id);
//         if (exists) {
//             message.warning(`Dịch vụ "${option.name}" đã tồn tại trong bảng.`);
//             return;
//         }
//
//         setSelectedDv((prev) => {
//             const updatedDv = [option, ...prev];
//             setTimeout(() => {
//                 if (slInputRefs.current[0]) {
//                     slInputRefs.current[0].focus(); // Đặt tiêu điểm vào ô "Số lượng" của dòng đầu tiên
//                 }
//             }, 0);
//             return updatedDv;
//         });
//         setQuery("");
//         setIsDropdownOpen(false);
//     };
//
//
//     const handleInputFocus = () => {
//         setIsDropdownOpen(true);
//         setFocusedIndex(0);
//     };
//
//     const handleInputBlur = () => {
//         setTimeout(() => setIsDropdownOpen(false), 150);
//     };
//
//
//     const handleKeyDown = (event) => {
//         if (!isDropdownOpen) return;
//
//         if (event.key === "ArrowDown") {
//             setFocusedIndex((prevIndex) =>
//                 prevIndex + 1 < filteredOptions.length ? prevIndex + 1 : prevIndex
//             );
//         } else if (event.key === "ArrowUp") {
//             setFocusedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
//         } else if (event.key === "Enter") {
//             if (filteredOptions[focusedIndex]) {
//                 handleOptionClick(filteredOptions[focusedIndex]);
//             }
//         }
//     };
//
//     const handleChangeSL = (e, record, field) => {
//         const newValue = e.target.value;
//
//         const updatedDv = selectedDv.map(item =>
//             item.id === record.id
//                 ? {
//                     ...item,
//                     [field]: newValue,
//                     ...(field === 'sl' ? { total_price: newValue * item.price } : {})
//                 }
//                 : item
//         );
//         setSelectedDv(updatedDv);
//         console.log(updatedDv); // Kiểm tra đầu ra
//     };
//
//     const handleTabFocus = (event, targetRef) => {
//         if (event.key === "Tab") {
//             event.preventDefault(); // Ngăn chặn hành vi mặc định
//             if (targetRef.current) {
//                 targetRef.current.focus(); // Chuyển tiêu điểm tới thành phần mục tiêu
//             }
//         }
//     };
//
//     const handleDelete = (id, name) => {
//         Modal.confirm({
//             title: "Xác nhận xóa",
//             content: `Bạn có muốn xóa dịch vụ ${name} này?`,
//             okText: "Có",
//             cancelText: "Không",
//             onOk: () => {
//                 setSelectedDv((prev) => prev.filter((dv) => dv.id !== id));
//                 message.success(`Xóa dịch vụ "${name}" thành công!`);
//             },
//         });
//     };
//
//     // Cột của Ant Design Table
//     const tableColumns = [
//         { title: "Dịch vụ", dataIndex: "name", key: "name" },
//         {
//             title: "Chi tiết",
//             dataIndex: "detail",
//             key: "detail",
//         },
//         {
//             title: "Số lượng",
//             dataIndex: "sl",
//             key: "sl",
//             render: (text, record) => (
//                 <Input
//                     type="number"
//                     value={record.sl || 1} // Lấy giá trị số lượng từ dữ liệu
//                     min={1} // Giới hạn số lượng tối thiểu
//                     // value={record.sl || 1}
//                     onChange={(e) => handleChangeSL(e, record, "sl")} // Gọi hàm khi thay đổi
//                     style={{ width: "100%" }}
//                 />
//             ),
//         },
//         {
//             title: "Đơn giá",
//             dataIndex: "price",
//             key: "price",
//         },
//         {
//             title: "Tổng tiền",
//             dataIndex: "total_price",
//             key: "total_price",
//         },
//         {
//             title: "Loại",
//             dataIndex: "type",
//             key: "type",
//         },
//         {
//             title: 'Đối tượng',
//             key: 'object',
//             render: (number, record) => (
//                 <select
//                     value={record.Object}
//                     onChange={(e) => handleChangeSL(e, record, 'object')}
//                     style={{
//                         width: "100%",
//                         padding: "5px",
//                     }}
//                     // onKeyDown={handleKeyDown}
//                     onKeyDown={(e) => handleTabFocus(e, comboBoxRef)}
//                 >
//                     <option value="1">Dịch vụ</option>
//                     <option value="2">BHYT</option>
//                 </select>
//             ),
//         },
//         {
//             title: "Ngày",
//             dataIndex: "date",
//             key: "date",
//         },
//         {
//             title: "Hành động",
//             key: "action",
//             render: (_, record) => (
//                 <Button
//                     type="primary"
//                     danger
//                     onClick={() => handleDelete(record.id, record.name)}
//                 >
//                     Xóa
//                 </Button>
//             ),
//         },
//     ];
//     const tableRef = useRef();
//
//     //ref handle key "sl"
//     const slInputRefs = useRef({}); // Lưu trữ tham chiếu đến các ô "Số lượng"
//
//
//     return (
//         <div className="combobox-container">
//             {/* Input Field */}
//             <div className="input-container">
//                 <Input
//                     ref={comboBoxRef}
//                     placeholder="Search by name, detail, or type..."
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     onFocus={handleInputFocus}
//                     onBlur={handleInputBlur}
//                     onKeyDown={handleKeyDown}
//                 />
//             </div>
//
//             {/* Dropdown Menu */}
//             {isDropdownOpen && (
//                 <div className="dropdown-menu" ref={dropdownRef}>
//                     <table className="dropdown-table">
//                         <tbody>
//                         {filteredOptions.length === 0 ? (
//                             <tr>
//                                 <td colSpan="4" className="no-results">
//                                     No results found
//                                 </td>
//                             </tr>
//                         ) : (
//                             filteredOptions.map((option, index) => (
//                                 // <tr
//                                 //     key={option.id}
//                                 //     className={`dropdown-row ${
//                                 //         index === focusedIndex ? "focused-row" : ""
//                                 //     }`}
//                                 //     onClick={() => handleOptionClick(option)}
//                                 // >
//                                 //     <td className="dropdown-cell">{option.name}</td>
//                                 //     <td className="dropdown-cell">{option.detail}</td>
//                                 //     <td className="dropdown-cell">{option.sl}</td>
//                                 //     <td className="dropdown-cell">{option.price}</td>
//                                 //     <td className="dropdown-cell">{option.total_price}</td>
//                                 //     <td className="dropdown-cell">{option.type}</td>
//                                 //     <td className="dropdown-cell">{option.date}</td>
//                                 // </tr>
//                                 <tr
//                                     key={option.id}
//                                     className={`dropdown-row ${
//                                         index === focusedIndex ? "focused-row" : ""
//                                     }`}
//                                     onClick={() => handleOptionClick(option)} // Chọn dịch vụ khi click
//                                     onKeyDown={(e) => {
//                                         if (e.key === "Enter") {
//                                             e.preventDefault(); // Ngăn hành vi mặc định của Enter
//                                             handleOptionClick(option); // Thêm dịch vụ vào bảng
//
//                                             setTimeout(() => {
//                                                 const rowIndex = selectedDv.length; // Vị trí dòng mới
//                                                 if (tableRef.current) {
//                                                     const input = tableRef.current.querySelector(
//                                                         `tr:nth-child(${rowIndex + 1}) input[type="number"]`
//                                                     );
//                                                     if (input) {
//                                                         input.focus(); // Đặt tiêu điểm vào ô số lượng
//                                                     }
//                                                 }
//                                             }, 0);
//                                         }
//                                     }}
//                                 >
//                                     <td className="dropdown-cell">{option.name}</td>
//                                     <td className="dropdown-cell">{option.detail}</td>
//                                     <td className="dropdown-cell">{option.sl}</td>
//                                     <td className="dropdown-cell">{option.price}</td>
//                                     <td className="dropdown-cell">{option.total_price}</td>
//                                     <td className="dropdown-cell">{option.type}</td>
//                                     <td className="dropdown-cell">{option.date}</td>
//                                 </tr>
//                             ))
//                         )}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//
//             {/* Ant Design Table */}
//             <Table
//                 ref = {tableRef}
//                 dataSource={selectedDv}
//                 columns={tableColumns}
//                 rowKey="id"
//                 pagination={false}
//                 style={{marginTop: 20}}
//             />
//         </div>
//     );
// };
//
// export default ComboboxTable;

// ON BOARD CHƯA XỬ LÍ HIỂN THỊ MENU COMBOBOX
// import React, { useState, useRef, useEffect } from "react";
// import { Table, Input, Button, message, Modal } from "antd";
// import dichvukythuatAPI from "../API/dichvukythuatAPI";
// import giadvktAPI from "../API/giadvktAPI";
// import "./Combobox.css";
//
// const ComboboxTable = () => {
//     const [selectedOption, setSelectedOption] = useState(null);
//     const [query, setQuery] = useState("");
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [focusedIndex, setFocusedIndex] = useState(0);
//     const [selectedDv, setSelectedDv] = useState([]); // Danh sách các dịch vụ được chọn
//     const [listDVKT, setListDVKT] = useState([]);
//     const [listGiaDVKT, setListGiaDVKT] = useState([]);
//
//     const comboBoxRef = useRef(); // Tham chiếu tới ComboboxTable
//     const dropdownRef = useRef();
//     const tableRef = useRef();
//     const slInputRefs = useRef({}); // Lưu trữ tham chiếu đến các ô "Số lượng"
//
//     // Lấy dữ liệu từ API
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const dvktData = await dichvukythuatAPI.getAll("ServiceID");
//                 setListDVKT(dvktData.data);
//
//                 const giaDvktData = await giadvktAPI.getAll("Hide");
//                 setListGiaDVKT(giaDvktData.data);
//             } catch (error) {
//                 message.error("Lỗi khi tải dữ liệu từ API");
//             }
//         };
//
//         fetchData();
//     }, []);
//
//     // Lọc kết quả dựa trên `query`
//     const filteredOptions = query
//         ? listDVKT.filter((option) =>
//             Object.values(option).some((value) =>
//                 value.toString().toLowerCase().includes(query.toLowerCase())
//             )
//         )
//         : listDVKT;
//
//     useEffect(() => {
//         if (isDropdownOpen && dropdownRef.current) {
//             const focusedRow = dropdownRef.current.querySelectorAll("tr")[focusedIndex];
//             if (focusedRow) {
//                 focusedRow.scrollIntoView({ block: "nearest" });
//             }
//         }
//     }, [focusedIndex, isDropdownOpen]);
//
//     const handleOptionClick = (option) => {
//         const gia = listGiaDVKT.find((g) => g.ServiceID === option.ServiceID);
//         const unitPrice = gia ? gia.UnitPrice : 0;
//
//         const exists = selectedDv.some((dv) => dv.ServiceID === option.ServiceID);
//         if (exists) {
//             message.warning(`Dịch vụ "${option.ServiceName}" đã tồn tại trong bảng.`);
//             return;
//         }
//
//         setSelectedDv((prev) => {
//             const updatedDv = [
//                 {
//                     ...option,
//                     Price: unitPrice,
//                     SL: 1,
//                     TotalPrice: unitPrice,
//                 },
//                 ...prev,
//             ];
//             setTimeout(() => {
//                 if (slInputRefs.current[0]) {
//                     slInputRefs.current[0].focus();
//                 }
//             }, 0);
//             return updatedDv;
//         });
//         setQuery("");
//         setIsDropdownOpen(false);
//     };
//
//     const handleInputFocus = () => {
//         setIsDropdownOpen(true);
//         setFocusedIndex(0);
//     };
//
//     const handleInputBlur = () => {
//         setTimeout(() => setIsDropdownOpen(false), 150);
//     };
//
//     const handleKeyDown = (event) => {
//         if (!isDropdownOpen) return;
//
//         if (event.key === "ArrowDown") {
//             setFocusedIndex((prevIndex) =>
//                 prevIndex + 1 < filteredOptions.length ? prevIndex + 1 : prevIndex
//             );
//         } else if (event.key === "ArrowUp") {
//             setFocusedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
//         } else if (event.key === "Enter") {
//             if (filteredOptions[focusedIndex]) {
//                 handleOptionClick(filteredOptions[focusedIndex]);
//             }
//         }
//     };
//
//     const handleChangeSL = (e, record, field) => {
//         const newValue = e.target.value;
//
//         const updatedDv = selectedDv.map((item) =>
//             item.ServiceID === record.ServiceID
//                 ? {
//                     ...item,
//                     [field]: newValue,
//                     ...(field === "SL" ? { TotalPrice: newValue * item.Price } : {}),
//                 }
//                 : item
//         );
//         setSelectedDv(updatedDv);
//     };
//
//     const handleTabFocus = (event, targetRef) => {
//         if (event.key === "Tab") {
//             event.preventDefault();
//             if (targetRef.current) {
//                 targetRef.current.focus();
//             }
//         }
//     };
//
//     const handleDelete = (ServiceID, ServiceName) => {
//         Modal.confirm({
//             title: "Xác nhận xóa",
//             content: `Bạn có muốn xóa dịch vụ ${ServiceName} này?`,
//             okText: "Có",
//             cancelText: "Không",
//             onOk: () => {
//                 setSelectedDv((prev) => prev.filter((dv) => dv.ServiceID !== ServiceID));
//                 message.success(`Xóa dịch vụ "${ServiceName}" thành công!`);
//             },
//         });
//     };
//
//     // Cột của Ant Design Table
//     const tableColumns = [
//         { title: "Dịch vụ", dataIndex: "ServiceName", key: "ServiceName" },
//         {
//             title: "Số lượng",
//             dataIndex: "SL",
//             key: "SL",
//             render: (text, record) => (
//                 <Input
//                     type="number"
//                     value={record.SL || 1}
//                     min={1}
//                     onChange={(e) => handleChangeSL(e, record, "SL")}
//                     style={{ width: "100%" }}
//                 />
//             ),
//         },
//         { title: "Đơn giá", dataIndex: "Price", key: "Price" },
//         {
//             title: "Tổng tiền",
//             dataIndex: "TotalPrice",
//             key: "TotalPrice",
//         },
//         {
//             title: "Hành động",
//             key: "action",
//             render: (_, record) => (
//                 <Button
//                     type="primary"
//                     danger
//                     onClick={() => handleDelete(record.ServiceID, record.ServiceName)}
//                 >
//                     Xóa
//                 </Button>
//             ),
//         },
//     ];
//
//     return (
//         <div className="combobox-container">
//             {/* Input Field */}
//             <div className="input-container">
//                 <Input
//                     ref={comboBoxRef}
//                     placeholder="Tìm kiếm dịch vụ..."
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     onFocus={handleInputFocus}
//                     onBlur={handleInputBlur}
//                     onKeyDown={handleKeyDown}
//                 />
//             </div>
//
//             {/* Dropdown Menu */}
//             {isDropdownOpen && (
//                 <div className="dropdown-menu" ref={dropdownRef}>
//                     <table className="dropdown-table">
//                         <tbody>
//                         {filteredOptions.length === 0 ? (
//                             <tr>
//                                 <td colSpan="3" className="no-results">
//                                     Không tìm thấy kết quả
//                                 </td>
//                             </tr>
//                         ) : (
//                             filteredOptions.map((option, index) => (
//                                 <tr
//                                     key={option.ServiceID}
//                                     className={`dropdown-row ${
//                                         index === focusedIndex ? "focused-row" : ""
//                                     }`}
//                                     onClick={() => handleOptionClick(option)}
//                                 >
//                                     <td className="dropdown-cell">{option.ServiceName}</td>
//                                 </tr>
//                             ))
//                         )}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//
//             {/* Ant Design Table */}
//             <Table
//                 ref={tableRef}
//                 dataSource={selectedDv}
//                 columns={tableColumns}
//                 rowKey="ServiceID"
//                 pagination={false}
//                 style={{ marginTop: 20 }}
//             />
//         </div>
//     );
// };
//
// export default ComboboxTable;

// ON BOARD CÒN TÍCH HỢP CODE ĐIỀU HƯỚNG PHÍM TẮT
// import React, { useState, useRef, useEffect } from "react";
// import { Table, Input, Button, message, Modal } from "antd";
// import dichvukythuatAPI from "../API/dichvukythuatAPI";
// import giadvktAPI from "../API/giadvktAPI";
// import "./Combobox.css";
//
// const ComboboxTable = () => {
//     const [selectedOption, setSelectedOption] = useState(null);
//     const [query, setQuery] = useState("");
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [focusedIndex, setFocusedIndex] = useState(0);
//     const [selectedDv, setSelectedDv] = useState([]);
//     const [listDVKT, setListDVKT] = useState([]);
//     const [listGiaDVKT, setListGiaDVKT] = useState([]);
//
//     const comboBoxRef = useRef();
//     const dropdownRef = useRef();
//     const tableRef = useRef();
//     const slInputRefs = useRef({});
//
//     // Fetch data from API
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const dvktData = await dichvukythuatAPI.getAll("ServiceID");
//                 setListDVKT(dvktData.data);
//
//                 const giaDvktData = await giadvktAPI.getAll("Hide");
//                 setListGiaDVKT(giaDvktData.data);
//             } catch (error) {
//                 message.error("Lỗi khi tải dữ liệu từ API");
//             }
//         };
//
//         fetchData();
//     }, []);
//
//     // Filter options combining both lists
//     const filteredOptions = query
//         ? listDVKT.filter((service) => {
//             const priceData = listGiaDVKT.find(price => price.ServiceID === service.ServiceID);
//             if (!priceData) return false;
//
//             const searchString = `${service.ServiceName} ${priceData.ObjectID === 1 ? 'DV' : 'BHYT'} ${priceData.UnitPrice}`.toLowerCase();
//             return searchString.includes(query.toLowerCase());
//         })
//         : listDVKT.filter(service =>
//             listGiaDVKT.some(price => price.ServiceID === service.ServiceID)
//         );
//
//     // Auto-scroll to focused item
//     useEffect(() => {
//         if (isDropdownOpen && dropdownRef.current) {
//             const focusedRow = dropdownRef.current.querySelectorAll("tr")[focusedIndex + 1]; // +1 for header row
//             if (focusedRow) {
//                 focusedRow.scrollIntoView({ block: "nearest" });
//             }
//         }
//     }, [focusedIndex, isDropdownOpen]);
//
//     const handleOptionClick = (option) => {
//         const priceData = listGiaDVKT.find((g) => g.ServiceID === option.ServiceID);
//         if (!priceData) return;
//
//         const exists = selectedDv.some((dv) => dv.ServiceID === option.ServiceID);
//         if (exists) {
//             message.warning(`Dịch vụ "${option.ServiceName}" đã tồn tại trong bảng.`);
//             return;
//         }
//
//         setSelectedDv((prev) => {
//             const updatedDv = [
//                 {
//                     ...option,
//                     Price: priceData.UnitPrice,
//                     ObjectType: priceData.ObjectID === 1 ? 'DV' : 'BHYT',
//                     SL: 1,
//                     TotalPrice: priceData.UnitPrice,
//                 },
//                 ...prev,
//             ];
//             setTimeout(() => {
//                 if (slInputRefs.current[0]) {
//                     slInputRefs.current[0].focus();
//                 }
//             }, 0);
//             return updatedDv;
//         });
//         setQuery("");
//         setIsDropdownOpen(false);
//     };
//
//     const handleInputFocus = () => {
//         setIsDropdownOpen(true);
//         setFocusedIndex(0);
//     };
//
//     const handleInputBlur = () => {
//         setTimeout(() => setIsDropdownOpen(false), 150);
//     };
//
//     const handleKeyDown = (event) => {
//         if (!isDropdownOpen) return;
//
//         switch (event.key) {
//             case "ArrowDown":
//                 event.preventDefault();
//                 setFocusedIndex((prevIndex) =>
//                     prevIndex + 1 < filteredOptions.length ? prevIndex + 1 : prevIndex
//                 );
//                 break;
//             case "ArrowUp":
//                 event.preventDefault();
//                 setFocusedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
//                 break;
//             case "Enter":
//                 if (filteredOptions[focusedIndex]) {
//                     handleOptionClick(filteredOptions[focusedIndex]);
//                 }
//                 break;
//             default:
//                 break;
//         }
//     };
//
//     const handleChangeSL = (e, record, field) => {
//         const newValue = parseInt(e.target.value) || 1;
//
//         setSelectedDv((prev) =>
//             prev.map((item) =>
//                 item.ServiceID === record.ServiceID
//                     ? {
//                         ...item,
//                         SL: newValue,
//                         TotalPrice: newValue * item.Price,
//                     }
//                     : item
//             )
//         );
//     };
//
//     const handleDelete = (ServiceID, ServiceName) => {
//         Modal.confirm({
//             title: "Xác nhận xóa",
//             content: `Bạn có muốn xóa dịch vụ ${ServiceName} này?`,
//             okText: "Có",
//             cancelText: "Không",
//             onOk: () => {
//                 setSelectedDv((prev) => prev.filter((dv) => dv.ServiceID !== ServiceID));
//                 message.success(`Xóa dịch vụ "${ServiceName}" thành công!`);
//             },
//         });
//     };
//
//     const tableColumns = [
//         { title: "Dịch vụ", dataIndex: "ServiceName", key: "ServiceName" },
//         {
//             title: "Số lượng",
//             dataIndex: "SL",
//             key: "SL",
//             width: 120,
//             render: (text, record, index) => (
//                 <Input
//                     ref={(el) => (slInputRefs.current[index] = el)}
//                     type="number"
//                     value={record.SL}
//                     min={1}
//                     onChange={(e) => handleChangeSL(e, record, "SL")}
//                     style={{ width: "100%" }}
//                 />
//             ),
//         },
//         {
//             title: "Đơn giá",
//             dataIndex: "Price",
//             key: "Price",
//             render: (price) => price.toLocaleString()
//         },
//         {
//             title: "Tổng tiền",
//             dataIndex: "TotalPrice",
//             key: "TotalPrice",
//             render: (price) => price.toLocaleString()
//         },
//         {
//             title: "Đối tượng",
//             dataIndex: "ObjectType",
//             key: "ObjectType"
//         },
//         {
//             title: "Hành động",
//             key: "action",
//             width: 100,
//             render: (_, record) => (
//                 <Button
//                     type="primary"
//                     danger
//                     onClick={() => handleDelete(record.ServiceID, record.ServiceName)}
//                 >
//                     Xóa
//                 </Button>
//             ),
//         },
//     ];
//
//     return (
//         <div className="combobox-container">
//             <div className="input-container">
//                 <Input
//                     ref={comboBoxRef}
//                     placeholder="Tìm kiếm dịch vụ..."
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     onFocus={handleInputFocus}
//                     onBlur={handleInputBlur}
//                     onKeyDown={handleKeyDown}
//                 />
//             </div>
//
//             {isDropdownOpen && (
//                 <div className="dropdown-menu" ref={dropdownRef}>
//                     <table className="dropdown-table">
//                         <thead>
//                         <tr>
//                             <th>Tên dịch vụ</th>
//                             <th>Đối tượng</th>
//                             <th>Đơn giá</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {filteredOptions.length === 0 ? (
//                             <tr>
//                                 <td colSpan="3" className="no-results">
//                                     Không tìm thấy kết quả
//                                 </td>
//                             </tr>
//                         ) : (
//                             filteredOptions.map((option, index) => {
//                                 const priceData = listGiaDVKT.find(
//                                     price => price.ServiceID === option.ServiceID
//                                 );
//                                 return (
//                                     <tr
//                                         key={option.ServiceID}
//                                         className={`dropdown-row ${
//                                             index === focusedIndex ? "focused-row" : ""
//                                         }`}
//                                         onClick={() => handleOptionClick(option)}
//                                     >
//                                         <td className="dropdown-cell">{option.ServiceName}</td>
//                                         <td className="dropdown-cell">
//                                             {priceData ? (priceData.ObjectID === 1 ? 'BHYT' : 'DV') : ''}
//                                         </td>
//                                         <td className="dropdown-cell">
//                                             {priceData ? priceData.UnitPrice.toLocaleString() : ''}
//                                         </td>
//                                     </tr>
//                                 );
//                             })
//                         )}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//
//             <Table
//                 ref={tableRef}
//                 dataSource={selectedDv}
//                 columns={tableColumns}
//                 rowKey="ServiceID"
//                 pagination={false}
//                 style={{ marginTop: 20 }}
//             />
//         </div>
//     );
// };
//
// export default ComboboxTable;

// ON BOARB NẾU KHÔNG TÌM THẤY GIÁ, GI MẶC ĐỊNH LÀ 40000
import React, { useState, useRef, useEffect } from "react";
import { Table, Input, Button, message, Modal } from "antd";
import dichvukythuatAPI from "../API/dichvukythuatAPI";
import giadvktAPI from "../API/giadvktAPI";
import "./Combobox.css";

const ComboboxTable = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [query, setQuery] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(0);
    const [selectedDv, setSelectedDv] = useState([]);
    const [listDVKT, setListDVKT] = useState([]);
    const [listGiaDVKT, setListGiaDVKT] = useState([]);

    const comboBoxRef = useRef();
    const dropdownRef = useRef();
    const tableRef = useRef();
    const slInputRefs = useRef({});

    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const dvktData = await dichvukythuatAPI.getAll("ServiceID");
                setListDVKT(dvktData.data);

                const giaDvktData = await giadvktAPI.getAll("Hide");
                setListGiaDVKT(giaDvktData.data);
            } catch (error) {
                message.error("Lỗi khi tải dữ liệu từ API");
            }
        };

        fetchData();
    }, []);

    // Filter options combining both lists
    const filteredOptions = query
        ? listDVKT.filter((service) => {
            const priceData = listGiaDVKT.find(price => price.ServiceID === service.ServiceID);
            // Sửa ở đây: nếu không có giá, mặc định là 40000
            if (!priceData) {
                return `${service.ServiceName} 40000`.toLowerCase().includes(query.toLowerCase());
            }

            const searchString = `${service.ServiceName} ${priceData.ObjectID === 1 ? 'DV' : 'BHYT'} ${priceData.UnitPrice}`.toLowerCase();
            return searchString.includes(query.toLowerCase());
        })
        : listDVKT.filter(service =>
            listGiaDVKT.some(price => price.ServiceID === service.ServiceID)
        );

    // Auto-scroll to focused item
    useEffect(() => {
        if (isDropdownOpen && dropdownRef.current) {
            const focusedRow = dropdownRef.current.querySelectorAll("tr")[focusedIndex + 1]; // +1 for header row
            if (focusedRow) {
                focusedRow.scrollIntoView({ block: "nearest" });
            }
        }
    }, [focusedIndex, isDropdownOpen]);

    const handleOptionClick = (option) => {
        // Sửa ở đây: nếu không có giá, mặc định là 40000
        const priceData = listGiaDVKT.find((g) => g.ServiceID === option.ServiceID) || { UnitPrice: 40000, ObjectID: 1 }; // Giá mặc định là 40000
        if (!priceData) return;

        const exists = selectedDv.some((dv) => dv.ServiceID === option.ServiceID);
        if (exists) {
            message.warning(`Dịch vụ "${option.ServiceName}" đã tồn tại trong bảng.`);
            return;
        }

        setSelectedDv((prev) => {
            const updatedDv = [
                {
                    ...option,
                    Price: priceData.UnitPrice,
                    ObjectType: priceData.ObjectID === 1 ? 'DV' : 'BHYT',
                    SL: 1,
                    TotalPrice: priceData.UnitPrice,
                },
                ...prev,
            ];
            setTimeout(() => {
                if (slInputRefs.current[0]) {
                    slInputRefs.current[0].focus();
                }
            }, 0);
            return updatedDv;
        });
        setQuery("");
        setIsDropdownOpen(false);
    };

    const handleInputFocus = () => {
        setIsDropdownOpen(true);
        setFocusedIndex(0);
    };

    const handleInputBlur = () => {
        setTimeout(() => setIsDropdownOpen(false), 150);
    };

    const handleKeyDown = (event) => {
        if (!isDropdownOpen) return;

        switch (event.key) {
            case "ArrowDown":
                event.preventDefault();
                setFocusedIndex((prevIndex) =>
                    prevIndex + 1 < filteredOptions.length ? prevIndex + 1 : prevIndex
                );
                break;
            case "ArrowUp":
                event.preventDefault();
                setFocusedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
                break;
            case "Enter":
                if (filteredOptions[focusedIndex]) {
                    handleOptionClick(filteredOptions[focusedIndex]);
                }
                break;
            default:
                break;
        }
    };

    const handleChangeSL = (e, record, field) => {
        const newValue = parseInt(e.target.value) || 1;

        setSelectedDv((prev) =>
            prev.map((item) =>
                item.ServiceID === record.ServiceID
                    ? {
                        ...item,
                        SL: newValue,
                        TotalPrice: newValue * item.Price,
                    }
                    : item
            )
        );
    };

    const handleDelete = (ServiceID, ServiceName) => {
        Modal.confirm({
            title: "Xác nhận xóa",
            content: `Bạn có muốn xóa dịch vụ ${ServiceName} này?`,
            okText: "Có",
            cancelText: "Không",
            onOk: () => {
                setSelectedDv((prev) => prev.filter((dv) => dv.ServiceID !== ServiceID));
                message.success(`Xóa dịch vụ "${ServiceName}" thành công!`);
            },
        });
    };

    const tableColumns = [
        { title: "Dịch vụ", dataIndex: "ServiceName", key: "ServiceName" },
        {
            title: "Số lượng",
            dataIndex: "SL",
            key: "SL",
            width: 120,
            render: (text, record, index) => (
                <Input
                    ref={(el) => (slInputRefs.current[index] = el)}
                    type="number"
                    value={record.SL}
                    min={1}
                    onChange={(e) => handleChangeSL(e, record, "SL")}
                    style={{ width: "100%" }}
                />
            ),
        },
        {
            title: "Đơn giá",
            dataIndex: "Price",
            key: "Price",
            render: (price) => price.toLocaleString()
        },
        {
            title: "Tổng tiền",
            dataIndex: "TotalPrice",
            key: "TotalPrice",
            render: (price) => price.toLocaleString()
        },
        {
            title: "Đối tượng",
            dataIndex: "ObjectType",
            key: "ObjectType"
        },
        {
            title: "Hành động",
            key: "action",
            width: 100,
            render: (_, record) => (
                <Button
                    type="primary"
                    danger
                    onClick={() => handleDelete(record.ServiceID, record.ServiceName)}
                >
                    Xóa
                </Button>
            ),
        },
    ];

    return (
        <div className="combobox-container">
            <div className="input-container">
                <Input
                    ref={comboBoxRef}
                    placeholder="Tìm kiếm dịch vụ..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onKeyDown={handleKeyDown}
                />
            </div>

            {isDropdownOpen && (
                <div className="dropdown-menu" ref={dropdownRef}>
                    <table className="dropdown-table">
                        <thead>
                        <tr>
                            <th>Tên dịch vụ</th>
                            <th>Đối tượng</th>
                            <th>Đơn giá</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredOptions.length === 0 ? (
                            <tr>
                                <td colSpan="3" className="no-results">
                                    Không tìm thấy kết quả
                                </td>
                            </tr>
                        ) : (
                            filteredOptions.map((option, index) => {
                                const priceData = listGiaDVKT.find(
                                    price => price.ServiceID === option.ServiceID
                                ) || { UnitPrice: 40000, ObjectID: 1 }; // Giá mặc định là 40000
                                return (
                                    <tr
                                        key={option.ServiceID}
                                        className={`dropdown-row ${
                                            index === focusedIndex ? "focused-row" : ""
                                        }`}
                                        onClick={() => handleOptionClick(option)}
                                    >
                                        <td className="dropdown-cell">{option.ServiceName}</td>
                                        <td className="dropdown-cell">
                                            {priceData ? (priceData.ObjectID === 1 ? 'BHYT' : 'DV') : ''}
                                        </td>
                                        <td className="dropdown-cell">
                                            {priceData ? priceData.UnitPrice.toLocaleString() : '40,000'}
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                        </tbody>
                    </table>
                </div>
            )}

            <Table
                ref={tableRef}
                dataSource={selectedDv}
                columns={tableColumns}
                rowKey="ServiceID"
                pagination={false}
                style={{ marginTop: 20 }}
            />
        </div>
    );
};

export default ComboboxTable;
