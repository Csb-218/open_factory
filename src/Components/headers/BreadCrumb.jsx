import React from 'react'

const BreadCrumb = () => {
  return (
    
    <div className="row breadcrumbs mt-3 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">        
            <div className="col-md-9">
              <h3 className="title">Device</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">Home</li>            
                  <li className="breadcrumb-item active" aria-current="page">Device</li>
                </ol>
              </nav>
            </div>
            <div className="col-md-3">
              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
              </form>
            </div>
        </div>
    
  )
}

export default BreadCrumb