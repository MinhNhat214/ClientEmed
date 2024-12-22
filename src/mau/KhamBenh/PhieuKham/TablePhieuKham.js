import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowsRotate, faXmark} from '@fortawesome/free-solid-svg-icons';
import {Table, message, Button} from "antd";
import React, {useState} from 'react';
import "./phieukham.css"
import {
    ComboBoxTable,
    useTokenSearch,
    TokenHighlight,
    layoutMaxWidth,
    layoutMaxHeight,
    layoutColumnsAlignLeft,
} from '@citizensadvice/react-combo-boxes';

const sampleCats = [
    {key: '1', ServiceName: 'Siêu âm tuyến giáp1', Code: 'MK01'},
    {key: '2', ServiceName: 'Siêu âm tuyến giáp2', Code: 'SA01'},
    {key: '3', ServiceName: 'Siêu âm tuyến giáp3', Code: 'SA02'},
    {key: '4', ServiceName: 'Siêu âm tuyến giáp4', Code: 'SA03'},
];

const columns = ['ServiceName', 'Code'];

function mapOption({ServiceName}) {
    return ServiceName;
}

function renderValue({children}, {search, column: {name}}) {
    if (name === 'ServiceName') {
        return (
            <div>
                <TokenHighlight
                    search={search}
                    value={children}
                />
            </div>
        );
    }
    return children;
}

const onLayoutListBox = [
    layoutMaxWidth,
    layoutMaxHeight,
    layoutColumnsAlignLeft,
];

function TablePhieuKham() {
    const [value, setValue] = useState(null);
    const [search, setSearch] = useState(null);
    const [selectedDv, setSelectedDv] = useState([]);

    const filteredOptions = useTokenSearch(search, {
        options: sampleCats,
        index: mapOption,
    });

    const handleSelect = (selectedValue) => {
        const exists = selectedDv.some(dv => dv.ServiceName === selectedValue.ServiceName);

        if (exists) {
            message.warning(`Dịch vụ "${selectedValue.ServiceName}" đã tồn tại trong bảng.`); // Thay thế console.log bằng message.warning
            setSearch(null);
            return;
        }

        if (selectedValue) {
            setSelectedDv((prev) => [...prev, selectedValue]);
            setSearch(null);
        }
    };

    const handleDelete = (code) => {
        setSelectedDv((prev) => prev.filter(dv => dv.Code !== code));
    };

    return (
        <div>
            <div  style={{display: 'flex', width: "100%", alignItems: "center", justifyContent: "space-between"}}>
                <label style={{position: "relative", }} id="select-label" htmlFor="select">ICD 10KT:</label>
                <ComboBoxTable
                    id="select"
                    aria-labelledby="select-label"
                    value={value}
                    onValue={handleSelect}
                    onSearch={setSearch}
                    onLayoutListBox={onLayoutListBox}
                    options={filteredOptions}
                    columns={columns}
                    renderColumnValue={renderValue}
                    mapOption={mapOption}
                    style={{width: "100%"}}
                />
            </div>

            <Table
                dataSource={selectedDv}
                columns={[
                    {title: 'Code', dataIndex: 'Code', key: 'Code'},
                    {title: 'Dịch vụ', dataIndex: 'ServiceName', key: 'ServiceName'},
                    {
                        title: 'Hành động',
                        key: 'action',
                        render: (text, record) => (
                            <Button
                                type="primary"
                                danger
                                onClick={() => handleDelete(record.Code)} // Gọi hàm xóa khi nhấn nút
                                style={{width: "10px", height: "20px"}}
                            >
                                <FontAwesomeIcon icon={faXmark}/>
                            </Button>
                        ),
                        align: 'center',
                    },
                ]}
                rowKey="Code"
                pagination={false}
                scroll={{ y: 100 }}
            />
        </div>
    );
}

export default TablePhieuKham;
