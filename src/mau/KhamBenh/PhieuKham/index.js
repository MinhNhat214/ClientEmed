// import React, {useState} from "react";
// import TablePhieuKham from "./TablePhieuKham";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faArrowsRotate, faPills, faCapsules, faHouseMedical} from '@fortawesome/free-solid-svg-icons';
//
// function PhieuKham() {
//     const [activeTab, setActiveTab] = useState("phieukham")
//     const [activeSubTab, setActiveSubTab] = useState("toathuoctaicho")
//
//     //Hàm thay đổi tab khi click
//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//     }
//
//     const handleSubTabClick = (subTab) => {
//         setActiveSubTab(subTab);
//     }
//     return (
//         <div>
//             <div className="tabs">
//                 <div className={`tab ${activeTab === 'phieukham' ? 'active' : ''}`}
//                      onClick={() => handleTabClick('phieukham')}>
//                     Phiếu khám
//                 </div>
//
//                 <div className={`tab ${activeTab === 'lichsucls' ? 'active' : ''}`}
//                      onClick={() => handleTabClick('lichsucls')}>
//                     Lịch sử CLS & Thuốc
//                 </div>
//             </div>
//
//             {activeTab === 'phieukham' && (<>
//
//                 <div className="content-area">
//
//                     <div className="sub-tabs">
//                         <div className="sub-tab active">
//                             <FontAwesomeIcon icon={faPills}/>
//                             Toa thuốc tại chỗ
//                         </div>
//                         <div className="sub-tab">
//                             <FontAwesomeIcon icon={faCapsules}/>
//                             Toa mua ngoài
//                         </div>
//                         <div className="sub-tab">
//                             <FontAwesomeIcon icon={faHouseMedical}/>
//                             Thuốc tủ trực
//                         </div>
//                         <select className="sub-tab" id="" style={{outline: "none"}}>
//                             <option value="">Volvo</option>
//                             <option value="">Saab</option>
//                             <option value="">VW</option>
//                             <option value="" selected>Tiện ích</option>
//                         </select>
//                     </div>
//                     {/*<div className="sub-tabs">*/}
//                     {/*    <div className={`sub-tab ${activeSubTab === 'toathuoctaicho' ? 'active' : ''}`}*/}
//                     {/*         onClick={() => handleSubTabClick('toathuoctaicho')}>*/}
//                     {/*        Toa thuoc tai cho*/}
//                     {/*    </div>*/}
//
//                     {/*    <div className={`sub-tab ${activeTab === 'toamuangoai' ? 'active' : ''}`}*/}
//                     {/*         onClick={() => handleSubTabClick('toamuangoai')}>*/}
//                     {/*        Lịch sử CLS & Thuốc*/}
//                     {/*    </div>*/}
//                     {/*</div>*/}
//
//                     <div className="medical-info" style={{display: "flex", justifyContent: "space-between"}}>
//                         <div style={{width: "70%", borderRight: "1px solid #ccc", paddingRight: "20px"}}>
//                             <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "20px"}}>
//                                 <div className="form-grid" style={{gridTemplateColumns: "1fr 3fr"}}>
//                                     <label>Tr.chứng, bệnh lý:</label>
//                                     <textarea rows="2" style={{width: "100%"}}></textarea>
//                                 </div>
//                                 <div className="form-grid" style={{gridTemplateColumns: "1fr 3fr"}}>
//                                     <label>Tr.chứng, bệnh lý:</label>
//                                     <textarea rows="2" style={{width: "100%"}}></textarea>
//                                 </div>
//                             </div>
//                             <div className="form-grid" style={{
//                                 gridTemplateColumns: "1fr 6fr",
//                             }}>
//                                 <label>Lý do khám: </label>
//                                 <input type="text" style={{width: "100%"}}/>
//                             </div>
//                             <div className="form-grid" style={{
//                                 gridTemplateColumns: "1fr 6fr",
//                             }}>
//                                 <label>CĐ ban đầu: </label>
//                                 <input type="text" style={{width: "100%"}}/>
//                             </div>
//                             <div className="form-grid" style={{
//                                 gridTemplateColumns: "1fr 6fr",
//                             }}>
//                                 <label>Xử trí: </label>
//                                 <input type="text" style={{width: "100%"}}/>
//                             </div>
//                             <div className="form-grid" style={{
//                                 gridTemplateColumns: "1fr 6fr",
//                             }}>
//                                 <label>ICD 10: </label>
//                                 <input type="text" style={{width: "100%"}}/>
//                             </div>
//                             <div className="form-grid" style={{
//                                 gridTemplateColumns: "1fr 6fr",
//                             }}>
//                                 <label>ICD 10KT: </label>
//                                 <input type="text" style={{width: "100%"}}/>
//                             </div>
//
//                             <TablePhieuKham/>
//
//                             <div className="form-grid" style={{
//                                 gridTemplateColumns: "1fr 6fr",
//                                 marginTop: "20px"
//                             }}>
//                                 <label>Lời dặn: </label>
//                                 <input type="text" style={{width: "100%"}}/>
//                             </div>
//                         </div>
//
//                         <div style={{width: "28%"}}>
//                             <div className="form-grid" style={{
//                                 gridTemplateColumns: "1fr 2fr",
//                             }}>
//                                 <label>Mạch (lần/phút):</label>
//                                 <input type="text" style={{width: "100%"}}/>
//                             </div>
//                             <div className="form-grid" style={{
//                                 gridTemplateColumns: "1fr 2fr",
//                             }}>
//                                 <label>H.áp (mm/Hg):</label>
//                                 <input type="text" style={{width: "100%"}}/>
//                             </div>
//                             <div className="form-grid" style={{
//                                 gridTemplateColumns: "1fr 2fr",
//                             }}>
//                                 <label>SPO2:</label>
//                                 <input type="text" style={{width: "100%"}}/>
//                             </div>
//                             <div className="form-grid" style={{
//                                 gridTemplateColumns: "1fr 2fr",
//                             }}>
//                                 <label>Nhiệt độ (*C):</label>
//                                 <input type="text" style={{width: "100%"}}/>
//                             </div>
//                             <div className="form-grid" style={{
//                                 gridTemplateColumns: "1fr 2fr",
//                             }}>
//                                 <label>Ch.Cao (cm):</label>
//                                 <input type="text" style={{width: "100%"}}/>
//                             </div>
//                             <div className="form-grid" style={{
//                                 gridTemplateColumns: "1fr 2fr",
//                             }}>
//                                 <label>PP Đ.trị:</label>
//                                 <textarea style={{width: "100%"}}></textarea>
//                             </div>
//                             <div className="form-grid" style={{
//                                 gridTemplateColumns: "1fr 2fr",
//                             }}>
//                                 <label>KQ Đ.trị:</label>
//                                 <input type="text" style={{width: "100%"}}/>
//                             </div>
//                             <div className="form-grid" style={{
//                                 gridTemplateColumns: "1fr 2fr",
//                             }}>
//                                 <label>TT Ra viện:</label>
//                                 <input type="text" style={{width: "100%"}}/>
//                             </div>
//                             <div className="form-grid" style={{
//                                 gridTemplateColumns: "1fr 2fr",
//                             }}>
//                                 <label>Ngày ra:</label>
//                                 <input type="text" style={{width: "100%"}}/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>)}
//
//             {activeTab === 'lichsucls' && (<>
//                 <div className="content-area">
//                     <h1>Hello lich su ls</h1>
//                 </div>
//             </>)}
//         </div>
//     )
// }
//
// export default PhieuKham

