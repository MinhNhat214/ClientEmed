/**
 * 200 OK
 */
// import React from "react";
// import { Button, Dropdown } from "antd";
// import { EditFilled } from "@ant-design/icons";
//
// const ThaoTac = () => {
//     const menuItems = [
//         { key: "1", label: "Xem" },
//         { key: "2", label: "Xóa" },
//         { key: "3", label: "Sửa" },
//     ];
//
//     return (
//         <Dropdown
//             menu={{ items: menuItems }}
//             trigger={["click"]}
//             placement="bottomRight"
//         >
//             <Button icon={<EditFilled />} />
//         </Dropdown>
//     );
// };
//
// export default ThaoTac;

//CLAUDE UPDATE 05/11/2024 - 11h10m
import React, { useState } from "react";
import { Button, Dropdown, Modal, Form, Input, Select, message } from "antd";
import { EditFilled, SaveFilled, CloseCircleOutlined } from "@ant-design/icons";

// API riêng cho chức năng sửa
const updateServiceGroupAPI = async (id, data) => {
    try {
        const response = await fetch(`/api/servicegroup/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to update service group');
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};

const EditModal = ({ visible, onCancel, record, serviceModules, serviceGroupBHYT, onSuccess }) => {
    const [form] = Form.useForm();

    // Set giá trị mặc định cho form khi modal mở
    React.useEffect(() => {
        if (record) {
            form.setFieldsValue({
                ServiceGroupName: record.ServiceGroupName,
                ServiceGroup_ID: record.ServiceGroup_ID,
                STT: record.STT,
                ServiceModuleCode: record.ServiceModuleCode,
                ServiceGroupBHYT_ID: record.ServiceGroupBHYT_ID,
            });
        }
    }, [record, form]);

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();

            const dataSubmit = {
                ...values,
                ServiceGroupBHYT_ID: String(values.ServiceGroupBHYT_ID),
                ServiceGroupCode: record.ServiceGroupCode,
                EmployeeID: record.EmployeeID
            };

            await updateServiceGroupAPI(record.ServiceGroup_ID, dataSubmit);
            message.success('Cập nhật thành công!');
            onSuccess(); // Refresh data
            onCancel(); // Đóng modal
        } catch (error) {
            message.error('Lỗi: ' + error.message);
        }
    };

    function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    return (
        <Modal
            title="Sửa nhóm"
            open={visible}
            width="80%"
            onCancel={onCancel}
            footer={null}
        >
            <Form form={form} layout="horizontal">
                <Form.Item
                    label="Tên nhóm"
                    name="ServiceGroupName"
                    rules={[{ required: true, message: 'Vui lòng nhập tên nhóm!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mã nhóm thuốc"
                    name="ServiceGroup_ID"
                >
                    <Input disabled />
                </Form.Item>

                <Form.Item
                    label="STT"
                    name="STT"
                    rules={[{ required: true, message: 'Vui lòng nhập STT!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Phân hệ"
                    name="ServiceModuleCode"
                    rules={[{ required: true, message: 'Vui lòng chọn phân hệ!' }]}
                >
                    <Select
                        showSearch
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            removeAccents(option?.children?.toLowerCase()).includes(
                                removeAccents(input.toLowerCase())
                            )
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

                <Form.Item
                    label="Nhóm BHYT"
                    name="ServiceGroupBHYT_ID"
                    rules={[{ required: true, message: 'Vui lòng chọn nhóm BHYT!' }]}
                >
                    <Select
                        showSearch
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            removeAccents(option?.children?.toLowerCase()).includes(
                                removeAccents(input.toLowerCase())
                            )
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

                <Form.Item style={{ textAlign: "right", marginBottom: 0 }}>
                    <Button icon={<CloseCircleOutlined />} onClick={onCancel}>
                        Thoát
                    </Button>
                    <Button
                        type="primary"
                        icon={<SaveFilled />}
                        onClick={handleSubmit}
                        style={{ marginLeft: 8 }}
                    >
                        Cập nhật
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

const ThaoTac = ({ record, serviceModules, serviceGroupBHYT, onRefresh }) => {
    const [editModalVisible, setEditModalVisible] = useState(false);

    const menuItems = [
        { key: "1", label: "Xem" },
        {
            key: "2",
            label: "Sửa",
            onClick: () => setEditModalVisible(true)
        },
        { key: "3", label: "Xóa" },
    ];

    return (
        <>
            <Dropdown
                menu={{ items: menuItems }}
                trigger={["click"]}
                placement="bottomRight"
            >
                <Button icon={<EditFilled />} />
            </Dropdown>

            <EditModal
                visible={editModalVisible}
                onCancel={() => setEditModalVisible(false)}
                record={record}
                serviceModules={serviceModules}
                serviceGroupBHYT={serviceGroupBHYT}
                onSuccess={onRefresh}
            />
        </>
    );
};

export default ThaoTac;