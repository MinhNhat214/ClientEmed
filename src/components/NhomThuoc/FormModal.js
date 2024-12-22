// /**
//  * ĐANG SỬ DỤNG 200 OK
//  */
// import React, {useState} from "react";
// import {Modal, Button, Form, Input, Select, Row, Col, message} from "antd";
// import {SaveFilled, CloseCircleOutlined, PlusOutlined} from "@ant-design/icons";
// import {addServiceGroupDuoc} from "../../services/NhomThuocService";
//
// const FormModal = ({serviceModules = [], serviceGroupBHYT = []}) => {
//     const [open, setOpen] = useState(false);
//     const [form] = Form.useForm();
//
//     const handleSubmit = async () => {
//         const values = await form.validateFields();
//
//         const dataSubmit = {
//             ...values,
//             ServiceGroupBHYT_ID: String(values.ServiceGroupBHYT_ID),
//             ServiceGroupCode: "20",
//             EmployeeID: "1"
//         }
//
//         // console.log("Form values: ", dataSubmit);
//         await addServiceGroupDuoc(dataSubmit);
//         message.success('Success create service group!');
//         setOpen(false);
//         form.resetFields();
//     };
//
//     const handleCancel = () => {
//         setOpen(false);
//         form.resetFields();
//     };
//
//     function removeAccents(str) {
//         return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//     }
//
//     return (
//         <>
//             <Button type="primary" onClick={() => setOpen(true)} icon={<PlusOutlined/>}>
//                 Thêm mới
//             </Button>
//
//             <Modal
//                 title="Khai báo nhóm"
//                 open={open}
//                 width={"80%"}
//                 onCancel={handleCancel}
//                 footer={null}
//             >
//                 <Form form={form} layout="horizontal">
//                     <Row gutter={16}>
//                         <Col span={8}><Form.Item label="Tên nhóm" name="ServiceGroupName"><Input/></Form.Item></Col>
//                         <Col span={8}><Form.Item label="Mã nhóm thuốc" name="ServiceGroup_ID"><Input/></Form.Item></Col>
//                         <Col span={8}><Form.Item label="STT" name="STT"><Input/></Form.Item></Col>
//
//                         <Col span={8}>
//                             <Form.Item label="Phân hệ" name="ServiceModuleCode">
//                                 <Select
//                                     showSearch
//                                     optionFilterProp="children"
//                                     filterOption={(input, option) =>
//                                         removeAccents(option?.children?.toLowerCase()).includes(removeAccents(input.toLowerCase()))
//                                     }
//                                 >
//                                     {serviceModules.map(module => ( // Render các option từ serviceModules
//                                         <Select.Option key={module.ServiceModuleCode}
//                                                        value={module.ServiceModuleCode}>
//                                             {module.ServiceModuleName}
//                                         </Select.Option>
//                                     ))}
//                                 </Select>
//                             </Form.Item>
//                         </Col>
//
//                         <Col span={8}>
//                             <Form.Item label="Nhóm BHYT" name="ServiceGroupBHYT_ID">
//                                 <Select
//                                     showSearch
//                                     optionFilterProp="children"
//                                     filterOption={(input, option) =>
//                                         removeAccents(option?.children?.toLowerCase()).includes(removeAccents(input.toLowerCase()))
//                                     }
//                                 >
//                                     {serviceGroupBHYT.map(option => (
//                                         <Select.Option key={option.ServiceGroupBHYT_ID}
//                                                        value={option.ServiceGroupBHYT_ID}>
//                                             {option.ServiceGroupBHYT_Name}
//                                         </Select.Option>
//                                     ))}
//                                 </Select>
//                             </Form.Item>
//                         </Col>
//
//                         <Col span={24}>
//                             <Form.Item style={{textAlign: "right", marginBottom: 0}}>
//                                 <Button icon={<CloseCircleOutlined/>} onClick={handleCancel}>
//                                     Thoát
//                                 </Button>
//                                 <Button
//                                     type="primary"
//                                     icon={<SaveFilled/>}
//                                     onClick={handleSubmit}
//                                     style={{marginLeft: 8}}
//                                 >
//                                     Xác nhận
//                                 </Button>
//                             </Form.Item>
//                         </Col>
//                     </Row>
//                 </Form>
//             </Modal>
//         </>
//     );
// };
//
// export default FormModal;

/**
 * BLACKBOX UPDATE 3/11 - 11h:00p
 */
// import React, { useState, useEffect } from "react";
// import { Modal, Button, Form, Input, Select, Row, Col, message } from "antd";
// import { SaveFilled, CloseCircleOutlined, PlusOutlined } from "@ant-design/icons";
// import { createServiceGroup, fetchServiceGroupBHYT, fetchServiceModules } from "../../services/NhomThuocService";
//
// const FormModal = () => {
//     const [open, setOpen] = useState(false);
//     const [form] = Form.useForm();
//     const [serviceModules, setServiceModules] = useState([]);
//     const [serviceGroupBHYT, setServiceGroupBHYT] = useState([]);
//
//     // Fetch service modules
//     useEffect(() => {
//         const fetchModules = async () => {
//             try {
//                 const modules = await fetchServiceModules();
//                 setServiceModules(modules);
//             } catch (error) {
//                 message.error("Failed to fetch service modules!");
//             }
//         };
//
//         const fetchBHYTGroups = async () => {
//             try {
//                 const groups = await fetchServiceGroupBHYT();
//                 setServiceGroupBHYT(groups);
//             } catch (error) {
//                 message.error("Failed to fetch service group BHYT!");
//             }
//         };
//
//         fetchModules();
//         fetchBHYTGroups();
//     }, []);
//
//     const handleSubmit = async () => {
//         try {
//             const values = await form.validateFields();
//
//             const dataSubmit = {
//                 ...values,
//                 ServiceGroupBHYT_ID: String(values.ServiceGroupBHYT_ID),
//                 ServiceGroupCode: "20",
//                 EmployeeID: "1"
//             };
//
//             console.log("Form values: ", dataSubmit);
//             await createServiceGroup(dataSubmit);
//             message.success('Success create service group!');
//             setOpen(false);
//             form.resetFields();
//         } catch (error) {
//             console.error("Error submitting form: ", error);
//             message.error('Failed to create service group. Please check your input.');
//         }
//     };
//
//     const handleCancel = () => {
//         setOpen(false);
//         form.resetFields();
//     };
//
//     function removeAccents(str) {
//         return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//     }
//
//     return (
//         <>
//             <Button type="primary" onClick={() => setOpen(true)} icon={<PlusOutlined />}>
//                 Thêm mới
//             </Button>
//
//             <Modal
//                 title="Khai báo nhóm"
//                 open={open}
//                 width={"80%"}
//                 onCancel={handleCancel}
//                 footer={null}
//             >
//                 <Form form={form} layout="horizontal">
//                     <Row gutter={16}>
//                         <Col span={8}>
//                             <Form.Item label="Tên nhóm" name="ServiceGroupName" rules={[{ required: true, message: 'Tên nhóm là bắt buộc!' }]}>
//                                 <Input />
//                             </Form.Item>
//                         </Col>
//
//                         <Col span={8}>
//                             <Form.Item label="Mã nhóm thuốc" name="ServiceGroup_ID" rules={[{ required: true, message: 'Mã nhóm thuốc là bắt buộc!' }]}>
//                                 <Input />
//                             </Form.Item>
//                         </Col>
//
//                         <Col span={8}>
//                             <Form.Item label="STT" name="STT" rules={[{ required: true, message: 'STT là bắt buộc!' }]}>
//                                 <Input />
//                             </Form.Item>
//                         </Col>
//
//                         <Col span={8}>
//                             <Form.Item label="Phân hệ" name="ServiceModuleCode" rules={[{ required: true, message: 'Phân hệ là bắt buộc!' }]}>
//                                 <Select
//                                     showSearch
//                                     optionFilterProp="children"
//                                     filterOption={(input, option) =>
//                                         removeAccents(option?.children?.toLowerCase()).includes(removeAccents(input.toLowerCase()))
//                                     }
//                                 >
//                                     {serviceModules.map(module => (
//                                         <Select.Option key={module.ServiceModuleCode} value={module.ServiceModuleCode}>
//                                             {module.ServiceModuleName}
//                                         </Select.Option>
//                                     ))}
//                                 </Select>
//                             </Form.Item>
//                         </Col>
//
//                         <Col span={8}>
//                             <Form.Item label="Nhóm BHYT" name="ServiceGroupBHYT_ID" rules={[{ required: true, message: 'Nhóm BHYT là bắt buộc!' }]}>
//                                 <Select
//                                     showSearch
//                                     optionFilterProp="children"
//                                     filterOption={(input, option) =>
//                                         removeAccents(option?.children?.toLowerCase()).includes(removeAccents(input.toLowerCase()))
//                                     }
//                                 >
//                                     {serviceGroupBHYT.map(option => (
//                                         <Select.Option key={option.ServiceGroupBHYT_ID} value={option.ServiceGroupBHYT_ID}>
//                                             {option.ServiceGroupBHYT_Name}
//                                         </Select.Option>
//                                     ))}
//                                 </Select>
//                             </Form.Item>
//                         </Col>
//
//                         <Col span={24}>
//                             <Form.Item style={{ textAlign: "right", marginBottom: 0 }}>
//                                 <Button icon={<CloseCircleOutlined />} onClick={handleCancel}>
//                                     Thoát
//                                 </Button>
//                                 <Button
//                                     type="primary"
//                                     icon={<SaveFilled />}
//                                     onClick={handleSubmit}
//                                     style={{ marginLeft: 8 }}
//                                 >
//                                     Xác nhận
//                                 </Button>
//                             </Form.Item>
//                         </Col>
//                     </Row>
//                 </Form>
//             </Modal>
//         </>
//     );
// };
//
// export default FormModal;

