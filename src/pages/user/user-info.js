import { useState } from "react";
import Navigation from "../components/navigation";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Image, Table, Button, Modal } from "react-bootstrap";

import "./user.css";

function UserInfo() {
  const navigate = useNavigate();

  /* Modal Confirm */
  const [showConfirm, setShowConfirm] = useState(false);
  const handleCloseConfirm = () => setShowConfirm(false);
  const handleShowConfirm = () => setShowConfirm(true);

  // Checkbox SMS
  const [isCheckedSMS, setIsCheckedSMS] = useState(true);
  const handleCheckedSMS = () => {
    setIsCheckedSMS(!isCheckedSMS);
  }

  return (
    <>
      <Navigation title="내정보" />
      <div className="user-info-wrap">
        <Row>
          <Col xs={3}>
            <Image src="images/user-avatar.png" className="img-fluid" alt="my info" />
          </Col>
          <Col xs={5} className="text-center">
            <p className="mb-0">이동혁</p>
            <p className="text-medium">(네이버 로그인)</p>
          </Col>
          <Col xs={4} className="text-end">
            <Button variant="default" size="sm" className="mt-3" onClick={handleShowConfirm}>로그아웃</Button>
          </Col>
        </Row>

        <Modal centered className="modal-qa" show={showConfirm} onHide={handleCloseConfirm}>
          <Modal.Body>정말 로그아웃 하시겠습니까?</Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button variant="primary" onClick={handleCloseConfirm}>로그아웃</Button>
            <Button variant="secondary" onClick={handleCloseConfirm}>취소</Button>
          </Modal.Footer>
        </Modal>

        <Row>
          <Col xs={12}>
            <section className="mt-5">
              <h3 className="user-info-title">회원정보</h3>
              <Table className="table-borderless">
                <tbody>
                  <tr>
                    <td width="100">고객명</td>
                    <td>이동혁</td>
                    <td className="text-end"><Link to="/user-modify">회원정보 수정</Link></td>
                  </tr>
                  <tr>
                    <td>연락처</td>
                    <td colSpan={2}>010-8697-4030</td>
                  </tr>
                  <tr>
                    <td>알림설정</td>
                    <td colSpan={2}>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" role="switch" id="chkSMS" checked={isCheckedSMS} onChange={handleCheckedSMS} />
                    </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </section>

            <section>
              <h3 className="user-info-subtitle">주문 정보</h3>
              <Table className="table-borderless">
                <tbody>
                  <tr>
                    <td width="100">수령인</td>
                    <td>이동혁</td>
                  </tr>
                  <tr>
                    <td>주소</td>
                    <td>경기도 안양시 만안구 어쩌구 저쩌구 길어지면 이렇게</td>
                  </tr>
                  <tr>
                    <td>연락처</td>
                    <td>010-8697-4030</td>
                  </tr>
                </tbody>
              </Table>
            </section>

            <Link to="/payment" className="d-block">
            <section className="user-info-payment">
              <ul className="list-unstyled">
                <li>결제 수단:  하나 10*********</li>
                <li>결제 수단:  미등록</li>
              </ul>
            </section>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <section className="user-info-mypets">
            <h3 className="user-info-title">나의 반려동물</h3>
              <p>대표</p>
              <Table className="table-borderless">
                <tbody>
                  <tr>
                    <td className="text-center" width="100">
                      <Link to="/pet-modify">
                        <div className="rounded-avatar"><Image src="images/user-pet.png" alt="my pet" /></div>
                        <p className="mt-2 mb-0">뭉치</p>
                        <p>비숑 / 남</p>
                      </Link>
                    </td>
                    <td><div className="rounded-avatar"><Button variant="default" className="btn-plus-pet" onClick={() => navigate("/pet-register")}><Image src="images/plus-icon.png" /></Button></div></td>
                  </tr>
                </tbody>
              </Table>
            </section>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserInfo;