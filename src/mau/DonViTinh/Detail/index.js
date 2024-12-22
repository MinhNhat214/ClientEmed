// import { Modal, Button, Form, Input, Checkbox, Select } from "antd";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState, useEffect } from "react";
// import { clone } from "lodash";
// import Swal from "sweetalert2";
// //import Select from 'react-select';
// import { useDispatch, useSelector } from "react-redux";
// import { faFloppyDisk, faRightFromBracket, faPlus } from "@fortawesome/free-solid-svg-icons";
// // import loginAPI from "../../../../../services/loginApi";
// import { setDataNhomThuoc } from "../../reducers/dataAdd";
// import { setDataLoaiThuoc } from "../../reducers/dataAdd";
// import '../../PhanNhom/Detail/phannhom.scss';
// import loaithuocAPI from "../../API/loaithuocAPI";
//
// function isIncludingString(string, option) {
//     let result = false;
//     if (
//         !string ||
//         option.label.toString().includes(string) ||
//         option.value.toString().includes(string)
//     ) {
//         result = true;
//     }
//     return result;
// }
//
// function DetailLoaiThuoc(props) {
//     const { open, setOpen, handleCreate, handleUpdate, listServiceGroup} = props;
//     const { loaithuoc } = useSelector((state) => state.dataAdd);
//     // console.log("Props received in DetailLoaiThuoc:", props);
//     const [form] = Form.useForm();
//     const dispatch = useDispatch();
//
//     // const handleSubmit = async (e) => {
//     //     // if (!e.ServiceGroup_ID || !e.ServiceCategory_Name ) {
//     //     //     Swal.fire({
//     //     //         icon: 'error',
//     //     //         title: 'Thiếu thông tin',
//     //     //         text: 'Vui lòng điền đầy đủ thông tin trước khi lưu!',
//     //     //     });
//     //     //     return;
//     //     // }
//     //     Swal.fire({
//     //         title: "BẠN CÓ MUỐN LƯU THÔNG TIN?",
//     //         confirmButtonText: "Đồng ý",
//     //         showCancelButton: true,
//     //         cancelButtonText: "Hủy",
//     //         customClass: {
//     //             title: "fs-5 text-dark",
//     //             confirmButton: "bg-primary shadow-none",
//     //             cancelButton: "bg-warning shadow-none",
//     //         },
//     //     }).then((result) => {
//     //         if (result.isConfirmed) {
//     //             if (loaithuoc?.ServiceCategory_ID) {
//     //                 var upThuoc = {
//     //                     ServiceCategory_ID: e?.ServiceCategory_ID,
//     //                     ServiceGroup_ID: e?.ServiceGroup_ID,
//     //                     ServiceCategory_Name: e?.ServiceCategory_Name,
//     //                     STT: '2',
//     //                     EmployeeID: '333',
//     //                     Hide: 'I'
//     //                 }
//     //                 console.log("update: ", upThuoc)
//     //                 handleUpdate(upThuoc);
//     //                 dispatch(setDataLoaiThuoc());
//     //                 form.resetFields();
//     //                 setOpen(false);
//     //             } else {
//     //                 var loaiThuoc = {
//     //                     ServiceCategory_ID: e?.ServiceCategory_ID,
//     //                     ServiceGroup_ID: e?.ServiceGroup_ID,
//     //                     ServiceCategory_Name: e?.ServiceCategory_Name,
//     //                     STT: '2',
//     //                     EmployeeID: '333',
//     //                     Hide: 'I'
//     //                 }
//     //                 console.log("create: ", loaiThuoc)
//     //                 handleCreate(loaiThuoc);
//     //                 form.resetFields();
//     //             }
//     //         }
//     //     });
//     // }
//     const handleSubmit = async (e) => {
//         const formData = form.getFieldsValue();
//         // console.log("Form data:", formData);
//
//         const defaultValues = {
//             STT: '2',
//             EmployeeID: '333',
//             Hide: 0
//         };
//
//         const finalData = {
//             ...formData,
//             ...defaultValues
//         };
//
//         // console.log("Final data to send:", finalData);
//
//         Swal.fire({
//             title: "BẠN CÓ MUỐN LƯU THÔNG TIN?",
//             confirmButtonText: "Đồng ý",
//             showCancelButton: true,
//             cancelButtonText: "Hủy",
//             customClass: {
//                 title: "fs-5 text-dark",
//                 confirmButton: "bg-primary shadow-none",
//                 cancelButton: "bg-warning shadow-none",
//             },
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 if (loaithuoc?.ServiceCategory_ID) {
//                     // console.log("update: ", finalData);
//                     handleUpdate(finalData);
//                     dispatch(setDataLoaiThuoc());
//                     form.resetFields();
//                     setOpen(false);
//                 } else {
//                     // console.log("create: ", finalData);
//                     handleCreate(finalData);
//                     form.resetFields();
//                 }
//             }
//         });
//     }
//
//     useEffect(() => {
//         // console.log("List Service Group:", listServiceGroup);
//         form.setFieldsValue({
//             ServiceCategory_ID: loaithuoc?.ServiceCategory_ID,
//             ServiceGroup_ID: loaithuoc?.ServiceGroup_ID,
//             ServiceCategory_Name: loaithuoc?.ServiceCategory_Name,
//             STT: loaithuoc?.STT,
//             EmployeeID: loaithuoc?.EmployeeID,
//             Type_: loaithuoc?.Type_,
//         });
//     }, [loaithuoc, listServiceGroup]);
//     // const datamm= loginAPI.profileFetch();
//
//     return (
//         <>
//             <Modal className="DetalPhanNhomDuoc"
//                title={
//                    <div className="vienphi-danhmuc-add">
//                        Khai báo nhóm loại
//                    </div>
//                }
//                centered
//                open={open}
//                okButtonProps={{
//                    style: {
//                        display: "none",
//                    },
//                }}
//                cancelButtonProps={{
//                    style: {
//                        display: "none",
//                    },
//                }}
//                onCancel={() => setOpen(false)}
//                width={1000}
//                closable={false}
//                forceRender
//                maskClosable={false}
//             >
//                 <div className="text-center">
//                     <Form onFinish={handleSubmit} form={form}>
//                         <div >
//                             <div className="row dmdot">
//                                 {/*<Form.Item*/}
//                                 {/*    label={*/}
//                                 {/*        <div className="form-input-label input-label-khaibaouser ">*/}
//                                 {/*            ID:*/}
//                                 {/*        </div>*/}
//                                 {/*    }*/}
//                                 {/*    className="col-md-6 ServiceGroupID"*/}
//                                 {/*    name="ServiceGroup_ID"*/}
//                                 {/*    hidden={true}*/}
//
//                                 {/*>*/}
//                                 {/*    <Input className="form-control inputdm" />*/}
//                                 {/*</Form.Item>*/}
//                                 <Form.Item
//                                     label={
//                                         <div className="form-input-label input-label-khaibaouser ">
//                                             Mã loại:
//                                         </div>
//                                     }
//                                     className="col-md-6"
//                                     name="ServiceCategory_ID"
//                                 >
//                                     <Input className="form-control inputdm" />
//                                 </Form.Item>
//                                 <Form.Item
//                                     label={
//                                         <div className="form-input-label input-label-khaibaouser ">
//                                             Tên loại:
//                                         </div>
//                                     }
//                                     className="col-md-6"
//                                     name="ServiceCategory_Name"
//                                 >
//                                     <Input className="form-control inputdm" />
//                                 </Form.Item>
//                             </div>
//                             <div className="row dmdot">
//                                 <Form.Item
//                                     label={
//                                         <div className="form-input-label input-label-khaibaouser ">
//                                             Nhóm:
//                                         </div>
//                                     }
//                                     className="col-md-6"
//                                     name="ServiceGroup_ID"
//                                 >
//                                     <Select
//                                         showSearch
//                                         className="selectac"
//                                         placeholder="Search to Select"
//                                         optionFilterProp="label"
//                                         filterSort={(optionA, optionB) =>
//                                             (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
//                                         }
//                                         options={listServiceGroup?.map((item) => ({
//                                             value: item.ServiceGroup_ID,
//                                             label: item.ServiceGroupName
//                                         }))}
//                                     />
//                                 </Form.Item>
//                             </div>
//                         </div><hr/>
//                         <Form.Item className="text-center">
//                             <Button
//                                 htmlType="submit"
//                                 className="mx-2 vienphi-danhmuc-btn"
//                             >
//                                 <FontAwesomeIcon icon={faFloppyDisk} className="mx-1" /> Lưu
//                             </Button>
//                             <Button danger className="mx-2" onClick={() => setOpen(false)}>
//                                 Thoát <FontAwesomeIcon icon={faRightFromBracket} className="mx-1" />
//                             </Button>
//                         </Form.Item>
//                     </Form>
//                 </div>
//             </Modal>
//         </>
//     );
// }
//
// export default DetailLoaiThuoc;

/**
 * CONVERT UI
 */
import { Modal, Button, Form, Input, Select } from "antd";
import { SaveOutlined, CloseOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {setDataDonViTinh, setDataLoaiThuoc} from "../../reducers/dataAdd";

function DetailDonViTinh(props) {
    const { open, setOpen, handleCreate, handleUpdate, listDonViTinh } = props;
    const { donvitinh } = useSelector((state) => state.dataAdd);
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        Swal.fire({
            title: "BẠN CÓ MUỐN LƯU THÔNG TIN?",
            confirmButtonText: "Đồng ý",
            showCancelButton: true,
            cancelButtonText: "Hủy",
            customClass: {
                title: "fs-5 text-dark",
                confirmButton: "bg-primary shadow-none",
                cancelButton: "bg-warning shadow-none",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                if (donvitinh?.UnitID) {
                    var upDonViTinh = {
                        UnitID: values?.UnitID,
                        UnitName: values?.UnitName,
                        STT: 1,
                        EmployeeID: 333,
                        Hide: 0
                    }
                    // console.log("updated data: ",upDonViTinh);
                    handleUpdate(upDonViTinh);
                    dispatch(setDataDonViTinh());
                    form.resetFields();
                    setOpen(false);
                } else {
                    var addDonViTinh = {
                        // UnitID: values.UnitID,
                        UnitName: values.UnitName,
                        STT: 1,
                        EmployeeID: 333,
                        Hide: 0
                    }
                    // console.log("created data: ",addDonViTinh);
                    handleCreate(addDonViTinh);
                    form.resetFields();
                    setOpen(false);

                }
            }
        });
    }

    useEffect(() => {
        form.setFieldsValue({
            UnitID: donvitinh?.UnitID,
            UnitName: donvitinh?.UnitName,
        });
    }, [donvitinh, form]);

    const handleCancel = () => {
        form.resetFields();
        setOpen(false);
    };

    return (
        <Modal
            title="Khai báo đơn vị tính"
            centered
            open={open}
            onCancel={handleCancel}
            width={800}
            footer={null}
            destroyOnClose={true}
            forceRender
        >
            <Form
                form={form}  // Thêm prop form vào đây
                onFinish={handleSubmit}
                layout="vertical"
                preserve={false}
            >
                <Form.Item
                    name="UnitID"
                    label="Mã đơn vị tính"
                    rules={[{ required: true, message: 'Vui lòng nhập mã đơn vị tính!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="UnitName"
                    label="Tên loại"
                    rules={[{ required: true, message: 'Vui lòng nhập tên tên đơn vị tính!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item className="text-center" style={{paddingTop: "20px"}}>
                    <Button type="primary" htmlType="submit" icon={<SaveOutlined />} style={{ marginRight: 8 }}>
                        Lưu
                    </Button>
                    <Button danger onClick={handleCancel} icon={<CloseOutlined />}>
                        Thoát
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default DetailDonViTinh;