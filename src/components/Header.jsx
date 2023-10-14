import React from "react";
import { Link } from "react-router-dom";
import {LuLogIn} from 'react-icons/lu';
const Header = () => {
  return (
<header className="p-4 d-flex justify-content-between align-items-center ">
<Link to={'/'}>
<img
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt=""
        style={{maxWidth:'150px'}}
      /></Link>
    
      <Link to={'/login'}>
        <i className="icon"><LuLogIn className="fs-3"/> Login</i>
      </Link>
</header>

 
  );
};

export default Header;
