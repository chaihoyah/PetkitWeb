import { useState, useEffect } from "react";
import { Button, Row, Col, Form, Image, Tabs, Tab, Table } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

import Navigation from "../components/navigation";

import "./product.css";

function OrderPage() {
  const navigate = useNavigate();
  const {state} = useLocation();
  const productInfo = state.product;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({name:"", phone:"", addr:[]});
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  function makePhoneString(str){
    return str.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, "$1-$2-$3");
  }

  function findPostalCode(){
    setPostalCode("06305");
  }

  async function tmp() {
    return {name: "신채호", phone: "01027803084", addr: []};
  }

  useEffect(()=>{
    const fetchUserInfo = async () => {
        const result = await tmp();//await axios()
        setUserInfo(result);
        setIsLoggedIn(true);
    };
    if(localStorage.getItem("session_token")) fetchUserInfo();
  },[]);

  return (
    <>
    <Navigation title="주문 결제" />
    <div className="order-wrap">
      <section className="order-section">
        <div className="order-section-title">사용자 정보</div>
        {isLoggedIn ? (
            <ul className="list-unstyled text-neor text-small text-black">
              <li style={{marginBottom:"8px"}}>{"이름: "+userInfo.name}</li>
              <li>{"전화번호: "+userInfo.phone}</li>
            </ul>):(
            <div style={{display:"flex", flexDirection:"column"}}>
              <div className="text-neor text-small text-black mb-0" style={{display:"flex", flexDirection:"row"}}>
                <Form.Group className="">
                  <Form.Control type="input" size="sm" placeholder="이름을 입력해주세요." onChange= {(e) => {setName(e.target.value);}} required />
                  <Form.Control type="input" size="sm" placeholder="전화번호를 입력해주세요." onChange= {(e) => {setPhoneNum(e.target.value.replace(/[^0-9]/g, ""));}} required />
                </Form.Group>
              </div>
              <div></div>
            </div>)
        }
      </section>

      <section className="order-shipping-info tab-order">
        <h3 className="order-section-title">배송지 정보</h3>
        {isLoggedIn ? (
        <Tabs justify defaultActiveKey="new-address" className="mb-3 tab-petkit tab-order">
          <Tab eventKey="new-address" tabClassName = "tab-2text order" title="신규 배송지">
            <Form style={{marginTop:"32px"}}>
              <div style={{display:"flex", flexDirection:"row", alignItems:"flex-end", justifyContent:"space-between", paddingBottom:"32px"}}>
                <Form.Group className="mb-0" controlId="signupForm.name" style={{display:"flex", flexDirection:"column"}}>
                  <Form.Label className="mb-2 orderinput" id="orderinput-label">우편번호</Form.Label>
                  <Form.Control readOnly={true} size="sm" style={{width:"200px"}} placeholder="주소찾기를 통해 찾아주세요." value={postalCode} required />
                </Form.Group>
                <Button variant="purple" style={{width:"125px", height:"40px"}} onClick={() => {findPostalCode()}}>주소 찾기</Button>
              </div>
              <Form.Group className="mb-0" style={{display:"flex", flexDirection:"column", paddingBottom:"32px"}}>
                <Form.Label className="orderinput" id="orderinput-label" style={{marginBottom:"16px"}}>우편번호</Form.Label>
                <Form.Control type="input" size="sm" style={{width:"100%", marginBottom:"16px"}} placeholder="주소를 입력해 주세요." onChange={(e) => {setAddress(e.target.value);}} required />
                <Form.Control type="input" size="sm" style={{width:"100%"}} placeholder="상세주소를 입력해 주세요." onChange={(e) => {setDetailAddress(e.target.value);}} required />
              </Form.Group>
            </Form>
          </Tab>
          <Tab eventKey="select-address" tabClassName = "tab-2text order" title="배송지 선택">
            <p>배송지 1</p>
            <p>배송지 2</p>
            <p>배송지 3</p>
            <p>배송지 4</p>
          </Tab>
        </Tabs>
        ):(
        <div>
            <p>배송지 주소</p>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="email" size="lg" placeholder="우편번호 입력해주세요 (우편번호 버튼)" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" size="lg" placeholder="주소를 입력해주세요" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" size="lg" placeholder="상세 주소를 입력해주세요" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" size="lg" rows={3} placeholder="요청사항 (자주 쓰이는거 몇개 선택 or 직접 입력) 중앙 현관 비번 알려주셈" />
              </Form.Group>
            </Form>
        </div>
        )
        }
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