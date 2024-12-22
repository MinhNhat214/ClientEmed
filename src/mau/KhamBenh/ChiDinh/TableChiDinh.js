// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowsRotate, faPaintBrush, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
// import { Table } from "antd";
// import { useState } from 'react';
// import {
//     ComboBoxTable,
//     useTokenSearch,
//     TokenHighlight,
//     layoutMaxWidth,
//     layoutMaxHeight,
//     layoutColumnsAlignLeft,
// } from '@citizensadvice/react-combo-boxes';
//
// // Dữ liệu mẫu cho ComboBox
// const sampleCats = [
//     { key: '1', breed: 'British Shorthair', country: 'UK', origin: 'England', bodyType: 'Medium', coatLength: 'Short', pattern: 'Solid' },
//     { key: '2', breed: 'Siamese', country: 'Thailand', origin: 'Siam', bodyType: 'Medium', coatLength: 'Short', pattern: 'Pointed' },
//     { key: '3', breed: 'Persian', country: 'Iran', origin: 'Persia', bodyType: 'Large', coatLength: 'Long', pattern: 'Solid' },
//     { key: '4', breed: 'Ragdoll', country: 'USA', origin: 'California', bodyType: 'Large', coatLength: 'Medium', pattern: 'Colorpoint' },
// ];
//
// // Chuyển đổi columns từ mảng các đối tượng thành mảng các chuỗi cho ComboBoxTable
// const columns = ['breed', 'country', 'origin', 'bodyType', 'coatLength', 'pattern'];
//
// function mapOption({ breed }) {
//     return breed;
// }
//
// function renderValue({ children }, { search, column: { name } }) {
//     if (name === 'breed') {
//         return (
//             <TokenHighlight
//                 search={search}
//                 value={children}
//             />
//         );
//     }
//     return children;
// }
//
// const onLayoutListBox = [
//     layoutMaxWidth,
//     layoutMaxHeight,
//     layoutColumnsAlignLeft,
// ];
//
// function ComboboxCongKham() {
//     const [value, setValue] = useState(null);
//     const [search, setSearch] = useState(null);
//     const filteredOptions = useTokenSearch(search, {
//         options: sampleCats,
//         index: mapOption,
//     });
//
//     return (
//         <div>
//             <h2>Chọn giống mèo</h2>
//             <label id="select-label" htmlFor="select">Chọn</label>
//             <ComboBoxTable
//                 id="select"
//                 aria-labelledby="select-label"
//                 value={value}
//                 onValue={setValue}
//                 onSearch={setSearch}
//                 onLayoutListBox={onLayoutListBox}
//                 options={filteredOptions}
//                 columns={columns}
//                 renderColumnValue={renderValue}
//                 mapOption={mapOption}
//                 style={{
//                     width: "100px",
//                     border: "1px solid #ddd",
//                     padding: "8px",
//                     borderRadius: "4px"
//                 }}
//             />
//
//             <label htmlFor="output">Giá trị hiện tại</label>
//             <output htmlFor="select" id="output">
//                 {JSON.stringify(value, undefined, ' ')}
//             </output>
//         </div>
//     );
// }
// export default ComboboxCongKham;

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowsRotate, faPaintBrush, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
// import { Table, Button } from "antd";
// import { useState } from 'react';
// import {
//     ComboBoxTable,
//     useTokenSearch,
//     TokenHighlight,
//     layoutMaxWidth,
//     layoutMaxHeight,
//     layoutColumnsAlignLeft,
// } from '@citizensadvice/react-combo-boxes';
//
// // Dữ liệu mẫu cho ComboBox
// const sampleCats = [
//     { key: '1', breed: 'British Shorthair', country: 'UK', origin: 'England', bodyType: 'Medium', coatLength: 'Short', pattern: 'Solid' },
//     { key: '2', breed: 'Siamese', country: 'Thailand', origin: 'Siam', bodyType: 'Medium', coatLength: 'Short', pattern: 'Pointed' },
//     { key: '3', breed: 'Persian', country: 'Iran', origin: 'Persia', bodyType: 'Large', coatLength: 'Long', pattern: 'Solid' },
//     { key: '4', breed: 'Ragdoll', country: 'USA', origin: 'California', bodyType: 'Large', coatLength: 'Medium', pattern: 'Colorpoint' },
// ];
//
// // Chuyển đổi columns từ mảng các đối tượng thành mảng các chuỗi cho ComboBoxTable
// const columns = ['breed', 'country', 'origin', 'bodyType', 'coatLength', 'pattern'];
//
// function mapOption({ breed }) {
//     return breed;
// }
//
// function renderValue({ children }, { search, column: { name } }) {
//     if (name === 'breed') {
//         return (
//             <TokenHighlight
//                 search={search}
//                 value={children}
//             />
//         );
//     }
//     return children;
// }
//
// const onLayoutListBox = [
//     layoutMaxWidth,
//     layoutMaxHeight,
//     layoutColumnsAlignLeft,
// ];
//
// function ComboboxCongKham() {
//     const [value, setValue] = useState(null);
//     const [search, setSearch] = useState(null);
//     const [selectedCats, setSelectedCats] = useState([]); // State để lưu trữ các giống mèo đã chọn
//
//     const filteredOptions = useTokenSearch(search, {
//         options: sampleCats,
//         index: mapOption,
//     });
//
//     const handleSelect = (selectedValue) => {
//         // Thêm giống mèo đã chọn vào bảng
//         if (selectedValue) {
//             setSelectedCats((prev) => [...prev, selectedValue]);
//             setValue(null); // Reset giá trị ComboBox
//         }
//     };
//
//     return (
//         <div>
//             <h2>Chọn giống mèo</h2>
//             <label id="select-label" htmlFor="select">Chọn</label>
//             <ComboBoxTable
//                 id="select"
//                 aria-labelledby="select-label"
//                 value={value}
//                 onValue={handleSelect} // Cập nhật hàm xử lý lựa chọn
//                 onSearch={setSearch}
//                 onLayoutListBox={onLayoutListBox}
//                 options={filteredOptions}
//                 columns={columns}
//                 renderColumnValue={renderValue}
//                 mapOption={mapOption}
//                 style={{
//                     width: "100px",
//                     border: "1px solid #ddd",
//                     padding: "8px",
//                     borderRadius: "4px"
//                 }}
//             />
//
//             {/*<label htmlFor="output">Giá trị hiện tại</label>*/}
//             {/*<output htmlFor="select" id="output">*/}
//             {/*    {JSON.stringify(value, undefined, ' ')}*/}
//             {/*</output>*/}
//
//             <h2>Danh sách giống mèo đã chọn</h2>
//             <Table
//                 dataSource={selectedCats}
//                 columns={[
//                     { title: 'Giống mèo', dataIndex: 'breed', key: 'breed' },
//                     { title: 'Quốc gia', dataIndex: 'country', key: 'country' },
//                     { title: 'Nguồn gốc', dataIndex: 'origin', key: 'origin' },
//                     { title: 'Loại cơ thể', dataIndex: 'bodyType', key: 'bodyType' },
//                     { title: 'Chiều dài lông', dataIndex: 'coatLength', key: 'coatLength' },
//                     { title: 'Mẫu', dataIndex: 'pattern', key: 'pattern' },
//                 ]}
//                 rowKey="key" // Sử dụng thuộc tính 'key' làm khóa cho từng hàng
//                 pagination={false} // Tắt phân trang để hiển thị tất cả các hàng
//             />
//         </div>
//     );
// }
//
// export default ComboboxCongKham;
/**
 * RUN
 */
