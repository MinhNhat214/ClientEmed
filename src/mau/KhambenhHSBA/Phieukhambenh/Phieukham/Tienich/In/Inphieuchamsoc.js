import { useRef } from "react";
import "./in.scss";
function Inphieuchamsoc(props) {
    const { setRef } = props;
    const ref = useRef();
    setRef(ref.current);
    return (
        <div className="inphieudtri" ref={ref}>
        <div className="header">
            <div className="header-left">
                Phòng Khám ĐK ABC
            </div>
            <div className="header-content">
                <h1>TỜ CHĂM SÓC</h1>
            </div>
            <div className="header-right">jj</div>
        </div>
        <div className="thongtin-todieutri">
            <ul>
                <li>
                    <div className="hoten"> Họ tên người bệnh: Winsoft test</div>
                    <div className="tuoi">Tuổi: 30</div>
                    <div className="gioitinh">Giới tính: Nam</div>
                </li>
                <li>
                    <div className="hoten"> Khoa/Phòng:: Winsoft test</div>
                    <div className="tuoi">Phòng: 30</div>
                    <div className="gioitinh">Giường: Nam</div>

                </li>
                <li>Chuẩn đoán:</li>
            </ul>
        </div>
        <div className="ketquatodieutri">
            <table>
                <th>
                    <td className="ngay">NGÀY</td>
                    <td className="giophut">GIỜ PHÚT</td>
                    <td className="dienbienbenh">DIỄN BIẾN BỆNH</td>
                    <td className="ylenhdieutri"> Y LỆNH ĐIỀU TRỊ</td>
                </th>
            </table>
        </div>

    </div>
    );
}

export default Inphieuchamsoc;
