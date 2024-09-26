import React from 'react';
import { NavLink } from 'react-router-dom';


interface PersonalInfoProps {
    title: string;
    to?: string; 
}

function RequestsHeader({ title, to }: PersonalInfoProps) { 
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                <h1 className="font-color title">
                    Requests
                    <span className="texts d-block">
                        <i className="fa-solid fa-house"></i> / Requests / 
                        {to ? ( 
                            <NavLink to={to} className="textsss">
                                <span className="textsss">{title}</span>
                            </NavLink>
                        ) : (
                            <span className="textsss">{title}</span> 
                        )}
                    </span>
                </h1>
            </div>
        </>
    );
}

export default RequestsHeader;
