
import { useRef, useEffect } from "react";
// import "./Styles/hosongoaitru.scss";
function Inhosongoaitru(props) {
    const { setRef } = props;
    const ref = useRef();
    setRef(ref.current);
    return (
        <div className="inhosongoaitru" ref={ref}>
            <div className="header">
                <div className="header-left">
                    Phòng Khám ĐK ABC
                </div>
                <div className="header-right">jj</div>
            </div>
            <div className="title">BỆNH ÁN NGOẠI TRÚ</div>
            <div className="title-khoa">KHOA:...........................................</div>
            <div className="row-hanhchinh">
                <div className="hanhchinh">I. HÀNH CHÍNH</div>
                <div className="row-div">
                    <div className=" col hoten"><span>1. Họ và tên (In hoa):</span><span className="ht">Nguyễn trần thành tâm</span></div>
                    <div className="col ngaysinh">
                        2. Sinh ngày:
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="col tuoi">
                        <div>Tuổi</div>
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                </div>
                <div className="row-div position-row">
                    <div className=" col gioitinh">
                        <div className="col-1 gt">3. Giới tính:</div>
                        <ul className="col-1">
                            <li>1. Nam <span></span></li>
                            <li>2. Nữ <span></span></li>
                        </ul>
                    </div>
                    <div className="col nghenghiep">
                        <div className="col-1 nn">4. Nghề nghiệp:</div>
                        <div className="col-1 nn-txt">sdfsf</div>
                        <ul className="nn-ma">
                            <li></li>
                            <li></li>
                        </ul>

                    </div>

                </div>
                <div className="row-div position-row">
                    <div className=" col dantoc">
                        <div className="col-1 dt">5. Dân tộc:</div>
                        <div className="col-1 dt-txt">5. Dân tộc:</div>
                        <ul className="ma-dt">
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="col quoctich">
                        <div className="col-1 qt">6. Quốc tịch:</div>
                        <div className="col-1 qt-txt">sdfsf</div>
                        <ul className="qt-ma">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                    </div>
                </div>
                <div className="row-div position-row">
                    <div className=" col diachi">
                        <div className="col-1 dc">7. Địa chỉ:</div>
                        <div className="col-1 dc-txt">5. Dân tộc:</div>
                    </div>
                    <div className="col xaphuong">
                        <div className="col-1 xp">Xã, phường:</div>
                        <div className="col-1 xp-txt">sdfsf</div>
                        <ul className="xp-ma">
                            <li></li>
                            <li></li>
                        </ul>

                    </div>
                </div>
                <div className="row-div position-row">
                    <div className=" col quanhuyen">
                        <div className="col-1 qh">Huyện ( Q, Tx ):</div>
                        <div className="col-1 qh-txt">dfgdgdg</div>
                        <ul className="qh-ma">
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="col thanhpho">
                        <div className="col-1 tp">Tỉnh, thành phố:</div>
                        <div className="col-1 tp-txt">sdfsf</div>
                    </div>
                </div>
                <div className="row-div position-row">
                    <div className=" col noilamviec">
                        <div className="col-1 nlv">8. Nơi làm việc:</div>
                        <div className="col-1 nlv-txt">Cháy xe buýt trường học</div>

                    </div>
                    <div className="col doituong">
                        <div className="col-1 dtuong">9. Đối tượng:</div>
                        <div className="col-1 dtuong-txt">
                            <ul>
                                <li>1. BHYT <span></span></li>
                                <li>2. Thu phí <span></span></li>
                                <li>3. Miễn <span></span></li>
                                <li>4. Khác <span></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row-div position-row">
                    <div className=" col bhyt10">
                        <div className="col-1 bhyt">10. BHYT giá trị đến ngày:</div>
                        <div className="col-1 bhyt-txt">Cháy xe buýtc</div>

                    </div>
                    <div className="col thebhyt10">
                        <div className="col-1 thebhyt">số thẻ BHYT</div>
                        <div className="col-1 thebhyt-txt">

                        </div>
                    </div>
                </div>
                <div className="row-div position-row">
                    <div className="nguoinha">
                        <div className="nguoinhal">11. Họ tên, địa chỉ người nhà khi cần báo tin:</div>
                        <div className="nguoinhal-txt"><span>Xuống dòng CSS chỉ là một trong số những hiệu ứng xử lý văn bản. Nếu bạn đã biết cách làm text xuống dòng CSS</span> Điện thoại số: <span></span></div>
                    </div>
                </div>
                <div className="row-div position-row">
                    <div className="denkhambenh">
                        <div className="denkhambenhl">12. Đến khám bệnh lúc:<span></span>giờ<span></span>phút, Ngày<span></span>tháng<span></span>năm<span></span></div>
                    </div>
                </div>
                <div className="row-div position-row">
                    <div className="chuandoannoigt">
                        <div className="chuandoannoigtl">13. Chuẩn đoán của nơi giới thiệu:</div>
                        <div className="chuandoannoigtl-txt">gfdgdf</div>
                        <ul>
                            <li>1. Y tế <span></span></li>
                            <li>2. Tự đến <span></span></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="lydovaovien">
                <div className="lydo">II. LÝ DO VÀO VIỆN:</div>
            </div>
            <div className="hoibenh">
                <div className="namehoibenh">III. HỎI BỆNH:</div>
                <div className="qtbenhly"><span>1. Quá trình bệnh lý:</span></div>
                <div className="tiensubenh">
                    <div className="tiensubenh-name">2. Tiền sử bệnh:</div>
                    <div>+ Bản thân: </div>
                    <div>+ Gia đình: </div>
                </div>
            </div>
            <div className="khambenh">
                <div className="namekhambenh">IV. KHÁM BỆNH:</div>
                <div className="toanthan"><span>1. Toàn thân:</span></div>
                <div className="cacbophan">
                    <span className="cacbophan-name">2. Các bộ phận:</span>
                </div>
                <div className="chisosos">
                    <div>Mạch..............lần/ph</div>
                    <div>Nhiệt độ..........°C</div>
                    <div>Huyết áp...../....mmHg</div>
                    <div>Nhịp thở..........lần/ph</div>
                    <div>Cân nặng..........kg</div>
                </div>
                <div className="tomtatkq"><span>3. Tóm tắt kết quả cận lâm sàng:</span></div>
                <div className="chuandoanbd"><span>4. Chuẩn đoán ban đầu:</span></div>
                <div className="daxuly"><span>5. Đã xử lý ( Thuốc, chăm sóc ):</span></div>
                <div className="chuandoanravien">
                    <span>6. Chuẩn đoán ra viện:</span>
                    <div className="machuandoan">
                        <div></div>
                    </div>
                </div>
                <div className="dtnttungay"><span>7. Điều trị ngoại trú từ ngày:</span>......../......./....... đến ngày ....../......../.......</div>
            </div>
            <div className="thongtinky">
                <div className="giamdoc">
                    <div className="titlebs">Giám đóc bệnh viện</div>
                </div>
                <div className="bacsi">
                    <div className="ngaythangnam">Ngày........tháng........năm.........</div>
                    <div className="titlebs">Bác sĩ khám bệnh</div>
                </div>
            </div>
            <div className="tongketbenhan">
                <div className="tile-tongketbenhan">TỔNG KẾT BỆNH ÁN</div>
                <div className="tongketbenhan-1"><span>1. Quá trình bệnh lý và diễn biến lâm sàng:</span></div>
                <div className="tongketbenhan-2"><span>2. Tóm tắt kết quả cận lâm sàng có giá trị chuẩn đoán:</span></div>
                <div className="tongketbenhan-3">
                    <div className="chuandoan">3. Chuẩn đoán ra viện:</div>
                    <div className="benhicd">
                        <span>- Bệnh chính</span>
                        <div className="mabenhicd"><span></span></div>
                    </div>
                    <div className="benhicd">
                        <span>- Bệnh kèm theo (nếu có)</span>
                        <div className="mabenhicd"><span></span></div>
                    </div>
                </div>
                <div className="tongketbenhan-4"><span>4. Phương pháp điều trị:</span></div>
                <div className="tongketbenhan-5"><span>5. Tình trạng người bệnh ra viện:</span></div>
                <div className="tongketbenhan-6"><span>6. Hướng điều trị và các chế độ khác nhau:</span></div>
            </div>
            <div className="hsphimanh">
                <div className="hsphimanh-l">
                    <div className="name-hsphimanh">Hồ sơ, phim, ảnh</div>
                    <div className="hsphimanh-table">
                        <ul className="header-table">
                            <li className="loai">Loại</li>
                            <li className="soto">Số tờ</li>
                        </ul>
                        <ul className="bottom-table">
                            <li>- X-quang</li>
                            <li>ff</li>
                        </ul>
                        <ul className="bottom-table">
                            <li>- CT Scanner</li>
                            <li></li>
                        </ul>
                        <ul className="bottom-table">
                            <li>- Siêu âm</li>
                            <li></li>
                        </ul>
                        <ul className="bottom-table">
                            <li>- Xét nghiệm</li>
                            <li></li>
                        </ul>
                        <ul className="bottom-table">
                            <li>- Khác</li>
                            <li></li>
                        </ul>
                        <ul className="bottom-table">
                            <li>- Toàn bộ hồ sơ</li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="hsphimanh-c">
                    <div className="nguoighs">
                        <div className="ng">Nguời giao hồ sơ</div>
                    </div>
                    <div className="nguoighs nguoighs-bt">
                            <div className="ng">Nguời nhận hồ sơ</div>
                    </div>
                </div>
                <div className="hsphimanh-r">
                        <div className="ngay">Ngày......tháng........năm..........</div>
                        <div className="bs">Bác sĩ điều trị</div>
                </div>
            </div>


        </div>
    );
}

export default Inhosongoaitru;
