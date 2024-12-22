// // ON BOARD: CODE ANH HÙNG
// import { Form, Input, Table, Button, Checkbox } from "antd";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
// import { v4 as uuidv4 } from "uuid";
// import { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import SearchFilter from "./Timkiem";
// import "./donthuoc.scss"
// import {setDataThuocVTYT} from "../../../../reducers/dataAdd";
// import thuocvtytAPI from "../../../../API/thuocvtytAPI";
// import { errorInfo, infoRes, successInfo } from "../../../../components/Dialog/Dialog";
//
//
// function Donthuoc() {
//     //State Data
//     const [listThuocVTYT, setListThuocVTYT] = useState([]);
//     const getAllThuocVTYT = async () => {
//         try {
//             // setLoading(true);
//             const data= await thuocvtytAPI.getAll('ItemID');
//             setListThuocVTYT(data.data);
//             // setLoading(false);
//         } catch (err) {
//             throw new Error(err);
//         }
//     };
//     useEffect(() => {
//         getAllThuocVTYT();
//     }, []);
//     //Usestate
//     const [dsthuoc, setDSThuoc] = useState([]);
//     const [thuocdcchon, setValueThuocChon] = useState({});
//     const [value, setValue] = useState(false);
//     const [data, setData] = useState([]);
//     const [red, setReds] = useState([]);
//     const [form] = Form.useForm();
//     const [valueInputThuoc, setValueInputThuoc] = useState();
//     const [clickTenThuoc, setClickTenThuoc] = useState(false);
//     console.log('clickTenThuoc: ', clickTenThuoc);
//     //UseRef
//     const refTenthuoc = useRef(null);
//     const refNcap = useRef(null);
//     const refSang = useRef(null);
//     const refTrua = useRef(null);
//     const refChieu = useRef(null);
//     const refToi = useRef(null);
//     const refCachdung = useRef(null);
//     const refLuu = useRef(null);
//
//     const handleDeleteThuoc = (a) => {
//         let ds = dsthuoc.filter((item) => item.Ma !== a.Ma);
//         setDSThuoc(ds);
//     };
//
//     const handlePushThuoc = (e) => {
//         data.map((item) => {
//             if (item.name === e.Tenthuoc) {
//                 let a = {
//                     Ma: uuidv4(),
//                     Tenthuoc: thuocdcchon.name,
//                     ...e,
//                 };
//                 setDSThuoc((oldArray) => [...oldArray, a]);
//                 form.setFieldsValue({
//                     Tenthuoc: "",
//                     Hamluong: "",
//                     DVT: "",
//                     Ncap: "",
//                     Sang: "",
//                     Trua: "",
//                     Chieu: "",
//                     Toi: "",
//                     Tong: "",
//                     Cachdung: "",
//                 });
//                 setValue(!value);
//             }
//         });
//         setValueInputThuoc();
//         refTenthuoc.current.focus();
//     };
//     const handleSuaThongTin = (a, b) => {
//         console.log(a, b);
//     };
//     const handleFocusEnter = (a, b) => {
//         if (a.key === "Enter") {
//             if (b === 1) {
//                 refSang.current.focus();
//                 a.preventDefault();
//             } else if (b === 2) {
//                 refTrua.current.focus();
//                 a.preventDefault();
//             } else if (b === 3) {
//                 refChieu.current.focus();
//                 a.preventDefault();
//             } else if (b === 4) {
//                 refToi.current.focus();
//                 a.preventDefault();
//             } else if (b === 5) {
//                 refCachdung.current.focus();
//                 a.preventDefault();
//             } else if (b === 6) {
//                 refLuu.current.focus();
//                 a.preventDefault();
//             }
//         }
//     };
//
//     useEffect(() => {
//         form.setFieldsValue({
//             Tenthuoc: thuocdcchon.name,
//             // DVT: thuocdcchon.email,
//             // Hluong: thuocdcchon.phone,
//         });
//     }, [thuocdcchon]);
//
//     useEffect(() => {
//             axios
//             .get("https://jsonplaceholder.typicode.com/users")
//             .then((res) => {
//                 setData(res.data);
//                 setReds(res.data);
//             })
//             .catch((err) => console.log(err));
//     }, []);
//
//
//     const column0 = [
//         {
//             title: "Tên Thuốc",
//             dataIndex: "Tenthuoc",
//             width: "20%",
//         },
//         {
//             title: "Hàm lượng",
//             dataIndex: "Hluong",
//             width: "5%",
//         },
//         {
//             title: "ĐVT",
//             dataIndex: "DVT",
//             width: "5%",
//         },
//
//         {
//             title: "Ng.cấp",
//             dataIndex: "Ncap",
//             width: "5%",
//         },
//         {
//             title: "Sáng",
//             dataIndex: "Sang",
//             width: "5%",
//             align: "center",
//             render: (Sang) => (
//                 <div>
//                     <input className="form-control" defaultValue={Sang} />
//                 </div>
//             ),
//         },
//         {
//             title: "Trưa",
//             dataIndex: "Trua",
//             width: "5%",
//             align: "center",
//         },
//         {
//             title: "Chiều",
//             dataIndex: "Chieu",
//             width: "5%",
//             align: "center",
//         },
//         {
//             title: "Tối ",
//             dataIndex: "Toi",
//             width: "5%",
//             align: "center",
//         },
//         {
//             title: "Tổng",
//             dataIndex: "Tong",
//             width: "10%",
//         },
//         {
//             title: "Cách dùng",
//             dataIndex: "Cachdung",
//             width: "20%",
//         },
//         {
//             title: "Đơn giá",
//             dataIndex: "Dongia",
//             width: "10%",
//         },
//         {
//             title: "Xóa",
//             dataIndex: "",
//             align: "center",
//             width: "5%",
//             render: (_, record) => (
//                 <div className="d-flex justify-content-center">
//                     <Button
//                         className="khambenh-btn-icon color-icon-edit red"
//                         onClick={() => handleDeleteThuoc(record)}
//                     >
//                         <FontAwesomeIcon icon={faXmarkCircle} />
//                     </Button>
//                 </div>
//             ),
//         },
//     ];
//
//
//     return (
//         <>
//             <div className="h-max-donthuoc">
//                 <div className="mt-1 px-1 bg-box bg-xam color-border-xam">
//                     <div className="donthuoc-top">
//                         <Form>
//                             <div className="row ">
//                                 <Form.Item
//                                     className="col-md-2 m-0"
//                                     label={<div className="form-input-label">Ngày cấp</div>}
//                                 >
//                                     <Input className="form-control" />
//                                 </Form.Item>
//                                 <div className="col-md-1 kb-checktoa">
//                                     <div className=" kb-checkintoa checkintoa-name "> Hẹn TK :</div>
//                                     <div className=" kb-checkintoa check-1"> <Checkbox /></div>
//
//                                 </div>
//
//                                 <Form.Item
//                                     className="col-md-2 m-0"
//                                     label={<div className="form-input-label">Ngày TK</div>}
//                                 >
//                                     <Input className="form-control" type="date" />
//                                 </Form.Item>
//                                 <Form.Item
//                                     className="col-md-3 m-0"
//                                     label={<div className="form-input-label">Ng.Nghĩ</div>}
//                                 >
//                                     <div className="d-flex">
//                                         <Input className="form-control w-20" />
//                                         <Input className="form-control w-40" />
//                                         - <Input className="form-control w-40" />
//                                     </div>
//                                 </Form.Item>
//                                 <Form.Item
//                                     className="col-md-2 m-0"
//                                     label={<div className="form-input-label">Toa củ</div>}
//                                 >
//                                     <Input className="form-control" />
//                                 </Form.Item>
//                                 <Form.Item
//                                     className="col-md-2 m-0"
//                                     label={<div className="form-input-label">Toa mẫu</div>}
//                                 >
//                                     <Input className="form-control" />
//                                 </Form.Item>
//                             </div>
//                         </Form>
//                     </div>
//                 </div>
//                 <div className="div-shadow v5 my-1">
//                     <div>
//                         <div className="label-table">
//                             <div className=" w-20">Tên thuốc</div>
//                             <div className=" w-5 text-center">HL</div>
//                             <div className=" w-5 text-center">ĐVT</div>
//                             <div className=" w-5 text-center">N.cấp</div>
//                             <div className=" w-5 text-center">Sáng</div>
//                             <div className=" w-5 text-center">Trưa</div>
//                             <div className=" w-5 text-center">Chiều</div>
//                             <div className=" w-5 text-center">Tối</div>
//                             <div className=" w-10 text-center">Tổng</div>
//                             <div className=" w-20">Cách dùng</div>
//                             <div className=" w-10 text-center">Đơn giá</div>
//                             <div className=" w-5 text-center">Lưu</div>
//                         </div>
//                         <div className="scroll">
//
//                             <Form
//                                 form={form}
//                                 onFinish={handlePushThuoc}
//                                 onKeyDown={(e) => handleFocusEnter(e, 8)}
//                             >
//                                 <div className="d-flex">
//                                     <Form.Item className="p-0 m-0 w-20">
//                                         <SearchFilter
//                                             setValueThuocChon={setValueThuocChon}
//                                             thuocdcchon={thuocdcchon}
//                                             form={form}
//                                             onFinish={handlePushThuoc}
//                                             data={data}
//                                             red={red}
//                                             setReds={setReds}
//                                             listThuocVTYT={listThuocVTYT}
//                                             valueInputThuoc={valueInputThuoc}
//                                             setValueInputThuoc={setValueInputThuoc}
//                                             clickTenThuoc={clickTenThuoc}
//                                             setClickTenThuoc={setClickTenThuoc}
//                                             refNcap={refNcap}
//                                             refTenthuoc={refTenthuoc}
//                                         />
//                                     </Form.Item>
//                                     <Form.Item className="p-0 m-0 w-5" name="Hluong">
//                                         <Input className="form-control" />
//                                     </Form.Item>{" "}
//                                     <Form.Item className="p-0 m-0 w-5" name="DVT">
//                                         <Input className="form-control" />
//                                     </Form.Item>
//                                     <Form.Item className="p-0 m-0 w-5" name="Ncap">
//                                         <Input
//                                             className="form-control"
//                                             ref={refNcap}
//                                             onKeyDown={(e) => handleFocusEnter(e, 1)}
//                                         />
//                                     </Form.Item>
//                                     <Form.Item className="p-0 m-0 w-5" name="Sang">
//                                         <Input
//                                             className="form-control"
//                                             type="number"
//                                             min={0}
//                                             classNames="text-center"
//                                             ref={refSang}
//                                             onKeyDown={(e) => handleFocusEnter(e, 2)}
//                                         />
//                                     </Form.Item>
//                                     <Form.Item className="p-0 m-0 w-5" name="Trua">
//                                         <Input
//                                             className="form-control"
//                                             classNames="text-center"
//                                             type="number"
//                                             min={0}
//                                             ref={refTrua}
//                                             onKeyDown={(e) => handleFocusEnter(e, 3)}
//                                         />
//                                     </Form.Item>
//                                     <Form.Item className="p-0 m-0 w-5" name="Chieu">
//                                         <Input
//                                             className="form-control"
//                                             type="number"
//                                             min={0}
//                                             classNames="text-center"
//                                             ref={refChieu}
//                                             onKeyDown={(e) => handleFocusEnter(e, 4)}
//                                         />
//                                     </Form.Item>
//                                     <Form.Item className="p-0 m-0 w-5" name="Toi">
//                                         <Input
//                                             className="form-control"
//                                             type="number"
//                                             min={0}
//                                             classNames="text-center"
//                                             ref={refToi}
//                                             onKeyDown={(e) => handleFocusEnter(e, 5)}
//                                         />
//                                     </Form.Item>
//                                     <Form.Item className="p-0 m-0 w-10" name="Tong">
//                                         <Input className="form-control" />
//                                     </Form.Item>
//                                     <Form.Item className="p-0 m-0 w-20" name="Cachdung">
//                                         <Input
//                                             className="form-control"
//                                             ref={refCachdung}
//                                             onKeyDown={(e) => handleFocusEnter(e, 6)}
//                                         />
//                                     </Form.Item>
//                                     <Form.Item className="p-0 m-0 w-10" name="Dongia">
//                                         <Input className="form-control" readOnly />
//                                     </Form.Item>
//                                     <Form.Item className="p-0 m-0 w-5 d-flex justify-content-center">
//                                         <Button
//                                             className="khambenh-btn-icon color-icon-edit green"
//                                             htmlType="submit"
//                                             ref={refLuu}
//                                         >
//                                             <FontAwesomeIcon icon={faCheck} />
//                                         </Button>
//                                     </Form.Item>
//                                 </div>
//                             </Form>
//                             <div className="table-donthuoc">
//                                 <Table
//                                     columns={column0}
//                                     dataSource={dsthuoc}
//                                     // loading={loading}
//                                     scroll={{ x: true, y: 190 }}
//                                     size="small"
//                                     bordered={true}
//                                     pagination={false}
//                                     showHeader={false}
//                                     locale={{ emptyText: "Chưa có dữ liệu" }}
//                                     onRow={(record, rowIndex) => ({
//                                         onClick: () => {
//                                             handleSuaThongTin(record, rowIndex);
//                                         },
//                                     })}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
//
// export default Donthuoc;
//



