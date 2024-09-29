interface Course {
    label: string;
    detail: string;
  }
interface Data{
    labelHeader:string ,
    coursesList:Course[]
  }
function Courses({labelHeader ,coursesList}:Data){
   


    return (
    <>
        <section className="bgSeccion row justify-content-center mb-5">
                    <h2 className="p-4 sec-font-color title">{labelHeader}</h2>
                    <hr style={{ color: "rgb(141, 140, 140)" }} />
                    <div className="row justify-content-center mb-5">
                        {coursesList.map((course, index) => (
                            <div key={index} className="row mt-5 mb-3">
                                <label className=" fw-bold text-dark">{course.label}</label>
                                <div className="col-11 certificate px-3">
                                    <div className="row align-items-center justify-content-between">
                                        <div className="col-lg-1 text-lg-end text-start">
                                            <i className="fa-regular fa-file-pdf"></i>
                                        </div>
                                        <div className="col-lg-9">
                                            <p className="mb-1 header-details">{course.detail}</p>
                                            <p className="m-0  opacity-50">JPG, PNG or PDF, file size no more than 10MB</p>
                                        </div>
                                        <div className="col-lg-2 text-end">
                                            <button className="btn downloadBtn" type="button">
                                                <i className="fa-solid fa-download"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

    </>)
}

export default Courses