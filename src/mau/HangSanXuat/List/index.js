import {Table, Button, Dropdown, Layout, Typography, Space} from "antd";
import {EditOutlined, DeleteOutlined, PlusOutlined, MenuOutlined} from "@ant-design/icons";
import {useState, useEffect} from "react";
import {errorInfo, infoRes, successInfo} from "../../components/Dialog/Dialog";
import {useDispatch} from "react-redux";
import Swal from "sweetalert2";
import hangsanxuatAPI from "../../API/hangsanxuatAPI"
import {setDataHangSanXuat} from "../../reducers/dataAdd";
import Title from "antd/lib/skeleton/Title";
import DetailHangSanXuat from "../Detail";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faEdit} from "@fortawesome/free-solid-svg-icons";

function HangSanXuat() {

    const [open, setOpen] = useState(false);
    const [activeModify, setActiveModify] = useState(false);

    const [listMedProducer, setListMedProducer] = useState([]);

    const handleDataCreate = () => {
        setOpen(true);
    };

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const handleThaoTac = (e, record) => {
        if (e.key === "update") {
            dispatch(setDataHangSanXuat(record));
            setOpen(true);
        } else if (e.key === "delete") {
            Swal.fire({
                text: "Bạn có muốn xóa Hãng sản xuất này?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#0067ac",
                cancelButtonColor: "#d33",
                cancelButtonText: "Hủy",
                confirmButtonText: "Đồng ý",
            }).then((result) => {
                if (result.isConfirmed) {
                    handleDelete(record.ProducerID);
                    successInfo("Đã xóa thành công !");
                }
            });
        }
    };

    const getAllHangSanXuat = async () => {
        try {
            setLoading(true);
            const data = await hangsanxuatAPI.getAll({ ProducerID: "0" });
            // console.log("data: ",data.data)
            setListMedProducer(data.data);
            setLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };

    const handleCreate = async (obj) => {
        const data = await hangsanxuatAPI.create(obj);
        // console.log("create: : ", obj)
        if (data.data.Code === "err") {
            infoRes(data.data.Content);
        } else if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllHangSanXuat();
        }
    };

    const handleUpdate = async (obj) => {
        const data = await hangsanxuatAPI.update(obj);
        if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllHangSanXuat();
        } else {
            errorInfo(data.data.Content);
        }
    };

    const handleDelete = async (ProducerID,EmployeeID = 333) => {
        const data = await hangsanxuatAPI.delete(ProducerID,EmployeeID);
        if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllHangSanXuat();
        } else {
            errorInfo(data.data.Content);
        }
    };

    useEffect(() => {
        getAllHangSanXuat();
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
            title: "Mã hãng sản xuất",
            dataIndex: "ProducerID",
            fixed: "left",
            width: 200,
        },
        {
            title: "Tên hãng sản xuất",
            dataIndex: "ProducerName",
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
                        Hãng sản xuất
                    </Space>

                    <Button
                        type="primary"
                        icon={<PlusOutlined/>}
                        onClick={handleDataCreate}
                    >
                        Thêm mới
                    </Button>
                </div>

                <DetailHangSanXuat
                    open={open}
                    setOpen={setOpen}
                    listMedProducer={listMedProducer}
                    handleCreate={handleCreate}
                    handleUpdate={handleUpdate}
                    key="DetailNuocSanXuat"
                />

                <Table
                    dataSource={listMedProducer}
                    columns={columns}
                    scroll={{x: 'max-content', y: 'calc(100vh - 200px)'}}
                    size="small"
                    pagination={false}
                    loading={loading}
                    bordered
                    rowKey={(record) => record?.ProducerID}
                />
            </Space>
        </Layout.Content>
    );
}

export default HangSanXuat;
