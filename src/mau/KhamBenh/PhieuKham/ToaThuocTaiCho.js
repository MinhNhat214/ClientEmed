import React from "react";
import TablePhieuKham from "./TablePhieuKham";

function ToaThuocTaiCho() {
    return (
        <div className="medical-info" style={{display: "flex", justifyContent: "space-between"}}>
            <div style={{width: "70%", borderRight: "1px solid #ccc", paddingRight: "20px"}}>
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "20px"}}>
                    <div className="form-grid" style={{gridTemplateColumns: "1fr 3fr"}}>
                        <label>Tr.chứng, bệnh lý:</label>
                        <textarea rows="2" style={{width: "100%"}}></textarea>
                    </div>
                    <div className="form-grid" style={{gridTemplateColumns: "1fr 3fr"}}>
                        <label>Tr.chứng, bệnh lý:</label>
                        <textarea rows="2" style={{width: "100%"}}></textarea>
                    </div>
                </div>
                <div className="form-grid" style={{gridTemplateColumns: "1fr 6fr"}}>
                    <label>Lý do khám: </label>
                    <input type="text" style={{width: "100%"}}/>
                </div>
                <div className="form-grid" style={{gridTemplateColumns: "1fr 6fr"}}>
                    <label>CĐ ban đầu: </label>
                    <input type="text" style={{width: "100%"}}/>
                </div>
                <div className="form-grid" style={{gridTemplateColumns: "1fr 6fr"}}>
                    <label>Xử trí: </label>
                    <input type="text" style={{width: "100%"}}/>
                </div>
                <div className="form-grid" style={{gridTemplateColumns: "1fr 6fr"}}>
                    <label>ICD 10: </label>
                    <input type="text" style={{width: "100%"}}/>
                </div>

                <TablePhieuKham/>

                <div className="form-grid" style={{gridTemplateColumns: "1fr 6fr", marginTop: "20px"}}>
                    <label>Lời dặn: </label>
                    <input type="text" style={{width: "100%"}}/>
                </div>
            </div>

            <div style={{width: "28%"}}>
                <div className="form-grid" style={{gridTemplateColumns: "1fr 2fr"}}>
                    <label>Mạch (lần/phút):</label>
                    <input type="text" style={{width: "100%"}}/>
                </div>
                <div className="form-grid" style={{gridTemplateColumns: "1fr 2fr"}}>
                    <label>H.áp (mm/Hg):</label>
                    <input type="text" style={{width: "100%"}}/>
                </div>
                <div className="form-grid" style={{gridTemplateColumns: "1fr 2fr"}}>
                    <label>SPO2:</label>
                    <input type="text" style={{width: "100%"}}/>
                </div>
                <div className="form-grid" style={{gridTemplateColumns: "1fr 2fr"}}>
                    <label>Nhiệt độ (*C):</label>
                    <input type="text" style={{width: "100%"}}/>
                </div>
                <div className="form-grid" style={{gridTemplateColumns: "1fr 2fr"}}>
                    <label>Ch.Cao (cm):</label>
                    <input type="text" style={{width: "100%"}}/>
                </div>
                <div className="form-grid" style={{gridTemplateColumns: "1fr 2fr"}}>
                    <label>PP Đ.trị:</label>
                    <textarea style={{width: "100%"}}></textarea>
                </div>
                <div className="form-grid" style={{gridTemplateColumns: "1fr 2fr"}}>
                    <label>KQ Đ.trị:</label>
                    <input type="text" style={{width: "100%"}}/>
                </div>
                <div className="form-grid" style={{gridTemplateColumns: "1fr 2fr"}}>
                    <label>TT Ra viện:</label>
                    <input type="text" style={{width: "100%"}}/>
                </div>
                <div className="form-grid" style={{gridTemplateColumns: "1fr 2fr"}}>
                    <label>Ngày ra:</label>
                    <input type="text" style={{width: "100%"}}/>
                </div>
            </div>
        </div>
    );
}

export default ToaThuocTaiCho;
