import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowsRotate, faXmark} from '@fortawesome/free-solid-svg-icons';
import {Table, message, Button, Select, Modal} from "antd";
import {faCamera, faBarcode, faFileLines, faUsers} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useRef, useState} from 'react';
import {HotKeys} from 'react-hotkeys';
// import "./chidinh.css"
import {setDataDichVuKyThuat, setDataGiaDVKT} from "../../../../reducers/dataAdd";
import dichvukythuatAPI from "../../../../API/dichvukythuatAPI";
import giadvktAPI from "../../../../API/giadvktAPI";
import {
    ComboBoxTable,
    useTokenSearch,
    TokenHighlight,
    layoutMaxWidth,
    layoutMaxHeight,
    layoutColumnsAlignLeft,
} from '@citizensadvice/react-combo-boxes';

function ChidinhKB() {
    const [listDVKT, setListDVKT] = useState([]);
    const [listGiaDVKT, setListGiaDVKT] = useState([]);

    const getAllDichVuKyThuat = async () => {
        try {
            const data = await dichvukythuatAPI.getAll('ServiceID');
            setListDVKT(data.data);
        } catch (err) {
            throw new Error(err);
        }
    };

    const getAllGiaDVKT = async () => {
        try {
            const data = await giadvktAPI.getAll('Hide');
            setListGiaDVKT(data.data);
        } catch (err) {
            throw new Error(err);
        }
    };

    useEffect(() => {
        getAllDichVuKyThuat();
        getAllGiaDVKT();
    }, []);

    const [value, setValue] = useState(null);
    const [search, setSearch] = useState(null);
    const [selectedDv, setSelectedDv] = useState([]);

    const columns = ['ServiceName', 'ServiceCode_PK', 'ServiceCode_AX'];

    function mapOption(option) {
        return columns.map(column => option[column]).join(" ");
    }

    function renderValue({children}, {search, column: {name}}) {
        return <div>{children}</div>;
    }

    const onLayoutListBox = [layoutMaxWidth, layoutMaxHeight, layoutColumnsAlignLeft];

    const filteredOptions = useTokenSearch(search, {
        options: listDVKT,
        index: mapOption,
    });

    const handleSelect = selectedValue => {
        const exists = selectedDv.some(dv => dv.ServiceID === selectedValue.ServiceID);
        if (exists) {
            message.warning(`Dịch vụ "${selectedValue.ServiceName}" đã tồn tại trong bảng.`);
            setSearch(null);
            return;
        }

        const priceData = listGiaDVKT.find(price => price.ServiceID === selectedValue.ServiceID);
        //ten, gia, doi tuong
        if (selectedValue) {
            setSelectedDv(prev => [
                {
                    ...selectedValue,
                    Price: priceData ? priceData.UnitPrice : 40000,
                    SL: 1,
                    TotalPrice: priceData ? priceData.UnitPrice : 0,
                },
                ...prev
            ]);
            setSearch(null);
        }
    };

    const handleDelete = (serviceID, serviceName) => {
        Modal.confirm({
            title: 'Xác nhận xóa',
            content: `Bạn có muốn xóa dịch vụ ${serviceName} này?`,
            okText: 'Có',
            cancelText: 'Không',
            onOk: () => {
                setSelectedDv((prev) => prev.filter(dv => dv.ServiceID !== serviceID));
                message.success(`Xóa ${serviceName} thành công!`);
            }
        });
    };

    const handleChangeSL = (e, record, field) => {
        const newValue = e.target.value;

        const updatedDv = selectedDv.map(item =>
            item.ServiceID === record.ServiceID
                ? {
                    ...item,
                    [field]: newValue,
                    ...(field === 'SL' ? {TotalPrice: newValue * item.Price} : {})
                }
                : item
        );
        setSelectedDv(updatedDv);
    };

    const comboBoxRef = useRef(null);

    const handleKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            if (comboBoxRef.current) {
                comboBoxRef.current.focus();
            }
        }
    };

    return (
        <div>
            <div className="d-flex align-items-center" style={{display: 'flex', width: "100%"}}>
                <label style={{position: "relative"}} id="select-label" htmlFor="selectCongKham">Công khám:</label>
                <ComboBoxTable
                    id="selectCongKham"
                    ref={comboBoxRef}
                    aria-labelledby="select-label"
                    value={value}
                    onValue={handleSelect}
                    onSearch={setSearch}
                    onLayoutListBox={onLayoutListBox}
                    options={filteredOptions}
                    columns={columns}
                    renderColumnValue={renderValue}
                    mapOption={mapOption}
                />
            </div>

            <Table
                dataSource={selectedDv}
                columns={[
                    {title: 'Dịch vụ', dataIndex: 'ServiceName', key: 'ServiceName'},
                    {
                        title: 'SL',
                        key: 'SL',
                        render: (number, record) => (
                            <input
                                type="number"
                                value={record.SL}
                                min="1"
                                onChange={(e) => handleChangeSL(e, record, 'SL')}
                                style={{width: "60%", outline: "none"}}
                            />
                        ),
                    },
                    {title: 'Đơn giá', key: 'Price', dataIndex: 'Price'},
                    {
                        title: 'Tổng tiền', key: 'TotalPrice',
                        render: (text, record) => (
                            <span>{record.TotalPrice || (record.SL * record.Price)}</span>
                        ),
                    },
                    {
                        title: 'Object', key: 'Object',
                        render: () => (
                            <select name="" id="">
                                <option>BHYT</option>
                                <option>Dich Vu</option>

                            </select>
                        ),
                    },
                    {
                        title: 'Hành động', key: 'action',
                        render: (text, record) => (
                            <Button
                                type="primary"
                                danger
                                onClick={() => handleDelete(record.ServiceID, record.ServiceName)}
                                style={{width: "10px", height: "20px"}}
                            >
                                <FontAwesomeIcon icon={faXmark}/>
                            </Button>
                        ),
                        align: "center"
                    },
                ]}
                rowKey="ServiceID"
                pagination={false}
                scroll={{y: 220}}
            />
        </div>
    );
}

export default ChidinhKB;
