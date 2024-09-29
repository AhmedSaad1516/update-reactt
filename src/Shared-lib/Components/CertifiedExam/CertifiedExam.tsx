
interface data {
    titleHeader:string
}
function CertifiedExam({titleHeader}:data){
    return (<>
    <section>
                    <h2 className="sec-font-color title"> {titleHeader}</h2>
                    <hr style={{ color: "rgb(141, 140, 140)" }} />
                    <div className="row justify-content-center mb-5">
                        <div className="row mt-5 mb-3">
                            <div className="col-11 certificate">
                                <div className="container position-relative">
                                    <div className="position-absolute pass-container">
                                        <p className="px-2 pass-pos m-0 col-lg-2 text-center passed">
                                            <i className="fa-regular fa-thumbs-up"></i> Passed
                                        </p>
                                    </div>
                                    <div className="row text-md-start text-center justify-content-center">
                                                <div className="col-lg-4 col-md-6 ps-md-5 mb-2 fw-bold">Points:</div>
                                                <div className="col-lg-8 col-md-6 row">
                                                    <p className="m-0 col-lg-12">40/70</p>

                                                </div>
                                                <div className="col-lg-4 col-md-6 ps-md-5 mb-2 fw-bold">Percentage:</div>
                                                <div className="col-lg-8 col-md-6 row">
                                                    <p className="m-0 col-lg-12">60%</p>
                                                </div>
                                                <div className="col-lg-4 col-md-6 ps-md-5 mb-2 fw-bold">Duration:</div>
                                                <div className="col-lg-8 col-md-6 row">
                                                    <p className="m-0 col-lg-12">00:00:24</p>
                                                </div>
                                                <div className="col-lg-4 col-md-6 ps-md-5 mb-2 fw-bold">Date started:</div>
                                                <div className="col-lg-8 col-md-6 row">
                                                    <p className="m-0 col-lg-12">Tue 10 Sep 24 04:00</p>
                                                </div>
                                                <div className="col-lg-4 col-md-6 ps-md-5 mb-2 fw-bold">Date finished:</div>
                                                <div className="col-lg-8 col-md-6 row">
                                                    <p className="m-0 col-lg-12">Tue 10 Sep 24 04:00</p>
                                                </div>
                                            </div>
                                            <div className="ms-md-5 ms-2 ps-2 mt-4 feedback">
                                                <p className="fw-bold pt-4">Feedback</p>
                                                <p className="pb-4">
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
                                                    exercitationem commodi eveniet delectus, illum doloremque neque,
                                                    beatae
                                                    autem enim rerum sint in labore voluptas, sit impedit iure hic rem
                                                    esse?
                                                </p>
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </>)
}

export default CertifiedExam