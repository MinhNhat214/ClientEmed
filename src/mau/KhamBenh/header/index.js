import React from "react";
import "./header.css";
function Header() {
    return (
        <div className="cont-header">
            <div style={{display: "flex", justifyContent: "space-between", gap: "30px"}}>
                <div>
                    <div className="form-group">
                        <label>Họ và tên:</label>
                        <input type="text" style={{width: '80%'}}/>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div className="form-group">
                            <label>Dân tộc:</label>
                            <input type="text" style={{width: '60%'}}/>
                        </div>
                        <div className="form-group">
                            <label>Quốc tịch:</label>
                            <input type="text" style={{width: '60%'}}/>
                        </div>
                    </div>
                </div>


                <div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div className="form-group">
                            <label>Ng.sinh:</label>
                            <input type="text" style={{width: '60%'}}/>
                        </div>
                        <div className="form-group">
                            <label>Giới tính:</label>
                            <input type="text" style={{width: '60%'}}/>
                        </div>
                        <div className="form-group">
                            <label>N.Nghiệp:</label>
                            <input type="text" style={{width: '60%'}}/>
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label>Địa chỉ:</label>
                            <input type="text" style={{width: '90%'}}/>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div className="form-group">
                            <label>Ngày vv:</label>
                            <input type="text" style={{width: '60%'}}/>
                        </div>
                        <div className="form-group">
                            <label>Ngày KB:</label>
                            <input type="text" style={{width: '60%'}}/>
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label>Đ.Tượng:</label>
                            <input type="text" style={{width: '90%'}}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header;