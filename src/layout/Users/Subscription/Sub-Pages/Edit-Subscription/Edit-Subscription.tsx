import CompanyForms from "../../../../../Shared-lib/Components/Company-Forms/Company-Forms";
import RequestsHeader from "../../../../../Shared-lib/Components/Requests/Requests-header";
import BtnAudit from "../../../../../Shared-lib/Components/btns/btn-audit/btn-audit";

function EditSubscription() {
    const headers = ["ID", "Name", "Actions"];

    return (
        <>
            <div className="bg px-5">


                <div className="bgSeccion p-2">
                    <RequestsHeader titleHeader="Subscriptions" titleHeader2="Subscription" title="Edit Subscription" />

                </div>



                <hr style={{ color: 'rgb(141, 140, 140)' }} />


                <CompanyForms titleHeaderName="Subscriptions"
                    labelOne='Name' labelTwo="Price" permissions
                />

                <hr style={{ color: 'rgb(141, 140, 140)' }} />






                <div className="col-11 mb-4 px-5">
                    <div className="text-end">
                        <BtnAudit className="myBtnNew-back" childrenTitle="Back" childrenIcon={<i className="m-1 fa-solid fa-arrow-left-long"></i>} />
                        <BtnAudit className="myBtnNew-info" childrenTitle="Save" childrenIcon={<i className="m-1 fa-solid fa-check"></i>} />

                    </div>
                </div>
            </div>
        </>
    );
}

export default EditSubscription