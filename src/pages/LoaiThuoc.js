// src/pages/DonVi.js
import React, { useState } from "react";
import Header from "../components/LoaiThuoc/Header";
import Datatable from "../components/LoaiThuoc/Datatable";

const LoaiThuoc = () => {
  const [units, setUnits] = useState([
    { nhom: "1", name: "Siêu âm tuyến giáp", lock: "1" },
    { nhom: "2", name: "Siêu âm tuyến giáp4", lock: "0" },
    { nhom: "3", name: "Siêu âm tuyến giáp" },
  ]);

  const handleAddUnit = (newUnit) => {
    setUnits((prevUnits) => [...prevUnits, newUnit]);
  };

  return (
      <div className="dashboard">
        <Header onAdd={handleAddUnit} />
        <Datatable data={units} />
      </div>
  );
};

export default LoaiThuoc;
