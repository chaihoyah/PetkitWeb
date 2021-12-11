import { useState } from "react";
import { Button, Row, Col, Image, Table, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Navigation from "../components/navigation";

import "./product.css";

function OrderDetail() {
  const navigate = useNavigate();

  /* For Modal Detail */
  const [showDetail, setDetail] = useState(false);
  const handleCloseDetail = () => setDetail(false);
  const handleShowDetail = () => setDetail(true);

  return (
    <>
    <Navigation title="주문 상세 내역" />
    <div className="order-detail-wrap">
      <p>11월 15일 배송 완료  <Button variant="info" className="order-detail-readmore" onClick={handleShowDetail}>자세히 보기</Button></p>
      <Modal centered show={showDetail} onHide={handleCloseDetail}>
        <Modal.Body>
          <p>송장번호: 123123123</p>
          <Table className="table-borderless">
            <thead>
              <tr>
                <th>시간</th>
                <th>위치</th>
                <th>배송 상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>11. 11 오전 9:00</td>
                <td>서울</td>
                <td>캠프도착</td>
              </tr>
              <tr>
                <td>11. 11 오전 10:00</td>
                <td>서울</td>
                <td>배송출발</td>
              </tr>
              <tr>
                <td>11. 11 오후 13:00</td>
                <td>서울</td>
                <td>@배송출발</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" onClick={handleCloseDetail}>확인</Button>
        </Modal.Footer>
      </Modal>

      <section className="order-detail-item">
        <Row>
          <Col xs={6}><Image src="images/products/product-1.png" className="img-fluid" alt="Product title" /></Col>
          <Col xs={6}>
            <p className="mb-0">닭가슴살 브로콜리 고구마 도우 크랜베리 피자 - L size</p>
            <p className="mb-0">16,000원</p>
            <p className="mb-0">1개</p>
          </Col>
        </Row>
      </section>
      <div className="product-history-shipped-cart">
        <Button variant="default" size="md" className="cart-button">장바구니 추가</Button>
      </div>
      <Button variant="primary" size="lg" className="w-100 no-rounded" onClick={() => navigate("/order-return")}>교환, 반품 신청</Button>

      <section className="text-medium mt-5">
        <Table className="table-borderless">
          <tbody>
            <tr>
              <td width="70">주문 번호</td>
              <td>123123123</td>
            </tr>
            <tr>
              <td>받는 사람</td>
              <td>신채호</td>
            </tr>
            <tr>
              <td>받는 주소</td>
              <td>(06305) 서울 특별시 강남구 언주로 107 현대 2차 (2001동 1301호)</td>
            </tr>
            <tr>
              <td colSpan={2}>배송요청사항 문앞</td>
            </tr>
          </tbody>
        </Table>
      </section>

    </div>
    </>
  );
}

export default OrderDetail;