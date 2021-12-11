import { useState } from "react";
import Navigation from "../components/navigation";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";

import "./user.css";


function Login() {
  const navigate = useNavigate();

  const [showMethod, setShowMethod] = useState(false);

  return (
    <>
      <Navigation title="로그인" />
      <div className="login-wrap">
        <Row>
          <Col xs={12}>
            <div className="login-inside d-grid gap-3">

              <Button variant="secondary" onClick={() => navigate('/signup')}>네이버로 로그인</Button>

              {!showMethod && 
              <Button variant="secondary" onClick={() => setShowMethod(true)}>다른 로그인 수단 보기</Button>
              }

              {showMethod && <>
              <Button variant="secondary" onClick={() => navigate('/')}>카카오로 로그인</Button>
              <Button variant="secondary" onClick={() => navigate('/')}>페이스북으로 로그인</Button>
              </>
              }

              <Form.Check type="checkbox" label="자동 로그인" />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Login;