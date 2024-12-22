// src/pages/Dashboard.js
import React, {Component} from "react";
import Header from "../components/ToaMau/Header";
import TableChiTietToaThuoc from "../components/ToaMau/TableChiTietToaThuoc";
import TableTenToa from "../components/ToaMau/TableTenToa";

class ToaMau extends Component {
    constructor(props) {
        super(props);
        this.state = {
            units: [
                {
                    category: "Siêu âm tuyến giáp",
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
        const {units} = this.state;
        return (
            <div className="dashboard">
                <Header onAdd={this.handleAddUnit}/>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <div style={{width: "45%"}}>
                        <TableChiTietToaThuoc data={units}/>
                    </div>
                    <div style={{width: "45%"}}>
                        <TableTenToa data={units}/>
                    </div>
                </div>
            </div>

        );
    }
}

export default ToaMau;