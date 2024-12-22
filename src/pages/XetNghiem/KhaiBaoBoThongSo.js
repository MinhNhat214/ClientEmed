//src/pages/KhaiBaoBoThongSo.js
import React, { Component } from "react";
import Header from "../../components/XetNghiem/KhaiBaoBoThongSo/Header";
import SearchKetQua from "../../components/XetNghiem/KhaiBaoBoThongSo/SearchKetQua"
import FormThongSo from "../../components/XetNghiem/KhaiBaoBoThongSo/FormThongSo";
import TableDSBoXN from "../../components/XetNghiem/KhaiBaoBoThongSo/TableDSBoXN";
import TableThongSoXN from "../../components/XetNghiem/KhaiBaoBoThongSo/TableThongSoBoXN";
import ButtonCDUTableThongSoBoXN from "../../components/XetNghiem/KhaiBaoBoThongSo/ButtonCDUTableThongSoBoXN";
class KhaiBaoBoThongSo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            units: [
                {
                    code: "1",
                    name: "Siêu âm tuyến giáp",
                    categoryCode: "Siêu âm tuyến giáp",

                },
                { code: "2",
                    name: "Siêu âm tuyến giáp6",
                    categoryCode: "Siêu âm tuyến giáp",
                },
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
                <Header style={{width: "100%"}} onAdd={this.handleAddUnit}/>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <div style={{width: "47%"}}>
                        <SearchKetQua/>
                        <TableDSBoXN data={units}/>
                    </div>
                    <div style={{width: "47%"}}>
                        <FormThongSo/>
                        <hr/>
                        <ButtonCDUTableThongSoBoXN/>
                        <TableThongSoXN data={units}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default KhaiBaoBoThongSo;
