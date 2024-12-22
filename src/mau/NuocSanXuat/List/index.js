import {Table, Button, Dropdown, Layout, Typography, Space} from "antd";
import {EditOutlined, DeleteOutlined, PlusOutlined, MenuOutlined} from "@ant-design/icons";
import {useState, useEffect} from "react";
import {errorInfo, infoRes, successInfo} from "../../components/Dialog/Dialog";
import {useDispatch} from "react-redux";
import Swal from "sweetalert2";
import nuocsanxuatAPI from "../../API/nuocsanxuatAPI"
import {setDataNuocSanXuat} from "../../reducers/dataAdd";
import Title from "antd/lib/skeleton/Title";
import DetailNuocSanXuat from "../Detail";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faEdit} from "@fortawesome/free-solid-svg-icons";

function NuocSanXuat() {

    const [open, setOpen] = useState(false);
    const [activeModify, setActiveModify] = useState(false);

    const [listMedCountry, setListMedCountry] = useState([]);

    const handleDataCreate = () => {
        setOpen(true);
    };

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const handleThaoTac = (e, record) => {
        if (e.key === "update") {
            dispatch(setDataNuocSanXuat(record));
            setOpen(true);
        } else if (e.key === "delete") {
            Swal.fire({
                text: "Bạn có muốn xóa Nước sản xuất này?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#0067ac",
                cancelButtonColor: "#d33",
                cancelButtonText: "Hủy",
                confirmButtonText: "Đồng ý",
            }).then((result) => {
                if (result.isConfirmed) {
                    handleDelete(record.CountryID);
                    successInfo("Đã xóa thành công !");
                }
            });
        }
    };

    const getAllNuocSanXuat = async () => {
        try {
            setLoading(true);
            const data = await nuocsanxuatAPI.getAll({ CountryID: "0" });
            // console.log("data: ",data.data)
            setListMedCountry(data.data);
            setLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };

    const handleCreate = async (obj) => {
        const data = await nuocsanxuatAPI.create(obj);
        // console.log("create: : ", obj)
        if (data.data.Code === "err") {
            infoRes(data.data.Content);
        } else if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllNuocSanXuat();
        }
    };

    const handleUpdate = async (obj) => {
        const data = await nuocsanxuatAPI.update(obj);
        if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllNuocSanXuat();
        } else {
            errorInfo(data.data.Content);
        }
    };

    const handleDelete = async (CountryID,EmployeeID = 333) => {
        const data = await nuocsanxuatAPI.delete(CountryID,EmployeeID);
        if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllNuocSanXuat();
        } else {
            errorInfo(data.data.Content);
        }
    };

    useEffect(() => {
        getAllNuocSanXuat();
    }, []);
    const items = [
        {
            key: "delete",
            label: "Xóa",
            icon: <DeleteOutlined/>,
        },
        {
            key: "update",
            label: "Sửa",
            icon: <EditOutlined/>,
        },
    ];

    const columns = [
        {
            title: "Mã nước",
            dataIndex: "CountryID",
            fixed: "left",
            width: 200,
        },
        {
            title: "Tên nước",
            dataIndex: "CountryName",
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
                                style={{fontSize: "10px"}}
                                className="text-dark"
                            />
                        </Button>
                    </Dropdown>
                </div>
            ),
        },
    ];

    return (
        <Layout.Content style={{padding: '16px'}}>
            <Space direction="vertical" style={{width: '100%'}} size="large">
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Space>
                        <MenuOutlined/>
                        Nước sản xuất
                    </Space>

                    <Button
                        type="primary"
                        icon={<PlusOutlined/>}
                        onClick={handleDataCreate}
                    >
                        Thêm mới
                    </Button>
                </div>

                <DetailNuocSanXuat
                    open={open}
                    setOpen={setOpen}
                    listMedCountry={listMedCountry}
                    handleCreate={handleCreate}
                    handleUpdate={handleUpdate}
                    key="DetailNuocSanXuat"
                />

                <Table
                    dataSource={listMedCountry}
                    columns={columns}
                    scroll={{x: 'max-content', y: 'calc(100vh - 200px)'}}
                    size="small"
                    pagination={false}
                    loading={loading}
                    bordered
                    rowKey={(record) => record?.CountryID}
                />
            </Space>
        </Layout.Content>
    );
}

export default NuocSanXuat;
