import React from "react";

const LogedLogo = () => {
  return (
    <a href="/" className="flex justify-start items-start">
      <span className="text-tblue text-5xl font-extrabold">A</span>
      <div className="flex gap-0 flex-col pt-1">
        <h2 className="-mb-3 text-desired text-xl font-extrabold">Soft</h2>
        <p className="text-blue-500 text-base pt-1">lema</p>
      </div>
    </a>
  );
};

export default LogedLogo;
