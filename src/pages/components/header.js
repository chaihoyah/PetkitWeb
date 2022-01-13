import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header-wrap" id="header-wrap-main" >
        <Link className="logo" to="/"></Link>
        <Link className="user-icon" id="user-icon-main" to='/user' state={{back:'/'}}></Link>
    </div>
  )
}

export default Header;