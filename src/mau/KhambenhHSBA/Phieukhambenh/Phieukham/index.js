import { Dropdown, Form, Input, Table, Button, Tabs, Space, Checkbox, Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPrint,
    faCapsules,
    faPills,
    faHouseChimneyMedical,
    faChevronDown,
    faPen,
    faPenToSquare,
    faSearchDollar,
} from "@fortawesome/free-solid-svg-icons";
import TextArea from "antd/es/input/TextArea";
import "./phieukham.scss";
import { useReactToPrint } from "react-to-print";
import Toathuoctaicho from "./Toathuoctaicho";
import { useState,useRef } from "react";
import Toamuangoai from "./Toamuangoai";
import Thuoctutruc from "./Thuoctutruc";
import Donthuoc from "./Donthuoc";
import ChidinhKB from "./ChidinhKB";
import Bienbanhoichuan from "./Tienich/Bienbanhoichuan";
import Bienbantuvong from "./Tienich/Bienbantuvong";
import Ghinhantheodosinhhieu from "./Tienich/Ghinhantheodoisinhhieu";
import Lapphieutheodoidieutri from "./Tienich/Lapphieutheodoidieutri";
import Lapphieuchamsoc from "./Tienich/Lapphieuchamsoc";
import Lapphieutheodoitruyendich from "./Tienich/Lapphieutheodoitruyendich";
import InTest from "./Tienich/In/Intest";
import InTestPDF from "./Tienich/In/InTestPDF";
import Intheodoidieutri from "./Tienich/In/Intheodoidieutri";
import Inphieuchamsoc from "./Tienich/In/Inphieuchamsoc";
import Inphieucongkhaisudungthuoc from "./Tienich/In/Inphieucongkhaisudungthuoc";
import Intheodoichucnangsong from "./Tienich/In/Intheodoichucnangsong";
// import Intheodoitruyendich from "./Tienich/In/Intheodoitruyendich";
 import Inphieukhambenh from "./Tienich/In/Inphieukhambenh";
