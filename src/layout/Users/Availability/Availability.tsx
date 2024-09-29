import BtnAudit from "../../../Shared-lib/Components/btns/btn-audit/btn-audit";
import Calendar from "../../../Shared-lib/Components/Calendar/Calendar"
import RequestsHeader from "../../../Shared-lib/Components/Requests/Requests-header"
import PersonalInfo from "../../../Shared-lib/Components/Personal-info/Personal-info"
function  Availability (){

    return (
        <>
            <div className="bg px-5">
            <div className="bgSeccion d-flex p-2 justify-content-between mb-5">
              <RequestsHeader titleHeader="Availability" titleHeader2="Availability"  />
              <BtnAudit className="myBtn-view-add m-4" childrenTitle="Select this time"  childrenIcon={<i className="ps-0  fa-1x fa-solid fa-plus  "></i> } />

              </div>

            

          
             
                <Calendar />
           
       

               
               
            </div>
        </>
    );

}

export default Availability
