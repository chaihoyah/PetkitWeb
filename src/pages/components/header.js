import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div id="header-wrap" className="header-wrap">
      <div className="d-flex top-bar">
        <div className="p-2"><Link to="/"><img src="images/logo.png" alt="Logo" className="logo" /></Link></div>
        <div className="ms-auto p-2 mt-1"><Link to='/user'><FontAwesomeIcon icon={faUserCog} className="fa-user-icon" /></Link></div>
      </div>
    </div>
  )
}

export default Header;