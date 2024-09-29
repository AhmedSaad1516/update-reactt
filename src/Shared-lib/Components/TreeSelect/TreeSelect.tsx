import React, { useState } from 'react';
import './TreeSelect.css';
interface TreeNode {
    label: string;
    children?: TreeNode[];
}

const treeData: TreeNode[] = [
    {
        label: 'All',
        children: [
            { label: 'Certified Interviews' },
            {
                label: 'Sub Item 1-2',
                children: [
                    { label: 'Sub Sub Item 1-2-1' },
                    { label: 'Sub Sub Item 1-2-2' },
                ],
            },
        ],
    },
    {
        label: 'Accountant Interviews',
        children: [
            { label: 'Sub Item 2-1' },
            {
                label: 'Sub Item 2-2',
                children: [
                    { label: 'Sub Sub Item 2-2-1' },
                    { label: 'Sub Sub Item 2-2-2' },
                ],
            },
        ],
    },
];

// Define the props interface to accept titleHeader
interface TreeSelectProps {
    titleHeader: string;
    titleHeader2:string
}

const TreeSelect: React.FC<TreeSelectProps> = ({ titleHeader ,titleHeader2 }) => {
    const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({});
    const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({});

    const handleCheckboxChange = (label: string) => {
        setSelectedItems((prev) => ({
            ...prev,
            [label]: !prev[label],
        }));
    };

    const toggleNode = (label: string) => {
        setExpandedNodes((prev) => ({
            ...prev,
            [label]: !prev[label],
        }));
    };

    const renderTree = (data: TreeNode[]) => {
        return data.map((item) => (
            <div key={item.label} style={{ paddingLeft: '20px' }}>
                <p className="py-2 d-flex m-0" onClick={() => toggleNode(item.label)} style={{ cursor: 'pointer' }}>
                    <input
                        className='myinput-box p-3 ml-5'
                        type="checkbox"
                        checked={selectedItems[item.label] || false}
                        onChange={() => handleCheckboxChange(item.label)}
                    />
                    {item.label}
                </p>
                {item.children && item.children.length > 0 && expandedNodes[item.label] && (
                    <div>{renderTree(item.children)}</div>
                )}
            </div>
        ));
    };

    return (
        <>
 

            <section className="bgSeccion col-12 p-4  px-3 row justify-content-center mb-5"
            
          
            style={{ margin: '30px 0px' }} >
                           <h2 className="sec-font-color title">{titleHeader}</h2>
                           <hr style={{ color: 'rgb(141, 140, 140)' }} />
                           <div className='certificate p-4'>
                 <div className=' d-flex align-items-center'>
                 <img src="../../../../src/assets/image/Interviewers/fluent_meet-now-16-regular.svg" alt="" />
                 <p className="sec-font-color title m-2">{titleHeader2}</p>
                 </div>

                <div>{renderTree(treeData)}</div>
                </div>
            </section>
        </>
    );
};

export default TreeSelect;
