import {Modal, Button, Form, Input, Checkbox, Select, InputNumber} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { clone } from "lodash";
import Swal from "sweetalert2";
//import Select from 'react-select';
import { useDispatch, useSelector } from "react-redux";
import { faFloppyDisk, faRightFromBracket, faPlus } from "@fortawesome/free-solid-svg-icons";
// import loginAPI from "../../../../../services/loginApi";
import { setDataNhomThuoc } from "../../reducers/dataAdd";
import './phannhom.scss';
function isIncludingString(string, option) {
    let result = false;
    if (
        !string ||
        option.label.toString().includes(string) ||
        option.value.toString().includes(string)
    ) {
        result = true;
    }
    return result;
}
function DetailNhomThuoc(props) {
    const { open, setOpen, handleCreate, handleUpdate, listServiceModule, listServiceGroupBHYT } = props;
    const { nhomthuoc } = useSelector((state) => state.dataAdd);
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    /*
     const [ServiceTimKiemBHYT, setServiceTimKiemBHYT] = useState(nhomthuoc.ServiceModuleCode ? initialValue : []);
     const [searchField, setsearchField] = useState(null);

     const [ServiceTimKiemModule, setServiceTimKiemModule] = useState([]);

     const [searchFieldModule, setsearchFieldModule] = useState(null);

     const [isClearable, setisClearable] = useState(true);
     const [isSearchable, setisSearchable] = useState(true);
     const [isDisabled, setisDisabled] = useState(false);
     const [isLoading, setisLoading] = useState(false);
     const [isRtl, setisRtl] = useState(false);


     const handleChange = (opt, { option }) => {
         let newOpts = opt;
         let string = searchField;

         if (option && option.value === "all") {
             let filteredOptions = clone(listServiceGroupBHYT);
             filteredOptions = filteredOptions.filter(
                 filteredOption =>
                     isIncludingString(string, filteredOption) &&
                     !newOpts.includes(filteredOption)
             );

             string = null;
             newOpts = newOpts
                 .concat(filteredOptions)
                 .filter(newOpt => newOpt.value !== "all");
         }
         setsearchField(string);
         setServiceTimKiemBHYT(newOpts);

     };
     const handleChangeModule = (opt, { option }) => {
         let newOpts = opt;
         let string = searchFieldModule;

         if (option && option.value === "all") {
             let filteredOptions = clone(listServiceModule);
             filteredOptions = filteredOptions.filter(
                 filteredOption =>
                     isIncludingString(string, filteredOption) &&
                     !newOpts.includes(filteredOption)
             );

             string = null;
             newOpts = newOpts
                 .concat(filteredOptions)
                 .filter(newOpt => newOpt.value !== "all");
         }
         setsearchFieldModule(string);
         setServiceTimKiemModule(newOpts);

     };
     const onInputChange = (string, { action }) => {
         if (action === "input-change") {
             setsearchField(string);
         }
     };
     const filterOption = ({ label, value }, string) => {

         if (value === "all") {
             return true;
         } else if (string) {
             return label.toLocaleLowerCase().includes(string) || value.toString().includes(string);
         } else {
             return true;
         }
     };
 */

    const handleSubmit = async (e) => {
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
                if (nhomthuoc?.ServiceGroupID) {
                    var upThuoc = {
                        ServiceGroupID: e?.ServiceGroupID,
                        ServiceGroupCode: e?.ServiceGroupCode,
                        ServiceGroupName: e?.ServiceGroupName,
                        ServiceModuleCode: e?.ServiceModuleCode,
                        STT: e?.STT,
                        ServiceGroupBHYTID: e?.ServiceGroupBHYTID,
                        EmployeeID: '333',
                    }
                    handleUpdate(upThuoc);
                    dispatch(setDataNhomThuoc());
                    form.resetFields();
                    setOpen(false);
                } else {
                    var NhomThuoc = {
                        ServiceGroupCode: e.ServiceGroupCode,
                        ServiceGroupName: e.ServiceGroupName,
                        ServiceModuleCode: e.ServiceModuleCode,
                        STT: e.STT,
                        ServiceGroupBHYTID: e.ServiceGroupBHYTID,
                        EmployeeID: '333',
                    }
                    handleCreate(NhomThuoc);
                    form.resetFields();
                }
            }
        });

    }
    /*const aa =() =>{
       if(nhomthuoc.ServiceModuleCode === '' || nhomthuoc.ServiceModuleCode === undefined){
           setServiceTimKiemModule(initialValue)
       }else
    }*/

    useEffect(() => {
        form.setFieldsValue({
            ServiceGroupID: nhomthuoc?.ServiceGroupID,
            ServiceGroupCode: nhomthuoc?.ServiceGroupCode,
            ServiceGroupName: nhomthuoc?.ServiceGroupName,
            ServiceModuleCode: nhomthuoc?.ServiceModuleCode,

            STT: nhomthuoc?.STT,
            ServiceGroupBHYTID: nhomthuoc?.ServiceGroupBHYTID,
            EmployeeID: nhomthuoc?.EmployeeID

        });
    }, [nhomthuoc]);
    // const datamm= loginAPI.profileFetch();

    return (
        <>
            <Modal className="DetalPhanNhomDuoc"
                title={
                    <div className="vienphi-danhmuc-add">
                        Khai báo nhóm
                    </div>
                }
                centered
                open={open}
                okButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                cancelButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                onCancel={() => setOpen(false)}
                width={1000}
                closable={false}
                forceRender
                maskClosable={false}

            >
                <div className="text-center">
                    <Form onFinish={handleSubmit} form={form}>
                        <div >
                            <div className="row dmdot">
                                <Form.Item
                                    label={
                                        <div className="form-input-label input-label-khaibaouser ">
                                            ID:
                                        </div>
                                    }
                                    className="col-md-6 ServiceGroupID"
                                    name="ServiceGroupID"
                                    hidden={true}

                                >
                                    <Input className="form-control inputdm" />
                                </Form.Item>
                                <Form.Item
                                    label={
                                        <div className="form-input-label input-label-khaibaouser ">
                                            Tên nhóm:
                                        </div>
                                    }
                                    className="col-md-6"
                                    name="ServiceGroupName"

                                >
                                    <Input className="form-control inputdm" />
                                </Form.Item>
                                <Form.Item
                                    label={
                                        <div className="form-input-label input-label-khaibaouser ">
                                            Mã nhóm:
                                        </div>
                                    }
                                    className="col-md-3"
                                    name="ServiceGroupCode"

                                >
                                    <Input className="form-control inputdm" />
                                </Form.Item>
                                <Form.Item
                                    label={
                                        <div className="form-input-label input-label-khaibaouser ">
                                            STT:
                                        </div>
                                    }
                                    className="col-md-3"
                                    name="STT"

                                >
                                    <InputNumber className="form-control inputdm" min={0} style={{width: "100%"}}/>
                                </Form.Item>


                            </div>
                            <div className="row dmdot">
                                <Form.Item
                                    label={
                                        <div className="form-input-label input-label-khaibaouser ">
                                            Phân hệ:
                                        </div>
                                    }
                                    className="col-md-6"
                                    name="ServiceModuleCode"

                                >
                                    {/* < Select className="selectac"
                                        filterOption={filterOption}
                                        onInputChange={onInputChange}
                                        onChange={handleChangeModule}
                                        options={listServiceModule.map((item) => ({
                                            value:  item.ServiceModuleCode,
                                            label: item.ServiceModuleName
                                        }))}




                                        value={
                                            {value:1, label:'xcvxcvxcv'}
                                        }
                                        isDisabled={isDisabled}
                                        isLoading={isLoading}
                                        isClearable={isClearable}
                                        isRtl={isRtl}
                                        isSearchable={isSearchable}

                                    />*/}
                                    <Select
                                        showSearch
                                        className="selectac"
                                        placeholder="Search to Select"
                                        optionFilterProp="label"
                                        filterSort={(optionA, optionB) =>
                                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                        }
                                        options={listServiceModule.map((item) => ({
                                            value: item.ServiceModuleCode,
                                            label: item.ServiceModuleName
                                        }))}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label={
                                        <div className="form-input-label input-label-khaibaouser ">
                                            Nhóm BHYT:
                                        </div>
                                    }
                                    className="col-md-6"
                                    name="ServiceGroupBHYTID"
                                >
                                    <Select
                                        showSearch
                                        className="selectac"
                                        placeholder="Search to Select"
                                        optionFilterProp="label"
                                        filterSort={(optionA, optionB) =>
                                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                        }
                                        options={listServiceGroupBHYT.map((item) => ({
                                            value: item.ServiceGroupBHYTID,
                                            label: item.ServiceGroupBHYTName
                                        }))}
                                    />

                                </Form.Item>
                            </div>
                        </div><hr />
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
                    </Form>
                </div>
            </Modal>
        </>
    );
}

export default DetailNhomThuoc;
