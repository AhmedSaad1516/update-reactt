import React from 'react';
import './home.css';
import BtnAudit from '../../Shared-lib/Components/btns/btn-audit/btn-audit';


function Home() {
    return (
        <div className="bg px-lg-4 px-md-3">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
            <h1 className="font-color title">Requests <span className="d-block"><i className="fa-solid fa-house"></i> \ Requests</span></h1>
        </div>
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-9 col-6">
                    <div className="inputs">
                        <input type="text" className="searchInput form-control ps-3" placeholder="Search here" />
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="row">
                        <div className="col-9 p-0 pe-1">
                            <select className="form-select" aria-label="Request Select">
                                <option selected>Request</option>
                                <option value="1">All Requests</option>
                                <option value="2">Company Upgrade Requests</option>
                                <option value="3">Accountant Upgrade Requests</option>
                            </select>
                        </div>
                        <div className="col-2 p-0 text-center">
                            <button className="btn delete" aria-label="Delete Requests">
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="table-responsive">
            <table className="table custom-table table-striped table-sm">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" aria-label="Select all" />
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th className="text-center">Request</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                     
                        <tr >
                            <td>
                                <input type="checkbox" aria-label={`Select request `} />
                            </td>
                            <td><p className="py-2 m-0">Mohamed Ali</p></td>
                            <td><p className="py-2 m-0">olivia@untitlededu.com</p></td>
                            <td><p className="py-2 m-0">Certified</p></td>
                            <td><p className="py-2 m-0 text-center requestCard">Interviewer</p></td>
                            <td>
                                <div className="button-group">

                                    <BtnAudit className="myBtn-info  btn-sm px-2 py-2" childrenTitle="View"  childrenIcon={<i className="ps-3 pe-2 fa-regular fa-eye"></i> } />

<BtnAudit className="myBtn-danger" childrenTitle="Reject"  childrenIcon={<i className="m-1 fa-solid fa-x"></i> } />

<BtnAudit className="myBtn-success" childrenTitle="Accept"  childrenIcon={<i className="m-1 fa-solid fa-check"></i> } />

                                </div>
                            </td>
                        </tr>
                    
                </tbody>
            </table>
        </div>
        
    </div>
    );
}

export default Home;
