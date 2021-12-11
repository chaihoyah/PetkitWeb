import { useState } from "react";
import Navigation from "../components/navigation";
import { Link } from "react-router-dom";
import { Row, Col, Button, Modal, Image } from "react-bootstrap";

import "./product.css";

function LikeList() {
  /* Modal Confirm */
  const [showConfirm, setShowConfirm] = useState(false);
  const handleCloseConfirm = () => setShowConfirm(false);
  const handleShowConfirm = () => setShowConfirm(true);

  return (
    <>
      <Navigation title="찜 목록" />
      <div className="like-list-wrap">
        <section className="like-list-item">
          <Link to="/product-detail">
            <Row>
              <Col xs={6}><Image src="images/products/product-1.png" className="img-fluid" alt="Product title" /></Col>
              <Col xs={6}>
                <p className="mb-0">닭가슴살 브로콜리 고구마 도우 크랜베리 피자</p>
                <p className="mb-0">16,000원</p>
              </Col>
            </Row>
          </Link>
        </section>
        <section className="like-list-buttons">
          <Row>
            <Col xs="8" className="pe-0">
              <Button className="w-100 no-rounded border-end border-top" size="lg">
                <Image src="images/cart-medium-icon.png" /><br/>
                장바구니 추가
              </Button>
              </Col>
            <Col xs="4" className="ps-0">
              <Button className="w-100 no-rounded border-start border-top" size="lg" onClick={handleShowConfirm}>
              <Image src="images/product-like-no-round-icon.png" /><br/>
                찜 삭제
              </Button>
            </Col>
          </Row>

          <Modal centered show={showConfirm} onHide={handleCloseConfirm}>
            <Modal.Body>
              <p>해당 상품을 목록에서<br/>
              삭제하시겠습니까?</p>
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
              <Button variant="primary" onClick={handleCloseConfirm}>삭제</Button>
              <Button variant="secondary" onClick={handleCloseConfirm}>취소</Button>
            </Modal.Footer>
          </Modal>
        </section>
      </div>
    </>
  );
}

export default LikeList;


