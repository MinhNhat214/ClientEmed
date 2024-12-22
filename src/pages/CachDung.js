// src/pages/Dashboard.js
import React, { Component } from "react";
import Header from "../components/CachDung/Header";
import Table from "../components/CachDung/Datatable";

class CachDung extends Component {
  constructor(props) {
    super(props);
    this.state = {
      units: [
        {
          nhom: "1",
          name: "Siêu âm tuyến giáp",
        },
        { nhom: "2",
          name: "Siêu âm tuyến giáp2" },
        {
          nhom: "3",
          name: "Siêu âm tuyến giáp",
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

export default CachDung;
