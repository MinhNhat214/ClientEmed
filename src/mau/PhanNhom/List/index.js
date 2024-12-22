import { Table, Button, Dropdown, Form, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import {
    faEdit,
    faTrashCan,
    faEye,
    faPenToSquare,
    faPlus,
    faBars
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import DetailNhomThuoc from "../Detail";
import { errorInfo, infoRes, successInfo } from "../../components/Dialog/Dialog";

import nhomthuocAPI from "../../API/nhomthuocAPI";
import { setDataNhomThuoc } from "../../reducers/dataAdd";
// import loginAPI from "../../../../../services/loginApi";

function PhanNhom() {

    const [open, setOpen] = useState(false);
    const [activeModify, setActiveModify] = useState(false);

    const handleDataCreate = () => {
        setOpen(true);
    };

    const [loading, setLoading] = useState(false);
    const [listNhomThuoc, setListNhomThuoc] = useState([]);
    const [listServiceModule, setlistServiceModule] = useState([]);
    const [listServiceGroupBHYT, setlistServiceGroupBHYT] = useState([]);

    const [userlogin, setUserLogin] = useState();

    const dispatch = useDispatch();
    const getAllUser = async () => {
        try {
            // const data = await loginAPI.profileFetch();
            // setUserLogin(data.data);
        } catch (err) {
            localStorage.removeItem("token");
            throw new Error(err);
        }
    };

    const handleThaoTac = (e, record) => {
        if (e.key === "update") {
            dispatch(setDataNhomThuoc(record));
            setOpen(true);
        } else if (e.key === "delete") {
            Swal.fire({
                text: "Bạn có muốn xóa user này ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#0067ac",
                cancelButtonColor: "#d33",
                cancelButtonText: "Hủy",
                confirmButtonText: "Đồng ý",
            }).then((result) => {
                if (result.isConfirmed) {
                    // handleDelete(record.ServiceGroup_ID,userlogin.RowID );
                    handleDelete(record.ServiceGroupID);
                    successInfo("Đã xóa thành công !");
                }
            });
        }
    };
    const getAllNhomThuoc = async () => {
        try {
            setLoading(true);
            const data = await nhomthuocAPI.getAll('ServiceGroupID');
            // const data = await nhomthuocAPI.getAll({ ServiceGroup_ID: "" });
            console.log(data.data.recordset)
            setListNhomThuoc(data.data.recordset);
            setLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };
    const getAllServiceModule = async () => {
        try {
            const data = await nhomthuocAPI.getServiceModule('ServiceModuleCode');
            setlistServiceModule(data.data);
        } catch (err) {
            throw new Error(err);
        }
    };

    const getAllServiceGroupBHYT = async () => {
        try {
            const data = await nhomthuocAPI.getServiceGroupBHYT('ServiceGroupBHYTID');
            setlistServiceGroupBHYT(data.data);
        } catch (err) {
            throw new Error(err);
        }
    };

    const handleCreate = async (obj) => {
        const data = await nhomthuocAPI.create(obj);
        if (data.data.Code === "err") {
            infoRes(data.data.Content);
        } else if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllNhomThuoc();
        }
    };
     const handleUpdate = async (obj) => {
        const data = await nhomthuocAPI.update(obj);
        if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllNhomThuoc();
        } else {
            errorInfo(data.data.Content);
        }
    };

    const handleDelete = async (ServiceGroupID,EmployeeID = 1) => {
        const data = await nhomthuocAPI.delete(ServiceGroupID,EmployeeID);
        if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllNhomThuoc();
        } else {
            errorInfo(data.data.Content);
        }
    };

    useEffect(() => {
        getAllNhomThuoc();
        getAllServiceModule();
        getAllServiceGroupBHYT();
        // getAllUser();
    }, []);

    const items = [
        {
            key: "delete",
            label: "Xóa",
            icon: <FontAwesomeIcon icon={faTrashCan} />,
        },
        {
            key: "update",
            label: "Sửa",
            icon: <FontAwesomeIcon icon={faPenToSquare} />,
        },
    ];
    const columns = [
        {
            title: "Mã nhóm",
            dataIndex: "ServiceGroupCode",
            fixed: "left",
            render: (ServiceGroupCode) => <div style={{ width: "200px" }}> {ServiceGroupCode} </div>,
        },
        {
            title: "Tên nhóm",
            dataIndex: "ServiceGroupName",
            render: (ServiceGroupName) => <div style={{ width: "300px" }}> {ServiceGroupName} </div>,
        },

        {
            title: "Phân hệ",
            dataIndex: "ServiceModuleCode",
            render: (ServiceModuleCode) => (
                <div style={{ width: "200px" }}>
                    {listServiceModule.map((item) => {
                        // console.log(item);
                        // console.log(ServiceModuleCode);
                        let a = [];
                        if (item.ServiceModuleCode === ServiceModuleCode) {
                            console.log(ServiceModuleCode);
                            a.push(item.ServiceModuleName);
                        }
                        return a;
                    })}
                </div>
            ),
        },
        {
            title: "Nhóm BHYT",
            dataIndex: "ServiceGroupBHYTID",
            render: (ServiceGroupBHYTID) => (
                <div style={{ width: "200px" }}>
                    {listServiceGroupBHYT.map((item) => {
                        let a = [];
                        if (item.ServiceGroupBHYTID === ServiceGroupBHYTID) {
                            a.push(item.ServiceGroupBHYTName);
                        }
                        return a;
                    })}
                </div>
            ),
        },
        {
            title: "Thao tác",
            dataIndex: "",
            align: "center",
            fixed: "right",
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
        <>
            <div className="text-muted">
                <div className="d-flex justify-content-between align-items-center mt-2 mx-2">
                    <div className="d-flex align-items-center ">
                        <div className="vienphi-danhmuc-title mx-2"><FontAwesomeIcon icon={faBars} /> Phân nhóm</div>
                    </div>
                    <div className="text-end">
                        <Button className="form-btn bg" onClick={handleDataCreate}>
                            <FontAwesomeIcon icon={faPlus} className="mx-1" />
                            Thêm mới
                        </Button>
                    </div>
                </div>

                <DetailNhomThuoc
                    open={open} setOpen={setOpen}

                    listServiceModule={listServiceModule}
                    listServiceGroupBHYT={listServiceGroupBHYT}
                    handleCreate={handleCreate}
                    handleUpdate={handleUpdate}
                    key="DetailNhomThuoc"
                />
                <hr className="w-100 my-1" />
                <div className="m-1 danhmuc">
                    <Table
                        dataSource={listNhomThuoc}
                        columns={columns}
                        scroll={{ x: true, y: "100vh" }}
                        size="small"
                        pagination={false}
                        loading={loading}
                        bordered={true}
                        rowKey={(record) => record?.ServiceGroupID}
                    />
                </div>
            </div>

        </>
    );

}

export default PhanNhom;
