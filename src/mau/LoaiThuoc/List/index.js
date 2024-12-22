import { Table, Button, Dropdown, Layout, Typography, Space } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined, MenuOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import DetailLoaiThuoc from "../../LoaiThuoc/Detail";
import { errorInfo, infoRes, successInfo } from "../../components/Dialog/Dialog";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import loaithuocAPI from "../../API/loaithuocAPI";
import {setDataLoaiThuoc} from "../../reducers/dataAdd";
import nhomthuocAPI from "../../API/nhomthuocAPI";
import Title from "antd/lib/skeleton/Title";

function LoaiThuoc() {

    const [open, setOpen] = useState(false);
    const [activeModify, setActiveModify] = useState(false);

    const [listServiceGroup, setListServiceGroup] = useState([]);

    const handleDataCreate = () => {
        setOpen(true);
    };

    const [loading, setLoading] = useState(false);
    const [listLoaiThuoc, setListLoaiThuoc] = useState([]);

    const dispatch = useDispatch();

    const handleThaoTac = (e, record) => {
        if (e.key === "update") {
            dispatch(setDataLoaiThuoc(record));
            setOpen(true);
            } else if (e.key === "delete") {
            Swal.fire({
                text: "Bạn có muốn xóa Loại thuốc này ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#0067ac",
                cancelButtonColor: "#d33",
                cancelButtonText: "Hủy",
                confirmButtonText: "Đồng ý",
            }).then((result) => {
                if (result.isConfirmed) {
                    handleDelete(record.ServiceCategoryID);
                    successInfo("Đã xóa thành công !");
                }
            });
        }
    };

    const getAllLoaiThuoc = async () => {
        try {
            setLoading(true);
            // const data = await loaithuocAPI.getAll('ServiceCategoryID');
            const data = await loaithuocAPI.getAll({ ServiceCategoryID: "0" });

            // const data = await nhomthuocAPI.getAll({ ServiceGroup_ID: "" });
            // console.log(data.data)
            setListLoaiThuoc(data.data);
            setLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };

    const getServiceGroup = async () => {
        try {
            const data = await nhomthuocAPI.getAll('ServiceGroupID');
            // console.log('ServiceGroup_ID Từ set state list LoaiThuoc: ', data.data.recordset);
            setListServiceGroup(data.data.recordset);
        } catch (err) {
            throw new Error(err);
        }
    };

    const handleCreate = async (obj) => {
        const data = await loaithuocAPI.create(obj);
        // console.log("create: : ", obj)
        if (data.data.Code === "err") {
            infoRes(data.data.Content);
        } else if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllLoaiThuoc();
        }
    };

    const handleUpdate = async (obj) => {
        const data = await loaithuocAPI.update(obj);
        if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllLoaiThuoc();
        } else {
            errorInfo(data.data.Content);
        }
    };

    const handleDelete = async (ServiceCategoryID,EmployeeID = 333) => {
        const data = await loaithuocAPI.delete(ServiceCategoryID,EmployeeID);
        if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllLoaiThuoc();
        } else {
            errorInfo(data.data.Content);
        }
    };

    useEffect(() => {
        getAllLoaiThuoc();
        // getAllServiceModule();
        // getAllServiceGroupBHYT();
        // getAllUser();
        getServiceGroup();
    }, []);
    const items = [
        {
            key: "delete",
            label: "Xóa",
            icon: <DeleteOutlined />,
        },
        {
            key: "update",
            label: "Sửa",
            icon: <EditOutlined />,
        },
    ];

    const columns = [
        {
            title: "Mã loại",
            dataIndex: "ServiceCategoryID",
            fixed: "left",
            width: 200,
        },
        {
            title: "Tên diễn giải",
            dataIndex: "ServiceCategoryName",
            width: 300,
        },
        // {
        //     title: "Tên nhóm",
        //     dataIndex: "ServiceGroupID",
        //     width: 300,
        // },
        {
            title: "Tên nhóm",
            dataIndex: "ServiceGroupID",
            // align: "center",
            render: (ServiceGroupID) => {
                const servicegroup = listServiceGroup.find((item) => item.ServiceGroupID === ServiceGroupID);
                return (
                    <div>
                        {servicegroup ? servicegroup.ServiceGroupName : "Không xác định"}
                    </div>
                );
            },
        },
        {
            title: "Thao tác",
            dataIndex: "",
            align: "center",
            fixed: "right",
            width: 100,
            render: (record) => (
                <Dropdown
                    menu={{
                        items,
                        onClick: (e) => handleThaoTac(e, record),
                    }}
                    placement="bottomRight"
                >
                    <Button type="text" icon={<EditOutlined/>} />
                </Dropdown>
            ),
        },
    ];

    return (
        <Layout.Content style={{ padding: '16px' }}>
            <Space direction="vertical" style={{ width: '100%' }} size="large">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Space>
                        <MenuOutlined />
                        Phân loại
                        {/*<Title level={5} style={{ margin: 0 }}>Phân loại</Title>*/}
                    </Space>
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={handleDataCreate}
                    >
                        Thêm mới
                    </Button>
                </div>

                <DetailLoaiThuoc
                    open={open}
                    setOpen={setOpen}
                    listServiceGroup={listServiceGroup}
                    handleCreate={handleCreate}
                    handleUpdate={handleUpdate}
                    key="DetailNhomThuoc"
                />

                <Table
                    dataSource={listLoaiThuoc}
                    columns={columns}
                    scroll={{ x: 'max-content', y: 'calc(100vh - 200px)' }}
                    size="small"
                    pagination={false}
                    loading={loading}
                    bordered
                    rowKey={(record) => record?.ServiceCategoryID}
                />
            </Space>
        </Layout.Content>
    );
}

export default LoaiThuoc;
