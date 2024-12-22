// src/pages/Dashboard.js
import React, { Component } from "react";
import Header from "../components/DanhMucThuocBHYT/Header";
import Table from "../components/DanhMucThuocBHYT/Datatable";

class DanhMucThuocBHYT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      units: [
        {
          nhom: "Siêu âm tuyến giáp",
          phanLoai: "Siêu âm tuyến giáp",
          tenHangHoa: "Siêu âm tuyến giáp",
          maHangHoa: "Siêu âm tuyến giáp",
          hoatChat: "Siêu âm tuyến giáp",
          hamLuong: "Siêu âm tuyến giáp",
          duongDung: "Siêu âm tuyến giáp",
          dvtDGoi: "Siêu âm tuyến giáp",
          dvt: "Siêu âm tuyến giáp",
          dvKetoa: "Siêu âm tuyến giáp",
          slQDoiNK: "Siêu âm tuyến giáp",
          dangBaoChe: "Siêu âm tuyến giáp",
          giaMua: "Siêu âm tuyến giáp",
          giaBHYT: "Siêu âm tuyến giáp",
          phuThuBHYT: "Siêu âm tuyến giáp",
          giaDichVu: "Siêu âm tuyến giáp",
          giaBanSi: "Siêu âm tuyến giáp",
          maThuoc9324AX: "Siêu âm tuyến giáp",
          maTheoKetQuaDauThau: "Siêu âm tuyến giáp",
          hanMucTon: "Siêu âm tuyến giáp",
          nhomIn: "Siêu âm tuyến giáp",
          kho: "Siêu âm tuyến giáp",
          keDonBS: "Siêu âm tuyến giáp",
          quyCachDongGoi: "Siêu âm tuyến giáp",
          // dmBHYT: "Siêu âm tuyến giáp",
          dmDichVu: "Siêu âm tuyến giáp",
          quyDoiSLKeToa: "Siêu âm tuyến giáp",
          anHien: "Siêu âm tuyến giáp",
          hangSanXuat: "Siêu âm tuyến giáp",
          nuocSanXuat: "Siêu âm tuyến giáp",
          ghiChu: "Siêu âm tuyến giáp",
        },
      ],
    };
  }

  handleAddUnit = (newUnit) => {
    this.setState((prevState) => ({
      units: [...prevState.units, newUnit],
    }));
  };

  render() {
    const { units } = this.state;
    return (
      <div className="dashboard">
        <Header onAdd={this.handleAddUnit} />
        <Table data={units} />
      </div>
    );
  }
}

export default DanhMucThuocBHYT;
