import { useState } from "react";
import Navigation from "../components/navigation";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Form, Modal } from "react-bootstrap";

import "./payment.css";

function AddPayment() {
  const navigate = useNavigate();

  /* Modal Confirm */
  const [showConfirm, setShowConfirm] = useState(false);
  const handleCloseConfirm = () => setShowConfirm(false);
  const handleShowConfirm = () => setShowConfirm(true);

  /* Checkbox person || company */
  const [isCompany, setIsCompany] = useState(false);
  const handleChange = (event) => {
    setIsCompany(!isCompany);
  }

  return (
    <>
    <Navigation title="카드 등록" />
    <div className="payment-add-wrap">
      <Form>
        <Row className="mb-3">
          <Col xs={6}>
            <Form.Label>카드번호</Form.Label>
          </Col>
          <Col xs={6}>
            <Form.Group className="mb-3" id="chkCardType">
              <Form.Check type="checkbox" label="법인 공용카드" onChange={handleChange} checked={isCompany} />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Control type="text" size="lg" placeholder="1234 - 5678 - 1234 - 5678" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="txtExpired">
            <Form.Label>유효기간</Form.Label>
            <Form.Control type="text" size="lg" placeholder="MM / YY" />
          </Form.Group>

          <Form.Group as={Col} controlId="txtCVC">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" size="lg" placeholder="앞 2자리" />
          </Form.Group>
        </Row>

        {isCompany ?
        <Row className="mb-3">
          <Form.Group as={Col} controlId="txtNumberCompany">
            <Form.Label>사업자 등록 번호</Form.Label>
            <Form.Control type="text" size="lg" placeholder="123 - 45 - 12345" />
          </Form.Group>
        </Row>
        :
        <Row className="mb-3">
          <Form.Group as={Col} controlId="txtBirthday">
            <Form.Label>생년월일</Form.Label>
            <Form.Control type="text" size="lg" placeholder="YYMMDD" />
          </Form.Group>
        </Row>
        }
      </Form>

      <Button variant="secondary" className="no-rounded w-100" size="lg" onClick={handleShowConfirm}>등록하기</Button>

      <Modal centered className="modal-add-card" show={showConfirm} onHide={handleCloseConfirm}>
        <Modal.Body>
          <p className="mb-5">해당 정보로 등록 하시겠습니까?</p>
          <p className="mb-0">은행: 신한은행</p>
          <p>카드번호: ****-****-5678</p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" onClick={() => navigate("/payment")}>등록</Button>
          <Button variant="secondary" onClick={handleCloseConfirm}>취소</Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}

export default AddPayment;