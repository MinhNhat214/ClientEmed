import "./mau/styles/style.scss";
import "./mau/styles/custom-bootstrap.scss";
import "./mau/styles/style-component.scss";
import "./mau/styles/react-bootstrap.scss";
import React, { useState } from "react";
import { Layout, Menu } from "antd";
// import {
//   AppstoreOutlined,
//   SettingOutlined,
//   MedicineBoxOutlined,
// } from "@ant-design/icons";

// import "antd/dist/reset.css"; // Import Ant Design CSS

// DANH MUC
import PhanNhom from "../src/mau/PhanNhom/List";
import LoaiThuoc from "../src/mau/LoaiThuoc/List";
import DonViTinh from "../src/mau/DonViTinh/List";
import NhomIn from "../src/mau/NhomIn/List";
import ThuocVTYT from "../src/mau/ThuocVTYT/List";
import NuocSanXuat from "./mau/NuocSanXuat/List";
// import NuocSanXuat2 from "./pages/NuocSanXuat"
import HangSanXuat from "./mau/HangSanXuat/List";
import FetchDataComponent from "./API_URL/FetchDataComponent";
// import ListXuatThuocTuTrucVTTH from "./mau/KhambenhHSBA/HoSoBenhAnNgoaiTru/List";
// import Phieukhambenh from "../src/mau/KhambenhHSBA/Phieukhambenh";
// import NhomIn1 from "./components/NhomIn";

//TIEN ICH
// import HSBANgoaitruKB from "./mau/KhambenhHSBA/HSBANgoaitruKB";
// import HoSoBenhAnNgoaiTru from "./mau/KhambenhHSBA/HoSoBenhAnNgoaiTru/List"
// import LoiDan from "./mau/KhambenhHSBA/LoiDan/List";
// import PhieuKhamBenh from "./mau/KhambenhHSBA/Phieukhambenh"
// import XuatThuocTuTruc_VTYT from "./mau/KhambenhHSBA/XuatThuocTuTruc_VTTH/List"

import PhieuKhamBenh from "./mau/KhambenhHSBA/Phieukhambenh/index";
// import ComboboxTable from "./mau/components/tableTailwind";

// import KhamBenh from "./mau/KhamBenh";
// import TableChiDinh from "./mau/KhamBenh/ChiDinh/TableChiDinh";
// import ComboboxTable from "./mau/components/tableTailwind"
const { Sider, Content } = Layout;
function App() {
  // // const sampleCats = [
  // //     {key: '1', ServiceName: 'British', STT: '1', SL: '20', Price: '32.00', S: 0, C: 0, T: 0, Object: 'DV', Code: 'MK01'},
  // //     {key: '2', ServiceName: 'Siêu âm tuyến giáp', STT: '2', SL: '21', Price: '10.00', S: 0, C: 0, T: 0, Object: 'DV', Code: 'SA01'},
  // //     {key: '3', ServiceName: 'Persian', STT: '3', SL: '28', Price: '14.00', S: 0, C: 0, T: 0, Object: 'DV', Code: 'SA02'},
  // //     {key: '4', ServiceName: 'Ragdoll', STT: '4', SL: '24', Price: '11.00', S: 0, C: 0, T: 0, Object: 'DV', Code: 'SA03'},
  // //     {key: '5', ServiceName: 'Hjien', STT: '4', SL: '15', Price: '12.00', S: 0, C: 0, T: 0, Object: 'DV', Code: 'SA04'},
  // //     {key: '6', ServiceName: 'Smyna', STT: '4', SL: '32', Price: '2.00', S: 0, C: 0, T: 0, Object: 'DV', Code: 'SA05'},
  // // ];
  // const options = [
  //     { id: 1, name: "John Doe", detail: "Detail 1", sl: "11", price: "20", total_price: "0", object: 'DV', type: "Type A", date: "2024-01-01" },
  //     { id: 2, name: "Jane Smith", detail: "Detail 2", sl: "11", price: "20", total_price: "0", object: 'DV', type: "Type B", date: "2024-01-02" },
  //     { id: 3, name: "Hame", detail: "Detail 3", sl: "11", price: "20", total_price: "0", object: 'DV', type: "Type C", date: "2024-01-02" },
  //     { id: 4, name: "Thuốc an thần", detail: "Detail 4", sl: "11", price: "20", total_price: "0", object: 'DV', type: "Type D", date: "2024-01-02" },
  //     // More options...
  // ];
  //
  // return (
  //     <div className="App">
  //         <PhanNhom/>
  //         <DonViTinh/>
  //         <NhomIn/>
  //         <ThuocVTYT/>
  //         {/*<ThuocVTYT2/>*/}
  //
  //         {/*<TableChiDinh/>*/}
  //         {/*<ComboboxTable options={options} />;*/}
  //
  //         {/*<PhieuKhamBenh/>*/}
  //
  //         {/*<h1>Hồ sơ bệnh án ngoại trừ</h1>*/}
  //         {/*<HoSoBenhAnNgoaiTru/>*/}
  //         {/*<hr/>*/}
  //         {/*<h1>Khám bệnh HSBA</h1>*/}
  //         {/*<HSBANgoaitruKB/>*/}
  //         {/*<hr/>*/}
  //         {/*<XuatThuocTuTruc_VTYT/>*/}
  //         {/*<h1>Lời Dặn</h1>*/}
  //         {/*<LoiDan/>*/}
  //         {/*<hr/>*/}
  //         {/*<h1>Phiếu khám bệnh</h1>*/}
  //
  //         {/*<Phieukhambenh/>*/}
  //         {/*<h1>Đơn vị</h1>*/}
  //
  //     </div>
  // );

  const [selectedKey, setSelectedKey] = useState("5");

  // Function to render the selected component
  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <PhanNhom />;
      case "2":
        return <LoaiThuoc />;
      case "3":
        return <DonViTinh />;
      case "4":
        return <NhomIn />;
      case "5":
        return <ThuocVTYT />;
      case "6":
        return <NuocSanXuat />;
      case "7":
        return <HangSanXuat />;
      case "8":
        return <PhieuKhamBenh />;
      case "9":
        return <FetchDataComponent />;
      default:
        return <h3>Chọn một mục từ menu</h3>;
    }
  };

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider theme="light" collapsible>
          <Menu
            mode="inline"
            defaultSelectedKeys={["5"]}
            onClick={(e) => setSelectedKey(e.key)}
            items={[
              {
                key: "1",
                label: "Phân Nhóm",
              },
              {
                key: "2",
                label: "Loại Thuốc",
              },
              {
                key: "3",
                label: "Đơn Vị Tính",
              },
              {
                key: "4",
                label: "Nhóm In",
              },
              {
                key: "5",
                label: "Thuốc VTYT",
              },
              {
                key: "6",
                label: "Nước sản xuất",
              },
              {
                key: "7",
                label: "Hãng sản xuất",
              },
              {
                key: "8",
                label: "Khám bệnh",
              },
              {
                key: "9",
                label: "Fetch Test",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Content style={{ padding: 20 }}>{renderContent()}</Content>
        </Layout>
      </Layout>
    </div>
  );
}
export default App;
