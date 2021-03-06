import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-white flex flex-col rounded-md shadow-md">
      <div className="flex flex-col items-left m-8">
        <div className="mb-4">
          <img
            src={icon}
            alt="two excited characters using their electronic devices"
            width={50}
          ></img>
        </div>
        <div className="font-bold mb-2">{title}</div>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
};

export default Card;
