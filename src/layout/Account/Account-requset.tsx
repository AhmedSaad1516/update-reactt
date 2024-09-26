import '../../layout/side-bar/sideBar.css';
import React from 'react';
import PersonalInfo from '../../Shared-lib/Components/Personal-info/Personal-info';
import RequestsHeader from '../../Shared-lib/Components/Requests/Requests-header';


function AccountRequest() {
    return (
        <>
            <div className="bgs px-5">
               <RequestsHeader title="Accountant request"/>
      
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <h1 className="sec-font-color  textHeader">Personal Info</h1>
                </div>
                <hr style={{ color: 'rgb(141, 140, 140)' }} />

                <div className="container">
                       <PersonalInfo/>

                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                        <h1 className="sec-font-color title">Professional Certifications</h1>
                    </div>
                    <hr style={{ color: 'rgb(141, 140, 140)' }} />

                    <div className="row justify-content-center mb-5">
                        <div className="row mt-5 mb-3">
                            <label className=" Certificate  fw-bold text-dark">Certificate Name</label>
                            <div>
                                <div className="col-11 certificate px-3">
                                    <div>
                                        <div className="row align-items-center justify-content-between">
                                            <div className="col-lg-1 text-lg-end text-start">
                                                <i className="fa-regular fa-file-pdf"></i>
                                            </div>
                                            <div className="col-lg-9">
                                                <p className="mb-1 details">Selection</p>
                                                <p className="m-0 pp opacity-50">
                                                    JPG, PNG or PDF, file size no more than 10MB
                                                </p>
                                            </div>
                                            <div className="col-lg-2 text-end">
                                                <button className="btn downloadBtn">
                                                    <i className="fa-solid fa-download"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5 mb-3">
                            <label className="Certificate  fw-bold text-dark">Certificate Name</label>
                            <div>
                                <div className="col-11 certificate px-3">
                                    <div>
                                        <div className="row align-items-center justify-content-between">
                                            <div className="col-lg-1 text-lg-end text-start">
                                                <i className="fa-regular fa-file-pdf"></i>
                                            </div>
                                            <div className="col-lg-9">
                                                <p className="mb-1 details">Selection</p>
                                                <p className="m-0 pp opacity-50">
                                                    JPG, PNG or PDF, file size no more than 10MB
                                                </p>
                                            </div>
                                            <div className="col-lg-2 text-end">
                                                <button className="btn downloadBtn">
                                                    <i className="fa-solid fa-download"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                        <h1 className="sec-font-color title">Courses</h1>
                    </div>
                    <hr style={{ color: 'rgb(141, 140, 140)' }} />

                    <div className="row justify-content-center mb-5">
                        <div className="row mt-5 mb-3">
                            <label className=" fw-bold text-dark">Course Name</label>
                            <div>
                                <div className="col-11 certificate px-3">
                                    <div>
                                        <div className="row align-items-center justify-content-between">
                                            <div className="col-lg-1 text-lg-end text-start">
                                                <i className="fa-regular fa-file-pdf"></i>
                                            </div>
                                            <div className="col-lg-9">
                                                <p className="mb-1 details">Selection</p>
                                                <p className="m-0 pp opacity-50">
                                                    JPG, PNG or PDF, file size no more than 10MB
                                                </p>
                                            </div>
                                            <div className="col-lg-2 text-end">
                                                <button className="btn downloadBtn">
                                                    <i className="fa-solid fa-download"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5 mb-3">
                            <label className=" fw-bold text-dark">Course Name</label>
                            <div>
                                <div className="col-11 certificate px-3">
                                    <div>
                                        <div className="row align-items-center justify-content-between">
                                            <div className="col-lg-1 text-lg-end text-start">
                                                <i className="fa-regular fa-file-pdf"></i>
                                            </div>
                                            <div className="col-lg-9">
                                                <p className="mb-1 details">Selection</p>
                                                <p className="m-0 pp opacity-50">
                                                    JPG, PNG or PDF, file size no more than 10MB
                                                </p>
                                            </div>
                                            <div className="col-lg-2 text-end">
                                                <button className="btn downloadBtn">
                                                    <i className="fa-solid fa-download"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        
        </div>
        </>
    )
}

export default AccountRequest;
