import { useState } from "react";
import { Button, Row, Col, Image, Form, Modal } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';

import Navigation from "../components/navigation";

import "./product.css";

function OrderReview() {
  /* For Modal Confirm */
  const [showConfirm, setShowConfirm] = useState(false)
  const handleCloseConfirm = () => setShowConfirm(false)
  const handleShowConfirm = () => setShowConfirm(true)

  /* Rating */
  const [rating, setRating] = useState(0)
  const handleRating = (rate) => {
    setRating(rate)
  }

  return (
    <>
    <Navigation title="구매 후기 작성" />
    <div className="order-review-wrap">
      <section className="order-review-item">
        <Row>
          <Col xs={6}><Image src="images/products/product-1.png" className="img-fluid" alt="Product title" /></Col>
          <Col xs={6}>
            <p className="mb-0">닭가슴살 브로콜리 고구마 도우 크랜베리 피자 - L size</p>
            <p className="mb-0">16,000원</p>
            <p className="mb-0">1개</p>
          </Col>
        </Row>
      </section>
      
      <section className="mt-3">

        <div className="d-flex justify-content-center">
          <div className="me-2">별점</div>
          <StarRatingComponent 
            name="rate1" 
            starCount={5}
            value={rating}
            onStarClick={handleRating} />
        </div>
        <div className="text-center text-medium mb-4">(선택 하면 색 채워짐)</div>
       
      
        <Form.Control as="textarea" rows={5} placeholder="후기: 텍스트 인풋" />
        <Button className="w-100 mt-3 no-rounded" size="lg" onClick={handleShowConfirm}>등록하기</Button>
        
        <Modal centered show={showConfirm} onHide={handleCloseConfirm}>
          <Modal.Body>후기를 등록하시겠습니까?</Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button variant="primary" onClick={handleCloseConfirm}>등록</Button>
            <Button variant="secondary" onClick={handleCloseConfirm}>취소</Button>
          </Modal.Footer>
        </Modal>
      </section>

    </div>
    </>
  );
}

export default OrderReview;