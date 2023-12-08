import React from 'react';

function Imgshowcase({ showImage }) {
  return (
    <>
      {showImage.isImageRight ? (
        <div className="row g-0">
          <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: `url(${showImage.img})`}}>
            {/* <img src={showImage.img} alt="" /> */}
          </div>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>{showImage.heading}</h2>
            <p className="lead mb-0">{showImage.desc}</p>
          </div>
        </div>
      ) : (
        <div className="row g-0">
          <div className="col-lg-6 text-white showcase-img" style={{backgroundImage: `url(${showImage.img})`}}>
            {/* <img src={showImage.img} alt="" /> */}
          </div>
          <div className="col-lg-6 my-auto showcase-text">
            <h2>{showImage.heading}</h2>
            <p className="lead mb-0">{showImage.desc}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Imgshowcase;
