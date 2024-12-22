// NẾU KHÔNG TÌM THẤY GIÁ, GI MẶC ĐỊNH LÀ 40000
import React, {useState, useRef, useEffect} from "react";
import {Table, Input, Button, message, Modal} from "antd";
// import "./Combobox.css";
import "../ChidinhKB/chidinh.css";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowsRotate, faXmark} from '@fortawesome/free-solid-svg-icons';
import {faCamera, faBarcode, faFileLines, faUsers} from "@fortawesome/free-solid-svg-icons";
import {HotKeys} from 'react-hotkeys';
import {setDataDichVuKyThuat, setDataGiaDVKT} from "../../../../reducers/dataAdd";
import dichvukythuatAPI from "../../../../API/dichvukythuatAPI";
import giadvktAPI from "../../../../API/giadvktAPI";

const Donthuoc = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [query, setQuery] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(0);
    const [selectedDv, setSelectedDv] = useState([]);
    const [listDVKT, setListDVKT] = useState([]);
    const [listGiaDVKT, setListGiaDVKT] = useState([]);

    const comboBoxRef = useRef();
    const dropdownRef = useRef();
    const tableRef = useRef();
    const slInputRefs = useRef({});

    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const dvktData = await dichvukythuatAPI.getAll("ServiceID");
                setListDVKT(dvktData.data);

                const giaDvktData = await giadvktAPI.getAll("Hide");
                setListGiaDVKT(giaDvktData.data);
            } catch (error) {
                message.error("Lỗi khi tải dữ liệu từ API");
            }
        };

        fetchData();
    }, []);

    // Filter options combining both lists
    const filteredOptions = query
        ? listDVKT.filter((service) => {
            const priceData = listGiaDVKT.find(price => price.ServiceID === service.ServiceID);
            // Sửa ở đây: nếu không có giá, mặc định là 40000
            if (!priceData) {
                return `${service.ServiceName} 40000`.toLowerCase().includes(query.toLowerCase());
            }

            const searchString = `${service.ServiceName} ${priceData.ObjectID === 1 ? 'DV' : 'BHYT'} ${priceData.UnitPrice}`.toLowerCase();
            return searchString.includes(query.toLowerCase());
        })
        : listDVKT.filter(service =>
            listGiaDVKT.some(price => price.ServiceID === service.ServiceID)
        );

    // Auto-scroll to focused item
    useEffect(() => {
        if (isDropdownOpen && dropdownRef.current) {
            const focusedRow = dropdownRef.current.querySelectorAll("tr")[focusedIndex + 1]; // +1 for header row
            if (focusedRow) {
                focusedRow.scrollIntoView({block: "nearest"});
            }
        }
    }, [focusedIndex, isDropdownOpen]);

    const handleOptionClick = (option) => {
        // Sửa ở đây: nếu không có giá, mặc định là 40000
        const priceData = listGiaDVKT.find((g) => g.ServiceID === option.ServiceID) || {UnitPrice: 40000, ObjectID: 1}; // Giá mặc định là 40000
        if (!priceData) return;

        const exists = selectedDv.some((dv) => dv.ServiceID === option.ServiceID);
        if (exists) {
            message.warning(`Dịch vụ "${option.ServiceName}" đã tồn tại trong bảng.`);
            return;
        }

        setSelectedDv((prev) => {
            const updatedDv = [
                {
                    ...option,
                    Price: priceData.UnitPrice,
                    ObjectType: priceData.ObjectID === 1 ? 'DV' : 'BHYT',
                    SL: 1,
                    TotalPrice: priceData.UnitPrice,
                },
                ...prev,
            ];
            setTimeout(() => {
                if (slInputRefs.current[0]) {
                    slInputRefs.current[0].focus();
                }
            }, 0);
            return updatedDv;
        });
        setQuery("");
        setIsDropdownOpen(false);
    };

    const handleInputFocus = () => {
        setIsDropdownOpen(true);
        setFocusedIndex(0);
    };

    const handleInputBlur = () => {
        setTimeout(() => setIsDropdownOpen(false), 150);
    };

    const handleKeyDown = (event) => {
        if (!isDropdownOpen) return;

        switch (event.key) {
            case "ArrowDown":
                event.preventDefault();
                setFocusedIndex((prevIndex) =>
                    prevIndex + 1 < filteredOptions.length ? prevIndex + 1 : prevIndex
                );
                break;
            case "ArrowUp":
                event.preventDefault();
                setFocusedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
                break;
            case "Enter":
                if (filteredOptions[focusedIndex]) {
                    handleOptionClick(filteredOptions[focusedIndex]);
                }
                break;
            default:
                break;
        }
    };

    const handleChangeSL = (e, record, field) => {
        const newValue = parseInt(e.target.value) || 1;

        setSelectedDv((prev) =>
            prev.map((item) =>
                item.ServiceID === record.ServiceID
                    ? {
                        ...item,
                        SL: newValue,
                        TotalPrice: newValue * item.Price,
                    }
                    : item
            )
        );
    };

    const handleDelete = (ServiceID, ServiceName) => {
        Modal.confirm({
            title: "Xác nhận xóa",
            content: `Bạn có muốn xóa dịch vụ ${ServiceName} này?`,
            okText: "Có",
            cancelText: "Không",
            onOk: () => {
                setSelectedDv((prev) => prev.filter((dv) => dv.ServiceID !== ServiceID));
                message.success(`Xóa dịch vụ "${ServiceName}" thành công!`);
            },
        });
    };

    const tableColumns = [
        {title: "Tên thuốc", dataIndex: "ServiceName", key: "ServiceName"},
        {
            title: "HL",
            dataIndex: "HL",
            key: "SL",
            width: 120,
            render: () => (
                <Input
                    type="number"
                    min={1}
                    style={{width: "50%", borderRadius: "unset", height: "20px", textAlign: "center"}}
                />
            ),
        },
        {title: "ĐVT", dataIndex: "", key: ""},
        {title: "N.Cấp", dataIndex: "", key: ""},
        {title: "Sáng", dataIndex: "", key: ""},
        {title: "Trưa", dataIndex: "", key: ""},
        {title: "Chiều", dataIndex: "", key: ""},
        {title: "Tối", dataIndex: "", key: ""},
        {title: "Tổng", dataIndex: "", key: ""},
        {title: "Cách dùng", dataIndex: "", key: ""},
        {title: "Đơn giá", dataIndex: "", key: ""},

        // {
        //     title: "Số lượng",
        //     dataIndex: "SL",
        //     key: "SL",
        //     width: 120,
        //     render: (text, record, index) => (
        //         <Input
        //             ref={(el) => (slInputRefs.current[index] = el)}
        //             type="number"
        //             value={record.SL}
        //             min={1}
        //             onChange={(e) => handleChangeSL(e, record, "SL")}
        //             style={{width: "50%", borderRadius: "unset", height: "20px", textAlign: "center"}}
        //         />
        //     ),
        // },
        // {
        //     title: "Đơn giá",
        //     dataIndex: "Price",
        //     key: "Price",
        //     render: (price) => price.toLocaleString()
        // },
        // {
        //     title: "Tổng tiền",
        //     dataIndex: "TotalPrice",
        //     key: "TotalPrice",
        //     render: (price) => price.toLocaleString()
        // },
        // {
        //     title: "Đối tượng",
        //     dataIndex: "ObjectType",
        //     key: "ObjectType"
        // },
        {
            title: "Hành động",
            key: "action",
            width: 100,
            align: "center",
            render: (_, record) => (
                <Button
                    type="primary"
                    danger
                    onClick={() => handleDelete(record.ServiceID, record.ServiceName)}
                    style={{width: "5px", height: "20px"}}
                >
                    Xóa
                </Button>
            ),
        },
    ];

    return (
        <div className="combobox-container">
            <div className="input-container" style={{marginTop: "10px"}}>
                <div>Công khám:</div>
                <Input
                    ref={comboBoxRef}
                    placeholder="Tìm kiếm dịch vụ..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onKeyDown={handleKeyDown}
                    style={{width: "80%", height: "25px", borderRadius: "unset !important"}}
                />
            </div>

            {isDropdownOpen && (
                <div className="dropdown-menu" ref={dropdownRef}>
                    <table className="dropdown-table">
                        <thead>
                        <tr style={{
                            padding: "0px !important",
                            fontSize: "12px",
                            fontWeight: "normal",
                            background: "#EBEBEB"
                        }}>
                            <th>Tên dịch vụ</th>
                            <th>Đối tượng</th>
                            <th style={{textAlign: "right"}}>Đơn giá</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredOptions.length === 0 ? (
                            <tr>
                                <td colSpan="3" className="no-results">
                                    Không tìm thấy kết quả
                                </td>
                            </tr>
                        ) : (
                            filteredOptions.map((option, index) => {
                                const priceData = listGiaDVKT.find(
                                    price => price.ServiceID === option.ServiceID
                                ) || {UnitPrice: 40000, ObjectID: 1}; // Giá mặc định là 40000
                                return (
                                    <tr
                                        key={option.ServiceID}
                                        className={`dropdown-row ${
                                            index === focusedIndex ? "focused-row" : ""
                                        }`}
                                        onClick={() => handleOptionClick(option)}
                                    >
                                        <td className="dropdown-cell">{option.ServiceName}</td>
                                        <td className="dropdown-cell">
                                            {priceData ? (priceData.ObjectID === 1 ? 'BHYT' : 'DV') : ''}
                                        </td>
                                        <td className="dropdown-cell">
                                            {priceData ? priceData.UnitPrice.toLocaleString() : '40,000'}
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                        </tbody>
                    </table>
                </div>
            )}

            <Table
                ref={tableRef}
                dataSource={selectedDv}
                columns={tableColumns}
                rowKey="ServiceID"
                pagination={false}
                style={{marginTop: 20}}
            />
        </div>
    );
};

export default Donthuoc;
