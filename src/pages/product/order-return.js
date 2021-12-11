import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import Navigation from "../components/navigation";

import "./product.css";

function OrderReturn() {

  /* For Modal Confirm */
  const [showConfirm, setShowConfirm] = useState(false);
  const handleCloseConfirm = () => setShowConfirm(false);
  const handleShowConfirm = () => setShowConfirm(true);

  const [showConfirmReturn, setShowConfirmReturn] = useState(false);
  const handleCloseConfirmReturn = () => {
    setShowConfirmReturn(false);
  }
  const handleShowConfirmReturn = () => {
    setShowConfirm(false);
    setShowConfirmReturn(true);
  }

  const reasonReturnList = [
    {
      id: 1,
      title: "단순 변심 (상품이 마음에 들지 않음)"
    },
    {
      id: 1,
      title: "상품 문제 (상품 구성이 완전하지 않음)"
    },
    {
      id: 1,
      title: "상품 문제 (상품 구성이 설명과 다름)"
    },
    {
      id: 1,
      title: "배송 문제 (다른 주소로 배송)"
    }
  ]

  return (
    <>
    <Navigation title="교환 및 반품" />
    <div className="order-return-wrap">
      <h3 className="text-large mt-5 mb-3">교환 및 반품 사유 선택</h3>

      {reasonReturnList.map((item, index) => 
        <div key={index} className="mb-3">
          <Form.Check label={item.title} name="group1" type="checkbox" id={`chk-${index}`} />
        </div>
      )}

      <h3 className="text-large mt-5 mb-3">상세 사유 작성</h3>
      <Form.Control as="textarea" rows={5} placeholder="텍스트 인풋 박스" />

      <Button className="w-100 mt-3 no-rounded" size="lg" onClick={handleShowConfirm}>교환 및 반품 신청</Button>

      <Modal centered show={showConfirm} onHide={handleCloseConfirm}>
        <Modal.Body>교환 및 반품 신청을 하시겠습니까?</Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" onClick={handleShowConfirmReturn}>네</Button>
          <Button variant="secondary" onClick={handleCloseConfirm}>아니오</Button>
        </Modal.Footer>
      </Modal>

      <Modal centered show={showConfirmReturn} onHide={handleCloseConfirmReturn}>
        <Modal.Body>
          <div className="text-center">
            신청이 완료되었습니다.<br/>
            빠른 시일내에 처리하도록 하겠습니다.
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" onClick={handleCloseConfirmReturn}>확인</Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}

export default OrderReturn;