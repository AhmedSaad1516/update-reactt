import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface TitleHeader {
  titleHeaderName: string;
  labelOne: string;
  labelTwo: string;
  permissions?: boolean; 
}

function CompanyForms({ titleHeaderName, permissions = false, labelOne, labelTwo }: TitleHeader) {
  const [value, setValue] = useState('');

  const handleChange = (content: string) => {
    setValue(content);
  };

  return (
    <>
      <div className='bgSeccion p-4'>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <h1 className="sec-font-color title">{titleHeaderName}</h1>
        </div>
        <hr style={{ color: 'rgb(141, 140, 140)' }} />
        <div className="row justify-content-center mb-5">
          <div className="row mt-5 mb-3">
            <div className="info mb-4">
              <div className="row align-items-center">
                <div className="ms-1 col-2">
                  <label className="mb-1 inputHeader fw-bold text-dark">{labelOne}</label>
                </div>
                <div className="col-12">
                  <input type="text" placeholder="Country" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="info mb-3">
              <div className="row align-items-center">
                <div className="ms-1 col-2">
                  <label className="mb-1 inputHeader fw-bold text-dark">{labelTwo}</label>
                </div>
                <div className="col-12">
                  <input type="text" placeholder="Company Address" className="form-control" />
                </div>
              </div>
            </div>
          </div>

          {/* Conditionally render ReactQuill based on permissions */}
          {permissions && (
            <div className="row mb-3">
              <div className="info mb-3">
                <div className="row align-items-center">
                  <div className="ms-1 col-2">
                    <label className="mb-1 inputHeader fw-bold text-dark">Permissions</label>
                  </div>
                  <div className="col-12">
                    <ReactQuill value={value} onChange={handleChange} />
                    
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CompanyForms;
