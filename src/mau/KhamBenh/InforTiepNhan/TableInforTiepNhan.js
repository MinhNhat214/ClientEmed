// import {Table} from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowsRotate, faPaintBrush, faPenToSquare} from '@fortawesome/free-solid-svg-icons';
function TableInforTiepNhan(props) {

    return (
        <table>
            <thead>
            <tr>
                <th>STT</th>
                <th>Mã BN</th>
                <th>Mã BN</th>
                <th>Mã BN</th>
                <th>Mã BN</th>
                <th>Thao tác</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>001</td>
                <td>Nguyễn Văn A</td>
                <td style={{ textAlign: 'center' }}>
                    <FontAwesomeIcon icon={faPenToSquare}/>
                </td>
            </tr>
            </tbody>
        </table>
    );
}

export default TableInforTiepNhan;