// ON BOARD: THAY COMBOBOX TABLE CỦA A HÙNG THÀNH CỦA MÌNH
import { Form, Input, Table, Button, Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
// import SearchFilter from "./Timkiem";
import "./donthuoc.scss"
import {setDataThuocVTYT} from "../../../../reducers/dataAdd";
import thuocvtytAPI from "../../../../API/thuocvtytAPI";
import { errorInfo, infoRes, successInfo } from "../../../../components/Dialog/Dialog";
import CbtableDonthuoc from "./CbtableDonthuoc";

function Donthuoc() {
    //State Data
    const [listThuocVTYT, setListThuocVTYT] = useState([]);
    const getAllThuocVTYT = async () => {
        try {
            // setLoading(true);
            const data= await thuocvtytAPI.getAll('ItemID');
            setListThuocVTYT(data.data);
            // setLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };
    useEffect(() => {
        getAllThuocVTYT();
    }, []);
    //Usestate
    const [dsthuoc, setDSThuoc] = useState([]);
    const [thuocdcchon, setValueThuocChon] = useState({});
    const [value, setValue] = useState(false);
    const [data, setData] = useState([]);
    const [red, setReds] = useState([]);
    const [form] = Form.useForm();
    const [valueInputThuoc, setValueInputThuoc] = useState();
    const [clickTenThuoc, setClickTenThuoc] = useState(false);
    console.log('clickTenThuoc: ', clickTenThuoc);
    //UseRef
    const refTenthuoc = useRef(null);
    const refNcap = useRef(null);
    const refSang = useRef(null);
    const refTrua = useRef(null);
    const refChieu = useRef(null);
    const refToi = useRef(null);
    const refCachdung = useRef(null);
    const refLuu = useRef(null);

    const handleDeleteThuoc = (a) => {
        let ds = dsthuoc.filter((item) => item.Ma !== a.Ma);
        setDSThuoc(ds);
    };

    const handlePushThuoc = (e) => {
        data.map((item) => {
            if (item.name === e.Tenthuoc) {
                let a = {
                    Ma: uuidv4(),
                    Tenthuoc: thuocdcchon.name,
                    ...e,
                };
                setDSThuoc((oldArray) => [...oldArray, a]);
                form.setFieldsValue({
                    Tenthuoc: "",
                    Hamluong: "",
                    DVT: "",
                    Ncap: "",
                    Sang: "",
                    Trua: "",
                    Chieu: "",
                    Toi: "",
                    Tong: "",
                    Cachdung: "",
                });
                setValue(!value);
            }
        });
        setValueInputThuoc();
        refTenthuoc.current.focus();
    };
    const handleSuaThongTin = (a, b) => {
        console.log(a, b);
    };
    const handleFocusEnter = (a, b) => {
        if (a.key === "Enter") {
            if (b === 1) {
                refSang.current.focus();
                a.preventDefault();
            } else if (b === 2) {
                refTrua.current.focus();
                a.preventDefault();
            } else if (b === 3) {
                refChieu.current.focus();
                a.preventDefault();
            } else if (b === 4) {
                refToi.current.focus();
                a.preventDefault();
            } else if (b === 5) {
                refCachdung.current.focus();
                a.preventDefault();
            } else if (b === 6) {
                refLuu.current.focus();
                a.preventDefault();
            }
        }
    };

    useEffect(() => {
        form.setFieldsValue({
            Tenthuoc: thuocdcchon.name,
            // DVT: thuocdcchon.email,
            // Hluong: thuocdcchon.phone,
        });
    }, [thuocdcchon]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setData(res.data);
                setReds(res.data);
            })
            .catch((err) => console.log(err));
    }, []);


    // const column0 = [
    //     {
    //         title: "Tên Thuốc",
    //         dataIndex: "Tenthuoc",
    //         width: "20%",
    //     },
    //     {
    //         title: "Hàm lượng",
    //         dataIndex: "Hluong",
    //         width: "5%",
    //     },
    //     {
    //         title: "ĐVT",
    //         dataIndex: "DVT",
    //         width: "5%",
    //     },
    //
    //     {
    //         title: "Ng.cấp",
    //         dataIndex: "Ncap",
    //         width: "5%",
    //     },
    //     {
    //         title: "Sáng",
    //         dataIndex: "Sang",
    //         width: "5%",
    //         align: "center",
    //         render: (Sang) => (
    //             <div>
    //                 <input className="form-control" defaultValue={Sang} />
    //             </div>
    //         ),
    //     },
    //     {
    //         title: "Trưa",
    //         dataIndex: "Trua",
    //         width: "5%",
    //         align: "center",
    //     },
    //     {
    //         title: "Chiều",
    //         dataIndex: "Chieu",
    //         width: "5%",
    //         align: "center",
    //     },
    //     {
    //         title: "Tối ",
    //         dataIndex: "Toi",
    //         width: "5%",
    //         align: "center",
    //     },
    //     {
    //         title: "Tổng",
    //         dataIndex: "Tong",
    //         width: "10%",
    //     },
    //     {
    //         title: "Cách dùng",
    //         dataIndex: "Cachdung",
    //         width: "20%",
    //     },
    //     {
    //         title: "Đơn giá",
    //         dataIndex: "Dongia",
    //         width: "10%",
    //     },
    //     {
    //         title: "Xóa",
    //         dataIndex: "",
    //         align: "center",
    //         width: "5%",
    //         render: (_, record) => (
    //             <div className="d-flex justify-content-center">
    //                 <Button
    //                     className="khambenh-btn-icon color-icon-edit red"
    //                     onClick={() => handleDeleteThuoc(record)}
    //                 >
    //                     <FontAwesomeIcon icon={faXmarkCircle} />
    //                 </Button>
    //             </div>
    //         ),
    //     },
    // ];

    return (
        <>
            <div className="h-max-donthuoc">
                <div className="mt-1 px-1 bg-box bg-xam color-border-xam">
                    <div className="donthuoc-top">
                        <Form>
                            <div className="row ">
                                <Form.Item
                                    className="col-md-2 m-0"
                                    label={<div className="form-input-label">Ngày cấp</div>}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <div className="col-md-1 kb-checktoa">
                                    <div className=" kb-checkintoa checkintoa-name "> Hẹn TK :</div>
                                    <div className=" kb-checkintoa check-1"> <Checkbox /></div>

                                </div>

                                <Form.Item
                                    className="col-md-2 m-0"
                                    label={<div className="form-input-label">Ngày TK</div>}
                                >
                                    <Input className="form-control" type="date" />
                                </Form.Item>
                                <Form.Item
                                    className="col-md-3 m-0"
                                    label={<div className="form-input-label">Ng.Nghĩ</div>}
                                >
                                    <div className="d-flex">
                                        <Input className="form-control w-20" />
                                        <Input className="form-control w-40" />
                                        - <Input className="form-control w-40" />
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    className="col-md-2 m-0"
                                    label={<div className="form-input-label">Toa củ</div>}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    className="col-md-2 m-0"
                                    label={<div className="form-input-label">Toa mẫu</div>}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </div>
                <div>
                    <CbtableDonthuoc/>
                </div>
            </div>
        </>
    );
}

export default Donthuoc;

