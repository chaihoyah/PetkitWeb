import { useState } from "react";
import Navigation from "../components/navigation";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Form, Image, Modal, Table } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import "./product.css";

function Cart() {
  const navigate = useNavigate();

  /* Modal Logout Confirm */
  const [showConfirm, setShowConfirm] = useState(false);
  const handleCloseConfirm = () => setShowConfirm(false);
  const handleShowConfirm = () => setShowConfirm(true);

  /* For increase/descrease */
  const [inputNum, setInputNum] = useState(1);

  /* Checkbox */
  const [isCartCheck, setIsCartCheck] = useState(true);
  const handleChange = (event) => {
    setIsCartCheck(!isCartCheck);
  }

  const cartItems = [
    {
      id: 1,
      title: "닭가슴살 브로콜리 고구마 도우 크랜베리 피자 - L size1",
      price: "16,000원"
    },
    {
      id: 2,
      title: "닭가슴살 브로콜리 고구마 도우 크랜베리 피자 - L size2",
      price: "6,000원"
    }
  ]

  return (
    <>
    <Navigation title="장바구니" />
    <div className="product-cart-wrap">

      {cartItems.map((item, index) => 
      <div className="product-cart-item" key={index}>
        <Row>
          <Col xs={6}>
            <Form.Group className="mb-3" id="chkCartCheck">
              <Form.Check type="checkbox" label="(처음에 다 체크)" onChange={handleChange} checked={isCartCheck} />
            </Form.Group>
          </Col>
          <Col xs={6} className="text-end"><Button variant="secondary" className="no-rounded" onClick={handleShowConfirm}>삭제</Button></Col>
          <Col xs={6}><Image src="images/products/product-1.png" className="img-fluid" alrt="product name" /></Col>
          <Col xs={6}>
            <p className="mb-0">{item.title}</p>
            <p>{item.price}</p>
          </Col>
          <Col xs={12}>
            <div>
              <button className="btn-descrease"><FontAwesomeIcon icon={faMinus} className="" onClick={() => setInputNum(inputNum-1)} /></button>
              <input type="text" className="cart-item-number" value={inputNum} onChange={(e) => setInputNum(e.target.value)} />
              <button className="btn-increase"><FontAwesomeIcon icon={faPlus} className="" onClick={() => setInputNum(inputNum+1)} /></button>
            </div>
          </Col>
        </Row>
      </div>
      )}

      <div className="product-cart-total">
        <Table className="table-borderless no-space">
          <tbody>
            <tr>
              <td>총 상품 금액</td>
              <td width="100">22,000원</td>
            </tr>
            <tr>
              <td>배송비</td>
              <td>3,000원</td>
            </tr>
            <tr className="fw-bold border-top">
              <td className="py-2">결제 예상 금액</td>
              <td className="py-2">13,000원</td>
            </tr>
            <tr>
              <td colSpan={2} className="text-center fw-bold">※결제시 보유하고 있는 할인 쿠폰 적용 가능</td>
            </tr>
          </tbody>
        </Table>
      </div>
        
      <Button className="w-100 mt-3 mb-5" size="lg" onClick={() => navigate("/order")}>결제하기</Button>

      <Modal centered className="modal-add-card" show={showConfirm} onHide={handleCloseConfirm}>
        <Modal.Body>
          <p className="mb-0">다음 제품을 장바구니에서</p>
          <p className="mb-4">삭제 하시겠습니까?</p>

          <p className="mb-0">닭가슴살 브로콜리 고구마 도우 크랜</p>
          <p>베리 피자 - L size</p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" onClick={handleCloseConfirm}>삭제</Button>
          <Button variant="secondary" onClick={handleCloseConfirm}>취소</Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}

export default Cart;