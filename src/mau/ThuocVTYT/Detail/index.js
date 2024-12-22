import {Modal, Button, Form, Input, Select, Row, Col, Checkbox, InputNumber} from "antd";
import {SaveOutlined, CloseOutlined, CloseCircleOutlined, SaveFilled} from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { setDataThuocVTYT } from "../../reducers/dataAdd";
import "./detail.css"
import {faFloppyDisk, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
function DetailThuocVTYT(props) {
    const {
        open,
        setOpen,
        handleCreate,
        handleUpdate,
        listServiceGroup,
        listServiceCategory,
        listUnitOfMeasure,
        listGroupPrinter,
        listMedProducer,
        listMedCountry,
        listMedUsageDuoc
    } = props;
    // console.log("List category: ", listServiceCategory)
    // console.log("List Service Group: ", listServiceGroup)

    const { thuocvtyt } = useSelector((state) => state.dataAdd);
    const [form] = Form.useForm(); // Định nghĩa form ở đây
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        Swal.fire({
            title: "BẠN CÓ MUỐN LƯU THÔNG TIN?",
            confirmButtonText: "Đồng ý",
            showCancelButton: true,
            cancelButtonText: "Hủy",
            customClass: {
                title: "fs-5 text-dark",
                confirmButton: "bg-primary shadow-none",
                cancelButton: "bg-warning shadow-none",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                if (thuocvtyt?.ItemID) {
                    var upThuocvtyt = {
                        ItemName: values?.ItemName, //Tên hàng hoá
                        ServiceCategoryID: values?.ServiceCategoryID, //Phân loại
                        ItemID: values?.ItemID, //Mã hàng hóa
                        Toxic_Dose: values?.Toxic_Dose, //Hàm lươg AX
                        Generic_BD: values?.Generic_BD, //Hoạt chất
                        UsageID: values?.UsageID, //Đường dùng
                        UnitID_Packed: values?.UnitID_Packed, //Đơn vị đóng gói nhập kho
                        UnitID: values?.UnitID, //Đơn vị tính
                        UnitID_Medi: values?.UnitID_Medi, //Đơn vị kê toa
                        QtyOfMeasure_Medi: values?.QtyOfMeasure_Medi, //SL Q.Đổi N.Kho
                        SODK: values?.SODK, // Số đăng ký
                        DosageForms: values?.DosageForms, // Dạng bào chế
                        UnitPrice: values?.UnitPrice, // Giá mua
                        BHYTPrice: values?.BHYTPrice, // Giá BHYT
                        DisparityPrice: values?.DisparityPrice, // Phụ thu BHYT
                        SalesPrice: values?.SalesPrice, // Giá dịch vụ
                        SalesPrice_Retail: values?.SalesPrice_Retail, // Giá bán sĩ
                        Ma_DQG: values?.Ma_DQG, // Mã thuốc 9324_AX
                        ServiceID_Attach: values?.ServiceID_Attach, // Mã theo kết quả đấu thầu (STT mã hóa theo KQĐT)
                        SafelyQuantity: values?.SafelyQuantity, // Hạn mức tồn
                        GroupPrinterID: values?.GroupPrinterID, // Nhóm in
                        RepositoryCode: values?.RepositoryCode, // Kho
                        IsKeDon_BS: values?.IsKeDon_BS || false, // Kê đơn BS
                        QUYCACH: values?.QUYCACH, // Q.Cách Đ.Gói
                        ProducerID: values?.ProducerID, // Hãng sản xuất
                        CountryID: values?.CountryID, // Nước sản xuất
                        Note: values?.Note, // Ghi chú
                        IsBHYT: values?.IsBHYT || false, // DM BHYT
                        IsService: values?.IsService || false, // DM Dịch vụ
                        Converted_Medi: values?.Converted_Medi || false, // Quy đổi SL kê toa
                        Hide: values?.Hide || false, // Ẩn/Hiện

                        ItemCode_PK: "1",
                        ItemContent: "1",
                        Active: "1",
                        Active_Code: "1",
                        UnitPrice_VAT: 1,
                        Rate_BH: 1,
                        QtyOfMeasure: "1",
                        VENCode: "1",
                        ItemsBHYT_ID: 1,
                        QtyContent_Medi: 1,
                        VAT: 1,
                        STT: 1,
                        EmployeeID: 333,
                    }
                    // console.log("updated data: ",upThuocvtyt);
                    handleUpdate(upThuocvtyt);
                    dispatch(setDataThuocVTYT());
                    form.resetFields();
                    setOpen(false);
                } else {
                    var addThuocvtyt = {
                        // UnitID: values.UnitID,
                        ItemName: values.ItemName, //Tên hàng hoá
                        ServiceCategoryID: values.ServiceCategoryID, //Phân loại
                        ItemID: values.ItemID, //Mã hàng hóa
                        Toxic_Dose: values.Toxic_Dose, //Hàm lươg AX
                        Generic_BD: values.Generic_BD, //Hoạt chất
                        UsageID: values.UsageID, //Đường dùng
                        UnitID_Packed: values.UnitID_Packed, //Đơn vị đóng gói nhập kho
                        UnitID: values.UnitID, //Đơn vị tính
                        UnitID_Medi: values.UnitID_Medi, //Đơn vị kê toa
                        QtyOfMeasure_Medi: values.QtyOfMeasure_Medi, //SL Q.Đổi N.Kho
                        SODK: values.SODK, // Số đăng ký
                        DosageForms: values.DosageForms, // Dạng bào chế
                        UnitPrice: values.UnitPrice, // Giá mua
                        BHYTPrice: values.BHYTPrice, // Giá BHYT
                        DisparityPrice: values.DisparityPrice, // Phụ thu BHYT
                        SalesPrice: values.SalesPrice, // Giá dịch vụ
                        SalesPrice_Retail: values.SalesPrice_Retail, // Giá bán sĩ
                        Ma_DQG: values.Ma_DQG, // Mã thuốc 9324_AX
                        ServiceID_Attach: values.ServiceID_Attach, // Mã theo kết quả đấu thầu (STT mã hóa theo KQĐT)
                        SafelyQuantity: values.SafelyQuantity, // Hạn mức tồn
                        GroupPrinterID: values.GroupPrinterID, // Nhóm in
                        RepositoryCode: values.RepositoryCode, // Kho
                        IsKeDon_BS: values.IsKeDon_BS || false, // Kê đơn BS
                        QUYCACH: values.QUYCACH, // Q.Cách Đ.Gói
                        ProducerID: values.ProducerID, // Hãng sản xuất
                        CountryID: values.CountryID, // Nước sản xuất
                        Note: values.Note, // Ghi chú
                        IsBHYT: values.IsBHYT || false, // DM BHYT
                        IsService: values.IsService || false, // DM Dịch vụ
                        Converted_Medi: values.Converted_Medi || false, // Quy đổi SL kê toa
                        Hide: values.Hide || false, // Ẩn/Hiện

                        ItemCode_PK: "1",
                    	ItemContent: "1",
                    	Active: "1",
                    	Active_Code: "1",
                    	UnitPrice_VAT: 1,
                    	Rate_BH: 1,
                    	QtyOfMeasure: "1",
                    	VENCode: "1",
                    	ItemsBHYT_ID: 1,
                    	QtyContent_Medi: 1,
                    	VAT: 1,
                        STT: 1,
                        EmployeeID: 333,
                        // Hide: 0
                    }
                    // const isKeDonBS = values.IsKeDon_BS || false;

                    // var addThuocvtyt = {
                    //     ItemID: "01",
                    //     ItemCode_PK: "001",
                    //     ItemName: "ten thuoc",
                    //     ItemContent: "ten thuoc 2",
                    //     Active: "1",
                    //     Active_Code: "1",
                    //     UsageID: 125,
                    //     UnitID: 2,
                    //     UnitID_Packed: 1,
                    //     SODK: "1",
                    //     QUYCACH: "1",
                    //     DosageForms: "1",
                    //     ServiceCategoryID: 2,
                    //     Hide: false,
                    //     UnitPrice: 1,
                    //     UnitPrice_VAT: 1,
                    //     SalesPrice: 1,
                    //     BHYTPrice: 1,
                    //     DisparityPrice: 1,
                    //     SalesPrice_Retail: 1,
                    //     Rate_BH: 1,
                    //     CountryID: 1,
                    //     ProducerID: 1,
                    //     IsBHYT: true,
                    //     IsService: true,
                    //     SafelyQuantity: 1,
                    //     RepositoryCode: "1",
                    //     QtyOfMeasure: 1,
                    //     STT: 1,
                    //     Note: "1",
                    //     EmployeeID: 1,
                    //     Generic_BD: "1",
                    //     VENCode: "1",
                    //     GroupPrinterID: 1,
                    //     UnitID_Medi: 1,
                    //     QtyOfMeasure_Medi: 1,
                    //     Toxic_Dose: 1,
                    //     ItemsBHYT_ID: 1,
                    //     QtyContent_Medi: 1,
                    //     Converted_Medi: true,
                    //     IsKeDon_BS: true,
                    //     Ma_DQG: "1",
                    //     ServiceID_Attach: "1",
                    //     VAT: 1
                    // }
                    // console.log("created data: ",addThuocvtyt);
                    handleCreate(addThuocvtyt);
                    form.resetFields();
                    setOpen(false);
                }
            }
        });
    }

    useEffect(() => {
        if (open) {  // Chỉ set giá trị khi modal mở
            form.setFieldsValue({
                // ItemID: thuocvtyt?.ItemID,
                // ItemName: thuocvtyt?.ItemName,
                // STT: thuocvtyt?.STT,

                ItemName: thuocvtyt?.ItemName, //Tên hàng hoá
                ServiceCategoryID: thuocvtyt?.ServiceCategoryID, //Phân loại
                ItemID: thuocvtyt?.ItemID, //Mã hàng hóa
                Toxic_Dose: thuocvtyt?.Toxic_Dose, //Hàm lươg AX
                Generic_BD: thuocvtyt?.Generic_BD, //Hoạt chất
                UsageID: thuocvtyt?.UsageID, //Đường dùng
                UnitID_Packed: thuocvtyt?.UnitID_Packed, //Đơn vị đóng gói nhập kho
                UnitID: thuocvtyt?.UnitID, //Đơn vị tính
                UnitID_Medi: thuocvtyt?.UnitID_Medi, //Đơn vị kê toa
                QtyOfMeasure_Medi: thuocvtyt?.QtyOfMeasure_Medi, //SL Q.Đổi N.Kho
                SODK: thuocvtyt?.SODK, // Số đăng ký
                DosageForms: thuocvtyt?.DosageForms, // Dạng bào chế
                UnitPrice: thuocvtyt?.UnitPrice, // Giá mua
                BHYTPrice: thuocvtyt?.BHYTPrice, // Giá BHYT
                DisparityPrice: thuocvtyt?.DisparityPrice, // Phụ thu BHYT
                SalesPrice: thuocvtyt?.SalesPrice, // Giá dịch vụ
                SalesPrice_Retail: thuocvtyt?.SalesPrice_Retail, // Giá bán sĩ
                Ma_DQG: thuocvtyt?.Ma_DQG, // Mã thuốc 9324_AX
                ServiceID_Attach: thuocvtyt?.ServiceID_Attach, // Mã theo kết quả đấu thầu (STT mã hóa theo KQĐT)
                SafelyQuantity: thuocvtyt?.SafelyQuantity, // Hạn mức tồn
                GroupPrinterID: thuocvtyt?.GroupPrinterID, // Nhóm in
                RepositoryCode: thuocvtyt?.RepositoryCode, // Kho
                IsKeDon_BS: thuocvtyt?.IsKeDon_BS || false, // Kê đơn BS
                QUYCACH: thuocvtyt?.QUYCACH, // Q.Cách Đ.Gói
                ProducerID: thuocvtyt?.ProducerID, // Hãng sản xuất
                CountryID: thuocvtyt?.CountryID, // Nước sản xuất
                Note: thuocvtyt?.Note, // Ghi chú
                IsBHYT: thuocvtyt?.IsBHYT || false, // DM BHYT
                IsService: thuocvtyt?.IsService || false, // DM Dịch vụ
                Converted_Medi: thuocvtyt?.Converted_Medi || false, // Quy đổi SL kê toa
                Hide: thuocvtyt?.Hide || false, // Ẩn/Hiện
            });
        }
    }, [thuocvtyt, open]);

    const handleCancel = () => {
        form.resetFields();
        setOpen(false);
    };


    // ________________________________________________________________________________________

    return (
        // <Modal
        //     title="Khai báo vật tư y tế"
        //     centered
        //     open={open}
        //     onCancel={handleCancel}
        //     width={1200}
        //     // height={1000}
        //     footer={null}
        //     destroyOnClose={true}
        //     forceRender
        // >
        //     <Form form={form} layout="horizontal">
        //         <Row gutter={16}>
        //             {formItems.map(item => (
        //                 <Col key={item.name} span={item.span}>
        //                     <Form.Item label={item.label} name={item.name}>
        //                         {item.type === "select" ? (
        //                             <Select placeholder={`Chọn ${item.label}`}>
        //                                 <Select.Option value="option1">Option 1</Select.Option>
        //                             </Select>
        //                         ) : (
        //                             <Input className="modal-input"/>
        //                         )}
        //                     </Form.Item>
        //                 </Col>
        //             ))}
        //
        //             {checkboxItems.map(item => (
        //                 <Col key={item.name} span={item.span}>
        //                     <Form.Item name={item.name} valuePropName="checked">
        //                         <Checkbox>{item.label}</Checkbox>
        //                     </Form.Item>
        //                 </Col>
        //             ))}
        //
        //             <Col span={24}>
        //                 <Form.Item className="text-center">
        //                     <Button type="primary" htmlType="submit" icon={<SaveOutlined />} style={{ marginRight: 8 }}>
        //                         Lưu
        //                     </Button>
        //                     <Button danger onClick={handleCancel} icon={<CloseOutlined />}>
        //                         Thoát
        //                     </Button>
        //                 </Form.Item>
        //             </Col>
        //         </Row>
        //     </Form>
        // </Modal>

        <Modal
            title={
                <div className="vienphi-danhmuc-add">
                    Khai báo thuốc VTYT
                </div>
            }
            centered
            open={open}
            onCancel={() => setOpen(false)}
            width={1200}
            closable={false}
            forceRender
            footer={null}
            maskClosable={false}
        >
            <div className="text-center">
                <Form onFinish={handleSubmit} form={form} layout="horizontal">
                    <Row gutter={16}>
                        <Col span={6}>
                            <Form.Item
                                label="Nhóm"
                                name="ServiceCategoryID"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng chọn nhóm!",
                                    },
                                ]}
                            >
                                <Select
                                    showSearch
                                    className="selectac"
                                    placeholder="Chọn nhóm"
                                    optionFilterProp="label"
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={listServiceGroup.map((item) => ({
                                        value: item.ServiceGroupID,
                                        label: item.ServiceGroupName,
                                    }))}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Phân loại"
                                name="ServiceCategoryID"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng chọn phân loại!",
                                    },
                                ]}
                            >
                                <Select
                                    showSearch
                                    className="selectac"
                                    placeholder="Chọn phân loại"
                                    optionFilterProp="label"
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={listServiceCategory.map((item) => ({
                                        value: item.ServiceCategoryID,
                                        label: item.ServiceCategoryName,
                                    }))}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Tên hàng hóa"
                                name="ItemName"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    }]
                                }
                            >
                                <Input className="modal-input"/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Mã hàng hóa"
                                name="ItemID"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    }]
                                }
                            >
                                <InputNumber className="modal-input-number" min={0} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Hàm lượng AX"
                                name="Toxic_Dose"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    }]
                                }
                            >
                                <InputNumber className="modal-input-number" min={0} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Hoạt chất"
                                name="Generic_BD"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    }]
                                }
                            >
                                <Input className="modal-input"/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Đường dùng"
                                name="UsageID"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng chọn đường dùng!",
                                    },
                                ]}
                            >
                                <Select
                                    showSearch
                                    className="selectac"
                                    placeholder="Chọn đường dùng"
                                    optionFilterProp="label"
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={listMedUsageDuoc.map((item) => ({
                                        value: item.UsageID,
                                        label: item.UsageName,
                                    }))}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="ĐVT Đ.Gói (Nh.Kho)"
                                name="UnitID_Packed"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng chọn ĐVT Đ.Gói!",
                                    },
                                ]}
                            >
                                <Select
                                    showSearch
                                    className="selectac"
                                    placeholder="Chọn Đơn vị Đ.Gói"
                                    optionFilterProp="label"
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={listUnitOfMeasure.map((item) => ({
                                        value: item.UnitID,
                                        label: item.UnitName,
                                    }))}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="ĐVT"
                                name="UnitID"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng chọn ĐVT!",
                                    },
                                ]}
                            >
                                <Select
                                    showSearch
                                    className="selectac"
                                    placeholder="Chọn Đơn vị Tính"
                                    optionFilterProp="label"
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={listUnitOfMeasure.map((item) => ({
                                        value: item.UnitID,
                                        label: item.UnitName,
                                    }))}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="ĐV Kê toa"
                                name="UnitID_Medi"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng chọn ĐV Kê toa!",
                                    },
                                ]}
                            >
                                <Select
                                    showSearch
                                    className="selectac"
                                    placeholder="Chọn Đơn kê toa"
                                    optionFilterProp="label"
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={listUnitOfMeasure.map((item) => ({
                                        value: item.UnitID,
                                        label: item.UnitName,
                                    }))}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="SL Q.Đổi N.Kho"
                                name="QtyOfMeasure_Medi"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    }]
                                }
                            >
                                <InputNumber className="modal-input-number" min={0} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Số đăng ký"
                                name="SODK"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    }]
                                }
                            >
                                <InputNumber className="modal-input-number" min={0} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Dạng bào chế"
                                name="DosageForms"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    }]
                                }
                            >
                                <InputNumber className="modal-input-number" min={0} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Giá mua"
                                name="UnitPrice"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    }]
                                }
                            >
                                <InputNumber className="modal-input-number" min={0} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Giá bhyt"
                                name="BHYTPrice"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    }]
                                }
                            >
                                <InputNumber className="modal-input-number" min={0} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Phụ thu BHYT"
                                name="DisparityPrice"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    }]
                                }
                            >
                                <InputNumber className="modal-input-number" min={0} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Giá dịch vụ"
                                name="SalesPrice"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    }]
                                }
                            >
                                <InputNumber className="modal-input-number" min={0} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Giá bán sĩ"
                                name="SalesPrice_Retail"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    }]
                                }
                            >
                                <InputNumber className="modal-input-number" min={0} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Mã thuốc 9324_AX"
                                name="Ma_DQG"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    }]
                                }
                            >
                                <Input className="modal-input"/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Mã theo kết quả đấu thầu (STT mã hóa theo KQĐT)"
                                name="ServiceID_Attach"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    }]
                                }
                            >
                                <Input className="modal-input"/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Hạn mức tồn"
                                name="SafelyQuantity"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    }]
                                }
                            >
                                <InputNumber className="modal-input-number" min={0} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Nhóm in"
                                name="GroupPrinterID"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng chọn nhóm in!",
                                    },
                                ]}
                            >
                                <Select
                                    showSearch
                                    className="selectac"
                                    placeholder="Chọn nhóm in"
                                    optionFilterProp="label"
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={listGroupPrinter.map((item) => ({
                                        value: item.GroupPrinterID,
                                        label: item.GroupPrinterName,
                                    }))}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Kho"
                                name="RepositoryCode"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    }]
                                }
                            >
                                <InputNumber className="modal-input-number" min={0} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item name="IsKeDon_BS" valuePropName="checked">
                                <Checkbox>Kê đơn BS</Checkbox>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Quy cách đóng gói"
                                name="QUYCACH"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    }]
                                }
                            >
                                <Input className="modal-input"/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Hãng sản xuất"
                                name="ProducerID"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng chọn hãng sản xuất!",
                                    },
                                ]}
                            >
                                <Select
                                    showSearch
                                    className="selectac"
                                    placeholder="Chọn hãng sản xuất"
                                    optionFilterProp="label"
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={listMedProducer.map((item) => ({
                                        value: item.ProducerID,
                                        label: item.ProducerName,
                                    }))}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Nước sản xuất"
                                name="CountryID"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng chọn nước sản xuất!",
                                    },
                                ]}
                            >
                                <Select
                                    showSearch
                                    className="selectac"
                                    placeholder="Chọn nước sản xuất"
                                    optionFilterProp="label"
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={listMedCountry.map((item) => ({
                                        value: item.CountryID,
                                        label: item.CountryName,
                                    }))}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Ghi chú"
                                name="Note"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    }]
                                }
                            >
                                <Input className="modal-input"/>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Row>
                                <Col span={6}>
                                    <Form.Item name="IsBHYT" valuePropName="checked">
                                        <Checkbox>DM BHYT</Checkbox>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item name="IsService" valuePropName="checked">
                                        <Checkbox>DM Dịch vụ</Checkbox>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item name="Converted_Medi" valuePropName="checked">
                                        <Checkbox>Quy đổi SL kê toa</Checkbox>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item name="Hide" valuePropName="checked">
                                        <Checkbox>Ẩn/Hiện</Checkbox>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>

                        <Col span={24}>
                            <Form.Item className="text-center">
                                <Button
                                    htmlType="submit"
                                    className="mx-2 vienphi-danhmuc-btn"
                                >
                                    <FontAwesomeIcon icon={faFloppyDisk} className="mx-1" /> Lưu
                                </Button>
                                <Button danger className="mx-2" onClick={() => setOpen(false)}>
                                    Thoát <FontAwesomeIcon icon={faRightFromBracket} className="mx-1" />
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Modal>
    );
}

export default DetailThuocVTYT;
