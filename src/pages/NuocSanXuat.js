// src/pages/NuocSanXuat.js
import React, { useState } from "react";
import Header from "../components/NuocSanXuat/Header";
import DataTable from "../components/NuocSanXuat/Datatable";

const NuocSanXuat = () => {
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
        <DataTable data={units} />
      </div>
  );
};

export default NuocSanXuat;
