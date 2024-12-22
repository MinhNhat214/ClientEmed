import { useRef } from "react";

function Intheodoitruyendich(props) {
    const { setRef } = props;
    const ref = useRef();
    setRef(ref.current);
    return (
        <div className="inhosongoaitru" ref={ref}>
            <div className="inpckt-top">
                <div className="inpckt-top-left"></div>
                <div className="inpckt-top-right">
                    <div>Số ngoại trú: 009998</div>
                    <div>Số lưu trữ: 009998</div>
                </div>

                <div className="inpckt-top-center">
                    <div className="title title-hosongoaitru">BỆNH ÁN NGOẠI TRÚ</div>
                    <div className="title-khoa">KHOA: NỘI TỔNG HỢP</div>
                </div>
            </div>
            <div className="hanhchinh">
                <div className="inhanhchinh-title">I. HÀNH CHÍNH</div>
                <div className="inhanhchinh-row">
                    <div className="hoten">
                        <span>1.Họ và tên(In hoa):</span>
                        <span>Nguyen An Sinh</span>
                    </div>
                    <div className="ngaysinh">
                        <div className="ngaysinh-l">2.Ngày sinh:</div>
                        <div className="ngaysinh-r">
                            <ul>
                                <li>
                                    <span></span>
                                    <span></span>
                                </li>
                                <li>
                                    <span></span>
                                    <span></span>
                                </li>
                                <li>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </li>
                                <li>
                                    <div className="tuoi">Tuổi</div>
                                    <span></span>
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="inhanhchinh-row">
                    <div className="gioitinh">
                        <label className="labelgioitinh">3. Giới tính:</label>
                        <div className="sexcheck">
                            <div className="sexcheck-col">
                                <label>1. Nam</label>
                                <span></span>
                            </div>
                            <div className="sexcheck-col">
                                <label>2. Nữ</label>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="nghenghiep">
                        <label className="nghenghiepnmae">4. Nghề nghiệp:</label>
                        <div className="nghenghiep-r">
                            <ul>
                                <li className="name">khacs</li>
                                <li className="mann">
                                    <span>9</span>
                                    <span>9</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="inhanhchinh-row">
                    <div className="dantoc">
                        <label className="labeldantoc">5. Dân tộc:</label>
                        <div className="dantoc-r">
                            <ul>
                                <li className="name">khacs</li>
                                <li className="mann">
                                    <span>9</span>
                                    <span>9</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="quoctich">
                        <label className="quoctichnmae">6. Quốc tịch:</label>
                        <div className="quoctich-r">
                            <ul>
                                <li className="name">khacs</li>
                                <li className="mann">
                                    <span>9</span>
                                    <span>9</span>
                                    <span>9</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="inhanhchinh-row">
                    <div className="diachi">
                        <label className="labeldiachi">7. Địa chỉ:</label>
                        <div className="diachi-r">khacs</div>
                    </div>
                    <div className="xaphuong">
                        <label className="xaphuongnmae">Xã, phường:</label>
                        <div className="xaphuong-r">
                            <ul>
                                <li className="name">khacs</li>
                                <li className="mann">
                                    <span>9</span>
                                    <span>9</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intheodoitruyendich;
