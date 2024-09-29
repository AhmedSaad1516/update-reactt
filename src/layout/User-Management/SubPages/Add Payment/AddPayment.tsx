import { NavLink } from "react-router-dom";
import CompanyForms from "../../../../Shared-lib/Components/Company-Forms/Company-Forms";
import Courses from "../../../../Shared-lib/Components/Courses/Courses";
import PersonalInfo from "../../../../Shared-lib/Components/Personal-info/Personal-info";
import RequestsHeader from "../../../../Shared-lib/Components/Requests/Requests-header";
import Tables from "../../../../Shared-lib/Components/Tables/Tables";
import BtnAudit from "../../../../Shared-lib/Components/btns/btn-audit/btn-audit";

function AddPayment(){
    const headers = ["ID" , "Name" , "Actions"];

    return (
        <>
            <div className="bg px-5">

            <div className="  bgSeccion p-2"> 
            <RequestsHeader titleHeader="Payments" titleHeader2="Payments" title="Add Payments"  />

            </div>

          
<br />               
            
                <CompanyForms titleHeaderName='Add Payments'
                     labelOne='Payment Name' labelTwo='Duration'
                    />
                                    <hr style={{ color: 'rgb(141, 140, 140)' }} />

               




                <div className="col-11 mb-4 px-5">
                    <div className="text-end">
                    <BtnAudit className="myBtnNew-back" childrenTitle="Back"  childrenIcon={<i className="m-1 fa-solid fa-arrow-left-long"></i> } />

<BtnAudit className="myBtnNew-info" childrenTitle="Save"  childrenIcon={<i className="m-1 fa-solid fa-check"></i> } />

                    </div>
                </div>
            </div>
        </>
    );
}
export default  AddPayment