import React from "react";
import { Tree } from "antd";
import { FolderOutlined, FileOutlined, DownOutlined } from '@ant-design/icons';

const TreeBoXN = () => {
    const treeData = [
        {
            title: 'elipse1',
            key: 'parent-1',
            icon: <FolderOutlined />,
            children: [
                {
                    title: 'elipse.exe',
                    key: 'parent-1-child-1',
                    icon: <FileOutlined />,
                },
                {
                    title: 'elipse.exe',
                    key: 'parent-1-child-2',
                    icon: <FileOutlined />,
                },
            ],
        },
        {
            title: 'elipse',
            key: 'parent-2',
            icon: <FolderOutlined />,
            children: [
                {
                    title: 'elipse.exe',
                    key: 'parent-2-child-1',
                    icon: <FileOutlined />,
                },
                {
                    title: 'elipse.exe',
                    key: 'parent-2-child-2',
                    icon: <FileOutlined />,
                },
            ],
        },
    ];

    return (
        <Tree
            showLine
            showIcon
            defaultExpandedKeys={['parent-1']}
            switcherIcon={<DownOutlined />}
            treeData={treeData}
        />
    );
};

export default TreeBoXN;
