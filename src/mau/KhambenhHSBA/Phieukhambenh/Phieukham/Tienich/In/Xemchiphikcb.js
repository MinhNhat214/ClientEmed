import { useRef } from "react";
import { Checkbox } from "antd";
import "./Styles/xemchiphikcb.scss";
function Xemchiphikcb(props) {
    const { setRef } = props;
    const ref = useRef();
    setRef(ref.current);
    return (
        <div className="xemchiphikcb" ref={ref}>
            <div className="header-thongtin">
                <div className="header-left">
                    dfd
                </div>
                <div className="header-right">
                    dgd
                </div>
            </div>
            <div className="title">BẢNG KÊ CHI PHÍ KHÁM BỆNH, CHỮA BỆNH</div>
            <div className="hanhchinh">
                <div className="hanhchinh-title">A. Hành chính:</div>
                <div className="item-hc">
                    <div className=" col hoten">(1) Họ và tên: nguyễn văn tèo</div>
                    <div className="col ngaysinh">Ngày sinh: 10/10/1999</div>
                    <div className="col gioitinh">Giới tính: nam</div>
                </div>
                <div className="item-hc">
                    <div>(2) Địa chỉ: Long Phước, Xã Long Khánh A, Huyện Hồng Ngự, Tỉnh Đồng Tháp, Xã Long Khánh A, Huyện Hồng Ngự, Tỉnh Đồng Tháp</div>
                </div>
                <div className="item-hc">
                    <div className=" col doituong">(3) Đối tượng: BHYT</div>
                    <div className="col mathe">Mã thẻ BHYT: DN123456789012345</div>
                    <div className="col giatri">Giá trị từ: 10/10/1999  đến: 10/10/1999</div>
                </div>
                <div className="item-hc">
                    <div>(4) Cơ sở ĐK KCB BHYT ban đầu: ffdgdgdfgdgd</div>
                </div>
                <div className="item-hc">
                    <div>(5) Mã số của cơ sở ĐK KCB BHYT ban đầu: ffdgdgdfgdgd</div>
                </div>
                <div className="item-hc">
                    <div>(6) Đến khám: ngày vào 10/10/1999 - giờ vào: 10:00</div>
                </div>
                <div className="item-hc">
                    <div>(7) Kết thúc điều trị nội trú/ngoại trú: </div>
                </div>
                <div className="item-hc">
                    <div className=" col capcuu">(8) Cấp cứu:  <Checkbox /></div>
                    <div className="col dungtuyen">Đúng tuyến: <Checkbox /></div>
                    <div className="col noichuyenden">Nơi chuyển đến: <Checkbox /></div>
                    <div className="col traituyen">(9) Trái tuyến: <Checkbox /></div>
                </div>
                <div className="item-hc">
                    <div>(10) Chuẩn đoán: dfdf </div>
                </div>
                <div className="item-hc">
                    <div>(11) Mã bệnh (ICD-10): dfdf </div>
                </div>
            </div>
            <div className="chiphikcb">
                <div className="title-b">B. Chi phí khám bệnh, chữa bệnh</div>
                <div className="chiphikcb-table">
                    <table>
                        <thead>
                            <tr>
                                <td className="noidung" rowspan="2">Nội dung</td>
                                <td className="dvt" rowspan="2">Đơn vị tính</td>
                                <td className="soluong" rowspan="2">Số lượng</td>
                                <td className="dongia" rowspan="2" > Đơn giá</td>
                                <td className="thanhtien" rowspan="2"> Thành tiền</td>
                                <td className="nguonthanhtoan" colspan="10"> Nguồn thanh toán (đồng)</td>
                            </tr>
                            <tr>
                                
                                <td className="nguonthanhtoan"> gdfgdf</td>
                                <td className="nguonthanhtoan"> gdfgdf</td>
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
                               
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Xemchiphikcb;
