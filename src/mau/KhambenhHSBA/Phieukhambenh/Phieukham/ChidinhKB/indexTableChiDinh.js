// Gốc

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faArrowsRotate, faXmark} from '@fortawesome/free-solid-svg-icons';
// import {Table, message, Button, Select, Modal} from "antd";
// import { faCamera, faBarcode, faFileLines, faUsers } from "@fortawesome/free-solid-svg-icons";
// import React, {useEffect, useRef, useState} from 'react';
// import { HotKeys } from 'react-hotkeys';
// import "./chidinh.css"
// // setDataDichVuKyThuat
// import {setDataDichVuKyThuat, setDataGiaDVKT} from "../../../../reducers/dataAdd";
// import dichvukythuatAPI from "../../../../API/dichvukythuatAPI";
// import giadvktAPI from "../../../../API/giadvktAPI";
// import {
//     ComboBoxTable,
//     useTokenSearch,
//     TokenHighlight,
//     layoutMaxWidth,
//     layoutMaxHeight,
//     layoutColumnsAlignLeft,
// } from '@citizensadvice/react-combo-boxes';
//
// function ChidinhKB() {
//     const [listDVKT, setListDVKT] = useState([])
//     const [listGiaDVKT, setListGiaDVKT] = useState([])
//
//     const getAllDichVuKyThuat = async () => {
//         try {
//             // setLoading(true);
//             const data = await dichvukythuatAPI.getAll('ServiceID');
//             setListDVKT(data.data);
//             // setLoading(false);
//         } catch (err) {
//             throw new Error(err);
//         }
//     };
//     const getAllGiaDVKT = async () => {
//         try {
//             // setLoading(true);
//             const data = await giadvktAPI.getAll('Hide');
//             setListGiaDVKT(data.data);
//             // setLoading(false);
//         } catch (err) {
//             throw new Error(err);
//         }
//     };
//
//     // console.log("listGiaDVKT: ",listGiaDVKT)
//     useEffect(() => {
//         getAllDichVuKyThuat();
//         getAllGiaDVKT()
//     }, []);
//
//     const listItem = [
//         {key: '1', ServiceName: 'British', STT: '1', SL: '20', Price: '32.00', Object: 'DV', Code: 'MK01'},
//         {key: '2', ServiceName: 'Siêu âm tuyến giáp', STT: '2', SL: '21', Price: '10.00', Object: 'DV', Code: 'SA01'},
//         {key: '3', ServiceName: 'Persian', STT: '3', SL: '28', Price: '14.00', Object: 'DV', Code: 'SA02'},
//         {key: '4', ServiceName: 'Ragdoll', STT: '4', SL: '24', Price: '11.00', Object: 'DV', Code: 'SA03'},
//         {key: '5', ServiceName: 'Hjien', STT: '4', SL: '15', Price: '12.00', Object: 'DV', Code: 'SA04'},
//         {key: '6', ServiceName: 'Smyna', STT: '4', SL: '32', Price: '2.00', Object: 'DV', Code: 'SA05'},
//     ];
//
//     const columns = ['ServiceName', 'ServiceName_PK', 'ServiceName_AX', 'Price', 'Object', 'Code'];
//
//     function mapOption(option) {
//         return columns.map(column => option[column]).join(" "); // Gộp giá trị tất cả cột thành một chuỗi
//     }
//
//     function renderValue({ children }, { search, column: { name } }) {
//         return (
//             <div>{children}</div>
//         );
//     }
//
//     const onLayoutListBox = [layoutMaxWidth, layoutMaxHeight, layoutColumnsAlignLeft,];
//
//     const [value, setValue] = useState(null);
//     const [search, setSearch] = useState(null);
//
//     const [selectedDv, setSelectedDv] = useState([]);
//
//     const filteredOptions = useTokenSearch(search, {
//         options: listDVKT,
//         index: mapOption,
//     });
//
//     const handleSelect = selectedValue => {
//         const exists = selectedDv.some(dv => dv.ServiceName === selectedValue.ServiceName);
//         if (exists) {
//             message.warning(`Dịch vụ "${selectedValue.ServiceName}" đã tồn tại trong bảng.`);
//             setSearch(null);
//             return;
//         }
//         if (selectedValue) {
//             setSelectedDv(prev => [selectedValue, ...prev]);
//             setSearch(null);
//         }
//     };
//
//     const handleDelete = (code, serviceName) => {
//         Modal.confirm({
//             title: 'Xác nhận xóa',
//             content: `Bạn có muốn xóa dịch vụ ${serviceName} này?`,  // Hiển thị tên dịch vụ
//             okText: 'Có',
//             cancelText: 'Không',
//             onOk: () => {
//                 setSelectedDv((prev) => prev.filter(dv => dv.Code !== code));
//                 message.success(`Xóa ${serviceName} thành công!`);
//             }
//         });
//     };
//
//     const handleChangeSL = (e, record, field) => {
//         const newValue = e.target.value;
//
//         const updatedDv = selectedDv.map(item =>
//             item.key === record.key
//                 ? {
//                     ...item,
//                     [field]: newValue,
//                     ...(field === 'SL' ? { TotalPrice: newValue * item.Price } : {})
//                 }
//                 : item
//         );
//         setSelectedDv(updatedDv);
//         console.log(updatedDv);
//     };
//     const comboBoxRef = useRef(null);
//
//     const handleKeyDown = (event) => {
//         if (event.key === 'Tab') {
//             event.preventDefault();
//             if (comboBoxRef.current) {
//                 comboBoxRef.current.focus();
//             }
//         }
//     };
//     return (
//         <div>
//             <div className="d-flex  align-items-center" style={{display: 'flex', width: "100%"}}>
//                 <label style={{position: "rela  tive",}} id="select-label" htmlFor="selectCongKham">Công khám:</label>
//                 <ComboBoxTable
//                     id="selectCongKham"
//                     ref={comboBoxRef}
//                     aria-labelledby="select-label"
//                     value={value}
//                     onValue={handleSelect}
//                     onSearch={setSearch}
//                     onLayoutListBox={onLayoutListBox}
//                     options={filteredOptions}
//                     columns={columns}
//                     renderColumnValue={renderValue}
//                     mapOption={mapOption}
//                 />
//             </div>
//
//             <Table
//                 dataSource={selectedDv}
//                 columns={[
//                     {title: 'Dịch vụ', dataIndex: 'ServiceName', key: 'ServiceName'},
//                     {title: 'SL',
//                         key: 'SL',
//                         render: (number, record) => (
//                             <input
//                                 type="number"
//                                 value={record.SL}
//                                 onChange={(e) => handleChangeSL(e, record, 'SL')}
//                                 style={{width: "60%", outline: "none"}}
//                             />
//                         ),
//                     },
//                     {title: 'Đơn giá', key: 'Price', dataIndex: 'Price',},
//                     {title: 'Tổng tiền', key: 'TotalPrice',
//                         render: (text, record) => (
//                             <span>{record.TotalPrice || (record.SL * record.Price)}</span> // Tính tổng tiền chỉ dựa vào SL và Price
//                         ),
//                     },
//
//                     {title: 'Đối tượng', key: 'Object',
//                         render: (number, record) => (
//                             <select
//                                 value={record.Object}
//                                 onChange={(e) => handleChangeSL(e, record, 'Object')}
//                                 style={{
//                                     width: "100%",
//                                     padding: "5px",
//                                 }}
//                                 onKeyDown={handleKeyDown}
//                             >
//                                 <option value="1">Dịch vụ</option>
//                                 <option value="2">BHYT</option>
//                             </select>
//                         ),
//                     },
//                     {title: 'Hành động', key: 'action',
//                         render: (text, record) => (
//                             <Button
//                                 type="primary"
//                                 danger
//                                 onClick={() => handleDelete(record.Code, record.ServiceName)}
//                                 style={{width: "10px", height: "20px"}}
//                             >
//                                 <FontAwesomeIcon icon={faXmark}/>
//                             </Button>
//                         ),
//                         align: "center"
//                     },
//                 ]}
//                 rowKey="Code"
//                 pagination={false}
//                 scroll={{y: 220}}
//             />
//         </div>
//     );
// }
//
// export default ChidinhKB;

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowsRotate, faXmark } from '@fortawesome/free-solid-svg-icons';
// import { Table, message, Button, Select, Modal } from "antd";
// import { faCamera, faBarcode, faFileLines, faUsers } from "@fortawesome/free-solid-svg-icons";
// import React, { useEffect, useRef, useState } from 'react';
// import { HotKeys } from 'react-hotkeys';
// import "./chidinh.css";
// import { setDataDichVuKyThuat, setDataGiaDVKT } from "../../../../reducers/dataAdd";
// import dichvukythuatAPI from "../../../../API/dichvukythuatAPI";
// import giadvktAPI from "../../../../API/giadvktAPI";
// import {
//     ComboBoxTable,
//     useTokenSearch,
//     TokenHighlight,
//     layoutMaxWidth,
//     layoutMaxHeight,
//     layoutColumnsAlignLeft,
// } from '@citizensadvice/react-combo-boxes';
//
// function ChidinhKB() {
//     const [listDVKT, setListDVKT] = useState([]);
//     const [listGiaDVKT, setListGiaDVKT] = useState([]);
//     const [selectedDv, setSelectedDv] = useState([]);
//     const [value, setValue] = useState(null);
//     const [search, setSearch] = useState(null);
//
//     const getAllDichVuKyThuat = async () => {
//         try {
//             const data = await dichvukythuatAPI.getAll('ServiceID');
//             setListDVKT(data.data);
//         } catch (err) {
//             throw new Error(err);
//         }
//     };
//
//     const getAllGiaDVKT = async () => {
//         try {
//             const data = await giadvktAPI.getAll('Hide');
//             setListGiaDVKT(data.data);
//         } catch (err) {
//             throw new Error(err);
//         }
//     };
//
//     useEffect(() => {
//         const fetchData = async () => {
//             await getAllDichVuKyThuat();
//             await getAllGiaDVKT();
//         };
//         fetchData();
//     }, []);
//
//     const mapOption = (option) => `${option.ServiceName} (${option.Code})`;
//
//     const handleSelect = (selectedValue) => {
//         const exists = selectedDv.some(dv => dv.ServiceName === selectedValue.ServiceName);
//         if (exists) {
//             message.warning(`Dịch vụ "${selectedValue.ServiceName}" đã tồn tại trong bảng.`);
//             setSearch(null);
//             return;
//         }
//
//         if (selectedValue) {
//             const matchedGia = listGiaDVKT.find(g => g.Code === selectedValue.Code) || { UnitPrice: 0 };
//             setSelectedDv(prev => [
//                 {
//                     ...selectedValue,
//                     Price: matchedGia.UnitPrice,
//                     SL: 1,
//                     TotalPrice: matchedGia.UnitPrice,
//                 },
//                 ...prev,
//             ]);
//             setSearch(null);
//         }
//     };
//
//     const handleDelete = (code, serviceName) => {
//         Modal.confirm({
//             title: 'Xác nhận xóa',
//             content: `Bạn có muốn xóa dịch vụ ${serviceName} này?`,
//             okText: 'Có',
//             cancelText: 'Không',
//             onOk: () => {
//                 setSelectedDv((prev) => prev.filter(dv => dv.ServiceID !== code));
//                 message.success(`Xóa ${serviceName} thành công!`);
//             }
//         });
//     };
//
//     const handleChangeSL = (e, record, field) => {
//         const newValue = e.target.value;
//
//         const updatedDv = selectedDv.map(item =>
//             item.Code === record.Code
//                 ? {
//                     ...item,
//                     [field]: newValue,
//                     ...(field === 'SL' ? { TotalPrice: newValue * item.Price } : {}),
//                 }
//                 : item
//         );
//         setSelectedDv(updatedDv);
//     };
//
//     const comboBoxRef = useRef(null);
//     const handleKeyDown = (event) => {
//         if (event.key === 'Tab') {
//             event.preventDefault();
//             if (comboBoxRef.current) {
//                 comboBoxRef.current.focus();
//             }
//         }
//     };
//
//     const filteredOptions = useTokenSearch(search, {
//         options: listDVKT,
//         index: mapOption,
//     });
//
//     return (
//         <div>
//             <div className="d-flex align-items-center" style={{ display: 'flex', width: "100%" }}>
//                 <label id="select-label" htmlFor="selectCongKham">Công khám:</label>
//                 <ComboBoxTable
//                     id="selectCongKham"
//                     ref={comboBoxRef}
//                     aria-labelledby="select-label"
//                     value={value}
//                     onValue={handleSelect}
//                     onSearch={setSearch}
//                     onLayoutListBox={[layoutMaxWidth, layoutMaxHeight, layoutColumnsAlignLeft]}
//                     options={filteredOptions}
//                     columns={['ServiceName', 'Code']}
//                     renderColumnValue={({ children }) => <div>{children}</div>}
//                     mapOption={mapOption}
//                 />
//             </div>
//
//             <Table
//                 dataSource={selectedDv}
//                 columns={[
//                     { title: 'Dịch vụ', dataIndex: 'ServiceName', key: 'ServiceName' },
//                     {
//                         title: 'SL',
//                         key: 'SL',
//                         render: (text, record) => (
//                             <input
//                                 type="number"
//                                 value={record.SL}
//                                 onChange={(e) => handleChangeSL(e, record, 'SL')}
//                                 style={{ width: "60%", outline: "none" }}
//                             />
//                         ),
//                     },
//                     { title: 'Đơn giá', dataIndex: 'Price', key: 'Price' },
//                     {
//                         title: 'Tổng tiền',
//                         key: 'TotalPrice',
//                         render: (text, record) => (
//                             <span>{record.TotalPrice || (record.SL * record.Price)}</span>
//                         ),
//                     },
//                     {
//                         title: 'Đối tượng',
//                         key: 'Object',
//                         render: (text, record) => (
//                             <select
//                                 value={record.Object}
//                                 onChange={(e) => handleChangeSL(e, record, 'Object')}
//                                 style={{ width: "100%", padding: "5px" }}
//                                 onKeyDown={handleKeyDown}
//                             >
//                                 <option value="1">Dịch vụ</option>
//                                 <option value="2">BHYT</option>
//                             </select>
//                         ),
//                     },
//                     {
//                         title: 'Hành động',
//                         key: 'action',
//                         render: (text, record) => (
//                             <Button
//                                 type="primary"
//                                 danger
//                                 onClick={() => handleDelete(record.ServiceID, record.ServiceName)}
//                                 style={{ width: "10px", height: "20px" }}
//                             >
//                                 <FontAwesomeIcon icon={faXmark} />
//                             </Button>
//                         ),
//                         align: "center",
//                     },
//                 ]}
//                 rowKey="ServiceID"
//                 pagination={false}
//                 scroll={{ y: 220 }}
//             />
//         </div>
//     );
// }
//
// export default ChidinhKB;

