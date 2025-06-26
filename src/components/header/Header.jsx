
import { useState } from "react";
import "./header.css"
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import Navbar from "./Navbar";


const Header = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="header">

      <TopHeader
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <MiddleHeader />
      <Navbar
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />

    </header>
  )
}

export default Header