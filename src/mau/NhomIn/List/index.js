import { Table, Button, Dropdown, Layout, Typography, Space } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined, MenuOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import DetailLoaiThuoc from "../../LoaiThuoc/Detail";
import { errorInfo, infoRes, successInfo } from "../../components/Dialog/Dialog";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import nhominAPI from "../../API/nhominAPI"
import {setDataNhomIn} from "../../reducers/dataAdd";
import Title from "antd/lib/skeleton/Title";
import DetailNhomIn from "../Detail";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faEdit} from "@fortawesome/free-solid-svg-icons";

function NhomIn() {

    const [open, setOpen] = useState(false);
    const [activeModify, setActiveModify] = useState(false);

    const [listGroupPrinter, setListGroupPrinter] = useState([]);

    const handleDataCreate = () => {
        setOpen(true);
    };

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const handleThaoTac = (e, record) => {
        if (e.key === "update") {
            dispatch(setDataNhomIn(record));
            setOpen(true);
        } else if (e.key === "delete") {
            Swal.fire({
                text: "Bạn có muốn xóa Nhóm in này ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#0067ac",
                cancelButtonColor: "#d33",
                cancelButtonText: "Hủy",
                confirmButtonText: "Đồng ý",
            }).then((result) => {
                if (result.isConfirmed) {
                    handleDelete(record.GroupPrinterID);
                    successInfo("Đã xóa thành công !");
                }
            });
        }
    };

    const getAllNhomIn = async () => {
        try {
            setLoading(true);
            const data = await nhominAPI.getAll('GroupPrinterID');
            setListGroupPrinter(data.data);
            setLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };

    const handleCreate = async (obj) => {
        const data = await nhominAPI.create(obj);
        // console.log("create: : ", obj)
        if (data.data.Code === "err") {
            infoRes(data.data.Content);
        } else if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllNhomIn();
        }
    };

    const handleUpdate = async (obj) => {
        const data = await nhominAPI.update(obj);
        if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllNhomIn();
        } else {
            errorInfo(data.data.Content);
        }
    };

    const handleDelete = async (ServiceCategory_ID,EmployeeID = 333) => {
        const data = await nhominAPI.delete(ServiceCategory_ID,EmployeeID);
        if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllNhomIn();
        } else {
            errorInfo(data.data.Content);
        }
    };

    useEffect(() => {
        getAllNhomIn();
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
            dataIndex: "GroupPrinterID",
            fixed: "left",
            width: 200,
        },
        {
            title: "Tên nhóm",
            dataIndex: "GroupPrinterName",
            width: 300,
        },
        {
            title: "STT",
            dataIndex: "STT",
            width: 300,
        },
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
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Space>
                        <MenuOutlined/>
                        Khai báo nhóm in
                    </Space>

                    <Button
                        type="primary"
                        icon={<PlusOutlined/>}
                        onClick={handleDataCreate}
                    >
                        Thêm mới
                    </Button>
                </div>

                <DetailNhomIn
                    open={open}
                    setOpen={setOpen}
                    listGroupPrinter={listGroupPrinter}
                    handleCreate={handleCreate}
                    handleUpdate={handleUpdate}
                    key="DetailNhomIn"
                />

                <Table
                    dataSource={listGroupPrinter}
                    columns={columns}
                    scroll={{ x: 'max-content', y: 'calc(100vh - 200px)' }}
                    size="small"
                    pagination={false}
                    loading={loading}
                    bordered
                    rowKey={(record) => record?.GroupPrinterID}
                />
            </Space>
        </Layout.Content>
    );
}

export default NhomIn;
