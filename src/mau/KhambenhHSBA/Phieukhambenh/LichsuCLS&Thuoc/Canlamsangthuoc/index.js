import { Button, Form, Input, Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import "./camlamsangthuoc.scss";
// import ds from "../../../../../util/data";
function Canlamsanthuoc() {
    const column0 = [
        {
            title: "Tên dịch vụ",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "200px" }}> {TDV} </div>,
        },
        {
            title: "ĐVT",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Đối tượng",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Số lượng",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Đơn giá",
            dataIndex: "MADVKT",
            align: "center",
        },

        {
            title: "Phụ thu",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Ngày vào",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "BS chỉ định ",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },

        {
            title: "Tình trạng",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "BS Th.Hiện",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Ngày Th.Hiện",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },

        {
            title: "Phòng Ch.Định",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Phòng Th.Hiện",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "TT.Tiền",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "KSK",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "STT",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Mã gói",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Add BV01",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Thao tác",
            dataIndex: "",
            align: "center",
            fixed: "right",
            render: (record) => (
                <div>
                    <Button className="khambenh-btn-icon">
                        <FontAwesomeIcon icon={faPrint} />
                    </Button>
                </div>
            ),
        },
    ];
    const column1 = [
        {
            title: "Mã thuốc",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "200px" }}> {TDV} </div>,
        },
        {
            title: "Tên thuốc",
            dataIndex: "TDVVT",
            fixed: "left",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "ĐVT.Kê toa",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Đ.Dùng",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "N.Cấp",
            dataIndex: "MADVKT",
            align: "center",
        },

        {
            title: "S",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Tr",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "C",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },

        {
            title: "T",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Tổng",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Cách dùng",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
    ];
    return (
        <>
            <div className="p-2">
                <div>
                    <Form>
                        <div className="row form-row">
                            <Form.Item
                                className="m-0"
                                label={
                                    <div className="form-input-label khambenh-lichsucls-input-label ">
                                        Diễn biến
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
                                    <div className="form-input-label khambenh-lichsucls-input-label ">
                                        ICD10
                                    </div>
                                }
                            >
                                <Input className="form-control" />
                            </Form.Item>
                        </div>
                    </Form>
                </div>
                <div className="mt-2 px-1s color-border">
                    <Table
                        columns={column0}
                        // dataSource={ds}
                        // loading={loading}
                        scroll={{ x: true, y: 200 }}
                        size="small"
                        pagination={false}
                    />
                </div>
                <div>
                    <div>
                        <Form>
                            <div className="row ">
                                <div className="d-flex">
                                    <Form.Item
                                        className="m-0"
                                        label={<div className="form-input-label">In CĐ ngày</div>}
                                    >
                                        <Input className="form-control" type="date" />
                                    </Form.Item>
                                    <Form.Item className="my-0 mx-2">
                                        <Button className="form-control form-input-btn">
                                            <div className="d-flex align-items-center p-0 m-0">
                                                <FontAwesomeIcon icon={faPrint} />
                                                <div className="mx-1">In CĐ</div>
                                            </div>
                                        </Button>
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="mt-1 px-1 color-border">
                                <Table
                                    columns={column1}
                                    // dataSource={ds}
                                    // loading={loading}
                                    scroll={{ x: true, y: 200 }}
                                    size="small"
                                    pagination={false}
                                />
                            </div>
                            <div className="row">
                                <div className="d-flex">
                                    <Form.Item
                                        className="m-0"
                                        label={<div className="form-input-label">Toa ngày</div>}
                                    >
                                        <Input className="form-control" type="date" />
                                    </Form.Item>
                                    <Form.Item className="my-0 mx-2">
                                        <Button className="form-control form-input-btn">
                                            <div className="d-flex align-items-center p-0 m-0">
                                                <FontAwesomeIcon icon={faPrint} />
                                                <div className="mx-1">In toa thuóc</div>
                                            </div>
                                        </Button>
                                    </Form.Item>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Canlamsanthuoc;
