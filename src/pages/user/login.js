import { useState, useEffect, useRef} from "react";
import Navigation from "../components/navigation";
import { useNavigate, useLocation } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";
import axios from 'axios';

import "./user.css";

function Login() {
  const navigate = useNavigate();
  const naverRef = useRef();

  const [showMethod, setShowMethod] = useState(false);
  const initializeNaverLogin = () => {
    const naverLogin = new window.naver.LoginWithNaverId({
        clientId: process.env.REACT_APP_NAVER_LOGIN_CLIENTID,
        callbackUrl: "http://localhost:3000/login",
        isPopup: false,
        loginButton: {
            color: "green",
            type: 3,
            height: 55,
        }
    });
    naverLogin.init();
    naverLogin.logout();
  };

  const location = useLocation();
  const url = "https://openapi.naver.com/v1/nid/me";
  const getNaverToken = () => {
    if (!location.hash) return;
    const token = location.hash.split('=')[1].split('&')[0];
    const type = location.hash.split('=')[3].split('&')[0];
    const header = type + " " + token;
    axios.get(process.env.REACT_APP_NAVER_USERLOOKUP_URL, {
        headers: {
            'Authorization': header,
        }
    }).then((res) => {
        console.log(res);
        let id = res.data.response.id;
        //서버에 id 있는지 확인
        console.log(id);
        if (id === "4V2gUbqcgYGgtKyA7nrlVSOVsxfnbu41YXH_VdasDQQ") navigate('/', {replace: true, state:{id: id}});
    });

  };

  const handleNaverClick = () => {
    naverRef.current.children[0].click();
  };

  useEffect(() => {
    initializeNaverLogin();
    getNaverToken();
  }, []);

  return (
    <>
      <Navigation title="로그인" />
      <div className="login-wrap">
        <Row>
          <Col xs={12}>
            <div className="login-inside d-grid">
            <div ref={naverRef} id='naverIdLogin'></div>
              <Button variant="naver" onClick={() => handleNaverClick()}>네이버로 시작하기</Button>
              {!showMethod && 
              <Button variant="kakao" onClick={() => setShowMethod(true)}>다른 로그인 수단 보기</Button>
              }

              {showMethod && <>
              <Button variant="kakao" className="btn-kakao-real" onClick={() => navigate('/signup')}>카카오로 로그인</Button>
              <Button variant="facebook" onClick={() => navigate('/signup')}>페이스북으로 로그인</Button>
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