// ONBOARD KHI MENU OPTION CỦA COMBOBOX CHƯA HIỂN THỊ ĐÚNG

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowsRotate, faXmark} from '@fortawesome/free-solid-svg-icons';
import {Table, message, Button, Select, Modal} from "antd";
import {faCamera, faBarcode, faFileLines, faUsers} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useRef, useState} from 'react';
import {HotKeys} from 'react-hotkeys';
import "./chidinh.css"
import {setDataDichVuKyThuat, setDataGiaDVKT} from "../../../../reducers/dataAdd";
import dichvukythuatAPI from "../../../../API/dichvukythuatAPI";
import giadvktAPI from "../../../../API/giadvktAPI";
import {
    ComboBoxTable,
    useTokenSearch,
    TokenHighlight,
    layoutMaxWidth,
    layoutMaxHeight,
    layoutColumnsAlignLeft,
} from '@citizensadvice/react-combo-boxes';

function ChidinhKB() {
    const [listDVKT, setListDVKT] = useState([]);
    const [listGiaDVKT, setListGiaDVKT] = useState([]);

    const getAllDichVuKyThuat = async () => {
        try {
            const data = await dichvukythuatAPI.getAll('ServiceID');
            setListDVKT(data.data);
        } catch (err) {
            throw new Error(err);
        }
    };

    const getAllGiaDVKT = async () => {
        try {
            const data = await giadvktAPI.getAll('Hide');
            setListGiaDVKT(data.data);
        } catch (err) {
            throw new Error(err);
        }
    };

    useEffect(() => {
        getAllDichVuKyThuat();
        getAllGiaDVKT();
    }, []);

    const [value, setValue] = useState(null);
    const [search, setSearch] = useState(null);
    const [selectedDv, setSelectedDv] = useState([]);

    const columns = ['ServiceName', 'ObjectID', 'UnitPrice'];

    function mapOption(option) {
        return columns.map(column => option[column]).join(" ");
    }

    function renderValue({children}, {search, column: {name}}) {
        return <div>{children}</div>;
    }

    const onLayoutListBox = [layoutMaxWidth, layoutMaxHeight, layoutColumnsAlignLeft];

    const filteredOptions = useTokenSearch(search, {
        options: listDVKT,
        index: mapOption,
    });

    const handleSelect = selectedValue => {
        const exists = selectedDv.some(dv => dv.ServiceID === selectedValue.ServiceID);
        if (exists) {
            message.warning(`Dịch vụ "${selectedValue.ServiceName}" đã tồn tại trong bảng.`);
            setSearch(null);
            return;
        }

        const priceData = listGiaDVKT.find(price => price.ServiceID === selectedValue.ServiceID);
        if (selectedValue) {
            setSelectedDv(prev => [
                {
                    ...selectedValue,
                    Price: priceData ? priceData.UnitPrice : 40000,
                    SL: 1,
                    TotalPrice: priceData ? priceData.UnitPrice : 0,
                },
                ...prev
            ]);
            setSearch(null);
        }
    };

    const handleDelete = (serviceID, serviceName) => {
        Modal.confirm({
            title: 'Xác nhận xóa',
            content: `Bạn có muốn xóa dịch vụ ${serviceName} này?`,
            okText: 'Có',
            cancelText: 'Không',
            onOk: () => {
                setSelectedDv((prev) => prev.filter(dv => dv.ServiceID !== serviceID));
                message.success(`Xóa ${serviceName} thành công!`);
            }
        });
    };

    const handleChangeSL = (e, record, field) => {
        const newValue = e.target.value;

        const updatedDv = selectedDv.map(item =>
            item.ServiceID === record.ServiceID
                ? {
                    ...item,
                    [field]: newValue,
                    ...(field === 'SL' ? {TotalPrice: newValue * item.Price} : {})
                }
                : item
        );
        setSelectedDv(updatedDv);
    };

    const comboBoxRef = useRef(null);

    const handleKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            if (comboBoxRef.current) {
                comboBoxRef.current.focus();
            }
        }
    };

    return (
        <div>
            <div className="d-flex align-items-center" style={{display: 'flex', width: "100%"}}>
                <label style={{position: "relative"}} id="select-label" htmlFor="selectCongKham">Công khám:</label>
                <ComboBoxTable
                    id="selectCongKham"
                    ref={comboBoxRef}
                    aria-labelledby="select-label"
                    value={value}
                    onValue={handleSelect}
                    onSearch={setSearch}
                    onLayoutListBox={onLayoutListBox}
                    options={filteredOptions}
                    columns={columns}
                    renderColumnValue={renderValue}
                    mapOption={mapOption}
                />
            </div>

            <Table
                dataSource={selectedDv}
                columns={[
                    {title: 'Dịch vụ', dataIndex: 'ServiceName', key: 'ServiceName'},
                    {
                        title: 'SL',
                        key: 'SL',
                        render: (number, record) => (
                            <input
                                type="number"
                                value={record.SL}
                                min="1"
                                onChange={(e) => handleChangeSL(e, record, 'SL')}
                                style={{width: "60%", outline: "none"}}
                            />
                        ),
                    },
                    {title: 'Đơn giá', key: 'Price', dataIndex: 'Price'},
                    {
                        title: 'Tổng tiền', key: 'TotalPrice',
                        render: (text, record) => (
                            <span>{record.TotalPrice || (record.SL * record.Price)}</span>
                        ),
                    },
                    {
                        title: 'Object', key: 'Object',
                        render: () => (
                            <select name="" id="">
                                <option>BHYT</option>
                                <option>Dich Vu</option>

                            </select>
                        ),
                    },
                    {
                        title: 'Hành động', key: 'action',
                        render: (text, record) => (
                            <Button
                                type="primary"
                                danger
                                onClick={() => handleDelete(record.ServiceID, record.ServiceName)}
                                style={{width: "10px", height: "20px"}}
                            >
                                <FontAwesomeIcon icon={faXmark}/>
                            </Button>
                        ),
                        align: "center"
                    },
                ]}
                rowKey="ServiceID"
                pagination={false}
                scroll={{y: 220}}
            />
        </div>
    );
}

