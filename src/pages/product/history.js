import { useState } from "react";
import Navigation from "../components/navigation";
import { Row, Col, Button, Image, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import "./product.css";

function History() {
  const navigate = useNavigate();

  /* Modal Logout Confirm */
  const [showConfirm, setShowConfirm] = useState(false);
  const handleCloseConfirm = () => setShowConfirm(false);
  const handleShowConfirm = () => setShowConfirm(true);

  return (
    <>
    <Navigation title="주문내역" />
    <div className="product-history-wrap">
      <section className="product-history-building">
        <h3 className="product-history-title mb-4">배송 진행 중 상품</h3>
        <Row>
          <Col xs={6}><Image src="images/products/product-1.png" className="img-fluid" alt="Product title" /></Col>
          <Col xs={6}>
            <p className="mb-0">닭가슴살 브로콜리 고구마 도우 크랜베리 피자 - L size</p>
            <p className="mb-0">16,000원</p>
            <p className="mb-0">2개</p>
          </Col>
          <Col xs={12} className="text-center">
            <div className="steps-container history">
              <div className="steps">
                  <div className="steps__item z4 steps__item--active">
                    <span>주문 확인</span>
                  </div>
                  <div className="steps__item z3">
                    <span>주문 확인</span>
                  </div>
                  <div className="steps__item z2">
                    <span>주문 확인</span>
                  </div>
                  <div className="steps__item z1">
                    <span>주문 확인</span>
                  </div>
              </div>
            </div>
          </Col>
        </Row>

        <Button className="w-100 no-rounded" size="lg" onClick={handleShowConfirm}>주문 취소<br/>(주문 확인 상태에서만)</Button>

        <Modal centered className="modal-add-card" show={showConfirm} onHide={handleCloseConfirm}>
          <Modal.Body>
            <p className="mb-4">해당 주문을 취소하시겠습니까?</p>

            <p className="mb-0">주문 번호: 123123</p>
            <p>닭가슴살 브로콜리 ~~~ 제품이름</p>
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button variant="primary" onClick={handleCloseConfirm}>주문 취소</Button>
            <Button variant="secondary" onClick={handleCloseConfirm}>취소</Button>
          </Modal.Footer>
        </Modal>
      </section>

      <section className="product-history-shipped">
        <h3 className="product-history-title text-center border-0">배송 완료 상품 (정보 자체가 레시피로 들어가는 버튼)</h3>
        <div className="product-history-shipped-item">
          <Link to="/product-detail">
          <Row>
            <Col xs={6}><Image src="images/products/product-1.png" className="img-fluid" alt="Product title" /></Col>
            <Col xs={6}>
              <p className="mb-0">닭가슴살 브로콜리 고구마 도우 크랜베리 피자 - L size</p>
              <p className="mb-0">16,000원</p>
              <p className="mb-0">1개</p>
            </Col>
          </Row>
          </Link>
        </div>
        <div className="product-history-shipped-cart">
          <Button variant="default" size="md" className="cart-button"> 장바구니 추가</Button>
        </div>
        <div className="product-history-shipped-action">
        <Row>
            <Col xs={6} className="pe-0"><Button className="w-100 no-rounded border-end" onClick={() => navigate("/order-detail")}>상세 조회</Button></Col>
            <Col xs={6} className="ps-0"><Button className="w-100 no-rounded border-start" onClick={() => navigate("/order-review")}>후기 작성</Button></Col>
          </Row>
        </div>
      </section>
      
    </div>
    </>
  );
}

export default History;