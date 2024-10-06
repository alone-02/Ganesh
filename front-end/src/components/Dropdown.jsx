import React, { useState } from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Dropdown() {
  const [istoggle, setToggle] = useState(false);

  function toggle() {
    setToggle(!istoggle);
    console.log("HII");
  }

  return (
    <>
      <div className="accountIcon">
        <AccountCircleOutlinedIcon style={{ fontSize: "40px" }} onClick={toggle} />
      </div>
        {istoggle && (
          <div className="toggle" >
            <a href="/account">Profile</a>
            <a href="/sign out">Orders</a>
            <a href="/sign out">Sign Out</a>
          </div>
        )}
    
    </>
  );
}

export default Dropdown;
