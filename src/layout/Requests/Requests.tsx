import React from 'react';
import './Requests.css';
import BtnAudit from '../../Shared-lib/Components/btns/btn-audit/btn-audit';
import Tables from '../../Shared-lib/Components/Tables/Tables';
import SearchInput from '../../Shared-lib/Components/SearchInput/SearchInput';
import Select from '../../Shared-lib/Components/Select/Select';
import RequestsHeader from '../../Shared-lib/Components/Requests/Requests-header';



function Requests() {
    const headers = ["ID","Name", "Email", "Position", "Request", "Actions"];


    const customButtons = (
        <>
            <BtnAudit className="myBtn-info  btn-sm px-2 py-2" childrenTitle="View" childrenIcon={<i className="ps-3 pe-2 fa-regular fa-eye"></i>} />
            <BtnAudit className="myBtn-danger" childrenTitle="Reject" childrenIcon={<i className="m-1 fa-solid fa-x"></i>} />
            <BtnAudit className="myBtn-success" childrenTitle="Accept" childrenIcon={<i className="m-1 fa-solid fa-check"></i>} />
        </>
    )
    return (
        <div className="bg px-lg-4 px-md-3">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <RequestsHeader titleHeader='Requests' titleHeader2='Requests'/>
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
        <Tables styleName='custom-table' 
        thead={headers} customButtons={customButtons}
        tbodys={[
            ["#123456", " Accountant Subscription",
                "user@gmail.com", "123456789",
                <p className="py-2 m-0 text-center status requestCard"> Interviewer</p> ,

             
                <div className="py-0 m-0 text-center button-group">
                <BtnAudit className="myBtnNew-info  btn-sm px-2 py-2"  childrenIcon={<i className="ps-0  fa-1x fa-solid fa-ban  "></i> } />,
          <BtnAudit className="myBtnNew-info  btn-sm px-2 py-2"  childrenIcon={<i className="ps-0  fa-1x fa-solid fa-pen  "></i> } />,
          <BtnAudit className="myBtnNew-danger  btn-sm px-2 py-2"  childrenIcon={<i className="ps-0  fa-1x fa-solid fa-trash  "></i> } />,

                     </div>

          ],
            ["#123456", "Accountant Subscription",
                "user@gmail.com","123456789",
                <p className="py-2 m-0 text-center status requestCard"> Interviewer</p> ,
          
                <div className="py-0 m-0 text-center button-group">
                    <BtnAudit className="myBtnNew-info  btn-sm px-2 py-2"  childrenIcon={<i className="ps-0  fa-1x fa-solid fa-ban  "></i> } />,
              <BtnAudit className="myBtnNew-info  btn-sm px-2 py-2"  childrenIcon={<i className="ps-0  fa-1x fa-solid fa-pen  "></i> } />,
              <BtnAudit className="myBtnNew-danger  btn-sm px-2 py-2"  childrenIcon={<i className="ps-0  fa-1x fa-solid fa-trash  "></i> } />,

                         </div>
                 

             ]
          ]} 
        />

        
    </div>
    );
}

export default Requests;
