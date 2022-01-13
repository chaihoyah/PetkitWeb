import { useState, useEffect, useRef} from "react";
import ReactDOM from 'react-dom';
import Navigation from "../components/navigation";
import { useNavigate, useLocation } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import axios from 'axios';
import queryString from "query-string";

import "./user.css";

function Login() {
  const navigate = useNavigate();
  const naverRef = useRef();
  const location = useLocation();
  const [showMethod, setShowMethod] = useState(false);
  // ID로 먼저 회원 여부 check -> 없으면 전화번호 입력으로 -> 전화번호 입력시 다시 회원정보 check (signup에 넘기는 type, 이미 가입한 계정 type 같을때만 id값 바꾸는걸로 처리해주기)
  //네이버 로긴 관련
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

  const url = "https://openapi.naver.com/v1/nid/me";

  const getNaverToken = () => {
    if (!location.hash) return;
    let login_state = queryString.parse(location.hash);
    console.log(login_state);
    localStorage.setItem('session_token','donghyukZZANG');
    navigate(-3, {replace:true});
/*    axios.get("https://openapi.naver.com/v1/nid/me", {
        headers: {
            'Authorization': header,
        }
    }).then((res) => {
        console.log(res);
        let id = res.data.response.id;
        //서버에 id 있는지 확인
        console.log(id);
        if (id === "4V2gUbqcgYGgtKyA7nrlVSOVsxfnbu41YXH_VdasDQQ") navigate('/', {replace: true, state:{isLoggedIn:true, user:{id: id, u_id: -1, u_name:"신채호", phone:"01027803084", alarm:true, u_gender:true, u_birth:"19960103", main_pet:0}}});
        else{
            navigate('/signup', {state:{type: "Naver"}})
        }
    });*/

  };

  const handleNaverClick = () => {
    naverRef.current.children[0].click();
  };

/*  const naverGet = () => {
    window.location.href = "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=JmLl2zgPU2ME1WzZHU6s&redirect_uri=http://localhost:3000/login"
  };*/

  // 카카오 로긴 관련

  function kakaoLogin(){
    window.Kakao.Auth.login({
        success: function (response) {
            window.Kakao.API.request({
                url: '/v2/user/me',
                success: function (response) {
                    console.log(response);
                    if(response.id === 2037457098) navigate('/', {replace: true, state:{id: response.id}});
                    else navigate('/signup', {state:{type: "Kakao"}});
                },
                fail: function (error) {
                    console.log(error);
                },
            })
        },
        fail: function (error) {
            console.log(error)
        },
    });
  }

  function kakaoLogout() {
      if (window.Kakao.Auth.getAccessToken()) {
        window.Kakao.API.request({
          url: '/v1/user/unlink',
          success: function (response) {
          	console.log(response)
          },
          fail: function (error) {
            console.log(error)
          },
        })
        window.Kakao.Auth.setAccessToken(undefined)
      }
  }

  // 페이스북 로긴 관련

  const responseFacebook = (response) => {
    console.log(response);
    if (response.id === "4064402136993700") navigate('/', {replace: true, state:{id: response.id}});
    else navigate('/signup', {state:{type: "Facebook"}});
  };

  useEffect(() => {
    initializeNaverLogin();
    if (!window.Kakao.isInitialized())  window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
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
              <Button variant="kakao" className="btn-kakao-real" onClick={() => kakaoLogin()}>카카오로 로그인</Button>
              <FacebookLogin
                    appId= {process.env.REACT_APP_FB_APPID}
                    autoLoad={false}
                    fields="name, email, picture"
                    callback={responseFacebook}
                    render={(renderProps) => (
                        <Button variant="facebook" onClick={renderProps.onClick}>페이스북으로 로그인</Button>
                    )}
                ></FacebookLogin>
              </>
              }

              <Form.Check type="checkbox" id="login-input"label="자동 로그인" />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Login;