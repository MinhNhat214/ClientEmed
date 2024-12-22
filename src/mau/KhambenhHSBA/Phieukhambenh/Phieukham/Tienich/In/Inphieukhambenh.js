import { useRef } from "react";
import "./Styles/phieukhambenh.scss";
function Inphieukhambenh(props) {
    const { setRef } = props;
    const ref = useRef();
    setRef(ref.current);
    return (
        <div className="inphieukhambenh" ref={ref}>
            <div className="thongtinphongkham"></div>
            <div className="title-phieukham">KHÁM BỆNH</div>
            <div className="thongtinbn">
                <div className="row-item">
                    <div className="hoten">Tên bệnh nhân: <span>Nguyễn Văn Chu</span></div>
                    <div className="tuoi">Tuổi: 30</div>
                    <div className="gioitinh">Giới tính: Nam</div>
                </div>
                <div className="row-item">
                    <div className="mayte">Mã Y Tế: 45646466456</div>
                    <div className="doituong">Đối tượng: BHYT</div>
                </div>
                <div className="row-item">
                    Địa chỉ: Việt - Pháp nâng cấp quan hệ lên Đối tác Chiến lược Toàn diện
                </div>
                <div className="row-item">
                    Nội dung: Việt - Pháp nâng cấp quan hệ lên Đối tác Chiến lược Toàn diện
                </div>
                <div className="row-pos">
                    <div className="row-item">
                        Khám bệnh: 08/10/2024 10:20
                    </div>
                    <div className="row-item">
                        Nơi giới thiệu:
                    </div>
                    <div className="row-item">
                        Lý do khám: sốt
                    </div>
                    <div className="pos-right">
                        <div className="row-item">
                            <div className="sos mach ">Mạch: 100</div>
                            <div className="sos huyetap">Huyết áp: 100/10</div>
                        </div>
                        <div className="row-item">
                            <div className="sos Nhietdo">Nhiệt độ: 100</div>
                            <div className="sos nhiptho">Nhịp thở: 100</div>
                        </div>
                        <div className="row-item">
                            <div className="sos chieucao">Chiều cao: 100</div>
                            <div className="sos cannang">Cân nặng: 100</div>
                        </div>
                    </div>
                </div>
                <div className="row-item">
                    Bệnh sử hiện tại:
                </div>
                <div className="row-item">
                    Khám thực thể:
                </div>
                <div className="row-item">
                    Định bệnh:
                </div>
                <div className="row-item">
                    Cách giải quyết:
                </div>
                <div className="row-item">
                    Ngày hẹn tái khám:
                </div>
                <div className="row-item">
                    Ghi chú tái khám:
                </div>
                <div className="row-item">
                    <div className="phongkham"> Phòng khám: <span>PHÒNG KHÁM NỘI</span></div>
                </div>
            </div>
            <div className="donthuoc">
                <div className="title-donthuoc">ĐƠN THUỐC</div>
                <div className="loidan">Lời dặn:</div>
                <div className="donthuoc-bottom">
                    <div className="item-thuoc">
                        <ul className="item-top">
                            <li className="tenthuoc">PARTAMOL TAB(500mg) (Paracetamol (acetaminophen))</li>
                            <li>14</li>
                            <li>Viên</li>
                        </ul>
                        <ul className="item-bottom">
                            <li className="chuthich">Sáng 1, Chiều 1, Tối 1</li>
                            <li className="dvt">Uống</li>
                            <li>Theo hướng dẫn bác sĩ</li>
                        </ul>
                    </div>
                    <div className="item-thuoc">
                        <ul className="item-top">
                            <li className="tenthuoc">PARTAMOL TAB(500mg) (Paracetamol (acetaminophen))</li>
                            <li>14</li>
                            <li>Viên</li>
                        </ul>
                        <ul className="item-bottom">
                            <li className="chuthich">Sáng 1, Chiều 1, Tối 1</li>
                            <li className="dvt">Uống</li>
                            <li>Theo hướng dẫn bác sĩ</li>
                        </ul>
                    </div>
                    <div className="item-thuoc">
                        <ul className="item-top">
                            <li className="tenthuoc">PARTAMOL TAB(500mg) (Paracetamol (acetaminophen))</li>
                            <li>14</li>
                            <li>Viên</li>
                        </ul>
                        <ul className="item-bottom">
                            <li className="chuthich">Sáng 1, Chiều 1, Tối 1</li>
                            <li className="dvt">Uống</li>
                            <li>Theo hướng dẫn bác sĩ</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="kyten">
                <div className="ngay">Ngày......tháng.......năm........</div>
                <div className="bs">Bác sĩ điều trị</div>
                <div className="ky">( Ký, ghi rõ họ tên )</div>
            </div>
        </div>
    );
}

export default Inphieukhambenh;
