import { useState } from "react";
import Navigation from "../components/navigation";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Button, Modal } from "react-bootstrap";

import "./user.css";

function UserModify() {
  const navigate = useNavigate();

  /* Modal Logout Confirm */
  const [showConfirm, setShowConfirm] = useState(false);
  const handleCloseConfirm = () => setShowConfirm(false);
  const handleShowConfirm = () => setShowConfirm(true);

  return (
    <>
      <Navigation title="회원정보 수정" alert="수정된 정보가 저장되지 않습니다. 정말 나가시겠습니까?" />
      <div className="user-modify-wrap">
        <Form>
          <Form.Group className="mb-3" controlId="inputName">
            <Form.Label>이름</Form.Label>
            <Form.Control type="text" size="lg" value="이동혁" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="inputAddress1">
            <Form.Label>주소</Form.Label>
            <Form.Control type="text" size="lg" value="경기도 안양시 어쩌구" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="inputAddress2">
            <Form.Control type="text" size="lg" value="205동 901호 (상세주소)" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="inputAddress3">
              <Form.Control type="text" size="lg" value="06305" />
              <Form.Text id="inputAddress3Help" muted>(우펴번호)</Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Button variant="secondary" size="lg" className="w-100">주소 찾기</Button>
            </Form.Group>
          </Row>
          
          <h3 className="section-title">부가정보 등록/변경</h3>
          <Form.Group className="mb-3" controlId="inputSex">
            <Form.Label>성별</Form.Label>
            <Form.Select size="lg">
              <option value="1">남</option>
              <option value="2">여</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="inputBirthyear">
            <Form.Label>출생연도</Form.Label>
            <Form.Select size="lg">
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="...">...</option>
            </Form.Select>
          </Form.Group>

          <Button className="w-100" size="lg" onClick={handleShowConfirm}>수정 완료</Button>

          <Modal centered className="modal-qa" show={showConfirm} onHide={handleCloseConfirm}>
            <Modal.Body>해당 정보로 수정하시겠습니까?</Modal.Body>
            <Modal.Footer className="justify-content-center">
              <Button variant="primary" onClick={() => navigate("/user-info")}>네</Button>
              <Button variant="secondary" onClick={handleCloseConfirm}>아니오</Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </div>
    </>
  );
}

export default UserModify;


