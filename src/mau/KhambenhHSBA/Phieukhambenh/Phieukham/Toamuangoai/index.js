import {Modal, Button, Form, Input, Table, Collapse, Typography, Checkbox, message} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faFastForward,
    faPowerOff,
    faPrint,
    faSave,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
// import ds from "../../../../../util/data";
import "./toamuangoai.scss";
import { HotKeys } from 'react-hotkeys';

import {
    ComboBoxTable,
    layoutColumnsAlignLeft,
    layoutMaxHeight,
    layoutMaxWidth, TokenHighlight,
    useTokenSearch
} from "@citizensadvice/react-combo-boxes";
import React, {useRef, useState} from "react";
// import Swal from "sweetalert2";
function Toamuangoai(props) {
    const { open, setOpen } = props;

    const sampleCats = [
        {key: '1', MedicineName: 'British', DVT: '1', Date: '20/11/2024', S: 0, Tr: 0, C: 0, T: 0, SL: '10', Price: '11',TotalPrice: '10', CachDung: '', Object: 'DV',Code: 'MK01'},
        {key: '2', MedicineName: 'Siêu âm tuyến giáp', DVT: '2', Date: '21', S: 0, Tr: 0, C: 0, T: 0, SL: '100', Price: '11',TotalPrice: '10', CachDung: '', Object: 'DV', Code: 'SA01'},
        {key: '3', MedicineName: 'Persian', DVT: '3', Date: '28', S: 0, Tr: 0, C: 0, T: 0, SL: '50', Price: '11',TotalPrice: '10', CachDung: '', Object: 'DV', Code: 'SA02'},
        {key: '4', MedicineName: 'Ragdoll', DVT: '4', Date: '24', S: 0, Tr: 0, C: 0, T: 0, SL: '16', Price: '11',TotalPrice: '10', CachDung: '', Object: 'DV', Code: 'SA03'},
        {key: '5', MedicineName: 'Hjien', DVT: '4', Date: '15',  S: 0, Tr: 0, C: 0, T: 0, SL: '11', Price: '11',TotalPrice: '10', CachDung: '', Object: 'DV', Code: 'SA04'},
        {key: '6', MedicineName: 'Smyna', DVT: '4', Date: '32', S: 0, Tr: 0, C: 0, T: 0, SL: '141', Price: '11',TotalPrice: '10', CachDung: '', Object: 'DV', Code: 'SA05'},
    ];
    const columnMapOption = ['MedicineName', 'DVT', 'Date', 'S', 'Tr', 'C', 'T', 'SL','TotalPrice', 'Object', 'CachDung', 'Code'];

    function mapOption(option) {
        console.log( columnMapOption.map(column => option[column]).join(" ")); // Gộp giá trị tất cả cột thành một chuỗi

        return columnMapOption.map(column => option[column]).join(" "); // Gộp giá trị tất cả cột thành một chuỗi
    }

    function renderValue({ children }, { search, column: { name } }) {
        return (
            // <div>
            //     <TokenHighlight search={search} value={children}/>
            // </div>
            <div>{children}</div>
        );
    }

    const onLayoutListBox = [layoutMaxWidth, layoutMaxHeight, layoutColumnsAlignLeft,];

    const [value, setValue] = useState(null);
    const [search, setSearch] = useState(null);

    const [selectedDv, setSelectedDv] = useState([]);

    const filteredOptions = useTokenSearch(search, {
        options: sampleCats,
        index: mapOption,
    });

    const handleSelect = selectedValue => {
        const exists = selectedDv.some(dv => dv.MedicineName === selectedValue.MedicineName);
        if (exists) {
            message.warning(`Toa thuốc "${selectedValue.MedicineName}" đã tồn tại trong bảng.`);
            setSearch(null);
            return;
        }
        if (selectedValue) {
            setSelectedDv(prev => [selectedValue, ...prev]);
            setSearch(null);
        }
    };
    const handleDelete = (code, medicineName) => {
        Modal.confirm({
            title: 'Xác nhận xóa',
            content: `Bạn có muốn xóa toa thuốc ${medicineName} này?`,  // Hiển thị tên dịch vụ
            okText: 'Có',
            cancelText: 'Không',
            //Rang buoc neu khong xoa thi khong thong bao
            onOk: () => {
                setSelectedDv((prev) => prev.filter(dv => dv.Code !== code));
                message.success(`Xóa ${medicineName} thành công!`);
            }
        });
    };
    const handleChangeInput = (e, record, field) => {
        const newValue = e.target.value;

        const updatedDv = selectedDv.map(item =>
            item.key === record.key
                ? {
                    ...item,
                    [field]: newValue,
                    ...(field === 'SL' ? { TotalPrice: newValue * item.Price } : {})
                }
                : item
        );
        setSelectedDv(updatedDv);
        console.log(updatedDv);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            if (comboBoxRef.current) {
                comboBoxRef.current.focus();
            }
        }
    };

    const comboBoxRef = useRef(null);

    const columns = [
        {title: "Tên thuốc", dataIndex: "MedicineName",
            fixed: "left",
            key: "MedicineName",
            width: "100px"
            // render: (MedicineName) => <div style={{ width: "30px" }}> {MedicineName} </div>,
        },
        {title: "ĐVT", dataIndex: "DVT",
            key: "DVT",
            width: "50px"
            // render: (TDVVT) =>
            //     <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {title: "Ngày cấp", dataIndex: "Date",
            Key: "Date",
            width: "80px"
        },
        {title: "S", dataIndex: "S",
            key: "S",
            render: (number, record)=>(
                <input type="number"
                       value={record.S}
                       onChange={(e) => handleChangeInput(e, record, 'S')}
                       style={{width: '40px', outline: "none"}}
                />
            ),
        },
        {title: "Tr", dataIndex: "Tr",
            render: (number, record)=>(
                <input type="number"
                       value={record.Tr}
                       onChange={(e) => handleChangeInput(e, record, 'Tr')}
                       style={{width: "40px", outline: "none"}}
                />
            ),
        },
        {title: "C", dataIndex: "C",
            render: (number, record)=>(
                <input type="number"
                       value={record.C}
                       onChange={(e) => handleChangeInput(e, record, 'C')}
                       style={{width: "40px", outline: "none"}}
                />
            ),
        },
        {title: "T", dataIndex: "T",
            render: (number, record)=>(
                <input type="number"
                       value={record.T}
                       onChange={(e) => handleChangeInput(e, record, 'T')}
                       style={{width: "40px", outline: "none"}}
                />
            ),
        },
        {title: "Tổng", dataIndex: "SL",
            key: 'SL',
            render: (number, record) => (
                <input
                    type="number"
                    value={record.SL}
                    onChange={(e) => handleChangeInput(e, record, 'SL')}
                    style={{width: "40px", outline: "none"}}
                />
            ),
        },
        {title: "T.Tiền", dataIndex: "TotalPrice",
            render: (text, record) => (
                <div style={{width: "100px"}}>
                    {record.TotalPrice || (record.SL * record.Price)}</div> // Tính tổng tiền chỉ dựa vào SL và Price
            ),
        },
        {title: "Cách dùng", dataIndex: "CachDung",
            render: (text, record)=>(
                <input type="text"
                       value={record.CachDung}
                       onChange={(e) => handleChangeInput(e, record, 'CachDung')}
                       style={{width: "80px", outline: "none"}}
                />
            ),
        },
        {title: "Đối tượng", dataIndex: "Object",
            render: (number, record) => (
                <select
                    value={record.Object}
                    onChange={(e) => handleChangeInput(e, record, 'Object')}
                    style={{
                        width: "100px",
                        padding: "5px",
                    }}
                    onKeyDown={handleKeyDown}
                >
                    <option value="1">Dịch vụ</option>
                    <option value="2">BHYT</option>
                </select>
            ),
        },
        {title: "Xóa", dataIndex: "",
            align: "center",
            fixed: "right",
            render: (record) => (
                <div style={{width: "50px"}}>
                    <Button className="khambenh-btn-icon color-icon-edit red"
                    onClick={()=>handleDelete(record.Code, record.MedicineName)}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </Button>
                </div>
            ),
        },
    ];

    const items1 = [
        {label: <div className="form-input-label ">F2 - Mới</div>, key: "1",
            icon:(<div><FontAwesomeIcon icon={faPowerOff} /></div>),
        },
        {label: <div className="form-input-label ">F3 - Lưu</div>, key: "2",
            icon:<FontAwesomeIcon icon={faSave} />,
        },
        {label: <div className="form-input-label ">Bỏ qua</div>, key: "3",
            icon:(<div><FontAwesomeIcon icon={faFastForward} /></div>),
        },
        {label: <div className="form-input-label ">In CD</div>, key: "4",
            icon:(<div><FontAwesomeIcon icon={faPrint} /></div>),
        },
        {label: <div className="form-input-label ">Hủy</div>, key: "5",
            icon:(<div className=""><FontAwesomeIcon icon={faTrashCan} /></div>),
        },
        {label: <div className="form-input-label ">Thoát</div>, key: "6",
            icon:(<div><FontAwesomeIcon icon={faCircleXmark} /></div>),
        },
    ];

    const handCloseModal = (a) => {
        if (a === "6") {
            setOpen(false);
        }
    };
    return (
        <>
            <Modal className="ToaMuaNgoai"
                   title={
                       <>
                           <div className="d-flex justify-content-between align-items-center ">
                               <div className="title-header">TOA MUA NGOÀI</div>
                               <div className="btn-header">
                                   <div className="d-flex justify-content-end align-items-center">
                                       <Form.Item
                                           className="m-0 p-0"
                                           label={<div className="form-input-label checkthuoc">Thuốc DV</div>}
                                       >
                                           <Checkbox/>
                                       </Form.Item>
                                       {items1.map((item) => (
                                           <Button
                                               className="form-btn bg mx-1 px-1"
                                               key={item.key}
                                               onClick={() => handCloseModal(item.key)}
                                           >
                                               {item.icon}
                                               <div className="mx-1 fw-bold">{item.label}</div>
                                           </Button>
                                       ))}
                                   </div>
                               </div>
                           </div>
                       </>
                   }
                   centered
                   open={open}
                   okButtonProps={{
                       style: {
                           display: "none",
                       },
                   }}
                   cancelButtonProps={{
                       style: {
                           display: "none",
                       },
                   }}
                   onCancel={() => setOpen(false)}
                   width={"100vw"}
                   closable={false}
            >
                <div className="text-center">
                    <Form onFinish={""}>
                        <div className="scroll">
                            <div className="bg-box bg-xam color-border-xam px-2">
                                <div className="row ">
                                    <Form.Item
                                        label={<div className="form-input-label txtname">Ngày cấp</div>}
                                        className="col-md-2 m-0"
                                    >
                                        <Input className="form-control"/>
                                    </Form.Item>
                                    <Form.Item
                                        label={<div className="form-input-label txtname">Mạch(l/p)</div>}
                                        className="col-md-1 m-0"
                                    >
                                        <Input className="form-control"/>
                                    </Form.Item>
                                    <Form.Item
                                        label={
                                            <div className="form-input-label txtname">
                                                Nh.Độ(<sup>o</sup>C)
                                            </div>
                                        }
                                        className="col-md-1 m-0"
                                    >
                                        <Input className="form-control"/>
                                    </Form.Item>
                                    <Form.Item
                                        label={<div className="form-input-label txtname">HA(mmHg)</div>}
                                        className="col-md-2 m-0"
                                    >
                                        <div className="d-flex">
                                            <Input className="form-control"/>
                                        </div>
                                    </Form.Item>
                                    <Form.Item
                                        label={<div className="form-input-label txtname">N.Thở(l/p)</div>}
                                        className="col-md-1 m-0"
                                    >
                                        <Input className="form-control"/>
                                    </Form.Item>
                                    <Form.Item
                                        label={<div className="form-input-label txtname">Cân nặng(kg)</div>}
                                        className="col-md-2 m-0"
                                    >
                                        <Input className="form-control"/>
                                    </Form.Item>
                                    <Form.Item
                                        label={<div className="form-input-label txtname">Ch.Cao</div>}
                                        className="col-md-1 m-0"
                                    >
                                        <Input className="form-control"/>
                                    </Form.Item>
                                    <Form.Item
                                        label={<div className="form-input-label txtname">Ngày kê toa</div>}
                                        className="col-md-2 m-0"
                                    >
                                        <Input className="form-control" type="date"/>
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="d-flex  align-items-center" style={{display: 'flex', width: "100%"}}>
                                <label style={{position: "rela  tive",}} id="select-label" htmlFor="selectToaMuaNgoai">
                                    Toa thuốc:</label>
                                <ComboBoxTable
                                    id="selectToaMuaNgoai"
                                    ref={comboBoxRef}
                                    aria-labelledby="select-label"
                                    value={value}
                                    onValue={handleSelect}
                                    onSearch={setSearch}
                                    onLayoutListBox={onLayoutListBox}
                                    options={filteredOptions}
                                    columns={columnMapOption}
                                    renderColumnValue={renderValue}
                                    mapOption={mapOption}
                                />
                            </div>

                            <div className="d-flex">
                                <div className="w-75 color-border mt-1 p-1">
                                    <Table
                                        columns={columns}
                                        dataSource={selectedDv}
                                        // dataSource={ds}
                                        // loading={loading}
                                        scroll={{x: true, y: 500}}
                                        size="small"
                                        rowKey="Code"
                                        pagination={false}
                                    />
                                </div>
                                <div className="w-25 color-border m-1 p-1">
                                    <div className="mt-1 fw-bold">Toa thuốc</div>
                                    <div className="d-flex w-100 bg-box bg-xam color-border-xam">
                                        <div className="w-60 color-border-xam">
                                            {" "}
                                            Tên thuốc - VTYT
                                        </div>
                                        <div className="w-20 color-border-xam">DVT</div>
                                        <div className="w-20 color-border-xam">SL</div>
                                    </div>
                                    <div>
                                        <Collapse accordion={true}>
                                            <Collapse.Panel
                                                key={"1"}
                                                header={
                                                    <div className="text-start m-0 ">Khám bệnh</div>
                                                }
                                            >
                                                <Typography.Text>
                                                    <div className="d-flex w-100 align-items-center">
                                                        <div className="w-60 text-start px-2">
                                                            Tên thuốc - VTYT
                                                        </div>
                                                        <div className="w-20">viên</div>
                                                        <div className="w-20">20</div>
                                                    </div>
                                                    <div className="d-flex w-100">
                                                        <div className="w-60 text-start px-2">
                                                            {" "}
                                                            BHYT
                                                        </div>
                                                        <div className="w-20">uống</div>
                                                        <div className="w-20">20</div>
                                                    </div>
                                                </Typography.Text>
                                            </Collapse.Panel>
                                        </Collapse>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </Modal>
        </>
    );
}

