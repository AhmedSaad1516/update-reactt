interface dataTilte{
    titleHeader :string
}
function PersonalInfo({titleHeader}:dataTilte) { 
    return (
        <>

<div className="bgSeccion row justify-content-center mb-5">
<div className="pt-3">
                    <h1 className="sec-font-color title">{titleHeader}</h1>
                </div>
                <hr style={{ color: 'rgb(141, 140, 140)' }} />

                        <div className="row mt-5 mb-3">
                            <div className="col-lg-4 col-md-6 info mb-5">
                                <div>
                                    <div className="row align-items-center">
                                        <div className="col-3 text-end">
                                            <i className="fa-regular fa-user"></i>
                                        </div>
                                        <div className="col-9">
                                            <p className="mb-1 names ">Full Name</p>
                                            <p className="m-0 details">Jane Cooper</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 info mb-5">
                                <div>
                                    <div className="row align-items-center">
                                        <div className="col-3 text-end">
                                            <i className="fa-regular fa-envelope"></i>
                                        </div>
                                        <div className="col-9">
                                            <p className="mb-1 names ">Email</p>
                                            <p className="m-0 details">Example@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 info mb-5">
                                <div>
                                    <div className="row align-items-center">
                                        <div className="col-3 text-end">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <div className="col-9">
                                            <p className="mb-1 names">Phone Number</p>
                                            <p className="m-0 details">020 123456789</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 info mb-5">
                                <div>
                                    <div className="row align-items-center">
                                        <div className="col-3 text-end">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="col-9">
                                            <p className="mb-1 names ">Country</p>
                                            <p className="m-0 details">Egypt</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 info mb-5">
                                <div>
                                    <div className="row align-items-center">
                                        <div className="col-3 text-end">
                                            <i className="fa-solid fa-calendar-days"></i>
                                        </div>
                                        <div className="col-9">
                                            <p className="mb-1 names ">Request Date</p>
                                            <p className="m-0 details">12/1/2024-10AM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 info mb-5">
                                <div>
                                    <div className="row align-items-center">
                                        <div className="col-3 text-end">
                                            <i className="fa-regular fa-file"></i>
                                        </div>
                                        <div className="col-9">
                                            <p className="mb-1 names ">High level of education</p>
                                            <p className="m-0 details">Bachelor of accounting</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
    
}

export default PersonalInfo