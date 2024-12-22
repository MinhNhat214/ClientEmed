import React, {useState, useEffect } from "react";

import "./donthuoc.scss";

function SelectRowDonThuoc(props) {

    const {
        red,
        setValueThuocChon,
        setValueInputThuoc,
        valueInputThuoc,
        refNcap,
        setClickTenThuoc,
    } = props;

    const [selectedRowIndex, setSelectedRowIndex] = useState(0);
    const selectRef = useState(null);
    function setChange() {
        const selected = selectRef?.current?.querySelector(".active");
        if (selected) {
            selected?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === "ArrowUp" && selectedRowIndex > 0) {
            setSelectedRowIndex(selectedRowIndex - 1);


        } else if (e.key === "ArrowDown" && selectedRowIndex < red.length - 1) {
            setSelectedRowIndex(selectedRowIndex + 1);



        }
        if (e.key === "Enter") {
            setSelectedRowIndex(0);
            setValueThuocChon(red[selectedRowIndex]);
            setValueInputThuoc(false);
            setClickTenThuoc(false);
            if (refNcap.current) {
                refNcap.current.focus();
            }
        }
    };
    // const onKeyDown = (e) => {
    //     if (e.keyCode === 13) {
    //       // enter key
    //       setActive(0);
    //       setIsShow(false);
    //       setInput(filtered[active]);
    //     } else if (e.keyCode === 38) {
    //       // up arrow
    //       return active === 0 ? null : setActive(active - 1);
    //     } else if (e.keyCode === 40) {
    //       // down arrow
    //       return active - 1 === filtered.length ? null : setActive(active + 1);
    //     }
    //   };


    const clickChooseThuoc = (e) => {
        setValueThuocChon(e);
        setValueInputThuoc(false);
        setClickTenThuoc(false);
        if (refNcap.current) {
            refNcap.current.focus();
        }
    };
   useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [valueInputThuoc, selectedRowIndex]);
    return (
        <>
            <div className="div-box-search">
                <div className="text-center form-input-label thdonthuoc">
                    <div className=" w-25 ">Tên thuốc</div>
                    <div className=" w-25">H.lượng</div>
                    <div className=" w-25">Email</div>
                    <div className=" w-25">Phone</div>
                </div>
                <div className="scroll-select">
                    <table onKeyDown={handleKeyDown} tabIndex="0" className="w-100" ref={selectRef}>
                        <tbody className="form-input-label">
                            {red.map((row, index) => {
                                let className;
                                if (index === selectedRowIndex) {
                                  className = "active";
                                }
                                setTimeout(() => {
                                    setChange();
                                  }, [100]);
                                  return(
                                <tr
                                    key={index}
                                    className={
                                        className
                                        //index === selectedRowIndex ? "bg-active" : "bg-unactive"
                                    }
                                    onClick={() => clickChooseThuoc(row)}
                                >
                                    <td className=" w-25 ">{row.name}</td>
                                    <td className=" w-25 ">{row.id}</td>
                                    <td className=" w-25 ">{row.email}</td>
                                    <td className=" w-25 ">{row.phone}</td>
                                </tr>
                                  );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default SelectRowDonThuoc;
