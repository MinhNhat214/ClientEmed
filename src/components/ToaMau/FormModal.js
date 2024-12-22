import React, { Component } from "react";
import { Modal, Button, Form, Input, Select, Row, Col, Checkbox } from "antd";
import { SaveFilled, CloseCircleOutlined } from "@ant-design/icons";

class FormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.formRef = React.createRef();
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  handleOk = () => {
    this.formRef.current.validateFields()
      .then(values => {
        console.log("Success:", values);
        this.props.onAdd(values);
        this.setState({ visible: false });
        this.formRef.current.resetFields();
      })
      .catch(info => {
        console.log("Validate Failed:", info);
      });
  };

  handleCancel = () => {
    this.setState({ visible: false });
    this.formRef.current.resetFields();
  };

  render() {
    const { visible } = this.state;
    const formItemLayout = {
      labelCol: { span: 12 },
      wrapperCol: { span: 12 },
    };

    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          + Thêm mới
        </Button>
        <Modal
          title="Khai báo thuốc VTYT"
          open={visible}
          onCancel={this.handleCancel}
          width={1300}
          footer={null}
          className="drug-declaration-modal"
          style={{ top: 10 }}
        >
          <Form ref={this.formRef} layout="horizontal" {...formItemLayout}>
            <Row>
              <Col span={6}>
                <Form.Item label="Nhóm" name="nhom">
                  <Select placeholder="Select a person">
                    <Select.Option value="option1">Option 1</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={6}>
                <Form.Item label="Phân loại" name="phanLoai">
                  <Select placeholder="Select a person">
                    <Select.Option value="option1">Option 1</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Tên hàng hoá" name="tenHangHoa">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={6}>
                <Form.Item label="Mã hàng hoá" name="maHangHoa">
                  <Input />
                </Form.Item>
              </Col>
              

              <Col span={6}>
                <Form.Item label="Hàm lượng" name="hamLuong">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Hoạt chất" name="hoatChat">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={6}>
                <Form.Item label="Đường dùng" name="duongDung">
                  <Select placeholder="Select a person">
                    <Select.Option value="option1">Option 1</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={6}>
                <Form.Item label="ĐVT.Đ.Gói (Nh.Kho)" name="dvtDGoi">
                  <Select placeholder="Select a person">
                    <Select.Option value="option1">Option 1</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              
              <Col span={6}>
                <Form.Item label="ĐVT" name="dvt">
                  <Select placeholder="Select a person">
                    <Select.Option value="option1">Option 1</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="ĐV Kê toa" name="dvKetoa">
                  <Select placeholder="Select a person">
                    <Select.Option value="option1">Option 1</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="SL Q.Đổi N.Kho" name="slQDoiNKho">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={6}>
                <Form.Item label="Số đăng ký" name="soDangKy">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Dạng bào chế" name="dangBaoChe">
                  <Input />
                </Form.Item>
              </Col>

              
              <Col span={6}>
                <Form.Item label="Giá mua" name="giaMua">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={6}>
                <Form.Item label="Giá BHYT" name="giaBHYT">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={6}>
                <Form.Item label="Phụ thu BHYT" name="phuThuBHYT">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Giá dịch vụ" name="giaDichVu">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Giá bán sỉ" name="giaBanSi">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={6}>
                <Form.Item label="Mã thuốc 9324_AX" name="maThuoc9324AX">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Mã theo kết quả đấu thầu"
                  name="maTheoKetQuaDauThau"
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col span={6}>
                <Form.Item label="Hạn mức tồn" name="hanMucTon">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={6}>
                <Form.Item label="Nhóm in" name="nhomIn">
                  <Select placeholder="Select a person">
                    <Select.Option value="option1">Option 1</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Kho" name="kho">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Kê đơn BS" name="keDonBS">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Quy cách đóng gói" name="quyCachDongGoi">
                  <Select placeholder="Select a person">
                    <Select.Option value="option1">Option 1</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={2}></Col>
              <Col span={4}>
              <Form.Item name="dmBHYT" valuePropName="checked">
                <Checkbox>DM BHYT</Checkbox>
              </Form.Item>
              </Col>
              <Col span={4}>
              <Form.Item name="dmDichVu" valuePropName="checked">
                <Checkbox>DM Dịch Vụ</Checkbox>
              </Form.Item>
              </Col>
              <Col span={4}>
              <Form.Item name="quyDoiSLKeToa" valuePropName="checked">
                <Checkbox>Quy đổi SL kê toa</Checkbox>
              </Form.Item>
              </Col>
              <Col span={4}>
              <Form.Item name="anHien" valuePropName="checked">
                <Checkbox>Ẩn hiện</Checkbox>
              </Form.Item>
              </Col>

              {/* </div> */}

              {/* Hãng sản xuất và nước sản xuất */}
              <Col span={8}>
                {/* <div className="flex items-center"> */}
                <Form.Item
                  label="Hãng sản xuất"
                  name="hangSanXuat"
                  // style={{ marginRight: "8px" }}
                >
                  <Select
                    placeholder="Select a person"
                    // style={{ width: "200px" }}
                  >
                    <Select.Option value="option1">Option 1</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item label="Nước sản xuất" name="nuocSanXuat">
                  <Select
                    placeholder="Select a person"
                    // style={{ width: "200px" }}
                  >
                    <Select.Option value="option1">Option 1</Select.Option>
                  </Select>
                </Form.Item>
                {/* </div> */}
              </Col>

              <Col span={8}>
                <Form.Item label="Ghi chú" name="ghiChu">
                  <Input />
                </Form.Item>
              </Col>
              {/* FOOTER */}

            </Row>
          </Form>
        </Modal>
      </>
    );
  }
}

export default FormModal;
