import { NavLink } from "react-router-dom";
import BtnAudit from "../../../Shared-lib/Components/btns/btn-audit/btn-audit";
import PersonalInfo from "../../../Shared-lib/Components/Personal-info/Personal-info"
import RequestsHeader from "../../../Shared-lib/Components/Requests/Requests-header"
import SearchInput from "../../../Shared-lib/Components/SearchInput/SearchInput";
import Select from "../../../Shared-lib/Components/Select/Select";
import Tables from "../../../Shared-lib/Components/Tables/Tables";

function Payments (){
    const headers = ["ID","Name", "Email", "Phone Number", "Account Status", "Actions"];
    const customButtons = (
        <>
     
          <BtnAudit className="myBtnNew-info  btn-sm px-2 py-2"  childrenIcon={<i className="ps-0  fa-1x fa-solid fa-ban  "></i> } />
            <BtnAudit className="myBtnNew-info m-2  btn-sm px-2 py-2" childrenIcon={<i className="ps-0  fa-1x fa-solid fa-pen"></i>} />
            <BtnAudit className="myBtnNew-danger m-2  btn-sm px-2 py-2"  childrenIcon={<i className="ps-0  fa-1x fa-solid fa-trash"></i>} />
        </>
    )
    return (
        <div className="bg px-lg-4 px-md-3">
        <div className="bgSeccion d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center p-2 mb-3">
        <RequestsHeader titleHeader='Payments' titleHeader2='Payments' /> 
                        <BtnAudit className="myBtnNew-info" childrenTitle="Add New Payment" childrenIcon={<i className="m-1 fa-solid fa-check"></i>} />

        </div>
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-9 col-6">
                    <SearchInput/>
                </div>
                <div className="col-md-3 col-6">
                    <div className="row">
                        <div className="col-9 p-0 pe-1">
                            <Select/>
                        </div>
                        <div className="col-2 p-2 text-center">
                            <button className="btn delete" aria-label="Delete Requests">
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
        <Tables styleName="customNew-table"
         thead={headers} 
         tbodys={[
            ["#123456", " Accountant Subscription",
                "user@gmail.com", "123456789",
                <p className="py-2 m-0 text-center status requestCard"> Interviewer</p> ,
<div className="py-0 m-0 text-center button-group">
                <NavLink to='/edit-accuntant'>
                
                <BtnAudit className="myBtnNew-info  btn-sm px-2 py-2"  childrenIcon={<i className="ps-0  fa-1x fa-solid fa-pen  "></i> } />,
               </NavLink>          <BtnAudit className="myBtnNew-danger  btn-sm px-2 py-2"  childrenIcon={<i className="ps-0  fa-1x fa-solid fa-trash  "></i> } />,

                     </div>
          ],
            ["#123456", "Accountant Subscription",
                "user@gmail.com","123456789",
                <p className="py-2 m-0 text-center status requestCard"> Interviewer</p> ,

                <div className="py-0 m-0 text-center button-group">
                <NavLink to='/edit-accuntant'>
                
                <BtnAudit className="myBtnNew-info  btn-sm px-2 py-2"  childrenIcon={<i className="ps-0  fa-1x fa-solid fa-pen  "></i> } />,
               </NavLink>         
               
                <BtnAudit className="myBtnNew-danger  btn-sm px-2 py-2"  childrenIcon={<i className="ps-0  fa-1x fa-solid fa-trash  "></i> } />,

                     </div>
             ]
          ]} 
         customButtons={customButtons} />


        
    </div>
    );
}

export default Payments