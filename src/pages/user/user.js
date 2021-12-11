import { useState } from "react";
import Navigation from "../components/navigation";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Image, Table, Button, Modal } from "react-bootstrap";
import UserNon from "./user-non";

import "./user.css";

function User() {
  const navigate = useNavigate();

  // For Cancel Order Confirm
  const [showConfirm, setShowConfirm] = useState(false);
  const handleCloseConfirm = () => setShowConfirm(false);
  const handleShowConfirm = () => setShowConfirm(true);

  // For Detail Confirm
  const [showConfirmDetail, setShowConfirmDetail] = useState(false);
  const handleCloseConfirmDetail = () => setShowConfirmDetail(false);
  const handleShowConfirmDetail = () => setShowConfirmDetail(true);

  const isLoggedIn = false; // Check user logged in or not

  if (!isLoggedIn) {
    return <UserNon />;
  }

  return (
    <>
      <Navigation />
      <div className="user-wrap">
        <Link to="/user-info" className="user-avatar">
        <Row>
          <Col xs={3}><Image src="images/user-pet-full.png" /></Col>
          <Col xs={9}>
            <p className="mb-0 mt-3 text-center text-medium">얘 전체가 버튼</p>
            <p className="mb-0 text-large">신채호님 <span className="text-medium">(톱니바퀴)</span></p>
          </Col>
        </Row>
        </Link>

        <div className="user-links">
        <Table className="table-borderless fw-bold">
          <tbody>
            <tr>
              <td width="25%" className="align-middle"><Link to="/coupon">할인쿠폰</Link></td>
              <td width="25%" className="align-middle"><Link to="/like-list">찜 목록</Link></td>
              <td width="25%" className="align-middle"><Link to="/recent-view">최근본상품(얘네 탭 순서는 나중에 생각해보기)</Link></td>
              <td width="25%" className="align-middle"><Link to="/top-purchase">자주 구매</Link></td>
            </tr>
          </tbody>
        </Table>
        </div>

        <div className="recent-order-wrap">
          
          <Row>
            <Col xs={12} className="recent-order-title">나의 주문  (더보기)</Col>
            <Col xs={4}><Link to="/history"><Image src="images/products/product-1.png" className="img-fluid" alt="product" /></Link></Col>
            <Col xs={8}>
              <Link to="/history">
                <p className="recent-order-product-title">닭가슴살 브로콜리 고구마 도우 크랜베리 피자 - L size2개</p>
                <div className="steps-container">
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
              </Link>
              <Row>
                <Col xs={6}><Button variant="primary" className="no-rounded w-100" onClick={handleShowConfirm}>주문 취소</Button><br/>(주문 확인 상태에서만)</Col>
                <Col xs={6}><Button variant="primary" className="no-rounded w-100" onClick={handleShowConfirmDetail}>상품 문의</Button></Col>
              </Row>
            </Col>
          </Row>
        </div>

        <Modal centered show={showConfirm} onHide={handleCloseConfirm}>
          <Modal.Body>
            <p>닭가슴살 브로콜리 고구마 도우크랜베리 피자 - L size 2개</p>
            <p>주문번호: 123123</p>
            <p>해당 주문을 취소하시겠습니까?</p>
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button variant="primary" onClick={handleCloseConfirm}>네,<br/>취소하겠습니다</Button>
            <Button variant="secondary" onClick={handleCloseConfirm}>아니요,<br/>취소하지 않겠습니다</Button>
          </Modal.Footer>
        </Modal>

        <Modal centered show={showConfirmDetail} onHide={handleCloseConfirmDetail}>
          <Modal.Body>
            상품 문의를 하시겠습니까?
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button variant="primary" onClick={() => navigate("/service")}>네</Button>
            <Button variant="secondary" onClick={handleCloseConfirmDetail}>아니오</Button>
          </Modal.Footer>
        </Modal>

        <div className="user-service-center-wrap">
          <Link to="/service">고객 센터</Link>
        </div>
      </div>
    </>
  );
}

export default User;