import { useState } from "react";
import Header from "../components/header";
import SearchMain from "../components/header-main";
import UserRating from "../components/user-rate";
import { Button, Row, Col, Form, Card, Image, Modal, Tabs, Tab } from "react-bootstrap";

//import MultiRangeSlider from "../components/MultiRangeSlider"
import MultiRangeSlider from "multi-range-slider-react";


import "./home.css";
import { Link } from "react-router-dom";

function HomePage() {

  const [orderBy, setOrderBy] = useState("0");

  const handleChange = (event) => {
    setOrderBy(event.target.value)
  }

  const [showFilter, setShowFilter] = useState(false);
  const handleCloseFilter = () => setShowFilter(false);
  const handleShowFilter = () => setShowFilter(true);

  // For Like
  const [isLike, setIsLike] = useState("");

  // For checkboxes
  const [checkedState, setCheckedState] = useState([true, true, true, true, true, true, true]);
  const handleOnChangeCheckedState = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  // Price Range Slider
  const [minPriceValue, setMinPriceValue] = useState(3000);
  const [maxPriceValue, setMaxPriceValue] = useState(7000);
  const handleRangePriceInput = (e) => {
    setMinPriceValue(e.minValue);
    setMaxPriceValue(e.maxValue);
  };

  // Time Range Slider
  const [minTimeValue, setMinTimeValue] = useState(15);
  const [maxTimeValue, setMaxTimeValue] = useState(90);
  const handleRangeTimeInput = (e) => {
    setMinTimeValue(e.minValue);
    setMaxTimeValue(e.maxValue);
  };

  return (
    <>
      <Header />
      <SearchMain />
      <div className="main-wrap">
        <div className="d-flex">
          <div className="py-2">
            <p className="mb-0"><Button variant="primary" size="xs" onClick={handleShowFilter}>필터</Button></p>
            <p className="mb-0 mt-2">“뭉치”를 위한 Best 추천!!</p>
          </div>
          <Modal centered show={showFilter} onHide={handleCloseFilter} className="modal-filter">
            <Modal.Body>
              <div className="text-center"><Button className="filter-btn-close" variant="default" onClick={handleCloseFilter}><Image src="images/arrow-filter-icon.png" /></Button></div>

              <Tabs justify defaultActiveKey="basic" id="tab-filter" className="mb-3 tab-petkit tab-filter">
                <Tab eventKey="basic" title="기본">
                  <Form.Check type="checkbox" name="basicCheckbox1" label="안심 레시피만 보기 (해제시 팝업)" checked={checkedState[0]} onChange={() => handleOnChangeCheckedState(0)} />
                  <p className="mt-4">사용 조리 기구</p>
                  <div className="my-3">
                    <Form.Check inline label="전자레인지" name="basicCheckbox2" type="checkbox" checked={checkedState[1]} onChange={() => handleOnChangeCheckedState(1)} />
                    <Form.Check inline label="에어프라이기" name="basicCheckbox3" type="checkbox" checked={checkedState[2]} onChange={() => handleOnChangeCheckedState(2)} />
                    <Form.Check inline label="건조기" name="basicCheckbox4" type="checkbox" checked={checkedState[3]} onChange={() => handleOnChangeCheckedState(3)} />
                  </div>
                </Tab>
                <Tab eventKey="price" title="가격">
                  <Form.Label>가격</Form.Label>
                  <MultiRangeSlider
                    min={0}
                    max={10000}
                    step={1000}
                    ruler={true}
                    label={true}
                    preventWheel={true}
                    minValue={minPriceValue}
                    maxValue={maxPriceValue}
                    onInput={(e) => {
                      handleRangePriceInput(e);
                    }}
                  />
                </Tab>
                <Tab eventKey="size" title="사이즈">
                  <p className="mb-0">사이즈</p>
                  <Form.Group className="my-3" controlId="sizeCheckbox">
                    <Form.Check type="checkbox" label="L-size only" checked={checkedState[4]} onChange={() => handleOnChangeCheckedState(4)} />
                  </Form.Group>
                </Tab>
                <Tab eventKey="time" title="난이도/시간">
                  <p className="mb-3">난이도</p>
                  <Form.Group className="mb-0" controlId="timeCheckbox1">
                    <Form.Check type="checkbox" label="Challenge 제외하고 보기" checked={checkedState[5]} onChange={() => handleOnChangeCheckedState(5)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="timeCheckbox2">
                    <Form.Check type="checkbox" label="Challenge만 보기" checked={checkedState[6]} onChange={() => handleOnChangeCheckedState(6)} />
                  </Form.Group>
                  <Form.Label>시간</Form.Label>
                  <div className="mb-2">
                    <MultiRangeSlider
                      min={0}
                      max={160}
                      step={5}
                      ruler={true}
                      label={true}
                      preventWheel={true}
                      minValue={minTimeValue}
                      maxValue={maxTimeValue}
                      onInput={(e) => {
                        handleRangeTimeInput(e);
                      }}
                    />
                  </div>
                </Tab>
              </Tabs>
            </Modal.Body>
            <Modal.Footer className="d-inline-block">
              <div className="filter-button-section">
                <Row>
                  <Col xs={5}><div className="d-grid"><Button variant="default" size="xs">초기화</Button></div></Col>
                  <Col xs={7}><div className="d-grid"><Button variant="default" size="xs">적용하기</Button></div></Col>
                </Row>
              </div>
            </Modal.Footer>
          </Modal>

          <div className="ms-auto p-2">
            <Form.Select value={orderBy} onChange={handleChange}>
              <option value="1">추천순</option>
              <option value="2">인기순</option>
              <option value="3">최신순</option>
              <option value="3">조리짧은순</option>
            </Form.Select>
          </div>
        </div>

        <div className="top-product-wrap mb-3">
          <Row>
            <Col xs={12}>
              <div className="card product-wrap">
                <div className="product-image-wrap">
                  <Link to="/product-detail"><img src="images/products/product-1.png" className="card-img-top" alt="top product" /></Link>

                  <span className="product-badge">
                    <span className="product-time"><span>125분</span></span>
                    <span className="product-badge-text">Challenging</span>
                  </span>
                  <span className={isLike ? "product-like active" : "product-like"}  onClick={() => setIsLike(!isLike)}>&nbsp;</span>
                </div>

                <div className="card-body">
                  <Link className="product-detail" to="/product-detail"><h5 className="product-title">대표강아지 이름대표강아지 이름대표강</h5></Link>
                  <p className="product-price mb-0">6,000위<span className="text-small">(L-size +2000위)</span></p>
                  <div className="product-rate mb-0 mt-2">
                    <UserRating rate={4} size="sm" />
                    <div className="product-rate-score">4(25)</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="product-list">
          <Row>
            <Col xs={6}>
              <Card className="product-wrap no-border">
                <div className="product-image-wrap">
                  <Link to="/product-detail"><Card.Img variant="top" src="images/products/product-3.jpeg" /></Link>
                  <span className="product-badge small">
                    <span className="product-time"><span>125분</span></span>
                    <span className="product-badge-text small">Challenging</span>
                  </span>
                  <span className="product-like small">&nbsp;</span>
                </div>

                <Card.Body>
                <Link className="product-detail" to="/product-detail"><Card.Title className="product-title small">이름대표강아지 이름대표강</Card.Title></Link>
                  <div className="product-rate mb-0 mt-2">
                    <UserRating rate={4} size="xs" />
                    <div className="product-rate-score">4(25)</div>
                  </div>
                  <p className="product-price small mb-0">6,000위<span className="text-small">(L-size +2000위)</span></p>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6}>
              <Card className="product-wrap no-border">
                <div className="product-image-wrap">
                  <Link to="/product-detail"><Card.Img variant="top" src="images/products/product-3.jpeg" /></Link>
                  <span className="product-badge small">
                    <span className="product-time"><span>125분</span></span>
                    <span className="product-badge-text small">Challenging</span>
                  </span>
                  <span className="product-like small">&nbsp;</span>
                </div>

                <Card.Body>
                  <Link className="product-detail" to="/product-detail"><Card.Title className="product-title small">대표강아지 이름대표강아지</Card.Title></Link>
                  <div className="product-rate mb-0 mt-2">
                    <UserRating rate={5} size="xs" />
                    <div className="product-rate-score">5(25)</div>
                  </div>
                  <p className="product-price small mb-0">6,000위<span className="text-small">(L-size +2000위)</span></p>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6}>
              <Card className="product-wrap no-border">
                <div className="product-image-wrap">
                  <Link to="/product-detail"><Card.Img variant="top" src="images/products/product-3.jpeg" /></Link>
                  <span className="product-badge small">
                    <span className="product-time"><span>125분</span></span>
                    <span className="product-badge-text small">Challenging</span>
                  </span>
                  <span className="product-like small">&nbsp;</span>
                </div>

                <Card.Body>
                  <Link className="product-detail" to="/product-detail"><Card.Title className="product-title small">짜장면 아주아주 맛있는</Card.Title></Link>
                  <div className="product-rate mb-0 mt-2">
                    <UserRating rate={2} size="xs" />
                    <div className="product-rate-score">2(25)</div>
                  </div>
                  <p className="product-price small mb-0">6,000위<span className="text-small">(L-size +2000위)</span></p>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6}>
              <Card className="product-wrap no-border">
                <div className="product-image-wrap">
                  <Link to="/product-detail"><Card.Img variant="top" src="images/products/product-3.jpeg" /></Link>
                  <span className="product-badge small">
                    <span className="product-time"><span>125분</span></span>
                    <span className="product-badge-text small">Challenging</span>
                  </span>
                  <span className="product-like small">&nbsp;</span>
                </div>

                <Card.Body>
                  <Link className="product-detail" to="/product-detail"><Card.Title className="product-title small">계란죽 아주아주 맛있는</Card.Title></Link>
                  <div className="product-rate mb-0 mt-2">
                    <UserRating rate={3} size="xs" />
                    <div className="product-rate-score">3(25)</div>
                  </div>
                  <p className="product-price small mb-0">6,000위<span className="text-small">(L-size +2000위)</span></p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        <div className="cart-wrap">
          <Link to="/cart">
            <Image src="images/cart-icon.png" className="cart-icon" />
            <span className="cart-product-item-count"><span>1</span></span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;