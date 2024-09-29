import RequestsHeader from '../../Shared-lib/Components/Requests/Requests-header';
import PersonalInfo from '../../Shared-lib/Components/Personal-info/Personal-info';
import BtnAudit from '../../Shared-lib/Components/btns/btn-audit/btn-audit';
import CompanyForms from '../../Shared-lib/Components/Company-Forms/Company-Forms';

function CompanyRequest() {
    return (
        <>
            <div className="bg px-5">
            <RequestsHeader title="Accountant request"  to='/Acc'/>

            

                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <h1 className="sec-font-color title">Personal Info</h1>
                </div>
                <hr style={{ color: 'rgb(141, 140, 140)' }} />
                <div className="container">
                <PersonalInfo/>
                </div>
             
                    <CompanyForms titleHeaderName='Company Address'
                     labelOne='Country' labelTwo='Company Address'
                    />
              
                <hr style={{ color: 'rgb(141, 140, 140)' }} />
                <div className="bgSeccion p-3 row justify-content-center mb-5">
                    <div className="row mt-5 mb-3">
                        <label className=" fw-bold text-dark">License and Tax Information</label>
                        <div>
                            <div className="col-11 certificate px-3">
                                <div>
                                    <div className="row align-items-center justify-content-between">
                                        <div className="col-lg-1 text-lg-end text-start">
                                            <i className="fa-regular fa-file-pdf"></i>
                                        </div>
                                        <div className="col-lg-9">
                                            <p className="mb-1 header-details">License and Tax Information</p>
                                            <p className="m-0  opacity-50">JPG, PNG or PDF, file size no more than 10MB</p>
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
                <div className="col-11 mb-4 px-5">
                    <div className="text-end">
                    <BtnAudit className="myBtn-back" childrenTitle="Back"  childrenIcon={<i className="m-1 fa-solid fa-arrow-left-long"></i> } />

<BtnAudit className="myBtn-danger" childrenTitle="Reject"  childrenIcon={<i className="m-1 fa-solid fa-x"></i> } />

<BtnAudit className="myBtn-success" childrenTitle="Accept"  childrenIcon={<i className="m-1 fa-solid fa-check"></i> } />

                    </div>
                </div>
            </div>
        </>
    );
}

export default CompanyRequest;
