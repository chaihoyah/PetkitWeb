import { useState } from "react";
import UserRating from "../components/user-rate";
import { Button, Row, Col, Form, Image, Pagination, Tabs, Tab, Table, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import HeaderDetail from "../components/header-detail";

import "./product.css";


function DetailPage() {
  const navigate = useNavigate();

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  /* For Modal Q&A */
  const [showQA, setShowQA] = useState(false);
  const handleCloseQA = () => setShowQA(false);
  const handleShowQA = () => setShowQA(true);

  /* For Modal Cart */
  const [showCart, setShowCart] = useState(false);
  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  /* For increase/descrease */
  const [inputNum, setInputNum] = useState(1);


  return (
    <>
    <HeaderDetail />
    <div className="product-detail-wrap">
      <Row>
        <Col xs="12">
          <div className="product-image"><Image src="images/products/product-1.png" className="img-fluid" /></div>

          <p className="product-title mt-2">닭가슴살 브로콜리 고구마 도우 크랜베리 피자</p>
          <div className="d-flex">
            <div className="flex-grow-1"><span className="product-challenging">CHALLENGING</span><span className="product-challenging-time">125분</span></div>
            <div className="product-detail-share"><Image src="images/share-icon.png" alt="share social" /></div>
            <div className="product-detail-like"><Image src="images/product-like-icon.png" alt="product like" /></div>
          </div>

          <p className="text-large py-2">Kit: 6,000원 (L-size +2000원)</p>
          <div className="product-description">
            <p>“어쩌구 저쩌구 저쩌구 우짜구 자짜구 맛있는 존나 맛있는 피자” (요약, 설명)</p>
            <p><strong>“뭉치”의 몇일치 간식이에요!!</strong></p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Tabs justify defaultActiveKey="recipe" id="tab-product-detail" className="mb-3 tab-petkit tab-product-detail">
            <Tab eventKey="recipe" title="레시피">
              <h5 className="product-detail-title">재료</h5>
              <Table className="table-borderless">
                <tbody>
                  <tr>
                    <td>피자</td>
                    <td width="50">1개</td>
                  </tr>
                  <tr>
                    <td>피자</td>
                    <td>2개</td>
                  </tr>
                  <tr>
                    <td>피자</td>
                    <td>3개</td>
                  </tr>
                  <tr>
                    <td>피자</td>
                    <td>4개</td>
                  </tr>
                  <tr>
                    <td>피자</td>
                    <td>5개</td>
                  </tr>
                </tbody>
              </Table>

              <h5 className="product-detail-title">레시피</h5>
              <div>
                <p><Image src="images/products/image-1.png" className="img-fluid" /></p>
                <p>1. 단호박 씨를 열라 파부러</p>
              </div>
              <div>
                <p><Image src="images/products/image-1.png" className="img-fluid" /></p>
                <p>2. 단호박 씨를 또 열라 파부러</p>
              </div>
            </Tab>

            <Tab eventKey="kit-information" title="키트 정보">
              <p>키트 이미지</p>
              <p>배송 예정일</p>
              <p>포함 재료 정보</p>

              <h5 className="product-detail-title">포함 재료 정보</h5>
              <Table className="table-borderless">
                <tbody>
                  <tr>
                    <td>피자</td>
                    <td width="100">1개(국산)</td>
                  </tr>
                  <tr>
                    <td>피자</td>
                    <td>2개(국산)</td>
                  </tr>
                  <tr>
                    <td>피자</td>
                    <td>3개(국산)</td>
                  </tr>
                  <tr>
                    <td>피자</td>
                    <td>4개(국산)</td>
                  </tr>
                </tbody>
              </Table>

              <p>재료질 관련 마케팅 이미지 (우리는 어떤 재료를 쓴다)</p>
              <p>영양 정보</p>
              <p>영양정보 제품 스티커 똑같이</p>
              <p>+</p>
              <p>추가 정보 제공</p>
            </Tab>

            <Tab eventKey="review" title="리뷰">
              <div>
                <p className="mb-0">리뷰 (23)</p>
                <UserRating rate={4} show="on" align="center" />
                <p className="text-end mt-2">리뷰 정렬(최신순, 낮은 평점순)</p>
              </div>

              <div>
                <p className="mb-0">신*호</p>
                <div className="d-flex">
                  <div className="flex-grow-1"><UserRating rate={5} size="sm" /></div>
                  <div className="user-rate-date">2021.11.01</div>
                </div>
                <div>
                  <p>구매 정보: Lx1, Mx1</p>
                  <Row>
                    <Col xs={4}><Image src="images/products/product-1.png" className="img-fluid" alt="product review" /></Col>
                    <Col xs={8}>요리해보니 사진과 거의 똑같이 나 왔어요. 뭉치가 너무 좋아하네요</Col>
                    <Col xs={12}>
                      <p>리뷰 5개 까지</p>
                    </Col>
                    <Col xs={12}>
                      <div className="review-pagination"><Pagination>{items}</Pagination></div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Tab>

            <Tab eventKey="qna" title="Q&A">
              <div>
                <h5>배송/환불/교환</h5>
                <p>안내 어쩌구 저쩌구~~~~</p>
              </div>

              <div>
                <p>문의</p>

                <Row className="form-review">
                  <Col xs={8}>
                    <Form.Group className="mb-3" controlId="your-review">
                      <Form.Control as="textarea" rows={2} placeholder="상품 관련 질문을 등록해주세요." />
                    </Form.Group>
                  </Col>
                  <Col xs={4}>
                    <Button variant="default" onClick={handleShowQA}>등록</Button>
                  </Col>
                </Row>

                <Modal centered className="modal-qa" show={showQA} onHide={handleCloseQA}>
                  <Modal.Body>질문을 등록하시겠습니까?</Modal.Body>
                  <Modal.Footer className="justify-content-center">
                    <Button variant="primary" onClick={handleCloseQA}>등록</Button>
                    <Button variant="secondary" onClick={handleCloseQA}>취소</Button>
                  </Modal.Footer>
                </Modal>

                <div>
                  <p>질문: 양배추는 몇 g 오나요?</p>
                  <p>답변: 2kg 드립니다^^~~</p>
                </div>
              </div>

            </Tab>
          </Tabs>
        </Col>
      </Row>
    </div>

    <div className="product-cart-button">
      <Button variant="primary" onClick={handleShowCart}>구매하기</Button>

      <Modal centered className="modal-cart" show={showCart} onHide={handleCloseCart}>
        <Modal.Body>
          <div className="modal-cart-item">
            <div>닭가슴살 브로콜리 고구마 도우 크랜베리 피자 - Regular size</div>
            <div className="d-flex">
              <div className="flex-grow-1">
                <div>
                  <button className="btn-descrease"><FontAwesomeIcon icon={faMinus} className="" /></button>
                  <input type="text" className="cart-item-number" value={inputNum} onChange={(e) => setInputNum(e.target.value)} />
                  <button className="btn-increase"><FontAwesomeIcon icon={faPlus} className="" /></button>
                </div>
              </div>
              <div className="modal-cart-price">6,000원</div>
            </div>
          </div>
          <div className="modal-cart-item">
            <div>닭가슴살 브로콜리 고구마 도우 크랜베리 피자 - Regular size</div>
            <div className="d-flex">
              <div className="flex-grow-1">
                <div>
                  <button className="btn-descrease"><FontAwesomeIcon icon={faMinus} className="" /></button>
                  <input type="text" className="cart-item-number" value={inputNum} onChange={(e) => setInputNum(e.target.value)} />
                  <button className="btn-increase"><FontAwesomeIcon icon={faPlus} className="" /></button>
                </div>
              </div>
              <div className="modal-cart-price">6,000원</div>
            </div>
          </div>
          <div className="modal-cart-item-total">총 상품금액 14,000원</div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="outline-warning" onClick={handleCloseCart}>장바구니</Button>
          <Button variant="primary" onClick={() => navigate("/order")}>바로구매</Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}

export default DetailPage;