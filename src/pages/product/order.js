import { Button, Row, Col, Form, Image, Tabs, Tab, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Navigation from "../components/navigation";

import "./product.css";


function OrderPage() {

  const navigate = useNavigate();

  return (
    <>
    <Navigation title="주문 결제" />
    <div className="order-wrap">
      <section className="order-user-info">
        <h3 className="order-section-title">사용자 정보</h3>
        <ul className="list-unstyled">
          <li>이름: 신채호</li>
          <li>휴대전화: 010-xxxx-xxxx</li>
        </ul>
      </section>

      <section className="order-shipping-info mt-5 tab-border">
        <h3 className="order-section-title">배송지 정보</h3>
        <Tabs justify defaultActiveKey="new-address" id="tab-order-shipping" className="mb-3">
          <Tab eventKey="new-address" title="신규 배송지">
            <p>배송지 주소</p>
            <Form>
              <Form.Group className="mb-3" controlId="inputName1">
                <Form.Control type="email" size="lg" placeholder="우편번호 입력해주세요 (우편번호 버튼)" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="inputName2">
                <Form.Control type="text" size="lg" placeholder="주소를 입력해주세요" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="inputName3">
                <Form.Control type="text" size="lg" placeholder="상세 주소를 입력해주세요" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="inputName4">
                <Form.Control as="textarea" size="lg" rows={3} placeholder="요청사항 (자주 쓰이는거 몇개 선택 or 직접 입력) 중앙 현관 비번 알려주셈" />
              </Form.Group>
            </Form>
          </Tab>
          <Tab eventKey="select-address" title="배송지 선택">
            <p>배송지 1</p>
            <p>배송지 2</p>
            <p>배송지 3</p>
            <p>배송지 4</p>
          </Tab>
        </Tabs>
      </section>

      <section className="order-detail-info mt-5">
        <h3 className="order-section-title">주문 상품</h3>
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
      </section>

      <section className="order-coupon-info mt-5">
        <h3 className="order-section-title">할인 쿠폰</h3>
        <Form.Check type="checkbox" label="첫 손님 쿠폰 50% (무조건 비싼거 적용)" />
        <Form.Check type="checkbox" label="둘 손님 쿠폰 50%" />
        <Form.Check type="checkbox" label="셋 손님 쿠폰 50%" />
      </section>

      <section className="order-total-price mt-5">
        <h3 className="order-section-title">최종 결제 금액</h3>
        <Table className="table-borderless">
          <tbody>
            <tr>
              <td>총 상품 금액</td>
              <td width="100" className="text-end">14,000원</td>
            </tr>
            <tr>
              <td>배송비</td>
              <td className="text-end">3,000원</td>
            </tr>
            <tr>
              <td>쿠폰</td>
              <td className="text-end">-4,000원</td>
            </tr>
            <tr className="order-total-price-final">
              <td>총 결제 금액</td>
              <td className="text-end">13,000원</td>
            </tr>
          </tbody>
        </Table>
      </section>

      <section className="order-payment-methods mt-5">
        <h3 className="order-section-title">결제 방법</h3>
        <Row>
          <Col xs={6}>
            <div className="d-grid gap-2">
              <Button variant="secondary">카드</Button>
              <Button variant="secondary">네페</Button>
              <Button variant="secondary">무통장</Button>
            </div>
          </Col>
          <Col xs={6} className="d-grid gap-2">
            <div className="d-grid gap-2">
              <Button variant="secondary">카페</Button>
              <Button variant="secondary">토스</Button>
              <Button variant="secondary">휴대폰</Button>
            </div>
          </Col>
        </Row>
        
        <Button variant="primary" className="w-100 mt-4 mb-5" size="lg" onClick={() => navigate("/order-progress")}>결제하기</Button>
      </section>
    </div>
    </>
  );
}

export default OrderPage;