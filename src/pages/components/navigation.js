import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { Button, Modal } from "react-bootstrap";


function Navigation(props) {
  const navigate = useNavigate();

  /* Modal Logout Confirm */
  const [showConfirm, setShowConfirm] = useState(false);
  const handleCloseConfirm = () => setShowConfirm(false);
  const handleShowConfirm = () => {
    if (props.alert && (props.alert.length > 0)) {
      setShowConfirm(true);
    } else {
      navigate(-1);
    }
  }

  return (
    <div className="my-3">
      <div className="box-navigate">
        <Button variant="navigate" onClick={handleShowConfirm}></Button>
        <div className="text-neom text-smallmedium text-black text-center text-navigate">{props.title}&nbsp;</div>
      </div>
      {props.alert && (props.alert.length > 0) &&
      <Modal centered className="modal-qa" show={showConfirm} onHide={handleCloseConfirm}>
        <Modal.Body>{props.alert}</Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" onClick={() => navigate(-1)}>네</Button>
          <Button variant="secondary" onClick={handleCloseConfirm}>아니오</Button>
        </Modal.Footer>
      </Modal>
      }
    </div>
  )
}

export default Navigation;