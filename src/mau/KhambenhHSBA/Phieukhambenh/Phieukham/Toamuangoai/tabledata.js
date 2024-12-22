// TableData.js
import React, {useRef, useState} from "react";
import {Table, Button, message, Modal, Select} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {
    ComboBoxTable,
    useTokenSearch,
    layoutColumnsAlignLeft,
    layoutMaxHeight,
    layoutMaxWidth
} from "@citizensadvice/react-combo-boxes";

const TableData = ({sampleCats}) => {
    const comboBoxRef = useRef(null);
    const [search, setSearch] = useState(null);
    const columnMapOption = ['MedicineName', 'DVT', 'Date', 'S', 'Tr', 'C', 'T', 'SL', 'TotalPrice', 'Object', 'CachDung', 'Code'];

    function mapOption(option) {
        return columnMapOption.map(column => option[column]).join(" "); // Gộp giá trị tất cả cột thành một chuỗi
    }

    function renderValue({children}, {search, column: {name}}) {
        return (
            <div>{children}</div>
        );
    }

    const onLayoutListBox = [layoutMaxWidth, layoutMaxHeight, layoutColumnsAlignLeft,];
    const [value, setValue] = useState(null);

    const [selectedDv, setSelectedDv] = useState([]);

    const filteredOptions = useTokenSearch(search, {
        options: sampleCats,
        index: mapOption,
    });

    const handleSelect = selectedValue => {
        const exists = selectedDv.some(dv => dv.MedicineName === selectedValue.MedicineName);
        if (exists) {
            message.warning(`Toa thuốc "${selectedValue.MedicineName}" đã tồn tại trong bảng.`);
            setSearch(null);
            return;
        }
        if (selectedValue) {
            setSelectedDv(prev => [selectedValue, ...prev]);
            setSearch(null);
        }
    };
    const handleDelete = (code, medicineName) => {
        Modal.confirm({
            title: 'Xác nhận xóa',
            content: `Bạn có muốn xóa toa thuốc ${medicineName} này?`,  // Hiển thị tên dịch vụ
            okText: 'Có',
            cancelText: 'Không',
            //Rang buoc neu khong xoa thi khong thong bao
            onOk: () => {
                setSelectedDv((prev) => prev.filter(dv => dv.Code !== code));
                message.success(`Xóa ${medicineName} thành công!`);
            }
        });
    };
    const handleChangeInput = (e, record, field) => {
        const newValue = e.target.value;

        const updatedDv = selectedDv.map(item =>
            item.key === record.key
                ? {
                    ...item,
                    [field]: newValue,
                    ...(field === 'SL' ? {TotalPrice: newValue * item.Price} : {})
                }
                : item
        );
        setSelectedDv(updatedDv);
        console.log(updatedDv);
    };


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
            <label style={{position: "rela  tive",}} id="select-label" htmlFor="selectToaMuaNgoai">
                Toa thuốc:</label>
            <ComboBoxTable
                id="selectToaMuaNgoai"
                ref={comboBoxRef}
                aria-labelledby="select-label"
                value={value}
                onValue={handleSelect}
                onSearch={setSearch}
                onLayoutListBox={onLayoutListBox}
                options={filteredOptions}
                columns={columnMapOption}
                renderColumnValue={renderValue}
                mapOption={mapOption}
            />
            <div className="w-75 color-border mt-1 p-1">

                <Table
                    columns={[
                        {
                            title: "Tên thuốc",
                            dataIndex: "MedicineName",
                            fixed: "left",
                            key: "MedicineName",
                            width: "100px"
                        },
                        {title: "ĐVT", dataIndex: "DVT", key: "DVT", width: "50px"},
                        {title: "Ngày cấp", dataIndex: "Date", key: "Date", width: "80px"},
                        {
                            title: "S", dataIndex: "S", render: (number, record) => (
                                <input type="number" value={record.S}
                                       onChange={(e) => handleChangeInput(e, record, 'S')}
                                       style={{width: '40px', outline: "none"}}/>
                            )
                        },
                        {
                            title: "Tr", dataIndex: "Tr", render: (number, record) => (
                                <input type="number" value={record.Tr}
                                       onChange={(e) => handleChangeInput(e, record, 'Tr')}
                                       style={{width: "40px", outline: "none"}}/>
                            )
                        },
                        {
                            title: "C", dataIndex: "C", render: (number, record) => (
                                <input type="number" value={record.C}
                                       onChange={(e) => handleChangeInput(e, record, 'C')}
                                       style={{width: "40px", outline: "none"}}/>
                            )
                        },
                        {
                            title: "T", dataIndex: "T", render: (number, record) => (
                                <input type="number" value={record.T}
                                       onChange={(e) => handleChangeInput(e, record, 'T')}
                                       style={{width: "40px", outline: "none"}}/>
                            )
                        },
                        {
                            title: "SL", dataIndex: "SL", render: (number, record) => (
                                <input type="number" value={record.SL}
                                       onChange={(e) => handleChangeInput(e, record, 'SL')}
                                       style={{width: "40px", outline: "none"}}/>
                            )
                        },
                        {title: "Giá", dataIndex: "Price", key: "Price", width: "80px"},
                        {title: "Tổng giá", dataIndex: "TotalPrice", key: "TotalPrice", width: "80px"},
                        {
                            title: "Đối tượng", dataIndex: "Object",
                            render: (number, record) => (
                                <select
                                    value={record.Object}
                                    onChange={(e) => handleChangeInput(e, record, 'Object')}
                                    style={{
                                        width: "100px",
                                        padding: "5px",
                                    }}
                                    onKeyDown={handleKeyDown}
                                >
                                    <option value="1">Dịch vụ</option>
                                    <option value="2">BHYT</option>
                                </select>
                            ),
                        },
                        {
                            title: "Hành động", key: "action", render: (text, record) => (
                                <div>
                                    <Button
                                        className="khambenh-btn-icon color-icon-edit red"
                                        onClick={() => handleDelete(record.Code, record.MedicineName)}>
                                        <FontAwesomeIcon icon={faCircleXmark}/>
                                    </Button>
                                </div>
                            )
                        },
                    ]}
                    dataSource={selectedDv}
                    scroll={{x: true, y: 500}}
                    size="small"
                    rowKey="Code"
                    pagination={false}
                />
            </div>
        </div>
    );
};

export default TableData;