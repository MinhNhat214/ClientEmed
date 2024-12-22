import { Table, Button, Dropdown, Layout, Typography, Space } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined, MenuOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import DetailLoaiThuoc from "../../LoaiThuoc/Detail";
import { errorInfo, infoRes, successInfo } from "../../components/Dialog/Dialog";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import donvitinhAPI from "../../API/donvitinhAPI";
import {setDataDonViTinh} from "../../reducers/dataAdd";
import Title from "antd/lib/skeleton/Title";
import DetailDonViTinh from "../Detail";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";

function DonViTinh() {

    const [open, setOpen] = useState(false);
    const [activeModify, setActiveModify] = useState(false);

    const [listDonViTinh, setListDonViTinh] = useState([]);

    const handleDataCreate = () => {
        setOpen(true);
    };

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const handleThaoTac = (e, record) => {
        if (e.key === "update") {
            dispatch(setDataDonViTinh(record));
            setOpen(true);
        } else if (e.key === "delete") {
            Swal.fire({
                text: "Bạn có muốn xóa Đơn vị tính này ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#0067ac",
                cancelButtonColor: "#d33",
                cancelButtonText: "Hủy",
                confirmButtonText: "Đồng ý",
            }).then((result) => {
                if (result.isConfirmed) {
                    handleDelete(record.UnitID);
                    successInfo("Đã xóa thành công !");
                }
            });
        }
    };
    const getAllDonViTinh = async () => {
        try {
            setLoading(true);
            const data = await donvitinhAPI.getAll('UnitID');
            console.log(data.data)
            setListDonViTinh(data.data);
            setLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };
    // const getServiceGroup = async () => {
    //     try {
    //         const data = await nhomthuocAPI.getAll('ServiceGroup_ID');
    //         // console.log('ServiceGroup_ID Từ set state list LoaiThuoc: ', data.data.recordset);
    //         setListServiceGroup(data.data.recordset);
    //     } catch (err) {
    //         throw new Error(err);
    //     }
    // };
    //
    const handleCreate = async (obj) => {
        const data = await donvitinhAPI.create(obj);
        console.log("create data: ", obj)
        if (data.data.Code === "err") {
            infoRes(data.data.Content);
        } else if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllDonViTinh();
        }
    };

    const handleUpdate = async (obj) => {
        const data = await donvitinhAPI.update(obj);
        if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllDonViTinh();
        } else {
            errorInfo(data.data.Content);
        }
    };

    const handleDelete = async (ServiceCategoryID,EmployeeID = 333) => {
        const data = await donvitinhAPI.delete(ServiceCategoryID,EmployeeID);
        if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllDonViTinh();
        } else {
            errorInfo(data.data.Content);
        }
    };

    useEffect(() => {
        getAllDonViTinh();
        // getAllServiceModule();
        // getAllServiceGroupBHYT();
        // getAllUser();
        // getServiceGroup();
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
            title: "Mã đơn vị tính",
            dataIndex: "UnitID",
            fixed: "left",
            width: "20%",
        },
        {
            title: "Tên diễn giải đơn vị tính",
            dataIndex: "UnitName",
            // width: 300,
        },
        // {
        //     title: "Thao tác",
        //     dataIndex: "",
        //     align: "center",
        //     fixed: "right",
        //     width: 100,
        //     render: (record) => (
        //         <Dropdown
        //             menu={{
        //                 items,
        //                 onClick: (e) => handleThaoTac(e, record),
        //             }}
        //             placement="bottomRight"
        //         >
        //             <Button type="text" icon={<EditOutlined/>} />
        //         </Dropdown>
        //     ),
        // },
        {
            title: "Thao tác",
            dataIndex: "",
            align: "center",
            fixed: "right",
            width: "50px",
            render: (record) => (
                <div className="d-flex justify-content-center">
                    <Dropdown
                        menu={{
                            items,
                            onClick: (e) => handleThaoTac(e, record),
                        }}
                        placement="left"
                        arrow={{
                            pointAtCenter: true,
                        }}
                    >
                        <Button
                            className="bg-light vienphi-danhmuc-icon-modify"
                            onClick={() => {
                                setActiveModify(!activeModify);
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faEdit}
                                style={{ fontSize: "10px" }}
                                className="text-dark"
                            />
                        </Button>
                    </Dropdown>
                </div>
            ),
        },
    ];

    return (
        <Layout.Content style={{ padding: '16px' }}>
            <Space direction="vertical" style={{ width: '100%' }} size="large">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Space>
                        <MenuOutlined />
                        Đơn vị tính
                    </Space>
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={handleDataCreate}
                    >
                        Thêm mới
                    </Button>
                </div>

                <DetailDonViTinh
                    open={open}
                    setOpen={setOpen}
                    listDonViTinh={listDonViTinh}
                    handleCreate={handleCreate}
                    handleUpdate={handleUpdate}
                    key="DetailDonViTinh"
                />

                <Table
                    dataSource={listDonViTinh}
                    columns={columns}
                    scroll={{ x: 'max-content', y: 'calc(100vh - 200px)' }}
                    size="small"
                    pagination={false}
                    loading={loading}
                    bordered
                    rowKey={(record) => record?.UnitID}
                />
            </Space>
        </Layout.Content>
    );
}

export default DonViTinh;
