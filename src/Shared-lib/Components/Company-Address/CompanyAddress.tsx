interface AllData{
    titleHeader:string,
    lables:string,
    lables2:string,
}

function CompanyAddress({titleHeader ,lables ,lables2} :AllData){
    return (<>
     <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <h1 className="sec-font-color title">{titleHeader}</h1>
                </div>
                <hr style={{ color: 'rgb(141, 140, 140)' }} />
      <div className="row justify-content-center mb-5">
                    <div className="row mt-5 mb-3">
                        <div className="info mb-4">
                            <div>
                                <div className="row align-items-center">
                                    <div className="ms-1 col-2">
                                        <label className="mb-1 inputHeader fw-bold text-dark"> {lables}</label>
                                    </div>
                                    <div className="col-12">
                                        <input type="text" placeholder="Country" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="info mb-3">
                            <div>
                                <div className="row align-items-center">
                                    <div className="ms-1 col-2">
                                        <label className="mb-1 inputHeader fw-bold text-dark"> {lables2}</label>
                                    </div>
                                    <div className="col-12">
                                        <input type="text" placeholder="Company Address" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
    
    </>)
}
export default CompanyAddress