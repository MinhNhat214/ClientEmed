import React, {useState, useEffect, useRef} from "react";
import {Table, Button, Dropdown, Menu, Checkbox} from "antd";
import {EditFilled} from "@ant-design/icons";
import ThaoTac from "./ThaoTac";

const Datatable = (props) => {
    const {data} = props;
    // const [data, setData] = useState(
    //     props.data.map((item, index) => ({ //item lặp qua data[...]
    //         ...item,
    //         code: item.code || `code-${index}`,
    //         dmBHYT: item.dmBHYT || false,
    //         dmDichVu: item.dmDichVu || false,
    //         quyDoiSLKeToa: item.quyDoiSLKeToa || false,
    //         anHien: item.anHien || false,
    //     }))
    // );

    // const handleCheckboxChange = (record, column) => {
    //     setData((prevData) =>
    //         prevData.map((item) =>
    //             item.code === record.code
    //                 ? { ...item, [column]: !item[column] } // Đảo ngược trạng thái của checkbox
    //                 : item
    //         )
    //     );
    // };

    const columns = [
        {title: "Tên đơn vị thầu", dataIndex: "nhom", key: "nhom"},
        {title: "Tên thuốc AX", dataIndex: "phanLoai", key: "phanLoai"},
        {title: "Hoạt chất AX", dataIndex: "tenHangHoa", key: "tenHangHoa"},
        {title: "Mã hoạt chất", dataIndex: "maHangHoa", key: "maHangHoa"},
        {title: "Mã hàng hóa", dataIndex: "hoatChat", key: "hoatChat"},
        {title: "Hàm luợng AX", dataIndex: "hamLuong", key: "hamLuong"},
        {title: "Mã đường dùng AX", dataIndex: "duongDung", key: "duongDung"},
        {title: "Số đăng ký", dataIndex: "dvtDGoi", key: "dvtDGoi"},
        {title: "Giá BHYT", dataIndex: "dvt", key: "dvt"},
        {title: "Mã BHYT (Mã AX)", dataIndex: "dvKetoa", key: "dvKetoa"},
        {title: "% Thưởng BHYT", dataIndex: "slQDoiNK", key: "slQDoiNK"},
        {title: "Số QĐ trúng thầu", dataIndex: "dangBaoChe", key: "dangBaoChe"},
        {title: "Gói thầu", dataIndex: "giaMua", key: "giaMua"},
        {title: "Nhóm thầu", dataIndex: "giaBHYT", key: "giaBHYT"},
        {title: "TT thầu 4201", dataIndex: "phuThuBHYT", key: "phuThuBHYT"},
        {title: "Hãng SX", dataIndex: "giaDichVu", key: "giaDichVu"},
        {title: "Số lượng", dataIndex: "giaBanSi", key: "giaBanSi"},
        {title: "Mã nhóm 9324", dataIndex: "giaBanSi", key: "giaBanSi"},
        {title: "Nước SX", dataIndex: "giaBanSi", key: "giaBanSi"},
        {title: "Nhóm loại thuốc BC", dataIndex: "giaBanSi", key: "giaBanSi"},
        {title: "Ngày nộp M16", dataIndex: "giaBanSi", key: "giaBanSi"},
        {title: "Ngày P.Duyệt BHXH", dataIndex: "giaBanSi", key: "giaBanSi"},
        {title: "Ngày hiệu lực", dataIndex: "giaBanSi", key: "giaBanSi"},
        {
            title: "Ấn BV01",
            dataIndex: "dmBHYT",
            key: "dmBHYT",
            render: (_, record) => (
                <Checkbox
                    checked={record.dmBHYT}
                    // onChange={() => handleCheckboxChange(record, "dmBHYT")}
                />
            ),
        },
        {
            title: "Ẩn/Hiện",
            dataIndex: "dmDichVu",
            key: "dmDichVu",
            render: (_, record) => (
                <Checkbox
                    checked={record.dmDichVu}
                    // onChange={() => handleCheckboxChange(record, "dmDichVu")}
                />
            ),
        },
        {
            title: "Map mã thầu qua DM",
            dataIndex: "quyDoiSLKeToa",
            key: "quyDoiSLKeToa",
            render: (_, record) => (
                <Checkbox
                    checked={record.quyDoiSLKeToa}
                    // onChange={() => handleCheckboxChange(record, "quyDoiSLKeToa")}
                />
            ),
        },

        {title: "STT thuốc (CV) gửi BHXH", dataIndex: "hangSanXuat", key: "hangSanXuat"},
        {
            title: "Thao tác",
            key: "action",
            render: (_, record, index) => <ThaoTac index={index}/>,
        },
    ];


    return (
        <Table
            columns={columns}
            dataSource={data}
            // Trong trường hợp này, bạn có thể tính toán hoặc chọn key dựa trên các thuộc tính khác, không chỉ đơn thuần là lấy record.nhom. Điều này hữu ích nếu key cần kết hợp nhiều trường hoặc thực hiện logic tùy chỉnh.
            // Ví dụ: Bạn có thể viết rowKey={(record) => ${record.nhom}-${record.id}} để tạo key bằng cách kết hợp nhom và id.
            // rowKey={(record) => record.nhom}
            rowKey="nhom"
            scroll={{x: "max-content"}}
            className="data-table"
        />
    );
};

export default Datatable;
