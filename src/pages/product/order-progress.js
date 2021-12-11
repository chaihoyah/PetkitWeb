import { Button, Row, Col, Image, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Navigation from "../components/navigation";

import "./product.css";

function OrderProgressPage() {
  const navigate = useNavigate();

  return (
    <>
    <Navigation title="주문 완료" />
    <div className="order-progress-wrap">
      <section className="order-progress-info">
        <h3 className="order-section-title">주문 정보</h3>
        <Row>
          <Col xs={6}>
            <Image src="images/products/product-1.png" className="img-fluid" />
          </Col>
          <Col xs={6} className="text-large">
            <ul className="list-unstyled">
              <li>닭가슴살 브로콜리 고구마 도우 크랜베리 피자 - L size</li>
              <li>6,000원</li>
              <li>수량 : 1개</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Image src="images/products/product-1.png" className="img-fluid" />
          </Col>
          <Col xs={6} className="text-large">
            <ul className="list-unstyled">
              <li>닭가슴살 브로콜리 고구마 도우 크랜베리 피자 - R size</li>
              <li>8,000원</li>
              <li>수량 : 1개</li>
            </ul>
          </Col>
        </Row>

        <Table className="table-borderless fw-bold">
          <tbody>
            <tr>
              <td>주문번호</td>
              <td width="100" className="text-end">1231233</td>
            </tr>
            <tr>
              <td>총 결제 금액</td>
              <td className="text-end">13,000원</td>
            </tr>
            <tr>
              <td colSpan={2}>배송 예정일: 10/17 (금)</td>
            </tr>
          </tbody>
        </Table>
      </section>
      <section className="order-progress-buttons mb-5">
        <Row>
          <Col xs={12} className="text-center">
            <Button variant="primary" size="lg" onClick={() => navigate("/")} className="me-2">홈</Button>
            <Button variant="primary" size="lg" onClick={() => navigate("/history")}>주문 내역</Button>
          </Col>
        </Row>
      </section>
    </div>
    </>
  );
}

export default OrderProgressPage;