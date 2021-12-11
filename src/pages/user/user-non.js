import Navigation from "../components/navigation";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";

function UserNon() {
  const navigate = useNavigate();

  return (
    <>
      <Navigation />
      <div className="non-user-wrap">
        <Row>
          <Col xs={12} className="text-center">
            <div className="non-user-login-wrap">
              <div className="d-block pt-2">
                <Button variant="primary" onClick={() => navigate('/login')}>로그인</Button>
                <p className="pt-3 pb-0 mb-0">로그인 후 이용해주세요</p>
              </div>
            </div>
          </Col>
          <Col xs={12} className="text-center">
            <p><Link to="/cart" className="link-border">장바구니</Link></p>
            <p><Link to="/" className="link-border">상품 등록 문의</Link></p>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserNon;