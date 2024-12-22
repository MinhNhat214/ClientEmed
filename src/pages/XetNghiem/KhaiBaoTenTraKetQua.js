//src/pages/XetNghiem/KhaiBaoTenDonViDo.js
import React, { Component } from "react";

import Header from "../../components/XetNghiem/KhaiBaoTenTraKetQua/Header";
import TableData from "../../components/XetNghiem/KhaiBaoTenTraKetQua/TableData";

class KhaiBaoTenTraKetQua extends Component {
    constructor(props) {
        super(props);
        this.state = {
            units: [
                {
                    code: "1",
                    name: "Siêu âm tuyến giáp",
                },
                { code: "2",
                    name: "Siêu âm tuyến giáp2" },
                {
                    code: "3",
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
                <TableData data={units} />
            </div>
        );
    }
}

export default KhaiBaoTenTraKetQua;
