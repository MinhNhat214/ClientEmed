import { Table, Button, Dropdown, Layout, Space, Checkbox } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined, MenuOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import DetailThuocVTYT from "../Detail";
import { errorInfo, infoRes, successInfo } from "../../components/Dialog/Dialog";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import thuocvtytAPI from "../../API/thuocvtytAPI";
import {setDataThuocVTYT} from "../../reducers/dataAdd";
// import { setDataNhomIn } from "../../reducers/dataAdd";

function ThuocVTYT() {

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [listThuocVTYT, setListThuocVTYT] = useState([]);

    //SLECT OPTION MODAL
    const [listServiceCategory, setListServiceCategory] = useState([]);
    const [listServiceGroup, setListServiceGroup] = useState([]);
    const [listUnitOfMeasure, setListUnitOfMeasure] = useState([]);
    const [listGroupPrinter, setListGroupPrinter] = useState([]);
    const [listMedProducer, setListMedProducer] = useState([]);
    const [listMedCountry, setListMedCountry] = useState([]);
    const [listMedUsageDuoc, setListMedUsageDuoc] = useState([]);

    const dispatch = useDispatch();

    const handleDataCreate = () => {
        setOpen(true);
    };

    const handleThaoTac = (e, record) => {
        if (e.key === "update") {
            dispatch(setDataThuocVTYT(record));
            setOpen(true);
        } else if (e.key === "delete") {
            Swal.fire({
                text: "Bạn có muốn xóa Thuốc VTYT này ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#0067ac",
                cancelButtonColor: "#d33",
                cancelButtonText: "Hủy",
                confirmButtonText: "Đồng ý",
            }).then((result) => {
                if (result.isConfirmed) {
                    // handleDelete(record.GroupPrinterID);
                    successInfo("Đã xóa thành công !");
                }
            });
        }
    };

    const getAllThuocVTYT = async () => {
        try {
            setLoading(true);
            const data = await thuocvtytAPI.getAll('ItemID');
            setListThuocVTYT(data.data);
            setLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };
    //
    const handleCreate = async (obj) => {
        const data = await thuocvtytAPI.create(obj);
        if (data.data.Code === "err") {
            infoRes(data.data.Content);
        } else if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllThuocVTYT();
        }
    };
    //
    const handleUpdate = async (obj) => {
        const data = await thuocvtytAPI.update(obj);
        if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllThuocVTYT();
        } else {
            errorInfo(data.data.Content);
        }
    };
    //
    // const handleDelete = async (GroupPrinterID, EmployeeID = 333) => {
    //     const data = await thuocvtytAPI.delete(GroupPrinterID, EmployeeID);
    //     if (data.data.Code === "ok") {
    //         successInfo(data.data.Content);
    //         getAllThuocVTYT();
    //     } else {
    //         errorInfo(data.data.Content);
    //     }
    // };
    const getServiceCategory = async () => {
        try {
            const data = await thuocvtytAPI.getServiceCategory({ServiceCategoryID: 0});
            setListServiceCategory(data.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    const getServiceGroup = async () => {
        try {
            const data = await thuocvtytAPI.getServiceGroup("ServiceGroupID");
            setListServiceGroup(data.data.recordset);
        } catch (err) {
            throw new Error(err);
        }
    };
    const getUnitOfMeasure = async () => {
        try {
            const data = await thuocvtytAPI.getUnitOfMeasure("UnitID");
            setListUnitOfMeasure(data.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    const getGroupPrinter = async () => {
        try {
            const data = await thuocvtytAPI.getGroupPrinter("GroupPrinterID");
            setListGroupPrinter(data.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    const getMedProducer = async () => {
        try {
            const data = await thuocvtytAPI.getMedProducer({ProducerID:0});
            setListMedProducer(data.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    const getMedCountry = async () => {
        try {
            const data = await thuocvtytAPI.getMedCountry({CountryID:0});
            setListMedCountry(data.data);
        } catch (err) {
            throw new Error(err);
        }
    };

    const getMedUsageDuoc = async () => {
        try {
            const data = await thuocvtytAPI.getMedUsageDuoc({Hide: 0, UsageID: ""});
            setListMedUsageDuoc(data.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    // console.log("setListUsage: ", listMedUsageDuoc);
    useEffect(() => {
        getAllThuocVTYT();
        getServiceCategory();
        getServiceGroup();
        getUnitOfMeasure();
        getGroupPrinter();
        getMedProducer();
        getMedCountry();
        getMedUsageDuoc();
    }, []);

// ------------------------------
    var addThuocvtyt = {
        ItemID: "01",
        ItemCode_PK: "001",
        ItemName: "ten thuoc",
        ItemContent: "ten thuoc 2",
        Active: "1",
        Active_Code: "1",
        UsageID: 125,
        UnitID: 2,
        UnitID_Packed: 1,
        SODK: "1",
        QUYCACH: "1",
        DosageForms: "1",
        ServiceCategoryID: 2,
        Hide: false,
        UnitPrice: 1,
        UnitPrice_VAT: 1,
        SalesPrice: 1,
        BHYTPrice: 1,
        DisparityPrice: 1,
        SalesPrice_Retail: 1,
        Rate_BH: 1,
        CountryID: 1,
        ProducerID: 1,
        IsBHYT: true,
        IsService: true,
        SafelyQuantity: 1,
        RepositoryCode: "1",
        QtyOfMeasure: 1,
        STT: 1,
        Note: "1",
        EmployeeID: 1,
        Generic_BD: "1",
        VENCode: "1",
        GroupPrinterID: 1,
        UnitID_Medi: 1,
        QtyOfMeasure_Medi: 1,
        Toxic_Dose: 1,
        ItemsBHYT_ID: 1,
        QtyContent_Medi: 1,
        Converted_Medi: true,
        IsKeDon_BS: true,
        Ma_DQG: "1",
        ServiceID_Attach: "1",
        VAT: 1
    }
//     ---------------------------------

    const columns = [
        // {
        //     title: "Nhóm",
        //     dataIndex: "ServiceGroup",
        //     render: (ServiceGroupID) => (
        //         <div style={{ width: "200px" }}>
        //             {listServiceGroup.map((item) => {
        //                 // console.log(item);
        //                 // console.log(ServiceCategoryID);
        //                 let a = [];
        //                 if (item.ServiceGroupID === ServiceGroupID) {
        //                     // console.log(ServiceGroupID);
        //                     a.push(item.ServiceGroupName);
        //                 }
        //                 return a;
        //             })}
        //         </div>
        //     ),
        // },
        // {
        //     title: "Phân loại",
        //     dataIndex: "ServiceCategory",
        //     render: (ServiceCategoryID) => (
        //         <div style={{ width: "200px" }}>
        //             {listServiceCategory.map((item) => {
        //                 // console.log(item);
        //                 // console.log(ServiceCategoryID);
        //                 let a = [];
        //                 if (item.ServiceCategoryID === ServiceCategoryID) {
        //                     // console.log(ServiceCategoryID);
        //                     a.push(item.ServiceCategoryName);
        //                 }
        //                 return a;
        //             })}
        //         </div>
        //     ),
        // },
        // {title: "Nhóm", dataIndex: "GroupPrinterID", key: "GroupPrinterID"},
        {
            title: "Phân loại",
            dataIndex: "ServiceCategoryID",
            render: (ServiceCategoryID) => {
                const servicecategory = listServiceCategory.find((item) => item.ServiceCategoryID === ServiceCategoryID);
                return (
                    <div>
                        {servicecategory ? servicecategory.ServiceCategoryName : "Không xác định"}
                    </div>
                );
            },
        },
        {title: "Tên hàng hóa", dataIndex: "ItemName", key: "ItemName"},
        {title: "Mã hàng hóa", dataIndex: "ItemID", key: "ItemID"},
        {title: "Hàm lượng AX", dataIndex: "Toxic_Dose", key: "Toxic_Dose"},
        {title: "Hoạt chất", dataIndex: "Generic_BD", key: "Generic_BD"},
        {
            title: "Đường dùng",
            dataIndex: "UsageID",
            render: (UsageID) => {
                const usage = listMedUsageDuoc.find((item) => item.UsageID === UsageID);
                return (
                    <div>
                        {usage ? usage.UsageName : "Không xác định"}
                    </div>
                );
            },
        },
        {
            title: "ĐVT Đ.Gói (Nh.Kho)",
            dataIndex: "UnitID_Packed",
            render: (UnitID_Packed) => {
                const unitpacked = listUnitOfMeasure.find((item) => item.UnitID === UnitID_Packed);
                return (
                    <div>
                        {unitpacked ? unitpacked.UnitName: "Không xác định"}
                    </div>
                );
            },
        },
        {
            title: "ĐVT",
            dataIndex: "UnitID",
            render: (UnitID) => {
                const unit = listUnitOfMeasure.find((item) => item.UnitID === UnitID);
                return (
                    <div>
                        {unit ? unit.UnitName: "Không xác định"}
                    </div>
                );
            },
        },{
            title: "ĐV kê toa",
            dataIndex: "UnitID_Medi",
            render: (UnitID_Medi) => {
                const unitmed = listUnitOfMeasure.find((item) => item.UnitID === UnitID_Medi);
                return (
                    <div>
                        {unitmed ? unitmed.UnitName: "Không xác định"}
                    </div>
                );
            },
        },
        {title: "SL Q.Đổi N.Kho", dataIndex: "QtyOfMeasure_Medi", key: "QtyOfMeasure_Medi"},
        {title: "Số đăng ký", dataIndex: "SODK", key: "SODK"},
        {title: "Dạng bào chế", dataIndex: "DosageForms", key: "DosageForms"},
        {title: "Giá mua", dataIndex: "UnitPrice", key: "UnitPrice"},
        {title: "Giá BHYT", dataIndex: "BHYTPrice", key: "BHYTPrice"},
        {title: "Phụ thu BHYT", dataIndex: "DisparityPrice", key: "DisparityPrice"},
        {title: "Giá dịch vụ", dataIndex: "SalesPrice", key: "SalesPrice"},
        {title: "Giá bán sĩ", dataIndex: "SalesPrice_Retail", key: "SalesPrice_Retail"},
        {title: "Mã thuốc 9324_AX", dataIndex: "Ma_DQG", key: "Ma_DQG"},
        {title: "Mã theo kết quả đấu thầu (STT mã hóa theo KQĐT)", dataIndex: "ServiceID_Attach", key: "ServiceID_Attach"},
        {title: "Hạn mức tồn", dataIndex: "SafelyQuantity", key: "SafelyQuantity"},
        {
            title: "Nhóm in",
            dataIndex: "GroupPrinterID",
            render: (GroupPrinterID) => {
                const groupprinter = listUnitOfMeasure.find((item) => item.GroupPrinterID === GroupPrinterID);
                return (
                    <div>
                        {groupprinter ? groupprinter.UnitName: "Không xác định"}
                    </div>
                );
            },
        },
        {title: "Kho", dataIndex: "RepositoryCode", key: "RepositoryCode"},
        // {title: "Kê đơn BS", dataIndex: "IsKeDon_BS", key: "IsKeDon_BS"},
        {
            title: "Kê đơn BS",
            dataIndex: "IsKeDon_BS",
            key: "IsKeDon_BS",
            render: (_, record) => (
                <Checkbox
                    checked={record.IsKeDon_BS}
                    // onChange={() => handleCheckboxChange(record, "IsBHYT")}
                />
            ),
        },
        {title: "Q.Cách Đ.Gói", dataIndex: "QUYCACH", key: "QUYCACH"},
        {
            title: "DM BHYT",
            dataIndex: "IsBHYT",
            key: "IsBHYT",
            render: (_, record) => (
                <Checkbox
                    checked={record.IsBHYT}
                    // onChange={() => handleCheckboxChange(record, "IsBHYT")}
                />
            ),
        },
        {
            title: "DM Dịch vụ",
            dataIndex: "IsService",
            key: "IsService",
            render: (_, record) => (
                <Checkbox
                    checked={record.IsService}
                    // onChange={() => handleCheckboxChange(record, "IsService")}
                />
            ),
        },
        {
            title: "Quy đổi SL kê toa",
            dataIndex: "Converted_Medi",
            key: "Converted_Medi",
            render: (_, record) => (
                <Checkbox
                    checked={record.Converted_Medi}
                    // onChange={() => handleCheckboxChange(record, "Converted_Medi")}
                />
            ),
        },
        {
            title: "Ẩn/Hiện",
            dataIndex: "Hide",
            key: "Hide",
            render: (_, record) => (
                <Checkbox
                    checked={!record.Hide}
                    // onChange={() => handleCheckboxChange(record, "Hide")}
                />
            ),
        },
        {title: "Hãng sản xuất", dataIndex: "ProducerID", key: "ProducerID"},
        {
            title: "Hãng sản xuất",
            dataIndex: "ProducerID",
            render: (ProducerID) => {
                const producer = listMedProducer.find((item) => item.ProducerID === ProducerID);
                return (
                    <div>
                        {producer ? producer.ProducerName: "Không xác định"}
                    </div>
                );
            },
        },
        {
            title: "Nước sản xuất",
            dataIndex: "CountryID",
            render: (CountryID) => {
                const country = listMedCountry.find((item) => item.CountryID === CountryID);
                return (
                    <div>
                        {country ? country.CountryName: "Không xác định"}
                    </div>
                );
            },
        },
        {title: "Ghi chú", dataIndex: "Note", key: "Note"},
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
                                    // setActiveModify(!activeModify);
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

    return (
        <Layout.Content style={{ padding: '16px' }}>
            <Space direction="vertical" style={{ width: '100%' }} size="large">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Space>
                        <MenuOutlined />
                        Thuốc VTYT
                    </Space>
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={handleDataCreate}
                    >
                        Thêm mới
                    </Button>
                </div>

                <DetailThuocVTYT
                    open={open}
                    setOpen={setOpen}
                    listServiceCategory={listServiceCategory}
                    listServiceGroup={listServiceGroup}
                    listUnitOfMeasure={listUnitOfMeasure}
                    listGroupPrinter={listGroupPrinter}
                    listMedProducer={listMedProducer}
                    listMedCountry={listMedCountry}
                    listMedUsageDuoc={listMedUsageDuoc}
                    handleCreate={handleCreate}
                    handleUpdate={handleUpdate}
                    key="DetailThuocVTYT"
                />

                <Table
                    dataSource={listThuocVTYT}
                    columns={columns}
                    scroll={{ x: '4000px', y: 'calc(100vh - 200px)' }}
                    size="small"
                    pagination={false}
                    loading={loading}
                    bordered
                    rowKey={(record) => record?.ItemID}
                />
            </Space>
        </Layout.Content>
    );
}

export default ThuocVTYT;
