import React from 'react';
import RequestsHeader from '../../Shared-lib/Components/Requests/Requests-header';
import BtnAudit from '../../Shared-lib/Components/btns/btn-audit/btn-audit';
function CertifiedRequest() {
    const personalInfo = [
        { icon: "fa-regular fa-user", label: "Full Name", detail: "Jane Cooper" },
        { icon: "fa-regular fa-envelope", label: "Email", detail: "Example@gmail.com" },
        { icon: "fa-solid fa-phone", label: "Phone Number", detail: "020 123456789" },
        { icon: "fa-solid fa-location-dot", label: "Country", detail: "Egypt" },
        { icon: "fa-solid fa-calendar-days", label: "Request Date", detail: "12/1/2024-10AM" },
        { icon: "fa-regular fa-file", label: "High level of education", detail: "Bachelor of accounting" }
    ];

    const certificates = Array(2).fill({
        label: "Certificate Name",
        detail: "Selection"
    });

    const courses = Array(2).fill({
        label: "Course Name",
        detail: "Selection"
    });

    return (
        <>
            <div className="px-5">
                <header className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                <RequestsHeader title="Certified request"/>
                </header>
                
                <section>
                    <h2 className="sec-font-color title">Personal Info</h2>
                    <hr style={{ color: "rgb(141, 140, 140)" }} />
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            {personalInfo.map((info, index) => (
                                <div key={index} className="col-lg-4 col-md-6 info mb-5">
                                    <div className="row align-items-center">
                                        <div className="col-3 text-end">
                                            <i className={info.icon}></i>
                                        </div>
                                        <div className="col-9">
                                            <p className="mb-1">{info.label}</p>
                                            <p className="m-0 header-details">{info.detail}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="sec-font-color title">Professional Certifications</h2>
                    <hr style={{ color: "rgb(141, 140, 140)" }} />
                    <div className="row justify-content-center mb-5">
                        {certificates.map((cert, index) => (
                            <div key={index} className="row mt-5 mb-3">
                                <label className=" fw-bold text-dark">{cert.label}</label>
                                <div className="col-11 certificate px-3">
                                    <div className="row align-items-center justify-content-between">
                                        <div className="col-lg-1 text-lg-end text-start">
                                            <i className="fa-regular fa-file-pdf"></i>
                                        </div>
                                        <div className="col-lg-9">
                                            <p className="mb-1 header-details">{cert.detail}</p>
                                            <p className="m-0  opacity-50">JPG, PNG or PDF, file size no more than 10MB</p>
                                        </div>
                                        <div className="col-lg-2 text-end">
                                            <button className="btn downloadBtn" type="button">
                                                <i className="fa-solid fa-download"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="sec-font-color title">Courses</h2>
                    <hr style={{ color: "rgb(141, 140, 140)" }} />
                    <div className="row justify-content-center mb-5">
                        {courses.map((course, index) => (
                            <div key={index} className="row mt-5 mb-3">
                                <label className=" fw-bold text-dark">{course.label}</label>
                                <div className="col-11 certificate px-3">
                                    <div className="row align-items-center justify-content-between">
                                        <div className="col-lg-1 text-lg-end text-start">
                                            <i className="fa-regular fa-file-pdf"></i>
                                        </div>
                                        <div className="col-lg-9">
                                            <p className="mb-1 header-details">{course.detail}</p>
                                            <p className="m-0  opacity-50">JPG, PNG or PDF, file size no more than 10MB</p>
                                        </div>
                                        <div className="col-lg-2 text-end">
                                            <button className="btn downloadBtn" type="button">
                                                <i className="fa-solid fa-download"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="sec-font-color title">Certified Exam</h2>
                    <hr style={{ color: "rgb(141, 140, 140)" }} />
                    <div className="row justify-content-center mb-5">
                        <div className="row mt-5 mb-3">
                            <div className="col-11 certificate">
                                <div className="container position-relative">
                                    <div className="position-absolute pass-container">
                                        <p className="px-2 pass-pos m-0 col-lg-2 text-center passed">
                                            <i className="fa-regular fa-thumbs-up"></i> Passed
                                        </p>
                                    </div>
                                    <div className="row text-md-start text-center justify-content-center">
                                                <div className="col-lg-4 col-md-6 ps-md-5 mb-2 fw-bold">Points:</div>
                                                <div className="col-lg-8 col-md-6 row">
                                                    <p className="m-0 col-lg-12">40/70</p>

                                                </div>
                                                <div className="col-lg-4 col-md-6 ps-md-5 mb-2 fw-bold">Percentage:</div>
                                                <div className="col-lg-8 col-md-6 row">
                                                    <p className="m-0 col-lg-12">60%</p>
                                                </div>
                                                <div className="col-lg-4 col-md-6 ps-md-5 mb-2 fw-bold">Duration:</div>
                                                <div className="col-lg-8 col-md-6 row">
                                                    <p className="m-0 col-lg-12">00:00:24</p>
                                                </div>
                                                <div className="col-lg-4 col-md-6 ps-md-5 mb-2 fw-bold">Date started:</div>
                                                <div className="col-lg-8 col-md-6 row">
                                                    <p className="m-0 col-lg-12">Tue 10 Sep 24 04:00</p>
                                                </div>
                                                <div className="col-lg-4 col-md-6 ps-md-5 mb-2 fw-bold">Date finished:</div>
                                                <div className="col-lg-8 col-md-6 row">
                                                    <p className="m-0 col-lg-12">Tue 10 Sep 24 04:00</p>
                                                </div>
                                            </div>
                                            <div className="ms-md-5 ms-2 ps-2 mt-4 feedback">
                                                <p className="fw-bold pt-4">Feedback</p>
                                                <p className="pb-4">
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
                                                    exercitationem commodi eveniet delectus, illum doloremque neque,
                                                    beatae
                                                    autem enim rerum sint in labore voluptas, sit impedit iure hic rem
                                                    esse?
                                                </p>
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="col-11 mb-4 px-5">
                    <div className="text-end">
                    <BtnAudit className="myBtn-back" childrenTitle="Back"  childrenIcon={<i className="m-1 fa-solid fa-arrow-left-long"></i> } />

                    <BtnAudit className="myBtn-danger" childrenTitle="Reject"  childrenIcon={<i className="m-1 fa-solid fa-x"></i> } />

                    <BtnAudit className="myBtn-success" childrenTitle="Accept"  childrenIcon={<i className="m-1 fa-solid fa-check"></i> } />

            
                    </div>
                </footer>
            </div>
        </>
    );
}

export default CertifiedRequest;
