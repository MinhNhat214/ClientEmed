//src/pages/XetNghiem/KhaiBaoTenDonViDo.js
import React, {Component} from "react";
import {UnorderedListOutlined} from '@ant-design/icons';

import TreeBoXN from "../../components/XetNghiem/KhaiBaoHinhThucTraKetQua/TreeBoXN";
import CRSubmit from "../../components/XetNghiem/KhaiBaoHinhThucTraKetQua/CRSubmit";
import XetNghiemKetQua from "../../components/XetNghiem/KhaiBaoHinhThucTraKetQua/XetNghiemKetQua";

class KhaiBaoTenDonViDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            units: [
                {
                    code: "1",
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
        const {units} = this.state;
        return (
            <div className="dashboard">
                <div style={{display: "flex"}}>
                    <div style={{width: "30%"}}>
                        <h3><UnorderedListOutlined/> Danh sách bộ xét nghiệm</h3>
                        <TreeBoXN/>
                    </div>
                    <div style={{width: "15%"}}>
                        <CRSubmit/>
                    </div>
                    <div style={{width: "45%"}}>
                        <h3><UnorderedListOutlined/> Hình thức</h3>
                        <XetNghiemKetQua data={units}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default KhaiBaoTenDonViDo;
