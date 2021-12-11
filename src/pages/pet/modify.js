import { useState } from "react";
import Navigation from "../components/navigation";
import { useNavigate } from "react-router-dom";
import { Form, Button, Modal } from "react-bootstrap";

import "./pet.css";

function PetModify() {
  const navigate = useNavigate();

  /* Modal Logout Confirm */
  const [showConfirm, setShowConfirm] = useState(false);
  const handleCloseConfirm = () => setShowConfirm(false);
  const handleShowConfirm = () => setShowConfirm(true);

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const handleCloseConfirmDelete = () => setShowConfirmDelete(false);
  const handleShowConfirmDelete = () => setShowConfirmDelete(true);

  return (
    <>
    <Navigation title="반려동물 수정" alert="수정된 정보가 저장되지 않습니다. 정말 나가시겠습니까?" />
    <div className="pet-register-wrap">
      <Form>
        <div className="text-end"><Button variant="secondary" className="" onClick={handleShowConfirmDelete}>반려동물 정보 삭제</Button></div>
        <Modal centered className="modal-qa" show={showConfirmDelete} onHide={handleCloseConfirmDelete}>
          <Modal.Body>정말 삭제하시겠습니까?</Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button variant="primary" onClick={() => navigate(-1)}>네</Button>
            <Button variant="secondary" onClick={handleCloseConfirmDelete}>아니오</Button>
          </Modal.Footer>
        </Modal>

        <Form.Group className="mb-3" controlId="chkPrimaryPet">
          <Form.Check type="checkbox" label="대표 반려동물로 설정" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="petName">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" size="lg" placeholder="강아지 이름을 입력해주세요." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="petCategory1">
          <Form.Label>반려동물 종류</Form.Label>
          <Form.Select size="lg">
            <option>반려동물을 선택해주세요.</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="...">...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="petCategory2">
          <Form.Label>상세 정보</Form.Label>
          <Form.Select size="lg">
            <option>종을 선택해주세요.</option>
            <option value="dog1">Dog 1</option>
            <option value="dog2">Dog 2</option>
            <option value="...">...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="petSex">
          <Form.Label>성별</Form.Label>
          <Form.Select size="lg">
            <option>성별을 선택해주세요.</option>
            <option value="남">남</option>
            <option value="여">여</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="petBirthday">
          <Form.Label>생일</Form.Label>
          <Form.Select size="lg">
            <option>생일을 선택해주세요.</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="...">...</option>
          </Form.Select>
        </Form.Group>

        <section className="mt-4">
          <h3 className="section-title">반려동물 좋아하는 식재료</h3>

          <Form.Group className="mb-3" controlId="chkPetFoods">
            <Form.Check type="checkbox" label="1. 닭고기" />
            <Form.Check type="checkbox" label="2. 오리고기" />
          </Form.Group>
        </section>

        <section className="mt-4">
          <h3 className="section-title">반려동물 질병</h3>

          <Form.Group className="mb-3" controlId="chkPetDisease">
            <Form.Check type="checkbox" label="1. 눈" />
            <Form.Check type="checkbox" label="2. 슬개골" />
          </Form.Group>
        </section>

        <section className="mt-4">
          <h3 className="section-title">반려동물 알러지 식재료</h3>

          <Form.Group className="mb-3" controlId="chkPetAllergens">
            <Form.Check type="checkbox" label="1. 닭고기" />
            <Form.Check type="checkbox" label="2. 오리고기" />
          </Form.Group>
        </section>
        
        <Button variant="primary" className="w-100 mt-3 mb-5" onClick={handleShowConfirm}>수정하기</Button>

        <Modal centered className="modal-pet-modify" show={showConfirm} onHide={handleCloseConfirm}>
          <Modal.Body>해당 정보로 수정하시겠습니까?</Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button variant="primary" onClick={() => navigate("/user-info")}>네</Button>
            <Button variant="secondary" onClick={handleCloseConfirm}>아니오</Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </div>
    </>
  );
}

export default PetModify;