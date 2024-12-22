//src/components/NhomThuoc/Header.js
/**
 * ĐANG SỬ DỤNG
 */
// import React, { Component } from "react";
// import { UnorderedListOutlined } from "@ant-design/icons";
// import FormModal from "./FormModal";
//
// class Header extends Component {
//     render() {
//         const { serviceModules , serviceGroupBHYT} = this.props;
//         return (
//             <header className="header">
//                 <h2>
//                     <UnorderedListOutlined/>Phân nhóm
//                 </h2>
//                 <FormModal serviceModules={serviceModules} serviceGroupBHYT={serviceGroupBHYT}/>
//                 {/*<FormModal/>*/}
//             </header>
//         );
//     }
// }
//
// export default Header;

/**
 * 200 OK
 */
import React from "react";
import { UnorderedListOutlined } from "@ant-design/icons";
import FormModal from "./FormModal";

const Header = ({ serviceModules, serviceGroupBHYT, editingServiceGroup, setEditingServiceGroup}) => {
    return (
        <header className="header">
            <h2>
                <UnorderedListOutlined />Phân nhóm
            </h2>
            <FormModal serviceModules={serviceModules} serviceGroupBHYT={serviceGroupBHYT}
                       // editingServiceGroup={editingServiceGroup} // Truyền thông tin nhóm thuốc đang sửa
                       // setEditingServiceGroup={setEditingServiceGroup}
            />
        </header>
    );
};

export default Header;
