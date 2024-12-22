import { Checkbox, Form, Input, Radio, Select, Button } from "antd";
import "./HSBANgoaitruKB.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBook,
    faFileExcel,
    faPenToSquare,
    faReply,
    faSave,
    faPrint,
} from "@fortawesome/free-solid-svg-icons";
import TextArea from "antd/es/input/TextArea";

function HSBANgoaitruKB() {
    const items1 = [
        {
            label: <div className="form-input-label khambenh-form-input-label">F3 - Lưu</div>,
            key: "1",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faSave} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label khambenh-form-input-label">F2 - Bỏ qua</div>,
            key: "2",
            icon: <FontAwesomeIcon icon={faReply} />,
        },
        {
            label: <div className="form-input-label khambenh-form-input-label">F4 - Sửa</div>,
            key: "3",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label khambenh-form-input-label">Hủy HSNT</div>,
            key: "4",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faFileExcel} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label khambenh-form-input-label">In</div>,
            key: "5",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label khambenh-form-input-label">Đóng HS</div>,
            key: "8",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faBook} />
                </div>
            ),
        },
    ];
    return (
        <>
            <div className="mainHSNTKB">
                <div className="div-shadow v3">
                    <div className="d-flex justify-content-end align-items-center p-1">
                        <Form>
                            <div>
                                <Form.Item
                                    className="m-0 p-0"
                                    label={
                                        <div className="form-input-label khambenh-form-input-label">
                                            In toa A4
                                        </div>
                                    }
                                >
                                    <Checkbox />
                                </Form.Item>
                            </div>
                        </Form>

                        {items1.map((item) => (
                            <Button className="form-btn bg mx-1" key={item.key}>
                                {item.icon}
                                <div className="mx-1 fw-bold ">{item.label}</div>
                            </Button>
                        ))}
                    </div>
                </div>

                <Form>
                    <div className="color-border p-1  pb-2">
                        <div className="HSBANT_row">
                            <div className="khambenh-HSBAKP-title">I.THÔNG TIN HÀNH CHÍNH</div>

                            <div className="row form-row">
                                <Form.Item
                                    className="col-md-2"
                                    label={
                                        <div className="khambenh-ngoaitrukb-form-input-label-tthc">
                                            Họ và tên
                                        </div>
                                    }
                                >
                                    <Input className="form-control"></Input>
                                </Form.Item>
                                <Form.Item
                                    className="col-md-2"
                                    label={
                                        <div className="khambenh-ngoaitrukb-form-input-label">
                                            N.sinh
                                        </div>
                                    }
                                >
                                    <Input className="form-control" type="date"></Input>
                                </Form.Item>
                                <Form.Item
                                    className="col-md-2"
                                    label={
                                        <div className="khambenh-ngoaitrukb-form-input-label">
                                            Giới tính
                                        </div>
                                    }
                                >
                                    <Input className="form-control"></Input>
                                </Form.Item>
                                <Form.Item
                                    className="col-md-2"
                                    label={
                                        <div className="khambenh-ngoaitrukb-form-input-label">
                                            Nghề nghiệp
                                        </div>
                                    }
                                >
                                    <div className="input-select">
                                        <Select />
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    className="col-md-2"
                                    label={
                                        <div className="khambenh-ngoaitrukb-form-input-label">
                                            Quốc tịch
                                        </div>
                                    }
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    className="col-md-2"
                                    label={
                                        <div className="khambenh-ngoaitrukb-form-input-label">
                                            Dân tộc
                                        </div>
                                    }
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                            <div className="row form-row">
                                <Form.Item
                                    className="col-md-4"
                                    label={
                                        <div
                                            className="khambenh-ngoaitrukb-form-input-label-tthc 
                                        "
                                        >
                                            Địa chỉ
                                        </div>
                                    }
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    className="col-md-4"
                                    label={
                                        <div className="khambenh-ngoaitrukb-form-input-label">
                                            Họ tên đ/c người thân
                                        </div>
                                    }
                                >
                                    <Input className="form-control"></Input>
                                </Form.Item>
                                <Form.Item
                                    className="col-md-2"
                                    label={
                                        <div className="khambenh-ngoaitrukb-form-input-label">
                                            Điện thoại
                                        </div>
                                    }
                                >
                                    <Input className="form-control"></Input>
                                </Form.Item>
                                <Form.Item
                                    className="col-md-2"
                                    label={
                                        <div className="khambenh-ngoaitrukb-form-input-label">
                                            CĐNGT
                                        </div>
                                    }
                                >
                                    <Radio.Group className="d-flex align-items-center justify-content-around">
                                        <Radio value={1} className="form-input-label">
                                            Y.tế
                                        </Radio>
                                        <Radio value={2} className="form-input-label">
                                            T.đến
                                        </Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                            <div className="row form-row ">
                                <div className="mt-2 d-flex col-md-2 khambenh-ngoaitrukb-form-input-label">
                                    <div className="khambenh-ngoaitrukb-form-input-label-tthc">
                                        Đối tượng:
                                    </div>
                                    <div>Dịch vụ</div>
                                </div>

                                <Form.Item
                                    className="col-md-6"
                                    label={
                                        <div className="khambenh-ngoaitrukb-form-input-label">
                                            Hạn thẻ
                                        </div>
                                    }
                                >
                                    <Input className="form-control "></Input>
                                </Form.Item>

                                <Form.Item
                                    className="col-md-2"
                                    label={
                                        <div className="khambenh-ngoaitrukb-form-input-label">
                                            Ngày vào
                                        </div>
                                    }
                                >
                                    <Input className="form-control" type="date"></Input>
                                </Form.Item>
                                <Form.Item
                                    className="col-md-2"
                                    label={
                                        <div className="khambenh-ngoaitrukb-form-input-label">
                                            Ngày KB
                                        </div>
                                    }
                                >
                                    <Input className="form-control" type="date"></Input>
                                </Form.Item>
                            </div>
                            <div className="row form-row">
                                <Form.Item
                                    className="col-md-6"
                                    label={
                                        <div
                                            className="khambenh-ngoaitrukb-form-input-label-tthc 
                                        "
                                        >
                                            Quốc gia
                                        </div>
                                    }
                                >
                                    <Input className="form-control "></Input>
                                </Form.Item>

                                <Form.Item
                                    className="col-md-6"
                                    label={
                                        <div className="khambenh-ngoaitrukb-form-input-label">
                                            Nghề nghiệp
                                        </div>
                                    }
                                >
                                    <div className="input-select">
                                        <Select />
                                    </div>
                                </Form.Item>
                            </div>
                            <div className="row form-row">
                                <Form.Item
                                    className="col-md-6 m-0"
                                    label={
                                        <div className="khambenh-ngoaitrukb-form-input-label-tthc">
                                            Người thân
                                        </div>
                                    }
                                >
                                    <Input className="form-control "></Input>
                                </Form.Item>
                                <Form.Item
                                    className="col-md-6 m-0"
                                    label={
                                        <div className="khambenh-ngoaitrukb-form-input-label">
                                            Quan hệ
                                        </div>
                                    }
                                >
                                    <div className="input-select">
                                        <Select />
                                    </div>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="color-border p-1 pb-3">
                        <div className="khambenh-HSBAKP-title">II.LÝ DO VÀO VIỆN</div>
                        <div className="row form-row-textarea ">
                            <Form.Item className="col-md-12 m-0">
                                <TextArea
                                    className="form-control "
                                    autoSize={{
                                        minRows: 2,
                                        maxRows: 2,
                                    }}
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="color-border p-1 pb-3">
                        <div className="khambenh-HSBAKP-title">III.HỎI BỆNH</div>
                        <div className="row ">
                            <div className="khambenh-ngoaitrukb-form-input-label">
                                Quá trình bệnh lý:
                            </div>
                            <Form.Item className="col-md-12 m-0">
                                <TextArea
                                    className="form-control "
                                    autoSize={{
                                        minRows: 2,
                                        maxRows: 2,
                                    }}
                                />
                            </Form.Item>
                            <div className="khambenh-ngoaitrukb-form-input-label">
                                Tiền sử bệnh bản thân:
                            </div>
                            <Form.Item className="col-md-12 m-0">
                                <TextArea
                                    className="form-control "
                                    autoSize={{
                                        minRows: 2,
                                        maxRows: 2,
                                    }}
                                />
                            </Form.Item>
                            <div className="khambenh-ngoaitrukb-form-input-label">
                                Tiếu sử bệnh gia đình:
                            </div>
                            <Form.Item className="col-md-12 m-0">
                                <TextArea
                                    className="form-control "
                                    autoSize={{
                                        minRows: 2,
                                        maxRows: 2,
                                    }}
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="color-border p-1 pb-3">
                        <div className="HSBANT_row">
                            <div className="khambenh-HSBAKP-title">IV.KHÁM BỆNH</div>
                            <div className="d-flex">
                                <div className="w-60 mx-1">
                                    <div className="row ">
                                        <div className="khambenh-ngoaitrukb-form-input-label">
                                            Toàn thân:
                                        </div>
                                        <Form.Item className="col-md-12 m-0">
                                            <TextArea
                                                className="form-control "
                                                autoSize={{
                                                    minRows: 2,
                                                    maxRows: 2,
                                                }}
                                            />
                                        </Form.Item>
                                        <div className="khambenh-ngoaitrukb-form-input-label">
                                            Các bộ phận:
                                        </div>
                                        <Form.Item className="col-md-12 m-0">
                                            <TextArea
                                                className="form-control "
                                                autoSize={{
                                                    minRows: 2,
                                                    maxRows: 2,
                                                }}
                                            />
                                        </Form.Item>
                                        <div className="khambenh-ngoaitrukb-form-input-label">
                                            Tóm tắt kết quả CLS:
                                        </div>
                                        <Form.Item className="col-md-12 m-0">
                                            <TextArea
                                                className="form-control "
                                                autoSize={{
                                                    minRows: 2,
                                                    maxRows: 2,
                                                }}
                                            />
                                        </Form.Item>
                                        <div className="form-row m-0">
                                            <Form.Item
                                                label={
                                                    <div className="form-input-label">
                                                        Chỉ định ban đầu
                                                    </div>
                                                }
                                                className="m-0"
                                            >
                                                <Input className="form-control" />
                                            </Form.Item>
                                        </div>
                                        <div className="row form-row m-0">
                                            <Form.Item
                                                className="col-md-6 p-0"
                                                label={<div className="form-input-label">ICD10</div>}
                                            >
                                                <div className="input-select">
                                                    <Select />
                                                </div>
                                            </Form.Item>
                                            <Form.Item
                                                className="col-md-6 p-0"
                                                label={<div className="form-input-label">Xử trí</div>}
                                            >
                                                <div className="input-select">
                                                    <Select />
                                                </div>
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-40 mx-1">
                                    <div className="row form-row">
                                        <Form.Item
                                            className="m-0"
                                            label={
                                                <div className="khambenh-ngoaitrukb-form-input-label-left ">
                                                    Mạch(lần/phút)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            className="m-0"
                                            label={
                                                <div className="khambenh-ngoaitrukb-form-input-label-left ">
                                                    {" "}
                                                    H.áp(mm/Hg)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                    </div>{" "}
                                    <div className="row form-row">
                                        <Form.Item
                                            className="m-0"
                                            label={
                                                <div className="khambenh-ngoaitrukb-form-input-label-left ">
                                                    SPO2
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            className="m-0"
                                            label={
                                                <div className="khambenh-ngoaitrukb-form-input-label-left ">
                                                    N.thở(lần/phút)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            className="m-0"
                                            label={
                                                <div className="khambenh-ngoaitrukb-form-input-label-left ">
                                                    Nhiệt độ (<sup>o</sup>C)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                    </div>
                                    <div className="row form-row">
                                        <Form.Item
                                            className="w-55"
                                            label={
                                                <div className="khambenh-ngoaitrukb-form-input-label-left  ">
                                                    Ch.Cao (cm)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>

                                        <Form.Item
                                            className=" w-45"
                                            label={
                                                <div className="khambenh-ngoaitrukb-form-input-label-left ">
                                                    C.Nặng(kg)
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                    </div>

                                    <div className="row form-row">
                                        <Form.Item
                                            className="m-0"
                                            label={
                                                <div className="khambenh-ngoaitrukb-form-input-label-left ">
                                                    BMI
                                                </div>
                                            }
                                        >
                                            <Input className="form-control text-center" />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                            <div className="row xulythuoc">
                                <div className="khambenh-ngoaitrukb-form-input-label">
                                    Đã xử lý (thuốc,chăm sóc):
                                </div>
                                <Form.Item className="col-md-12 m-0">
                                    <TextArea
                                        className="form-control "
                                        autoSize={{
                                            minRows: 3,
                                            maxRows: 3,
                                        }}
                                    />
                                </Form.Item>

                            </div>
                        </div>
                    </div>
                    <div className="color-border p-1 pb-3">
                        <div className="HSBANT_row">
                            <div className="khambenh-HSBAKP-title">TỔNG KẾT BỆNH ÁN</div>
                            <div className="row">
                                <div className="khambenh-ngoaitrukb-form-input-label fw-bold">
                                    - Tóm tắt kết quả CLS có giá trị chuẩn đoán:
                                </div>
                                <Form.Item className="col-md-12 m-0">
                                    <TextArea
                                        className="form-control "
                                        autoSize={{
                                            minRows: 8,
                                            maxRows: 8,
                                        }}
                                    />
                                </Form.Item>
                            </div>
                            <div>
                                <div className="khambenh-ngoaitrukb-form-input-label fw-bold">
                                    - Chuẩn đoán ra viện:
                                </div>
                                <div className="row form-row">
                                    <Form.Item
                                        label={
                                            <div className="khambenh-ngoaitrukb-form-input-label-left">
                                                ICD10
                                            </div>
                                        }
                                    >
                                        <div className="d-flex">
                                            <Input className="form-control w-10"></Input>
                                            <Input className="form-control w-90"></Input>
                                        </div>
                                    </Form.Item>
                                </div>
                                <div className="row tongkettext">
                                    <Form.Item
                                        label={
                                            <div className="khambenh-ngoaitrukb-form-input-label-left">
                                                ICD10 KT
                                            </div>
                                        }
                                    >
                                        <TextArea
                                            className="form-control "
                                            autoSize={{
                                                minRows: 3,
                                                maxRows: 3,
                                            }}
                                        />
                                    </Form.Item>
                                </div>

                                <div className="row form-row">
                                    <Form.Item
                                        className="col-md-4"
                                        label={
                                            <div className="khambenh-ngoaitrukb-form-input-label-left">
                                                P.P điều trị
                                            </div>
                                        }
                                    >
                                        <Input className="form-control"></Input>
                                    </Form.Item>

                                    <Form.Item
                                        className="col-md-4"
                                        label={
                                            <div className="khambenh-ngoaitrukb-form-input-label-left">
                                                TT ra viện
                                            </div>
                                        }
                                    >
                                        <div className="input-select">
                                            <Select />
                                        </div>
                                    </Form.Item>
                                    <Form.Item
                                        className="col-md-4"
                                        label={
                                            <div className="khambenh-ngoaitrukb-form-input-label-left">
                                                Kết quả điều trị
                                            </div>
                                        }
                                    >
                                        <div className="input-select">
                                            <Select />
                                        </div>
                                    </Form.Item>
                                </div>
                                <div className="row form-row">
                                    <Form.Item
                                        label={
                                            <div className="khambenh-ngoaitrukb-form-input-label">
                                                Hướng điều trị và các chế độ tiếp theo
                                            </div>
                                        }
                                    >
                                        <Input className="form-control "></Input>
                                    </Form.Item>
                                </div>
                                <div className="row form-row">
                                    <Form.Item
                                        className="col-md-4"
                                        label={
                                            <div className="khambenh-ngoaitrukb-form-input-label-left">
                                                Ngày ra
                                            </div>
                                        }
                                    >
                                        <Input className="form-control " type="datetime-local"></Input>
                                    </Form.Item>

                                </div>
                            </div>
                        </div>
                    </div>
                </Form >
            </div >
        </>
    );
}

export default HSBANgoaitruKB;
