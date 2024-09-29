import React from 'react';
import RequestsHeader from '../../Shared-lib/Components/Requests/Requests-header';
import BtnAudit from '../../Shared-lib/Components/btns/btn-audit/btn-audit';
import Courses from '../../Shared-lib/Components/Courses/Courses';
import CertifiedExam from '../../Shared-lib/Components/CertifiedExam/CertifiedExam';
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

          
                    <Courses  labelHeader='Coures' 
                     coursesList={[
                        { label: "Courses Name", detail: "Selection" },
                        { label: "Courses Name", detail: "Another Selection" }
                     ]
                       
                     }
                    />
             <Courses  labelHeader='Coures' 
                     coursesList={[
                        { label: "Courses Name", detail: "Selection" },
                        { label: "Courses Name", detail: "Another Selection" }
                     ]
                       
                     }
                    />

                     <CertifiedExam titleHeader='Certified Exam'/>
        

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
