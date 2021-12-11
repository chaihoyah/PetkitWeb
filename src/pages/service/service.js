import { useState } from "react";
import Navigation from "../components/navigation"
import { Button, Tabs, Tab, Accordion, Row, Col, Form, Modal } from "react-bootstrap"

import "./service.css"

function Service() {
  /* Modal Confirm */
  const [showConfirm, setShowConfirm] = useState(false);
  const handleCloseConfirm = () => setShowConfirm(false);
  const handleShowConfirm = () => setShowConfirm(true);

  /* Modal Confirm Question */
  const [showQuestionConfirm, setShowQuestionConfirm] = useState(false);
  const handleCloseQuestionConfirm = () => setShowQuestionConfirm(false);
  const handleShowQuestionConfirm = () => setShowQuestionConfirm(true);

  // History QNA
  const [textareaHistory, setTextareaHistory] = useState({});
  const handleChangeTextareaHistory = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTextareaHistory(values => ({...values, [name]: value}))
  }


  const noticeList = [
    {
      id: 1,
      title: "서비스 이용에 중요한 공지 제목임!",
      createdDate: "2021.10.14",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 1,
      title: "서비스 이용에 중요한 공지 제목임!",
      createdDate: "2021.10.14",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 1,
      title: "서비스 이용에 중요한 공지 제목임!",
      createdDate: "2021.10.14",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 1,
      title: "서비스 이용에 중요한 공지 제목임!",
      createdDate: "2021.10.14",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 1,
      title: "서비스 이용에 중요한 공지 제목임!",
      createdDate: "2021.10.14",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 1,
      title: "서비스 이용에 중요한 공지 제목임!",
      createdDate: "2021.10.14",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 1,
      title: "서비스 이용에 중요한 공지 제목임!",
      createdDate: "2021.10.14",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 1,
      title: "서비스 이용에 중요한 공지 제목임!",
      createdDate: "2021.10.14",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 1,
      title: "서비스 이용에 중요한 공지 제목임!",
      createdDate: "2021.10.14",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 1,
      title: "서비스 이용에 중요한 공지 제목임!",
      createdDate: "2021.10.14",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]

  const historyQNAList = [
    {
      id: 1,
      title: "서비스 이용에 중요한 공지 제목임!",
      createdDate: "2021.10.14",
      status: "응답 대기중",
      description: "문의하고 싶어서 문의했습니다."
    },
    {
      id: 1,
      title: "서비스 이용에 중요한 공지 제목임!",
      createdDate: "2021.10.14",
      status: "응답 완료",
      description: "문의하고 싶어서 문의했습니다."
    },
    {
      id: 1,
      title: "서비스 이용에 중요한 공지 제목임!",
      createdDate: "2021.10.14",
      status: "응답 완료",
      description: "문의하고 싶어서 문의했습니다."
    },
    {
      id: 1,
      title: "서비스 이용에 중요한 공지 제목임!",
      createdDate: "2021.10.14",
      status: "응답 완료",
      description: "문의하고 싶어서 문의했습니다."
    },
    {
      id: 1,
      title: "서비스 이용에 중요한 공지 제목임!",
      createdDate: "2021.10.14",
      status: "응답 대기중",
      description: "문의하고 싶어서 문의했습니다."
    },
    {
      id: 1,
      title: "서비스 이용에 중요한 공지 제목임!",
      createdDate: "2021.10.14",
      status: "응답 대기중",
      description: "문의하고 싶어서 문의했습니다."
    },
    {
      id: 1,
      title: "서비스 이용에 중요한 공지 제목임!",
      createdDate: "2021.10.14",
      status: "응답 대기중",
      description: "문의하고 싶어서 문의했습니다."
    },
    {
      id: 1,
      title: "서비스 이용에 중요한 공지 제목임!",
      createdDate: "2021.10.14",
      status: "응답 대기중",
      description: "문의하고 싶어서 문의했습니다."
    },
    {
      id: 1,
      title: "서비스 이용에 중요한 공지 제목임!",
      createdDate: "2021.10.14",
      status: "응답 대기중",
      description: "문의하고 싶어서 문의했습니다."
    },
    {
      id: 1,
      title: "서비스 이용에 중요한 공지 제목임!",
      createdDate: "2021.10.14",
      status: "응답 대기중",
      description: "문의하고 싶어서 문의했습니다."
    }
  ]

  return (
    <>
    <Navigation title="고객 센터" />
    <div className="service-wrap">
      <section className="tab-border">
        <Tabs justify defaultActiveKey="notice" id="tab-service" className="mb-3">
          <Tab eventKey="notice" title="공지 사항">
            <Accordion>
              {noticeList.map((item, key) => 
              <Accordion.Item eventKey={key} key={key}>
                <Accordion.Header>
                  <Row>
                    <Col xs={12}>{item.title}</Col>
                    <Col xs={12} className="text-medium">{item.createdDate}</Col>
                  </Row>
                </Accordion.Header>
                <Accordion.Body>{item.description}</Accordion.Body>
              </Accordion.Item>
              )}
            </Accordion>

            <div className="notice-more-section"><Button variant="default" size="lg">+ 더보기</Button></div>
          </Tab>
          <Tab eventKey="history-qna" title="문의 내역">
            {(historyQNAList.length > 0) ?
              <>
              <Accordion>
                {historyQNAList.map((item, key) => 
                <Accordion.Item eventKey={key} key={key}>
                  <Accordion.Header>
                    <Row>
                      <Col xs={12}>{item.title}</Col>
                      <Col xs={6} className="text-medium">{item.createdDate}</Col>
                      <Col xs={6} className="text-center text-medium">{item.status}</Col>
                    </Row>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="text-medium mb-1">문의 종류</p>
                    <p>서비스 문의</p>

                    <Form.Group className="mb-3" controlId={"textarea" + key}>
                      <Form.Label className="text-medium">내용</Form.Label>
                      <Form.Control as="textarea" rows={3} defaultValue={textareaHistory.name || item.description} name={"textarea" + key} onChange={handleChangeTextareaHistory} />
                    </Form.Group>
                    <div className="text-end">
                      <Button variant="secondary" size="xs" className="no-rounded" onClick={handleShowConfirm}>삭제하기</Button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                )}
              </Accordion>
              <Modal centered className="modal-history-qna" show={showConfirm} onHide={handleCloseConfirm}>
                <Modal.Body>
                  <p className="mb-4">해당 문의를 삭제 하시겠습니까?</p>

                  <p>문의 번호: 123123<br/>
                  문의 종류: 서비스 문의</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                  <Button variant="primary" onClick={handleCloseConfirm}>삭제</Button>
                  <Button variant="secondary" onClick={handleCloseConfirm}>취소</Button>
                </Modal.Footer>
              </Modal>
              </>
            : 
              <div className="text-center py-3">문의 내역이 없습니다!</div>
            }

          </Tab>
          <Tab eventKey="contact" title="문의하기">
            <Form>
              <Form.Group className="mb-3" controlId="qnaType">
                <Form.Label>문의 종류</Form.Label>
                <Form.Select size="lg">
                  <option>문의 종류를 선택해주세요.</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="qnaDesc">
                <Form.Label>내용</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="문의하고 싶어서 문의했습니다." />
              </Form.Group>
              <div className="text-end">
                <Button variant="primary" size="md" className="no-rounded" onClick={handleShowQuestionConfirm}>등록하기</Button>
              </div>
              <p className="py-5">문의 전화 번호: 010.2780.3084</p>
            </Form>

            <Modal centered className="modal-qna" show={showQuestionConfirm} onHide={handleCloseQuestionConfirm}>
                <Modal.Body>
                  <p className="mb-4">해당 정보로 문의를 등록하시겠습니까?</p>

                  <p>문의 번호: 123123<br/>
                  문의 종류: 서비스 문의</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                  <Button variant="primary" onClick={handleCloseQuestionConfirm}>등록</Button>
                  <Button variant="secondary" onClick={handleCloseQuestionConfirm}>취소</Button>
                </Modal.Footer>
              </Modal>
          
          </Tab>
        </Tabs>
      </section>
      
    </div>
    </>
  );
}

export default Service;