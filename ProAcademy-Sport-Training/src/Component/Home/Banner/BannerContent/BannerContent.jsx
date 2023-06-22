import React from 'react';

const BannerContent = ({image,title,subtitle,btnText}) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-10  text-3xl md:text-5xl font-bold uppercase  italic ">
            {title}
          </h1>
          <p className="mb-5 mt-5 uppercase font-serif">
            {" "}
            <p>{subtitle}</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;