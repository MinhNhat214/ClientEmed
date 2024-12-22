import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowsRotate, faPaintBrush} from '@fortawesome/free-solid-svg-icons';
import TableInforTiepNhan from './TableInforTiepNhan';
import "./infortiepnhan.css";
function InforTiepNhan(props) {

    return (
        <div>
            <div className="radio-group">
                <label>
                    <input type="radio" name="status"/> Chờ khám
                </label>
                <label>
                    <input type="radio" name="status"/> Đã khám
                </label>
                <label>
                    <input type="radio" name="status"/> Kết thúc
                </label>
            </div>
            <div className="group-fill-date" style={{display: 'flex'}}>
                <div className="form-group">
                    <label>Ngày: </label>
                    <input type="date"/>
                </div>
                <div className="form-group">
                    <label>Đến: </label>
                    <input type="date"/>
                </div>
            </div>
            <div className="search-group" style={{display: 'flex'}}>
                <button>
                    <FontAwesomeIcon icon={faPaintBrush}/>
                </button>
                <input type="text"/>
                <button>
                    <FontAwesomeIcon icon={faArrowsRotate}/>
                </button>
            </div>
            <TableInforTiepNhan/>
            <div style={{float: 'right', fontWeight: 'bold',
                color: '#0066cc', borderTop: '1px solid #ccc',
                borderBottom: '1px solid #ccc', padding: "3px 0px"}}>
                <div>Tổng: 1000</div>
            </div>
            <h2 style={{marginTop: "40px"}}>Lịch sử khám bệnh</h2>
            <table>
                <tr>
                    <th>Ngày khám</th>
                    <th>ICD-10</th>
                    <th>Thao tác</th>
                </tr>
                <tr>
                    <td>Siêu âm tuyến giáp</td>
                    <td>Siêu âm tuyến giáp</td>
                </tr>
            </table>
        </div>
    )
}

export default InforTiepNhan