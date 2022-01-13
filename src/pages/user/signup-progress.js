import { useState } from "react";
import Navigation from "../components/navigation";
import { useNavigate, useLocation } from "react-router-dom";
import { Row, Col, Alert, Image, Button } from "react-bootstrap";

import "./user.css";

function SignupProgress() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isDuplicate, setIsDuplicate] = useState(false);//state.isDuplicate);
  const [duplicateType, setDuplicateType] = useState(state.duplicateType);

  function getDuplicateText () {
    return "이미 "+ duplicateType+"로 가입된";
  }

  return (
    <>
      <Navigation title={!isDuplicate ? "" : "로그인"} />
      <div className="signup-progress-wrap">
        <Row>
          <Col xs={12}>
            {!isDuplicate ?
            <div className="signup-progress-inside d-grid gap-3">
              <Image className="signup-bgimage" src="images/my-pet.png"/>
              <div className="signup-other">
                <p className="text-neoeb text-large text-white">회원가입이 완료되었습니다!</p>
                <Button variant="yellow" className="text-neom text-xxsmallmedium"style={{width:"253px", height: "45px", marginTop: "75px"}} onClick={() => navigate("/pet-register")}>우리 강아지 등록하기</Button>
                <Button variant="purple" className="text-neom text-xxsmallmedium"style={{width:"253px", height: "45px", marginTop: "12px"}} onClick={() => navigate("/")}>홈으로 가기</Button>
              </div>
            </div>
            :
            <div className="duplicate-wrap">
                <div className="duplicate-text">{getDuplicateText()}</div>
                <div className="duplicate-text">회원의 전화번호 입니다.</div>
            </div>
            }
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SignupProgress;