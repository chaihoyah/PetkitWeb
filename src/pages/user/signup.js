import Navigation from "../components/navigation";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";

import "./user.css";

function SignUp() {
  const navigate = useNavigate();
  
  return (
    <>
      <Navigation title="본인인증" />
      <div className="signup-wrap">
        <Row>
          <Col xs={12}>
            <Form>
              <Form.Group className="mb-3" controlId="signupForm.name">
                <Form.Label>이름</Form.Label>
                <Form.Control type="input" size="lg" placeholder="이름을 입력해주세요." required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="signupForm.phone">
                <Form.Label>휴대폰</Form.Label>
                <Form.Control type="input" size="lg" placeholder="휴대폰 번호를 입력해주세요." required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="signupForm.birthday">
                <Form.Label>출생연도</Form.Label>
                <Form.Control type="input" size="lg" placeholder="출생연도를 선택해주세요." required />
              </Form.Group>
              <Button variant="primary" className="w-100" size="lg" onClick={() => navigate("/signup-progress")} >인증하기</Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SignUp;