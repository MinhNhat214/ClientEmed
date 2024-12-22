import React, {useState} from "react";
import TableChiDinh from "./TableChiDinh";
// import {tab} from "@testing-library/user-event/dist/tab";
import {Select, Table} from 'antd';

function ChiDinh() {
    /**
     * State theo giõi element
     */
    const [activeTab, setActiveTab] = useState("chidinh")
    // const [selectedCongKham, setSelectedCongKham] = useState(null)
    const [tableData, setTableData] = useState([]);

    //Hàm thay đổi tab khi click
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div>
            <div className="tabs">
                {/*Gán theo giỏi state vào 2 element*/}
                <div className={`tab ${activeTab === 'chidinh' ? 'active' : ''}`}
                     onClick={() => handleTabClick('chidinh')}>
                    Chỉ định
                </div>

                <div className={`tab ${activeTab === 'donthuoc' ? 'active' : ''}`}
                     onClick={() => handleTabClick('donthuoc')}>
                    Đơn thuốc
                </div>

                <div style={{display: 'flex', justifyContent: 'flex-end', width: '70%'}}>
                    <div className="form-group" style={{paddingLeft: "25px"}}>
                        <label>Thuốc DV:</label>
                        <input type="checkbox"/>
                    </div>
                    <div className="form-group" style={{paddingLeft: "25px"}}>
                        <label>TT BHYT:</label>
                        <input type="text" style={{width: '70px'}}/>
                    </div>
                    <div className="form-group" style={{paddingLeft: "25px"}}>
                        <label>Dịch vụ:</label>
                        <input type="text" style={{width: '70px'}}/>
                    </div>
                    <div className="form-group" style={{paddingLeft: "25px"}}>
                        <label>Tổng:</label>
                        <input type="text" style={{width: '70px'}}/>
                    </div>
                </div>
            </div>

            {activeTab === 'chidinh' && (<>
                <div className="content-area">
                    <TableChiDinh/>
                </div>
            </>)}

            {activeTab === 'donthuoc' && (
                <div>
                    <h3>Đơn thuốc</h3>
                    <p>Hiển thị thông tin đơn thuốc tại đây.</p>
                    {/* Thêm các thành phần nội dung cho tab "Đơn thuốc" ở đây */}
                </div>
            )}
        </div>
    )
}

export default ChiDinh