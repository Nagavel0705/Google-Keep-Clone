import React from "react";
import HiveIcon from "@mui/icons-material/Hive";

function Header() {
  return (
    <header>
      <HiveIcon className="header-icon" fontSize="large" />
      <h1>Keeper</h1>
    </header>
  );
}

export default Header;
