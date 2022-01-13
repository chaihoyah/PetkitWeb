import { useState } from "react";
import Navigation from "../components/navigation";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";

import "./user.css";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  function PhoneNumValidCheck(){
    // 서버에 PhoneNum 저장 되어있으면, type도 같이
    if(phoneNum === "01027803084"){
        console.log("duplicate");
        navigate("/signup-progress", {state:{isDuplicate:true, duplicateType:"카카오"}});
    }
    // 새로운 유저
    else{
        onClickCertification();
    }
  }


  function onClickCertification(){
    const { IMP } = window;
    IMP.init(process.env.REACT_APP_IAMPORT);
    console.log(IMP);
    const data = {
        merchant_uid: "123123123",
        company: 'Petkit',
        carrier: 'SKT',
        name: '신채호',
        phone: '01027803084',
        popup: true
    };
    console.log(data);
    IMP.certification(data, callback);
  }

  function callback(response){
    const {
        success,
        error_code,
        error_msg,
        imp_uid,
        merchant_uid
    } = response;

    if (response.success){
        console.log(response);
        navigate("/signup-progress", {replace: true, state:{isDuplicate:false}});
    }
    else{
        alert('본인인증 실패: '+ response.error_msg);
    }
  }
  /**
                <Form.Group className="mb-3" controlId="signupForm.birthday">
                  <Form.Label>출생연도</Form.Label>
                  <Form.Control type="input" size="lg" placeholder="출생연도를 선택해주세요." required />
                </Form.Group>
  **/
  return (
    <>
      <Navigation title="본인인증" />
      <div className="signup-wrap">
        <Row>
          <Col xs={12}>
            <Form>
              <Form.Group className="mb-4" controlId="signupForm.name">
                <Form.Label className="mb-0">이름</Form.Label>
                <Form.Control type="input" size="lg" placeholder="이름을 입력해주세요." onChange= {(e) => {setName(e.target.value);}} required />
              </Form.Group>
              <Form.Group className="mb-5" controlId="signupForm.phone">
                <Form.Label>휴대폰</Form.Label>
                <Form.Control type="input" size="lg" placeholder="휴대폰 번호를 입력해주세요." onChange= {(e) => {setPhoneNum(e.target.value);}} required />
              </Form.Group>
              <Button variant="primary" className="w-100 mt-5 text-neom text-xsmallmedium text-black" size="lg" onClick={() => PhoneNumValidCheck()} >인증하기</Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SignUp;