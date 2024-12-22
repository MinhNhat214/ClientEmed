import "./khambenh.css";
import React, {useState} from "react";
import Nav from "./nav";
import Header from "./header";
import PhieuKham from "./PhieuKham";
import ChiDinh from "./ChiDinh";
import InforTiepNhan from "./InforTiepNhan";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

function KhamBenh(props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    return (
        <div className="KhamBenh">
            <Nav/>
            <hr/>
            <Header/>
            <hr/>

            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <div
                    style={{
                        width: isSidebarOpen ? '29%' : '0',
                        marginTop: '20px',
                        overflow: 'hidden',
                    }}
                >
                    <InforTiepNhan/>
                </div>

                <div
                    style={{
                        width: isSidebarOpen ? '69%' : '100%',
                    }}
                >
                    <PhieuKham/>
                    <ChiDinh/>
                </div>
            </div>

            <button
                className="button-slidebar"
                onClick={toggleSidebar}
                style={{
                    left: isSidebarOpen ? 'calc(29% + 10px)' : '10px',
                }}
            >
                <div>
                    <FontAwesomeIcon icon={faAngleRight}/>
                </div>
            </button>
        </div>
    );
}

export default KhamBenh;
