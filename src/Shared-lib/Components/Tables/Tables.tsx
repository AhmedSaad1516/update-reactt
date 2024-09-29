import React from 'react';
import '../../../layout/Requests/Requests.css';

interface TableProps {
    styleName: string;
    thead: string[];
    customButtons?: React.ReactNode;
    tbodys: []; 
    titleHeader?:string
}

function Tables({ styleName, thead,titleHeader, customButtons, tbodys }: TableProps) {
    return (
        <>
                <div className="bgSeccion col-12 p-4   mb-5">

        <h2 className="sec-font-color title"> {titleHeader}</h2>
        <hr style={{ color: "rgb(141, 140, 140)" }} />
        <div className="bgSeccion col-11 p-4  px-3 row justify-content-center mb-5 table-responsive">
            <table className={`table ${styleName} table-striped table-sm`}>
                <thead>
                    <tr>
                        <th>
                            <input className="input-box" type="checkbox" aria-label="Select all" />
                        </th>
                        {thead.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tbodys.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td>
                                <input className="input-box" type="checkbox" aria-label={`Select row ${rowIndex}`} />
                            </td>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
         </div>
        </>
    );
}

export default Tables;
