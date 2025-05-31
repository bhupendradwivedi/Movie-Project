import React from "react";
import Search from "./Search"; // 👈 corrected import

const Topnav = () => {
  return (
    <div className="topnav">
      <Search />
    </div>
  );
};

export default Topnav;
