
import BtnAudit from "../../../Shared-lib/Components/btns/btn-audit/btn-audit";
import CompanyAddress from "../../../Shared-lib/Components/Company-Address/CompanyAddress";
import CompanyForms from "../../../Shared-lib/Components/Company-Forms/Company-Forms";
import Courses from "../../../Shared-lib/Components/Courses/Courses";
import PersonalInfo from "../../../Shared-lib/Components/Personal-info/Personal-info";
import RequestsHeader from "../../../Shared-lib/Components/Requests/Requests-header";
import Tables from "../../../Shared-lib/Components/Tables/Tables";
import { NavLink } from 'react-router-dom';

function EditCompany(){
    const headers = ["ID" , "Name" , "Actions"];

    return (
        <>
            <div className="bg px-5">
            <RequestsHeader titleHeader="Company" titleHeader2="Company" title="Edit"  />

            

                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <h1 className="sec-font-color title">Company Info</h1>
                </div>
                <hr style={{ color: 'rgb(141, 140, 140)' }} />
               
                <div className="container">
                <PersonalInfo/>
                </div>
                <CompanyForms titleHeaderName='Company Address'
                     labelOne='Country' labelTwo='Company Address'
                    />
                                    <hr style={{ color: 'rgb(141, 140, 140)' }} />

                <Courses 
                  coursesList={[
                    { label: "License and Tax Information ", detail: "License and Tax Information " },
                  ]}
                
                labelHeader='License and Tax Information'/>

<div className="bgSeccion d-flex p-3 justify-content-between mb-5">

<h1 className="myText">Jop Offers</h1>



<NavLink to='/Job-Offers'>

< BtnAudit className="myBtn-view m-1" childrenTitle="View Jop"  />

</NavLink>

</div>
                <hr style={{ color: 'rgb(141, 140, 140)' }} />
                <h2 className="sec-font-color title">Active Subscription</h2>
                <hr style={{ color: 'rgb(141, 140, 140)' }} />

                 <Tables  styleName="customNew-table "
                   thead={headers}
                   tbodys={[
                    ["#123456", " Accountant Subscription",
                      <BtnAudit className="myBtnNew-info  btn-sm px-2 py-2"  childrenIcon={<i className="ps-0  fa-1x fa-solid fa-ban  "></i> } />

                  ],
                    ["#123456", "Accountant Subscription",
                      <BtnAudit className="myBtnNew-info  btn-sm px-2 py-2"  childrenIcon={<i className="ps-0  fa-1x fa-solid fa-ban  "></i> } />

                     ]
                  ]}
                 />
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

export default EditCompany