/**
 * ON BOARD
 */
import React, {useState} from "react";
import {Tabs} from "antd";
import TablePhieuKham from "./TablePhieuKham";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPills, faCapsules, faHouseMedical} from '@fortawesome/free-solid-svg-icons';
import XuatThuocTuTruc from "../../KhambenhHSBA/XuatThuocTuTruc_VTTH/List"
//
// const {TabPane} = Tabs;
//
// function PhieuKham() {
//     const [activeSubTab, setActiveSubTab] = useState("toathuoctaicho");
//
//     const handleSubTabClick = (key) => {
//         setActiveSubTab(key);
//     }
//
//     return (
//         <div>
//             <Tabs defaultActiveKey="phieukham" onChange={handleSubTabClick}>
//                 <TabPane tab="Phiếu khám" key="phieukham">
//                     <div className="content-area" style={{display: "flex"}}>
//                         <Tabs defaultActiveKey="toathuoctaicho" onChange={handleSubTabClick}>
//                             <TabPane tab={<span><FontAwesomeIcon icon={faPills}/> Toa thuốc tại chỗ</span>}
//                                      key="toathuoctaicho">
//                                 {/* Nội dung cho Toa thuốc tại chỗ */}
//                                 <div className="medical-info"
//                                      style={{display: "flex", justifyContent: "space-between"}}>
//                                     <div style={{width: "70%", borderRight: "1px solid #ccc", paddingRight: "20px"}}>
//                                         <div style={{
//                                             display: "grid",
//                                             gridTemplateColumns: "1fr 1fr",
//                                             columnGap: "20px"
//                                         }}>
//                                             <div className="form-grid" style={{gridTemplateColumns: "1fr 3fr"}}>
//                                                 <label>Tr.chứng, bệnh lý:</label>
//                                                 <textarea rows="2" style={{width: "100%"}}></textarea>
//                                             </div>
//                                             <div className="form-grid" style={{gridTemplateColumns: "1fr 3fr"}}>
//                                                 <label>Tr.chứng, bệnh lý:</label>
//                                                 <textarea rows="2" style={{width: "100%"}}></textarea>
//                                             </div>
//                                         </div>
//                                         <div className="form-grid" style={{gridTemplateColumns: "1fr 6fr"}}>
//                                             <label>Lý do khám: </label>
//                                             <input type="text" style={{width: "100%"}}/>
//                                         </div>
//                                         <div className="form-grid" style={{gridTemplateColumns: "1fr 6fr"}}>
//                                             <label>CĐ ban đầu: </label>
//                                             <input type="text" style={{width: "100%"}}/>
//                                         </div>
//                                         <div className="form-grid" style={{gridTemplateColumns: "1fr 6fr"}}>
//                                             <label>Xử trí: </label>
//                                             <input type="text" style={{width: "100%"}}/>
//                                         </div>
//                                         <div className="form-grid" style={{gridTemplateColumns: "1fr 6fr"}}>
//                                             <label>ICD 10: </label>
//                                             <input type="text" style={{width: "100%"}}/>
//                                         </div>
//
//                                         <TablePhieuKham/>
//
//                                         <div className="form-grid"
//                                              style={{gridTemplateColumns: "1fr 6fr", marginTop: "20px"}}>
//                                             <label>Lời dặn: </label>
//                                             <input type="text" style={{width: "100%"}}/>
//                                         </div>
//                                     </div>
//
//                                     <div style={{width: "28%"}}>
//                                         <div className="form-grid" style={{gridTemplateColumns: "1fr 2fr"}}>
//                                             <label>Mạch (lần/phút):</label>
//                                             <input type="text" style={{width: "100%"}}/>
//                                         </div>
//                                         <div className="form-grid" style={{gridTemplateColumns: "1fr 2fr"}}>
//                                             <label>H.áp (mm/Hg):</label>
//                                             <input type="text" style={{width: "100%"}}/>
//                                         </div>
//                                         <div className="form-grid" style={{gridTemplateColumns: "1fr 2fr"}}>
//                                             <label>SPO2:</label>
//                                             <input type="text" style={{width: "100%"}}/>
//                                         </div>
//                                         <div className="form-grid" style={{gridTemplateColumns: "1fr 2fr"}}>
//                                             <label>Nhiệt độ (*C):</label>
//                                             <input type="text" style={{width: "100%"}}/>
//                                         </div>
//                                         <div className="form-grid" style={{gridTemplateColumns: "1fr 2fr"}}>
//                                             <label>Ch.Cao (cm):</label>
//                                             <input type="text" style={{width: "100%"}}/>
//                                         </div>
//                                         <div className="form-grid" style={{gridTemplateColumns: "1fr 2fr"}}>
//                                             <label>PP Đ.trị:</label>
//                                             <textarea style={{width: "100%"}}></textarea>
//                                         </div>
//                                         <div className="form-grid" style={{gridTemplateColumns: "1fr 2fr"}}>
//                                             <label>KQ Đ.trị:</label>
//                                             <input type="text" style={{width: "100%"}}/>
//                                         </div>
//                                         <div className="form-grid" style={{gridTemplateColumns: "1fr 2fr"}}>
//                                             <label>TT Ra viện:</label>
//                                             <input type="text" style={{width: "100%"}}/>
//                                         </div>
//                                         <div className="form-grid" style={{gridTemplateColumns: "1fr 2fr"}}>
//                                             <label>Ngày ra:</label>
//                                             <input type="text" style={{width: "100%"}}/>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </TabPane>
//
//                             <TabPane tab={<span><FontAwesomeIcon icon={faCapsules}/> Toa mua ngoài</span>}
//                                      key="toamuangoai">
//                                 {/* Nội dung cho Toa mua ngoài */}
//                                 <div>Thông tin cho Toa mua ngoài sẽ được hiển thị ở đây.</div>
//                             </TabPane>
//
//                             <TabPane tab={<span><FontAwesomeIcon icon={faHouseMedical}/> Thuốc tủ trực</span>}
//                                      key="thuocTudirect">
//                                 <XuatThuocTuTruc/>
//                             </TabPane>
//
//                         </Tabs>
//
//                     </div>
//                 </TabPane>
//
//                 <TabPane tab="Lịch sử CLS & Thuốc" key="lichsucls">
//                     <div className="content-area">
//                         <h1>Hello lịch sử CLS & Thuốc</h1>
//                     </div>
//                 </TabPane>
//             </Tabs>
//         </div>
//     );
// }
//
// export default PhieuKham;
// import React, {useState} from "react";
// import {Tabs} from "antd";
import PhieuKham from "./PhieuKham";
import LichsuCLSThuoc from "../../KhambenhHSBA/Phieukhambenh/LichsuCLS&Thuoc";

const {TabPane} = Tabs;

function Layout() {
    const [activeTab, setActiveTab] = useState("phieukham");

    const handleTabChange = (key) => {
        setActiveTab(key);
    };

    return (
        <div>
            <Tabs defaultActiveKey="phieukham" onChange={handleTabChange}>
                <TabPane tab="Phiếu khám" key="phieukham">
                    <PhieuKham/>
                </TabPane>
                <TabPane tab="Lịch sử CLS & Thuốc" key="lichsucls">
                    <div className="content-area">
                        {/*<h1>Hello lịch sử CLS & Thuốc</h1>*/}
                        <LichsuCLSThuoc/>
                    </div>
                </TabPane>
            </Tabs>
        </div>
    );
}

export default Layout;
