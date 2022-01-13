import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function HeaderDetail(props) {
  const navigate = useNavigate();

  return (
    <div className="header-wrap" id="header-wrap-detail" >
      <Button variant="navigate" className="btn-navigate-header" onClick={() => navigate(-1)}>&nbsp;</Button>
      <div className="logo-two"></div>
      <Link className="user-icon" to='/user' state={{back:'/'}}></Link>
    </div>
  );
}

export default HeaderDetail;