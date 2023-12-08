import React from 'react'

function Icons({icons}) {
  return <>
    <div className="col-lg-4">
        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex"><i className={`${icons.icon} m-auto text-primary`}></i></div>
            <h3>{icons.head}</h3>
            <p className="lead mb-0">{icons.desc}</p>
        </div>
    </div>

  </>
}

export default Icons