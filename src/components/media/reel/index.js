import React from "react";

export const Reel = ({ items, heading }) => {
  return (
    <div className="p-1 pt-3 ">
      <div className="border border-2 border-secondary">
        <h5 className="text-primary text-center mt-2">{heading}</h5>
        {items &&
          items.map((item, index) => (
            <iframe
              key={index}
              className="w-100 h-100 p-3"
              src={item.source}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ))}
      </div>
    </div>
  );
};

export default Reel;
