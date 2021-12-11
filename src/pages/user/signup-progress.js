import { useState } from "react";
import Navigation from "../components/navigation";
import { useNavigate } from "react-router-dom";
import { Row, Col, Alert, Image, Button } from "react-bootstrap";

import "./user.css";

function SignupProgress() {
  const navigate = useNavigate();

  const [isDuplicate, setIsDuplicate] = useState(false);

  return (
    <>
      <Navigation title={!isDuplicate ? "" : "로그인"} />
      <div className="signup-progress-wrap">
        <Row>
          <Col xs={12}>
            {!isDuplicate ?
            <div className="signup-progress-inside d-grid gap-3">
              <Image src="images/my-pet.png" className="img-fluid" />
              <p className="text-center py-4 mb-0">회원가입이 완료되었습니다!</p>
              <Button variant="secondary" onClick={() => navigate("/pet-register")}>우리 강아지 등록하기</Button>
              <Button variant="secondary" onClick={() => navigate("/")}>홈으로 가기</Button>
            </div>
            :
            <div className="text-center pt-4">이미 네이버로 가입된 회원의 전화번호 입니다.</div>
            }
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SignupProgress;