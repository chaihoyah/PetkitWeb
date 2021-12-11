import { useState } from "react";
import Navigation from "../components/navigation";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Form, Image, Modal } from "react-bootstrap";

import "./payment.css";

function ListPayment() {
  const navigate = useNavigate();

  /* Modal Logout Confirm */
  const [showConfirm, setShowConfirm] = useState(false);
  const handleCloseConfirm = () => setShowConfirm(false);
  const handleShowConfirm = () => setShowConfirm(true);

  return (
    <>
    <Navigation title="결제 수단" />
    <div className="payment-list-wrap">

      <section className="payment-card-list">
        <Form>
          <div className="payment-card-item">
            <Row>
              <Col xs={6}>
              <Form.Group className="mb-3" controlId="chkPrimaryCard">
                <Form.Check type="checkbox" label="대표 결제 수단" />
              </Form.Group>
              </Col>
              <Col xs={6} className="text-end">
                <Button variant="default" size="xs" className="px-0" onClick={handleShowConfirm}>삭제하기</Button>
              </Col>

              <Col xs={12}>
                <p className="text-normal">은행 이름</p>
              </Col>
              <Col xs={6}>
                <p className="mb-0">****-****-****-5678</p>
              </Col>
              <Col xs={6} className="text-end">
                <span className="payment-card-item-type">개인</span>
              </Col>
            </Row>
          </div>

          <div className="payment-card-item">
            <Row>
              <Col xs={6}>
              <Form.Group className="mb-3" controlId="chkPrimaryCard">
                <Form.Check type="checkbox" label="대표 결제 수단" />
              </Form.Group>
              </Col>
              <Col xs={6} className="text-end">
                <Button variant="default" size="xs" className="px-0" onClick={handleShowConfirm}>삭제하기</Button>
              </Col>

              <Col xs={12}>
                <p className="text-normal">은행 이름</p>
              </Col>
              <Col xs={6}>
                <p className="mb-0">****-****-****-5678</p>
              </Col>
              <Col xs={6} className="text-end">
                <span className="payment-card-item-type">법인</span>
              </Col>
            </Row>
          </div>
        </Form>

        <Modal centered className="modal-qa" show={showConfirm} onHide={handleCloseConfirm}>
          <Modal.Body>
            <p>해당 결제 수단을 삭제하시겠습니까?</p>
            <p className="mb-0">은행: 신한은행</p>
            <p>카드번호: ****-****-5678</p>
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button variant="primary" onClick={handleCloseConfirm}>삭제</Button>
            <Button variant="secondary" onClick={handleCloseConfirm}>취소</Button>
          </Modal.Footer>
        </Modal>
      </section>

      <Button variant="outline-secondary" className="no-rounded w-100" size="lg" onClick={() => navigate("/payment-add")}><Image src="images/plus-small-icon.png" className="img-add-payment-icon" />카드 등록</Button>
    </div>
    </>
  );
}

export default ListPayment;