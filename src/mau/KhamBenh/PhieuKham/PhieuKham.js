import React from "react";
import {Tabs} from "antd";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPills, faCapsules, faHouseMedical} from '@fortawesome/free-solid-svg-icons';
import ToaThuocTaiCho from "./ToaThuocTaiCho";
import ToaMuaNgoai from "./ToaMuaNgoai";
import ThuocTuTruc from "./ThuocTuTruc";

const {TabPane} = Tabs;

function PhieuKham() {
    return (
            <div className="content-area" style={{display: "flex", alignItems: "center"}}>
            <div style={{flex: 1}}>
                <Tabs defaultActiveKey="toathuoctaicho">
                    <TabPane tab={<span><FontAwesomeIcon icon={faPills}/> Toa thuốc tại chỗ</span>}
                             key="toathuoctaicho">
                        <ToaThuocTaiCho/>
                    </TabPane>
                    <TabPane tab={<span><FontAwesomeIcon icon={faCapsules}/> Toa mua ngoài</span>} key="toamuangoai">
                        <ToaMuaNgoai/>
                        <h1>Toa mua ngoai</h1>
                    </TabPane>
                    <TabPane tab={<span><FontAwesomeIcon icon={faHouseMedical}/> Thuốc tủ trực</span>}
                             key="thuocTudirect">
                        <ThuocTuTruc/>
                    </TabPane>
                </Tabs>
                <div style={{position: "absolute", top: 25, left: 430}}>
                    <select name="options" id="options" style={{padding: "8px"}}>
                        <option value="2">Tiện ích</option>
                        <option value="1"></option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default PhieuKham;
