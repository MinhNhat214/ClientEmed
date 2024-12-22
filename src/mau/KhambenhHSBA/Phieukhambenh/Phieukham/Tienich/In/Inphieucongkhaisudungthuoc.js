import { useRef } from "react";
import "./in.scss";

function Inphieucongkhaisudungthuoc(props) {

    const { setRef } = props;
    const ref = useRef();
    setRef(ref.current);
    return (
        <div className="inphieucongkhaisudungthuoc" ref={ref}>
            <div className="header">
                <div className="header-left">
                    Phòng Khám ĐK ABC
                </div>
                <div className="header-content">
                    <h1>PHIẾU CÔNG KHAI THUỐC</h1>
                </div>
                <div className="header-right">jj</div>
            </div>
            <div className="thongtin-phieucongkhai">
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
            <div className="ketquathuoccongkhai">
                <table>
                    <thead>
                        <tr>
                            <td className="stt">STT</td>
                            <td className="tenthuoc">Tên thuốc, hàm lượng</td>
                            <td className="donvi">Đơn vị</td>
                            <td className="ngaythang" colspan="10"> Ngày tháng</td>
                            <td className="tongso"> Tổng số</td>
                            <td className="dongia"> Đơn giá</td>
                            <td className="thanhtien"> Thành tiền</td>
                            <td className="ghichu"> Ghi chú</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Inphieucongkhaisudungthuoc;
