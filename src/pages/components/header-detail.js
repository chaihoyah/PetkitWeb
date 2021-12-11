import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';

function HeaderDetail(props) {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-between">
      <div className=""><Button variant="default" className="btn-navigate" onClick={() => navigate(-1)}>&nbsp;</Button></div>
      <div className="header-logo-section"><Link to="/"><img src="images/logo.png" alt="Logo" className="logo" /></Link></div>
      <div className="header-user-section"><Link to='/user'><FontAwesomeIcon icon={faUserCog} className="fa-user-icon" /></Link></div>
    </div>
  );
}

export default HeaderDetail;