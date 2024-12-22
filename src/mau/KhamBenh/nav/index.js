import "./nav.css";
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowsRotate, faBars} from '@fortawesome/free-solid-svg-icons';

function Nav() {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <FontAwesomeIcon icon={faBars}/>
            <div className="group-nav">
                <div className="form-group">
                    <label>In toa A4: </label>
                    <input type="checkbox"/>
                </div>
                <button>F3 - Lưu</button>
                <button>F2 - Bỏ qua</button>
                <button>F4 - Sửa</button>
                <button>Hủy</button>
                <button>F6 - In toa</button>
                <button>Toa trắng</button>
                <button>CĐ hẹn TK</button>
                <button>Đóng HS</button>
            </div>
        </div>
    )
}

export default Nav;