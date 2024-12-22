
import React, { useState } from "react";
import Header from "../components/NhaCungCap/Header";
import Datatable from "../components/NhaCungCap/Datatable";

const NhaCungCap = () => {
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

export default NhaCungCap;