import Inhosongoaitru from "./Tienich/In/Inhosongoaitru";
import Fileghinhanhoso from "./Tienich/Fileghinhanhoso";
import Xemchiphikcb from "./Tienich/In/Xemchiphikcb";
// import ds from "../../../../util/data";
function Phieukham() {
    const [openModelToathuoctainha, setModelToathuoctainha] = useState(false);
    const [openModelToamuangoai, setModelToamuangoai] = useState(false);
    const [openModelThuoctutruc, setModelThuoctutruc] = useState(false);
    const [openModelBienbanhoichuan, setModelBienbanhoichuan] = useState(false);
    const [openModelBienbantuvong, setModelBienbantuvong] = useState(false);
    const [openModelTheodoisinhhieu, setModelTheodoisinhhieu] = useState(false);
    const [openModelLapphieutheodoidieutri, setModelLapphieutheodoidieutri] = useState(false);
    const [openModelLapphieuchamsoc, setModelLapphieuchamsoc] = useState(false);
    const [openModelLapphieutheodoitruyendich, setModelLapphieutheodoitruyendich] = useState(false);
    const [openModelFileghinhanhoso, setModelFileghinhanhoso] = useState(false);

    const [opentestPDF, setOpenTestPDF] = useState(false);

    const [refInTest, setRefInTest] = useState("");
    const [refIntheodoidieutri, setRefIntheodoidieutri] = useState("");
    const [refInphieuchamsoc, setRefInphieuchamsoc] = useState("");
    const [refPhieuCongKhaiSuDungThuoc, setrefPhieuCongKhaiSuDungThuoc] = useState("");
    const [refIntheodoichucnangsong, setRefIntheodoichucnangsong] = useState("");
    const [refInphieukhambenh, setRefInphieukhambenh] = useState("");
    // const [refIntheodoitruyendich, setRefIntheodoitruyendich] = useState("");
    const [refInhosongoaitru, setRefInhosongoaitru] = useState("");
    const [refXemchiphikcb, setRefXemchiphikcb] = useState("");
    const handlePrint1 = useReactToPrint({
        content: () => refInTest,
        documentTitle: "emp-data",
        onafterprint: () => alert("Print Success"),
    });
  
    const handlePrint2 = useReactToPrint({
        content: () => refIntheodoidieutri,
        documentTitle: "emp-data",
        onafterprint: () => alert("Print Success"),
    });
    const PrintPhieuChamSoc = useReactToPrint({
        content: () => refInphieuchamsoc,
        documentTitle: "emp-data",
        onafterprint: () => alert("Print Success"),
    });
    const PrintPhieuCongKhaiSuDungThuoc = useReactToPrint({
        content: () => refPhieuCongKhaiSuDungThuoc,
        documentTitle: "emp-data",
        onafterprint: () => alert("Print Success"),
    });
    const PrintPhieuTheoDoiChucNangSong = useReactToPrint({
        content: () => refIntheodoichucnangsong,
        documentTitle: "emp-data",
        onafterprint: () => alert("Print Success"),
    });
    const PrintPhieuKhamBenh = useReactToPrint({
        content: () => refInphieukhambenh,
        documentTitle: "emp-data",
        onafterprint: () => alert("Print Success"),
    });
    const PrintHoSoNgoaiTru = useReactToPrint({
        content: () => refInhosongoaitru,
        documentTitle: "emp-data",
        onafterprint: () => alert("Print Success"),
    });
    const PrintXemChiPhiKCB = useReactToPrint({
        content: () => refXemchiphikcb,
        documentTitle: "emp-data",
        onafterprint: () => alert("Print Success"),
    });

    const handleSetOpen = (a) => {
        if (a === "1") {
            setModelToathuoctainha(true);
        } else if (a === "2") {
            setModelToamuangoai(true);
        } else if (a === "3") {
            setModelThuoctutruc(true);
        }
    };
    const onClickDropdownTienich = ({ key }) => {
        if (key === "1") {
            setModelBienbanhoichuan(true);
        } else if (key === "2") {
            setModelBienbantuvong(true);
        } else if (key === "3") {
            setModelTheodoisinhhieu(true);
        } else if (key === "5") {
            setModelLapphieutheodoidieutri(true);
        } else if (key === "6") {
            setModelLapphieuchamsoc(true);
        } else if (key === "7") {
            setModelLapphieutheodoitruyendich(true);
        }
        else if (key === "16") {
            setModelFileghinhanhoso(true);
        }
    };

    
    const openTestPDF = useReactToPrint({
        content: () => opentestPDF,
        documentTitle: "emp-data",
        onafterprint: () => alert("Print Success"),
    });
  

    const items1 = [
        {
            label: <div className="form-input-label">Toa thuốc tại chổ</div>,
            key: "1",
            icon: <FontAwesomeIcon icon={faCapsules} />,
        },
        {
            label: <div className="form-input-label">Toa mua ngoài</div>,
            key: "2",
            icon: <FontAwesomeIcon icon={faPills} />,
        },
        {
            label: <div className="form-input-label">Thuốc tủ trực</div>,
            key: "3",
            icon: <FontAwesomeIcon icon={faHouseChimneyMedical} />,
        },
    ];
    const items = [
        {
            label: <div className="form-input-label">Ghi - Biên bản hội chuẩn</div>,
            key: "1",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPen} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">Ghi - Biên bản tử vong</div>,
            key: "2",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPen} />
                </div>
            ),
        },
        <hr />,
        {
            label: <div className="form-input-label">Ghi - Theo dõi sinh hiệu</div>,
            key: "3",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPen} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">Ghi - Dị ứng thuốc</div>,
            key: "4",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPen} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">Lập - Phiếu theo dõi điều trị</div>,
            key: "5",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">Lập - Phiếu chăm sóc</div>,
            key: "6",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">Lập - Phiếu theo dõi truyền dịch</div>,
            key: "7",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
            ),
        },
        <hr />,
        {
            label: (
                <div className="form-input-label" onClick={handlePrint1}>
                    In - Test
                </div>
            ),
            key: "8",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: (
                <div className="form-input-label" onClick={openTestPDF}>
                    Test dgrgr
                </div>
            ),
            key: "8",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: (
                <div className="form-input-label" onClick={handlePrint2}>
                    In - Phiếu theo dõi điều trị
                </div>
            ),
            key: "9",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label" onClick={PrintPhieuChamSoc}>In - Phiếu chăm sóc</div>,
            key: "10",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label" onClick={PrintPhieuCongKhaiSuDungThuoc}>In - Phiếu công khai sử dụng thuốc</div>,
            key: "11",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label" onClick={PrintPhieuTheoDoiChucNangSong}>In - Phiếu theo dõi chức năng sống</div>,
            key: "12",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">In - Phiếu theo dõi truyền dịch</div>,
            key: "13",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label" onClick={PrintPhieuKhamBenh}>In - Phiếu khám bệnh</div>,
            key: "14",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label" onClick={PrintHoSoNgoaiTru}>In - Hồ sơ ngoại trú</div>,
            key: "15",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">Ghi - Nhận file hồ sơ</div>,
            key: "16",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPen} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label" onClick={PrintXemChiPhiKCB}>Xem chi phí khám chữa bệnh</div>,
            key: "17",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faSearchDollar} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">Ghi - Giấy xin ra viện</div>,
            key: "18",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPen} />
                </div>
            ),
        },
    ];

    const menuProps = {
        items,
        onClick: onClickDropdownTienich,
    };

    const tabphieukham = [
        {
            key: "1",
            label: "Chỉ định",
            children: (
                <div className="tiepnhan-tab">
                    <ChidinhKB />
                </div>
            ),
        },
        {
            key: "2",
            label: "Đơn thuốc",
            children: (
                <div className="tiepnhan-tab">
                    <Donthuoc />
                </div>
            ),
        },
    ];

    const column1 = [
        {
            title: "Mã ",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div> {TDV} </div>,
        },
        {
            title: "Tên",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div> {TDVVT} </div>,
        },
    ];
    return (
        <>
            <div>
                <div className="color-border">
                    <div className="m-1 ">
                        <div className="d-flex">
                            {items1.map((item) => (
                                <Button
                                    className="form-btn "
                                    key={item.key}
                                    onClick={() => handleSetOpen(item.key)}
                                >
                                    {item.icon}
                                    <div className="mx-1 fw-bold ">{item.label}</div>
                                </Button>
                            ))}
                            <Dropdown menu={menuProps}>
                                <Button className="form-btn">
                                    <Space>
                                        <div className="fw-bold form-input-label">Tiện ích</div>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </div>
                    </div>

                    {/* Modal hien thi */}
                    <Toathuoctaicho
                        open={openModelToathuoctainha}
                        setOpen={setModelToathuoctainha}
                    />
                    <Toamuangoai open={openModelToamuangoai} setOpen={setModelToamuangoai} />
                    <Thuoctutruc open={openModelThuoctutruc} setOpen={setModelThuoctutruc} />
                    <Bienbanhoichuan
                        open={openModelBienbanhoichuan}
                        setOpen={setModelBienbanhoichuan}
                    />
                    <Bienbantuvong open={openModelBienbantuvong} setOpen={setModelBienbantuvong} />
                    <Ghinhantheodosinhhieu
                        open={openModelTheodoisinhhieu}
                        setOpen={setModelTheodoisinhhieu}
                    />
                    <Lapphieutheodoidieutri
                        open={openModelLapphieutheodoidieutri}
                        setOpen={setModelLapphieutheodoidieutri}
                    />
                    <Lapphieuchamsoc
                        open={openModelLapphieuchamsoc}
                        setOpen={setModelLapphieuchamsoc}
                    />
                    <Fileghinhanhoso
                        open={openModelFileghinhanhoso}
                        setOpen={setModelFileghinhanhoso}
                    />
                    <div>
                        <Lapphieutheodoitruyendich
                            open={openModelLapphieutheodoitruyendich}
                            setOpen={setModelLapphieutheodoitruyendich}
                        />
                    </div>
                    {/* /// */}
                    <div>
                        <Form>
                            <div className="d-flex khambenh">
                                <div className="w-70 px-2 khambenh-label">
                                    <div className="row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label khambenh-phieukham-left-input-label ">
                                                    Tr.chứng, bệnh lý
                                                </div>
                                            }
                                            className="m-0 col-md-6"
                                        >
                                            <TextArea
                                                className="form-control"
                                                autoSize={{
                                                    minRows: 3,
                                                    maxRows: 5,
                                                }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label={
                                                <div className="form-input-label khambenh-phieukham-left-input-label ">
                                                    Tiểu sử bản thân
                                                </div>
                                            }
                                            className="m-0 col-md-6"
                                        >
                                            <TextArea
                                                className="form-control"
                                                autoSize={{
                                                    minRows: 3,
                                                    maxRows: 5,
                                                }}
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label khambenh-phieukham-left-input-label ">
                                                    Lý do khám
                                                </div>
                                            }
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            className="m-0"
                                            label={
                                                <div className="form-input-label khambenh-phieukham-left-input-label ">
                                                    CĐ ban đầu
                                                </div>
                                            }
                                        >
                                            <Input className="form-control" />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            className="m-0"
                                            label={
                                                <div className="form-input-label khambenh-phieukham-left-input-label ">
                                                    Xử trí
                                                </div>
                                            }
                                        >
                                            <div className="input-select">
                                                <Select />
                                            </div>
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row select-khb">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label khambenh-phieukham-left-input-label ">
                                                    ICD10
                                                </div>
                                            }
                                            className="col-md-12 m-0"
                                        >
                                            <div className="input-select">
                                                <Select />
                                            </div>
                                        </Form.Item>
                                    </div>
                                    <div className="row">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label khambenh-phieukham-left-input-label ">
                                                    ICD10 KT
                                                </div>
                                            }
                                            className="col-md-12 m-0"
                                        >
                                            <div className="input-select">
                                                <Select />
                                            </div>
                                            <div className="color-border">
                                                <Table
                                                    // dataSource={ds}
                                                    columns={column1}
                                                    scroll={{ X: true, y: 50 }}
                                                    pagination={false}
                                                    size="small"
                                                />
                                            </div>
                                        </Form.Item>
                                    </div>
                                    <div className="row kb-loidan">
                                        <Form.Item
                                            label={
                                                <div className="form-input-label khambenh-phieukham-left-input-label ">
                                                    Lời dặn
                                                </div>
                                            }
                                            className="col-md-12 mt-1"
                                        >
                                            <TextArea
                                                className="form-control"
                                                autoSize={{
                                                    minRows: 1,
                                                    maxRows: 1,
                                                }}
                                            />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="w-30 px-2 border-line-left-kb">
                                    <div className="row">
                                        <Form.Item
                                            className="m-0 form-row "
                                            label={
                                                <div className="form-input-label khambenh-phieukham-right-input-label">
                                                    Mạch(lần/phút)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                        <Form.Item
                                            className="m-0  form-row"
                                            label={
                                                <div className="form-input-label khambenh-phieukham-right-input-label">
                                                    H.áp(mm/Hg)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                        <Form.Item
                                            className="m-0  form-row"
                                            label={
                                                <div className="form-input-label khambenh-phieukham-right-input-label">
                                                    SPO2
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                        <Form.Item
                                            className="m-0  form-row"
                                            label={
                                                <div className="form-input-label khambenh-phieukham-right-input-label">
                                                    N.thở(lần/phút)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                        <Form.Item
                                            className="m-0  form-row"
                                            label={
                                                <div className="form-input-label khambenh-phieukham-right-input-label">
                                                    Nhiệt độ (<sup>o</sup>C)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            className="w-55"
                                            label={
                                                <div className="form-input-label khambenh-phieukham-right-input-label">
                                                    Ch.Cao (cm)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>

                                        <Form.Item
                                            className=" w-45"
                                            label={
                                                <div className="form-input-label khambenh-phieukham-right-input-label-cannang">
                                                    C.Nặng(kg)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                    </div>
                                    <div className="row">
                                        <Form.Item
                                            className="m-0 mt-2"
                                            label={
                                                <div className="form-input-label khambenh-phieukham-right-input-label">
                                                    PP Đ.trị
                                                </div>
                                            }
                                        >
                                            <TextArea
                                                className="form-control"
                                                autoSize={{
                                                    minRows: 3,
                                                    maxRows: 3,
                                                }}
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="row">
                                        <Form.Item
                                            className="m-0  form-row"
                                            label={
                                                <div className="form-input-label khambenh-phieukham-right-input-label">
                                                    KQ Đ.trị
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                    </div>
                                    <div className="row">
                                        <Form.Item
                                            className="m-0  form-row"
                                            label={
                                                <div className="form-input-label khambenh-phieukham-right-input-label">
                                                    TT Ra viện
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                    </div>
                                    <div className="row">
                                        <Form.Item
                                            className="m-0 form-row"
                                            label={
                                                <div className="form-input-label khambenh-phieukham-right-input-label">
                                                    Ngày ra
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="color-border mt-1">
                    <div className="tabphieukham-position">
                        <div className="mx-1 my-2 tab-khambenh">
                            <Tabs
                                defaultActiveKey="1"
                                type="card"
                                size="small"
                                items={tabphieukham}
                            />
                        </div>
                        <div className="phieukham-input-position">
                            <Form>
                                <div className="row m-0">
                                    <div className="col-md-2 kb-checktoa">
                                        <div className=" kb-checkintoa checkintoa-name "> Thuốc DV :</div>
                                        <div className=" kb-checkintoa check-1"> <Checkbox /></div>

                                    </div>
                                    <div className="col-md-4 pk-tt-row">
                                        <label>TT BHYT :</label>
                                        <Input className="form-control" />
                                    </div>
                                    <div className="col-md-3 pk-tt-row">
                                        <label>Dịch vụ :</label>
                                        <Input className="form-control" />
                                    </div>
                                    <div className="col-md-3 pk-tt-row">
                                        <label>Tổng :</label>
                                        <Input className="form-control" />
                                    </div>

                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
       
            {/* Page In     */}
            
      

      
  
            <InTestPDF setRef={setOpenTestPDF} />

            <div className="d-none">
                <InTest setRef={setRefInTest}></InTest>
               
                <Intheodoidieutri setRef={setRefIntheodoidieutri}></Intheodoidieutri>
                <Inphieuchamsoc setRef={setRefInphieuchamsoc}></Inphieuchamsoc>
                <Inphieucongkhaisudungthuoc setRef={setrefPhieuCongKhaiSuDungThuoc}></Inphieucongkhaisudungthuoc>
                <Intheodoichucnangsong setRef={setRefIntheodoichucnangsong}></Intheodoichucnangsong>
                <Inphieukhambenh setRef={setRefInphieukhambenh}></Inphieukhambenh>
               {/* <Intheodoitruyendich setRef={setRefIntheodoitruyendich}></Intheodoitruyendich>*/}
               
                <Inhosongoaitru  setRef={setRefInhosongoaitru}></Inhosongoaitru>
                <Xemchiphikcb setRef={setRefXemchiphikcb}></Xemchiphikcb>
            </div>
        </>
    );
}

export default Phieukham;