import ComboboxTable from '../../components/tableTailwind'; // Import component ComboboxTable thay thế

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowsRotate, faXmark} from '@fortawesome/free-solid-svg-icons';
import {Table, message, Button, Select, Modal} from "antd";
import React, {useRef, useState} from 'react';
import { HotKeys } from 'react-hotkeys';
import "./chidinh.css"
import {
    ComboBoxTable,
    useTokenSearch,
    TokenHighlight,
    layoutMaxWidth,
    layoutMaxHeight,
    layoutColumnsAlignLeft,
} from '@citizensadvice/react-combo-boxes';

function ComboboxCongKham() {
    const sampleCats = [
        {key: '1', ServiceName: 'British', STT: '1', SL: '20', Price: '32.00', S: 0, C: 0, T: 0, Object: 'DV', Code: 'MK01'},
        {key: '2', ServiceName: 'Siêu âm tuyến giáp', STT: '2', SL: '21', Price: '10.00', S: 0, C: 0, T: 0, Object: 'DV', Code: 'SA01'},
        {key: '3', ServiceName: 'Persian', STT: '3', SL: '28', Price: '14.00', S: 0, C: 0, T: 0, Object: 'DV', Code: 'SA02'},
        {key: '4', ServiceName: 'Ragdoll', STT: '4', SL: '24', Price: '11.00', S: 0, C: 0, T: 0, Object: 'DV', Code: 'SA03'},
        {key: '5', ServiceName: 'Hjien', STT: '4', SL: '15', Price: '12.00', S: 0, C: 0, T: 0, Object: 'DV', Code: 'SA04'},
        {key: '6', ServiceName: 'Smyna', STT: '4', SL: '32', Price: '2.00', S: 0, C: 0, T: 0, Object: 'DV', Code: 'SA05'},
    ];

    const columns = ['ServiceName', 'STT', 'SL', 'Price', 'S', 'C', 'T', 'Object', 'Code'];

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
            // setValue(null);
            setSearch(null);
            return;
        }
        if (selectedValue) {
            setSelectedDv((prev) => [selectedValue, ...prev]);
            // setValue(null);
            setSearch(null);
        }
    };

    const handleDelete = (code, serviceName) => {
        Modal.confirm({
            title: 'Xác nhận xóa',
            content: `Bạn có muốn xóa dịch vụ ${serviceName} này?`,  // Hiển thị tên dịch vụ
            okText: 'Có',
            cancelText: 'Không',
            onOk: () => {
                setSelectedDv((prev) => prev.filter(dv => dv.Code !== code));
                message.success(`Xóa ${serviceName} thành công!`);
            }
        });
    };
    //Update 1 hàng
    // const handleChangeSL = (e, record) => {
    //     const newValue = e.target.value;
    //     const updatedDv = selectedDv.map(item =>
    //         item.key === record.key ? { ...item, SL: newValue} : item
    //     );
    //     setSelectedDv(updatedDv); //
    //     console.log(updatedDv)
    // };

    /**
     * On board
     */
        // const handleChangeSL = (e, record, field) => {
        //     const newValue = e.target.value;
        //     const updatedDv = selectedDv.map(item =>
        //         item.key === record.key ? { ...item, [field]: newValue } : item
        //     );
        //     setSelectedDv(updatedDv);
        //     console.log(updatedDv);
        // };
    const handleChangeSL = (e, record, field) => {
        const newValue = e.target.value;

        const updatedDv = selectedDv.map(item =>
            item.key === record.key
                ? {
                    ...item,
                    [field]: newValue,
                    ...(field === 'SL' ? { TotalPrice: newValue * item.Price } : {})
                }
                : item
        );
        setSelectedDv(updatedDv);
        console.log(updatedDv); // Kiểm tra đầu ra
    };

    /**
     * Update Hot key
     */
    const comboBoxRef = useRef(null);

    const handleKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của phím Tab
            if (comboBoxRef.current) {
                comboBoxRef.current.focus(); // Đặt tiêu điểm vào ComboBoxTable
            }
        }
    };


    return (
        <div>
            <div className="d-flex  align-items-center" style={{display: 'flex', width: "100%"}}>
                <label style={{position: "relative",}} id="select-label" htmlFor="selectCongKham">Công khám:</label>
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
                    style={{width: "100%"}}
                />
            </div>

            <Table
                dataSource={selectedDv}
                columns={[
                    {title: 'Dịch vụ', dataIndex: 'ServiceName', key: 'ServiceName'},
                    // {title: 'STT', dataIndex: 'STT', key: 'STT',  width: '40px'},
                    {
                        title: 'SL',
                        key: 'SL',
                        render: (number, record) => (
                            <input
                                type="number"

                                value={record.SL}
                                onChange={(e) => handleChangeSL(e, record, 'SL')}
                                style={{width: "60%", outline: "none"}}
                            />
                        ),
                    },
                    {
                        title: 'Đơn giá',
                        key: 'Price',
                        dataIndex: 'Price',
                    },
                    {
                        title: 'Tổng tiền',
                        key: 'TotalPrice',
                        render: (text, record) => (
                            <span>{record.TotalPrice || (record.SL * record.Price)}</span> // Tính tổng tiền chỉ dựa vào SL và Price
                        ),
                    },
                    {
                        title: 'Sáng',
                        key: 'S',
                        render: (number, record) => (
                            <input
                                type="number"
                                value={record.S}
                                onChange={(e) => handleChangeSL(e, record, 'S')}
                                style={{width: "50%", outline: "none"}}
                            />
                        ),
                    },
                    {
                        title: 'Chiều',
                        key: 'C',
                        render: (number, record) => (
                            <input
                                type="number"
                                value={record.C}
                                onChange={(e) => handleChangeSL(e, record, 'C')}
                                style={{width: "50%", outline: "none"}}
                            />
                        ),
                    },
                    {
                        title: 'Tối',
                        key: 'T',
                        render: (number, record) => (
                            <input
                                type="number"
                                value={record.T}
                                onChange={(e) => handleChangeSL(e, record, 'T')}
                                style={{width: "50%", outline: "none"}}
                            />
                        ),
                    },
                    {
                        title: 'Đối tượng',
                        key: 'Object',
                        render: (number, record) => (
                            <select
                                value={record.Object}
                                onChange={(e) => handleChangeSL(e, record, 'Object')}
                                style={{
                                    width: "100%",
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
                        title: 'Hành động',
                        key: 'action',
                        render: (text, record) => (
                            <Button
                                type="primary"
                                danger
                                onClick={() => handleDelete(record.Code, record.ServiceName)}
                                style={{width: "10px", height: "20px"}}
                            >
                                <FontAwesomeIcon icon={faXmark}/>
                            </Button>
                        ),
                        align: "center"
                    },
                ]}
                rowKey="Code"
                pagination={false}
                scroll={{y: 100}}
            />
        </div>
    );
}

export default ComboboxCongKham;





//
// import React, { useState } from 'react';
// // import './ComboboxCongKham.css';
//
// const sampleCats = [
//     { key: '1', breed: 'British Shorthair', country: 'UK', origin: 'England', bodyType: 'Medium', coatLength: 'Short', pattern: 'Solid' },
//     { key: '2', breed: 'Siamese', country: 'Thailand', origin: 'Siam', bodyType: 'Medium', coatLength: 'Short', pattern: 'Pointed' },
//     { key: '3', breed: 'Persian', country: 'Iran', origin: 'Persia', bodyType: 'Large', coatLength: 'Long', pattern: 'Solid' },
//     { key: '4', breed: 'Ragdoll', country: 'USA', origin: 'California', bodyType: 'Large', coatLength: 'Medium', pattern: 'Colorpoint' },
// ];
//
// function ComboboxCongKham() {
//     const [search, setSearch] = useState('');
//     const [value, setValue] = useState(null);
//
//     // Lọc các giống mèo dựa trên tìm kiếm
//     const filteredOptions = sampleCats.filter(cat =>
//         cat.breed.toLowerCase().includes(search.toLowerCase())
//     );
//
//     const handleSelect = (selectedCat) => {
//         setValue(selectedCat);
//     };
//
//     return (
//         <div className="container">
//             <h2>Chọn giống mèo</h2>
//
//             {/* Ô tìm kiếm */}
//             <input
//                 type="text"
//                 placeholder="Tìm kiếm giống mèo..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="search-input"
//             />
//
//             {/* ComboBox (Dropdown) */}
//             <div className="dropdown">
//                 {filteredOptions.length > 0 ? (
//                     filteredOptions.map(cat => (
//                         <div
//                             key={cat.key}
//                             className="dropdown-item"
//                             onClick={() => handleSelect(cat)}
//                         >
//                             {cat.breed}
//                         </div>
//                     ))
//                 ) : (
//                     <div className="dropdown-item">Không tìm thấy</div>
//                 )}
//             </div>
//
//             {/* Hiển thị kết quả đã chọn */}
//             <div className="selected-output">
//                 <h3>Giá trị hiện tại</h3>
//                 <pre>{value ? JSON.stringify(value, null, 2) : 'Chưa chọn giống mèo'}</pre>
//             </div>
//         </div>
//     );
// }
//
// export default ComboboxCongKham;

//
// import React, { useState } from 'react';
// import { Select, Table, Button } from 'antd';
// import './chidinh.css'; // Tạo file CSS riêng
//
// const CatBreedSelector = () => {
//     // Dữ liệu mẫu
//     const catBreeds = [
//         {
//             key: '1',
//             breed: 'Siêu âm 1',
//             country: '10',
//             origin: '20.0',
//             bodyType: 'Trung bình'
//         },
//         {
//             key: '2',
//             breed: 'Siêu âm 2',
//             country: '20',
//             origin: '20.0',
//             bodyType: 'Trung bình'
//         },
//         {
//             key: '3',
//             breed: 'Siêu âm 3',
//             country: '30',
//             origin: '20.0',
//             bodyType: 'Lớn'
//         }
//     ];
//
//     // State để lưu danh sách trong bảng
//     const [tableData, setTableData] = useState([]);
//
//     // Cột cho bảng
//     const columns = [
//         {
//             title: 'STT',
//             dataIndex: 'index',
//             key: 'index',
//             render: (text, record, index) => index + 1
//         },
//         {
//             title: 'Dịch vụ',
//             dataIndex: 'breed',
//             key: 'breed',
//         },
//         {
//             title: 'Số lượng',
//             dataIndex: 'country',
//             key: 'country',
//         },
//         {
//             title: 'Đơn giá',
//             dataIndex: 'origin',
//             key: 'origin',
//         },
//         {
//             title: 'Đối tượng',
//             dataIndex: 'bodyType',
//             key: 'bodyType',
//         },
//         {
//             title: 'Hành động',
//             key: 'action',
//             render: (text, record) => (
//                 <Button
//                     type="link"
//                     danger
//                     onClick={() => handleRemove(record)}
//                 >
//                     Xóa
//                 </Button>
//             )
//         }
//     ];
//
//     // Xử lý khi chọn giống mèo
//     const handleBreedChange = (value) => {
//         // Tìm thông tin giống mèo đã chọn
//         const breedToAdd = catBreeds.find(cat => cat.breed === value);
//
//         // Kiểm tra xem giống mèo đã tồn tại trong bảng chưa
//         const isExists = tableData.some(item => item.breed === value);
//
//         if (!isExists) {
//             // Thêm vào bảng
//             setTableData([...tableData, breedToAdd]);
//         }
//     };
//
//     // Xóa một dòng khỏi bảng
//     const handleRemove = (record) => {
//         setTableData(tableData.filter(item => item.key !== record.key));
//     };
//
//     // Render option với định dạng mới
//     const renderOption = (cat) => {
//         return (
//             <div className="cat-breed-option">
//                 <div className="cat-breed-cell">{cat.breed}</div>
//                 <div className="cat-breed-cell">{cat.country}</div>
//                 <div className="cat-breed-cell">{cat.origin}</div>
//                 <div className="cat-breed-cell">{cat.bodyType}</div>
//             </div>
//         );
//     };
//
//     // Lọc dữ liệu khi tìm kiếm
//     const filterOption = (input, option) =>
//         option.children.props.children.some(
//             child => child.props.children.toLowerCase().includes(input.toLowerCase())
//         );
//
//     return (
//         <div style={{ padding: '20px' }}>
//             {/*<h2>Chọn Giống Mèo</h2>*/}
//
//             {/* Dropdown chọn giống */}
//             <Select
//                 showSearch
//                 style={{ width: '100%', marginBottom: 20 }}
//                 placeholder="Chọn dịch vụ"
//                 optionFilterProp="children"
//                 filterOption={filterOption}
//                 onChange={handleBreedChange}
//                 dropdownClassName="cat-breed-dropdown"
//             >
//                 {catBreeds.map(cat => (
//                     <Select.Option key={cat.key} value={cat.breed}>
//                         {renderOption(cat)}
//                     </Select.Option>
//                 ))}
//             </Select>
//
//             {/* Bảng hiển thị các giống mèo đã chọn */}
//             <Table
//                 columns={columns}
//                 dataSource={tableData}
//                 rowKey="key"
//                 locale={{ emptyText: 'Chưa có dịch vụ nào được chọn' }}
//                 pagination={false}
//             />
//         </div>
//     );
// };
//
// export default CatBreedSelector;