import { Modal, Button, Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
// import data2 from "../../../../../../util/data3";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import "./sinhhieu.scss";
import { Line } from "react-chartjs-2"; // import Swal from "sweetalert2";
function Ghinhantheodosinhhieu(props) {
    const { open, setOpen } = props;
    Chart.register(CategoryScale);
    const columns = [
        {
            title: "Ngày",
            dataIndex: "ngay",
            fixed: "left",
            render: (ngay) => <div> {ngay} </div>,
        },
        {
            title: "Mạch",
            dataIndex: "mach",
            render: (mach) => <div> {mach} </div>,
        },
        {
            title: "N.Độ",
            dataIndex: "nhietdo",
            render: (nhietdo) => <div> {nhietdo} </div>,
        },
        {
            title: "H.Áp",
            dataIndex: "huyetap",
            render: (huyetap) => <div> {huyetap} </div>,
        },
        {
            title: "Nặng",
            dataIndex: "nang",
            render: (nang) => <div> {nang} </div>,
        },
        {
            title: "Cao",
            dataIndex: "cao",
            render: (cao) => <div> {cao} </div>,
        },
        {
            title: "N.Thở",
            dataIndex: "nhiptho",
            render: (nhiptho) => <div> {nhiptho} </div>,
        },
        {
            title: "Vòng ngực",
            dataIndex: "vongnguc",
            render: (vongnguc) => <div> {vongnguc} </div>,
        },
    ];

    const labels = ["January", "February", "March", "April", "May", "June"];

    const data = {
        labels: labels,
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgb(66, 141, 245)",
                borderColor: "rgb(66, 141, 245)",
                data: [0, 10, 55, 25, 22, 35, 45],
            },
            {
                label: "1",
                backgroundColor: "rgb(247, 255, 18)",
                borderColor: "rgb(247, 255, 18)",
                data: [10, 10, 25, 22, 40, 46,65],
            },
            {
                label: "2",
                backgroundColor: "rgb(5, 237, 102)",
                borderColor: "rgb(5, 237, 102)",
                data: [0, 8, 5, 10, 70, 40, 15],
            },
        ],
    };

    return (
        <>
            <Modal className="TheoDoiSinhHieu"
                title={
                    <>
                        <div>THEO DÕI DẤU HIỆU SINH TỒN</div>
                    </>
                }
                centered
                open={open}
                okButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                cancelButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <div>
                    <Table
                        columns={columns}
                        // dataSource={data2}
                        // loading={loading}
                        scroll={{ x: true, y: 200 }}
                        size="small"
                        pagination={false}
                    />
                </div>
                <div className="d-flex justify-content-between align-items-center mt-4">
                    <div className="color-text fw-bold ">BIỂU ĐỒ SINH HIỆU</div>
                    <div>
                        <Button className="form-btn form-btn">
                            <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon><div className="mx-2">F6 - In phiếu</div>
                        </Button>
                    </div>
                </div>
                <div>
                    <Line data={data} />
                </div>
            </Modal>
        </>
    );
}

export default Ghinhantheodosinhhieu;
