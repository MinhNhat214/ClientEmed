// src/pages/Dashboard.js
import React, { Component } from "react";
import Header from "../components/ThuocVTYT/Header";
import DataTable from "../components/ThuocVTYT/Datatable";

class ThuocVTYT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      units: [
        {
          nhom: "Siêu âm tuyến giáp",
          pl: "Siêu âm tuyến giáp",
          tenHangHoa: "Siêu âm tuyến giáp",
          maHangHoa: "Siêu âm tuyến giáp",
          hoatChat: "Siêu âm tuyến giáp",
          hamLuong: "Siêu âm tuyến giáp",
        },
        { nhom: "Siêu âm tuyến giáp",
          pl: "Siêu âm tuyến giáp",
          tenHangHoa: "Siêu âm tuyến giáp",
          maHangHoa: "Siêu âm tuyến giáp",
          hoatChat: "Siêu âm tuyến giáp",
          hamLuong: "Siêu âm tuyến giáp",
        },
        {
          nhom: "Siêu âm tuyến giáp",
          pl: "Siêu âm tuyến giáp",
          tenHangHoa: "Siêu âm tuyến giáp",
          maHangHoa: "Siêu âm tuyến giáp",
          hoatChat: "Siêu âm tuyến giáp",
          hamLuong: "Siêu âm tuyến giáp",
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
        <DataTable data={units} />
      </div>
    );
  }
}

export default ThuocVTYT;