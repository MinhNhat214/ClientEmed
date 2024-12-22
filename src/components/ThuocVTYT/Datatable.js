import React, {useState, useEffect, useRef} from "react";
import {Table, Button, Dropdown, Menu, Checkbox} from "antd";
import {EditFilled} from "@ant-design/icons";
import ThaoTac from "./ThaoTac";

const Datatable = (props) => {
  const {data} = props;

  const columns = [
    {title: "Nhóm", dataIndex: "nhom", key: "nhom"},
    {title: "Phân loại", dataIndex: "phanLoai", key: "phanLoai"},
    {title: "Tên hàng hóa", dataIndex: "tenHangHoa", key: "tenHangHoa"},
    {title: "Mã hàng hóa", dataIndex: "maHangHoa", key: "maHangHoa"},
    {title: "Hàm luợng AX", dataIndex: "hamLuong", key: "hamLuong"},
    {title: "Hoạt chất", dataIndex: "hoatChat", key: "hoatChat"},
    {title: "Đường dùng", dataIndex: "duongDung", key: "duongDung"},
    {title: "ĐVT Đ.Gói (Nh.Kho)", dataIndex: "dvtDGoi", key: "dvtDGoi"},
    {title: "ĐVT", dataIndex: "dvt", key: "dvt"},
    {title: "ĐV kê toa", dataIndex: "dvKetoa", key: "dvKetoa"},
    {title: "SL Q.Đổi N.Kho", dataIndex: "slQDoiNK", key: "slQDoiNK"},
    {title: "Số đăng ký", dataIndex: "dangBaoChe", key: "dangBaoChe"},
    {title: "Dạng bào chế", dataIndex: "giaMua", key: "giaMua"},
    {title: "Giá mua", dataIndex: "giaBHYT", key: "giaBHYT"},
    {title: "Giá BHYT", dataIndex: "phuThuBHYT", key: "phuThuBHYT"},
    {title: "Phụ thu BHYT", dataIndex: "giaDichVu", key: "giaDichVu"},
    {title: "Giá dịch vụ", dataIndex: "giaBanSi", key: "giaBanSi"},
    {title: "Giá bán sĩ", dataIndex: "giaBanSi", key: "giaBanSi"},
    {title: "Mã thuốc 9324_AX", dataIndex: "giaBanSi", key: "giaBanSi"},
    {title: "Mã theo kết quả đấu thầu (STT mã hóa theo KQĐT)", dataIndex: "giaBanSi", key: "giaBanSi"},
    {title: "Hạn mức tồn", dataIndex: "giaBanSi", key: "giaBanSi"},
    {title: "Nhóm   in", dataIndex: "giaBanSi", key: "giaBanSi"},
    {title: "Kho", dataIndex: "giaBanSi", key: "giaBanSi"},
    {title: "Kê đơn BS", dataIndex: "giaBanSi", key: "giaBanSi"},

    {title: "Q.Cách Đ.Gói", dataIndex: "giaBanSi", key: "giaBanSi"},
    {
      title: "DM BHYT",
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
      title: "DM Dịch vụ",
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
      title: "Quy đổi SL kê toa",
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
    {title: "Hãng sản xuất", dataIndex: "giaBanSi", key: "giaBanSi"},
    {title: "Nước sản xuất", dataIndex: "giaBanSi", key: "giaBanSi"},
    {title: "Ghi chú", dataIndex: "giaBanSi", key: "giaBanSi"},


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
          rowKey="nhom"
          scroll={{x: "max-content"}}
          className="data-table"
      />
  );
};

export default Datatable;