/**
 * BLACKBOX UPDATE 05/11/2024 - 11h:20m
 */
import React, {useState, useEffect} from "react";
import {Modal, Button, Form, Input, Select, Row, Col, message} from "antd";
import {SaveFilled, CloseCircleOutlined, PlusOutlined} from "@ant-design/icons";
import {addServiceGroupDuoc, updateServiceGroupDuoc} from "../../services/NhomThuocService";

const FormModal = ({
                       serviceModules = [],
                       serviceGroupBHYT = [],
                       open,
                       setOpen,
                       editData,
                       setEditData,
                       onSuccess
                   }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (editData) {
            form.setFieldsValue({
                ServiceGroupName: editData.ServiceGroupName,
                ServiceGroup_ID: editData.ServiceGroup_ID,
                STT: editData.STT,
                ServiceModuleCode: editData.ServiceModuleCode,
                ServiceGroupBHYT_ID: editData.ServiceGroupBHYT_ID,
            });
        }
    }, [editData, form]);

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();

            const dataSubmit = {
                ...values,
                ServiceGroupBHYT_ID: String(values.ServiceGroupBHYT_ID),
                ServiceGroupCode: editData ? editData.ServiceGroupCode : "20",
                EmployeeID: editData ? editData.EmployeeID : "1"
            };

            if (editData) {
                await updateServiceGroupDuoc(editData.ServiceGroup_ID, dataSubmit);
                message.success('Successfully updated service group!');
            } else {
                await addServiceGroupDuoc(dataSubmit);
                message.success('Successfully created service group!');
            }

            handleCancel();
            if (onSuccess) onSuccess();
        } catch (error) {
            message.error('Error: ' + error.message);
        }
    };

    const handleCancel = () => {
        setOpen(false);
        setEditData(null);
        form.resetFields();
    };

    function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    return (
        <Modal
            title={editData ? "Sửa nhóm" : "Khai báo nhóm"}
            open={open}
            width={"80%"}
            onCancel={handleCancel}
            footer={null}
        >
            <Form form={form} layout="horizontal">
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            label="Tên nhóm"
                            name="ServiceGroupName"
                            rules={[{ required: true, message: 'Please input group name!' }]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="Mã nhóm thuốc"
                            name="ServiceGroup_ID"
                            rules={[{ required: true, message: 'Please input group ID!' }]}
                        >
                            <Input disabled={!!editData}/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="STT"
                            name="STT"
                            rules={[{ required: true, message: 'Please input STT!' }]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item
                            label="Phân hệ"
                            name="ServiceModuleCode"
                            rules={[{ required: true, message: 'Please select module!' }]}
                        >
                            <Select
                                showSearch
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    removeAccents(option?.children?.toLowerCase()).includes(removeAccents(input.toLowerCase()))
                                }
                            >
                                {serviceModules.map(module => (
                                    <Select.Option
                                        key={module.ServiceModuleCode}
                                        value={module.ServiceModuleCode}
                                    >
                                        {module.ServiceModuleName}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item
                            label="Nhóm BHYT"
                            name="ServiceGroupBHYT_ID"
                            rules={[{ required: true, message: 'Please select BHYT group!' }]}
                        >
                            <Select
                                showSearch
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    removeAccents(option?.children?.toLowerCase()).includes(removeAccents(input.toLowerCase()))
                                }
                            >
                                {serviceGroupBHYT.map(option => (
                                    <Select.Option
                                        key={option.ServiceGroupBHYT_ID}
                                        value={option.ServiceGroupBHYT_ID}
                                    >
                                        {option.ServiceGroupBHYT_Name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item style={{textAlign: "right", marginBottom: 0}}>
                            <Button icon={<CloseCircleOutlined/>} onClick={handleCancel}>
                                Thoát
                            </Button>
                            <Button
                                type="primary"
                                icon={<SaveFilled/>}
                                onClick={handleSubmit}
                                style={{marginLeft: 8}}
                            >
                                {editData ? 'Cập nhật' : 'Xác nhận'}
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};

export default FormModal;