export default ChidinhKB;



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowsRotate, faXmark } from '@fortawesome/free-solid-svg-icons';
// import { Table, message, Button, Select, Modal } from "antd";
// import { faCamera, faBarcode, faFileLines, faUsers } from "@fortawesome/free-solid-svg-icons";
// import React, { useEffect, useRef, useState } from 'react';
// import { HotKeys } from 'react-hotkeys';
// import "./chidinh.css";
// import { setDataDichVuKyThuat, setDataGiaDVKT } from "../../../../reducers/dataAdd";
// import dichvukythuatAPI from "../../../../API/dichvukythuatAPI";
// import giadvktAPI from "../../../../API/giadvktAPI";
// import {
//     ComboBoxTable,
//     useTokenSearch,
//     TokenHighlight,
//     layoutMaxWidth,
//     layoutMaxHeight,
//     layoutColumnsAlignLeft,
// } from '@citizensadvice/react-combo-boxes';
//
// function ChidinhKB() {
//     const [listDVKT, setListDVKT] = useState([]);
//     const [listGiaDVKT, setListGiaDVKT] = useState([]);
//
//     const getAllDichVuKyThuat = async () => {
//         try {
//             const data = await dichvukythuatAPI.getAll('ServiceID');
//             setListDVKT(data.data);
//         } catch (err) {
//             throw new Error(err);
//         }
//     };
//
//     const getAllGiaDVKT = async () => {
//         try {
//             const data = await giadvktAPI.getAll('Hide');
//             setListGiaDVKT(data.data);
//         } catch (err) {
//             throw new Error(err);
//         }
//     };
//
//     useEffect(() => {
//         getAllDichVuKyThuat();
//         getAllGiaDVKT();
//     }, []);
//
//     // const mapOption = (option) => {
//     //     const gia = listGiaDVKT.find(g => g.ServiceID === option.ServiceID);
//     //     console.log("gia: ", gia)
//     //
//     //     const unitPrice = gia ? gia.UnitPrice : "N/A";
//     //     console.log("unitPrice: ", unitPrice)
//     //
//     //     const objectID = gia ? (gia.ObjectCode === 1 ? "DV" : gia.ObjectCode === 2 ? "BHYT" : "Khác") : "N/A";
//     //     return `${option.ServiceName} | ${objectID} | ${unitPrice}`;
//     // };
//     const mapOption = (option) => {
//         if (!option || !option.ServiceID || !option.ServiceName) {
//             return "Dữ liệu không hợp lệ";
//         }
//
//         const gia = listGiaDVKT.find(g => g.ServiceID === option.ServiceID);
//
//         const unitPrice = gia ? gia.UnitPrice : "N/A";
//         const objectID = gia
//             ? gia.ObjectCode === 1
//                 ? "DV"
//                 : gia.ObjectCode === 2
//                     ? "BHYT"
//                     : "Khác"
//             : "N/A";
//
//         return `${option.ServiceName} | ${objectID} | ${unitPrice}`;
//     };
//
//
//     const renderValue = ({ children }, { search, column: { name } }) => {
//         return (
//             <div>{children}</div>
//         );
//     };
//
//     const onLayoutListBox = [layoutMaxWidth, layoutMaxHeight, layoutColumnsAlignLeft];
//
//     const [value, setValue] = useState(null);
//     const [search, setSearch] = useState(null);
//     const [selectedDv, setSelectedDv] = useState([]);
//
//     // const filteredOptions = useTokenSearch(search, {
//     //     options: listDVKT,
//     //     index: mapOption,
//     // });
//     const filteredOptions = useTokenSearch(search, {
//         options: listDVKT,
//         index: (option) => mapOption(option), // Đảm bảo `mapOption` trả về đúng chuỗi
//     });
//
//
//     const handleSelect = selectedValue => {
//         const gia = listGiaDVKT.find(g => g.ServiceID === selectedValue.ServiceID);
//         const unitPrice = gia ? gia.UnitPrice : 0;
//
//         const exists = selectedDv.some(dv => dv.ServiceID === selectedValue.ServiceID);
//         if (exists) {
//             message.warning(`Dịch vụ "${selectedValue.ServiceName}" đã tồn tại trong bảng.`);
//             setSearch(null);
//             return;
//         }
//
//         if (selectedValue) {
//             setSelectedDv(prev => [{
//                 ...selectedValue,
//                 Price: unitPrice,
//                 SL: 1,
//                 TotalPrice: unitPrice
//             }, ...prev]);
//             setSearch(null);
//         }
//     };
//
//     const handleDelete = (serviceID, serviceName) => {
//         Modal.confirm({
//             title: 'Xác nhận xóa',
//             content: `Bạn có muốn xóa dịch vụ ${serviceName} này?`,
//             okText: 'Có',
//             cancelText: 'Không',
//             onOk: () => {
//                 setSelectedDv((prev) => prev.filter(dv => dv.ServiceID !== serviceID));
//                 message.success(`Xóa ${serviceName} thành công!`);
//             }
//         });
//     };
//
//     const handleChangeSL = (e, record, field) => {
//         const newValue = e.target.value;
//         const updatedDv = selectedDv.map(item =>
//             item.ServiceID === record.ServiceID
//                 ? {
//                     ...item,
//                     [field]: newValue,
//                     ...(field === 'SL' ? { TotalPrice: newValue * item.Price } : {})
//                 }
//                 : item
//         );
//         setSelectedDv(updatedDv);
//     };
//
//     const comboBoxRef = useRef(null);
//
//     return (
//         <div>
//             <div className="d-flex align-items-center" style={{ display: 'flex', width: "100%" }}>
//                 <label style={{ position: "relative" }} id="select-label" htmlFor="selectCongKham">Công khám:</label>
//                 <ComboBoxTable
//                     id="selectCongKham"
//                     ref={comboBoxRef}
//                     aria-labelledby="select-label"
//                     value={value}
//                     onValue={handleSelect}
//                     onSearch={setSearch}
//                     onLayoutListBox={onLayoutListBox}
//                     options={filteredOptions}
//                     columns={["ServiceName", "Object", "Price"]}
//                     renderColumnValue={renderValue}
//                     mapOption={mapOption}
//                 />
//             </div>
//
//             <Table
//                 dataSource={selectedDv}
//                 columns={[
//                     { title: 'Dịch vụ', dataIndex: 'ServiceName', key: 'ServiceName' },
//                     {
//                         title: 'SL',
//                         key: 'SL',
//                         render: (number, record) => (
//                             <input
//                                 type="number"
//                                 value={record.SL}
//                                 onChange={(e) => handleChangeSL(e, record, 'SL')}
//                                 style={{ width: "60%", outline: "none" }}
//                             />
//                         ),
//                     },
//                     { title: 'Đơn giá', key: 'Price', dataIndex: 'Price' },
//                     {
//                         title: 'Tổng tiền', key: 'TotalPrice',
//                         render: (text, record) => (
//                             <span>{record.TotalPrice || (record.SL * record.Price)}</span>
//                         ),
//                     },
//
//                     {
//                         title: 'Đối tượng', key: 'Object',
//                         render: (number, record) => (
//                             <select
//                                 value={record.ObjectCode}
//                                 onChange={(e) => handleChangeSL(e, record, 'ObjectCode')}
//                                 style={{
//                                     width: "100%",
//                                     padding: "5px",
//                                 }}
//                             >
//                                 <option value="1">DV</option>
//                                 <option value="2">BHYT</option>
//                             </select>
//                         ),
//                     },
//                     {
//                         title: 'Hành động', key: 'action',
//                         render: (text, record) => (
//                             <Button
//                                 type="primary"
//                                 danger
//                                 onClick={() => handleDelete(record.ServiceID, record.ServiceName)}
//                                 style={{ width: "10px", height: "20px" }}
//                             >
//                                 <FontAwesomeIcon icon={faXmark} />
//                             </Button>
//                         ),
//                         align: "center"
//                     },
//                 ]}
//                 rowKey="ServiceID"
//                 pagination={false}
//                 scroll={{ y: 220 }}
//             />
//         </div>
//     );
// }
//
// export default ChidinhKB;