export default Toamuangoai;


// Toamuangoai.js
// import React, {useState} from "react";
// import {Modal, Button, Form, Input, Checkbox, message, Collapse, Typography} from "antd";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faCircleXmark, faFastForward, faPowerOff, faPrint, faSave, faTrashCan} from "@fortawesome/free-solid-svg-icons";
// import TableData from './tabledata'; // Import the TableData component
// import "./toamuangoai.scss";
//
// function Toamuangoai(props) {
//     const {open, setOpen} = props;
//
//     const sampleCats = [
//         {key: '1', MedicineName: 'British', DVT: '1', Date: '20/11/2024', S: 0, Tr: 0, C: 0, T: 0, SL: '10', Price: '11', TotalPrice: '10', CachDung: '', Object: 'DV', Code: 'MK01'},
//         {key: '2', MedicineName: 'Siêu âm tuyến giáp', DVT: '2', Date: '21', S: 0, Tr: 0, C: 0, T: 0, SL: '100', Price: '11', TotalPrice: '10', CachDung: '', Object: 'DV', Code: 'SA01'},
//         {key: '3', MedicineName: 'Persian', DVT: '3', Date: '28', S: 0, Tr: 0, C: 0, T: 0, SL: '50', Price: '11', TotalPrice: '10', CachDung: '', Object: 'DV', Code: 'SA02'},
//         {key: '4', MedicineName: 'Ragdoll', DVT: '4', Date: '24', S: 0, Tr: 0, C: 0, T: 0, SL: '16', Price: '11', TotalPrice: '10', CachDung: '', Object: 'DV', Code: 'SA03'},
//         {key: '5', MedicineName: 'Hjien', DVT: '4', Date: '15', S: 0, Tr: 0, C: 0, T: 0, SL: '11', Price: '11', TotalPrice: '10', CachDung: '', Object: 'DV', Code: 'SA04'},
//         {key: '6', MedicineName: 'Smyna', DVT: '4', Date: '32', S: 0, Tr: 0, C: 0, T: 0, SL: '141', Price: '11', TotalPrice: '10', CachDung: '', Object: 'DV', Code: 'SA05'},
//     ];
//
//     const [selectedDv, setSelectedDv] = useState([]);
//
//     const items1 = [
//         {
//             label: <div className="form-input-label ">F2 - Mới</div>,
//             key: "1",
//             icon: (<div><FontAwesomeIcon icon={faPowerOff}/></div>)
//         },
//         {label: <div className="form-input-label ">F3 - Lưu</div>, key: "2", icon: <FontAwesomeIcon icon={faSave}/>},
//         {
//             label: <div className="form-input-label ">Bỏ qua</div>,
//             key: "3",
//             icon: (<div><FontAwesomeIcon icon={faFastForward}/></div>)
//         },
//         {
//             label: <div className="form-input-label ">In CD</div>,
//             key: "4",
//             icon: (<div><FontAwesomeIcon icon={faPrint}/></div>)
//         },
//         {
//             label: <div className="form-input-label ">Hủy</div>,
//             key: "5",
//             icon: (<div><FontAwesomeIcon icon={faTrashCan}/></div>)
//         },
//         {
//             label: <div className="form-input-label ">Thoát</div>,
//             key: "6",
//             icon: (<div><FontAwesomeIcon icon={faCircleXmark}/></div>)
//         },
//     ];
//
//     const handCloseModal = (a) => {
//         if (a === "6") {
//             setOpen(false);
//         }
//     };
//
//     return (
//         <>
//             <Modal
//                 className="ToaMuaNgoai"
//                 title={
//                     <>
//                         <div className="d-flex justify-content-between align-items-center ">
//                             <div className="title-header">TOA MUA NGOÀI</div>
//                             <div className="btn-header">
//                                 <div className="d-flex justify-content-end align-items-center">
//                                     <Form.Item
//                                         className="m-0 p-0"
//                                         label={<div className="form-input-label checkthuoc">Thuốc DV</div>}
//                                     >
//                                         <Checkbox/>
//                                     </Form.Item>
//                                     {items1.map((item) => (
//                                         <Button
//                                             className="form-btn bg mx-1 px-1"
//                                             key={item.key}
//                                             onClick={() => handCloseModal(item.key)}
//                                         >
//                                             {item.icon}
//                                             <div className="mx-1 fw-bold">{item.label}</div>
//                                         </Button>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </>
//                 }
//                 centered
//                 open={open}
//                 okButtonProps={{
//                     style: {
//                         display: "none",
//                     },
//                 }}
//                 cancelButtonProps={{
//                     style: {
//                         display: "none",
//                     },
//                 }}
//                 onCancel={() => setOpen(false)}
//                 width={"100vw"}
//                 closable={false}
//             >
//                 <div className="text-center">
//                     <Form onFinish={""}>
//                         <div className="scroll">
//                             <div className="bg-box bg-xam color-border-xam px-2">
//                                 <div className="row ">
//                                     <Form.Item
//                                         label={<div className="form-input-label txtname">Ngày cấp</div>}
//                                         className="col-md-2 m-0"
//                                     >
//                                         <Input className="form-control"/>
//                                     </Form.Item>
//                                     <Form.Item
//                                         label={<div className="form-input-label txtname">Mạch(l/p)</div>}
//                                         className="col-md-1 m-0"
//                                     >
//                                         <Input className="form-control"/>
//                                     </Form.Item>
//                                     <Form.Item
//                                         label={
//                                             <div className="form-input-label txtname">
//                                                 Nh.Độ(<sup>o</sup>C)
//                                             </div>
//                                         }
//                                         className="col-md-1 m-0"
//                                     >
//                                         <Input className="form-control"/>
//                                     </Form.Item>
//                                     <Form.Item
//                                         label={<div className="form-input-label txtname">HA(mmHg)</div>}
//                                         className="col-md-2 m-0"
//                                     >
//                                         <div className="d-flex">
//                                             <Input className="form-control"/>
//                                         </div>
//                                     </Form.Item>
//                                     <Form.Item
//                                         label={<div className="form-input-label txtname">N.Thở(l/p)</div>}
//                                         className="col-md-1 m-0"
//                                     >
//                                         <Input className="form-control"/>
//                                     </Form.Item>
//                                     <Form.Item
//                                         label={<div className="form-input-label txtname">Cân nặng(kg)</div>}
//                                         className="col-md-2 m-0"
//                                     >
//                                         <Input className="form-control"/>
//                                     </Form.Item>
//                                     <Form.Item
//                                         label={<div className="form-input-label txtname">Ch.Cao</div>}
//                                         className="col-md-1 m-0"
//                                     >
//                                         <Input className="form-control"/>
//                                     </Form.Item>
//                                     <Form.Item
//                                         label={<div className="form-input-label txtname">Ngày kê toa</div>}
//                                         className="col-md-2 m-0"
//                                     >
//                                         <Input className="form-control" type="date"/>
//                                     </Form.Item>
//                                 </div>
//                                 {/*<TableData*/}
//                                 {/*    selectedDv={selectedDv}*/}
//                                 {/*    setSelectedDv={setSelectedDv}*/}
//                                 {/*    sampleCats={sampleCats}*/}
//                                 {/*/>*/}
//                                 {/*<TableData*/}
//                                 {/*    selectedDv={selectedDv}*/}
//                                 {/*    setSelectedDv={setSelectedDv}*/}
//                                 {/*    sampleCats={sampleCats}*/}
//                                 {/*/>*/}
//                                 <div className="d-flex">
//                                     {/*<div>*/}
//                                         <TableData
//                                             selectedDv={selectedDv}
//                                             setSelectedDv={setSelectedDv}
//                                             sampleCats={sampleCats}
//                                         />
//
//                                     {/*</div>*/}
//                                     <div className="w-25 color-border m-1 p-1">
//                                         <div className="mt-1 fw-bold">Toa thuốc</div>
//                                         <div className="d-flex w-100 bg-box bg-xam color-border-xam">
//                                             <div className="w-60 color-border-xam">
//                                                 {" "}
//                                                 Tên thuốc - VTYT
//                                             </div>
//                                             <div className="w-20 color-border-xam">DVT</div>
//                                             <div className="w-20 color-border-xam">SL</div>
//                                         </div>
//                                         <div>
//                                             <Collapse accordion={true}>
//                                                 <Collapse.Panel
//                                                     key={"1"}
//                                                     header={
//                                                         <div className="text-start m-0 ">Khám bệnh</div>
//                                                     }
//                                                 >
//                                                     <Typography.Text>
//                                                         <div className="d-flex w-100 align-items-center">
//                                                             <div className="w-60 text-start px-2">
//                                                                 Tên thuốc - VTYT
//                                                             </div>
//                                                             <div className="w-20">viên</div>
//                                                             <div className="w-20">20</div>
//                                                         </div>
//                                                         <div className="d-flex w-100">
//                                                             <div className="w-60 text-start px-2">
//                                                                 {" "}
//                                                                 BHYT
//                                                             </div>
//                                                             <div className="w-20">uống</div>
//                                                             <div className="w-20">20</div>
//                                                         </div>
//                                                     </Typography.Text>
//                                                 </Collapse.Panel>
//                                             </Collapse>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </Form>
//                 </div>
//             </Modal>
//         </>
//     );
// }
//
// export default Toamuangoai;