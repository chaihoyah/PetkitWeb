import { useState, useEffect } from "react";
import Header from "../components/header";
import SearchMain from "../components/header-main";
import MainProduct from "./main-product";
import { Button, Row, Col, Form, Image, Modal, Tabs, Tab } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Slider from "@mui/material/Slider";
/*import ReactDOM from 'react-dom';*/
import axios from 'axios';

import "./slider.css";
import "./home.css";
import { Link } from "react-router-dom";

function HomePage() {
  const { state } = useLocation();
  const [orderBy, setOrderBy] = useState("1");
  const [tabNum, setTabNum] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Cart number check
  const [cartNum, setCartNum] = useState(1);

  const handleChange = (event) => {
    setOrderBy(event.target.value);
    localStorage.setItem("sort", event.target.value);
  }

  const handleTab = (text) => {
    setTabNum(text);
  }

  const [showFilter, setShowFilter] = useState(false);
  /* 밖에 클릭해서 나갈 때, tmp state들 원래 값으로 바꿔주기 (변화 적용X)*/
  const handleCloseFilter = () => {
    setShowFilter(false);
    setTmpCheckedState(checkedState);
    setTmpPriceValue(priceValue);
    setTmpTimeValue(timeValue);
  };
  const handleShowFilter = (text) => {
    if(text === "" || text === "기구"){
        setTabNum("basic");
        setShowFilter(true);
    }
    else if(text === "가격"){
        setTabNum("price");
        setShowFilter(true);
    }
    else if(text === "사이즈"){
        setTabNum("size");
        setShowFilter(true);
    }
    else if(text === "시간" || text === "난이도"){
        setTabNum("time");
        setShowFilter(true);
    }
  }

  // For checkboxes, 0-기본, 1~5-조기기구, 6-사이즈, 7-챌린지 제외, 8-챌린지만
  const [filterList, setFilterList] = useState([]);
  let initial_filter_array = [true, true, true, true, true, true, false, false, false];
  const [checkedState, setCheckedState] = useState(initial_filter_array);
  const [tmpcheckedState, setTmpCheckedState] = useState(initial_filter_array);
  const handleOnChangeCheckedState = (position) => {
  const updatedCheckedState = tmpcheckedState.map((item, index) =>
      index === position ? !item : item
    );
    setTmpCheckedState(updatedCheckedState);
  };

  // Price Range Slider
  let minPrice = 0;
  let maxPrice = 15000;
  let priceStep = 1000;
  const [priceValue, setPriceValue] = useState([minPrice, maxPrice]);
  const [tmppriceValue, setTmpPriceValue] = useState([minPrice, maxPrice]);
  const handleRangePriceInput = (e) => {
    setTmpPriceValue([e.target.value[0], e.target.value[1]]);
  };

  function handlePriceText(price) {
    return price+"원"
  }

  // Time Range Slider
  let minTime = 0;
  let maxTime = 220;
  let timeStep = 10;
  const [timeValue, setTimeValue] = useState([minTime, maxTime]);
  const [tmptimeValue, setTmpTimeValue] = useState([minTime, maxTime]);
  const handleRangeTimeInput = (e) => {
    setTmpTimeValue([e.target.value[0], e.target.value[1]]);
  };

  function handleTimeText(time) {
    return time+"분"
  }

  // Product List
  const [prodBigList, setProdBigList] = useState([]);
  const [prodSmallList, setProdSmallList] = useState([]);
  // filter check
  /*Apply, Reset으로 나갈 때, localStorage, 진짜 state들 바꿔주기*/
  function filterApply(){
    setFilterList(filterCheck());
    makeProductList();
    setCheckedState(tmpcheckedState);
    setPriceValue(tmppriceValue);
    setTimeValue(tmptimeValue);
    setShowFilter(false);
    if(!isLoggedIn) {
        localStorage.setItem("filter_array", JSON.stringify(tmpcheckedState));
        localStorage.setItem("filter_price", JSON.stringify(tmppriceValue));
        localStorage.setItem("filter_time", JSON.stringify(tmptimeValue));
    }
    else {
    /*서버랑 세션 통신*/
    }
    console.log(initial_filter_array);
  }
  function filterReset(){
    setCheckedState(initial_filter_array);
    setTmpCheckedState(initial_filter_array);
    setPriceValue([minPrice, maxPrice]);
    setTmpPriceValue([minPrice, maxPrice]);
    setTimeValue([minTime, maxTime]);
    setTmpTimeValue([minTime, maxTime]);
    setFilterList(filterCheck_manual(initial_filter_array, [minPrice, maxPrice], [minTime, maxTime]));
    setShowFilter(false);
    makeProductList();
    if(!isLoggedIn) {
        localStorage.setItem("filter_array", JSON.stringify(initial_filter_array));
        localStorage.setItem("filter_price", JSON.stringify([minPrice, maxPrice]));
        localStorage.setItem("filter_time", JSON.stringify([minTime, maxTime]));
    }
    else {
    /*서버랑 세션 통신*/
    }
  }

  // filter check for filter buttons - 자동 (tmpcheckedState 기반)
  function filterCheck() {
    var onfilter_list = [];
    for (let i=1; i<6; i++){
        if (tmpcheckedState[i] === false) {
            onfilter_list.push("기구");
            break;
        }
    }
    if (tmppriceValue[0] !== minPrice || tmppriceValue[1] !== maxPrice) onfilter_list.push("가격");
    if (tmpcheckedState[6] === true) onfilter_list.push("사이즈");
    if (tmptimeValue[0] !== minTime || tmptimeValue[1] !== maxTime) onfilter_list.push("시간");
    for (let i=7; i<9; i++){
        if (tmpcheckedState[i] === true) {
            onfilter_list.push("난이도");
            break;
        }
    }
   return onfilter_list;
  }
  // filter check for filter buttons - 수동 (인자 받아서)
  function filterCheck_manual(arr, price, time){
    var onfilter_list = [];
    for (let i=1; i<6; i++){
        if (arr[i] === false) {
            onfilter_list.push("기구");
            break;
        }
    }
    console.log(minPrice);
    if (price[0] !== minPrice || price[1] !== maxPrice) onfilter_list.push("가격");
    if (arr[6] === true) onfilter_list.push("사이즈");
    if (time[0] !== minTime || time[1] !== maxTime) onfilter_list.push("시간");
    for (let i=7; i<9; i++){
        if (checkedState[i] === true) {
            onfilter_list.push("난이도");
            break;
        }
    }
   return onfilter_list;
  }

  // Make product list with filer and sorting
  function makeProductList(){
    var prod_list = [
        {
            name: "캐롭 바나나 케이크",
            r_id: 1,
            price: 6000,
            Lprice: 2000,
            time: 888,
            rating: 3,
            ratingNum: 30,
            imageURL: "images/products/carobbananacake.png",
            isLike: true,
            challenging: false
        },
        {
            name: "캐롭쿠키",
            r_id: 2,
            price: 4000,
            Lprice: 2000,
            time: 12,
            rating: 5,
            ratingNum: 300,
            imageURL: "images/products/carobcookie.png",
            isLike: false,
            challenging: true
        },
        {
            name: "단호박파이",
            r_id: 3,
            price: 7000,
            Lprice: 2000,
            time: 50,
            rating: 0,
            ratingNum: 0,
            imageURL: "images/products/pumpkinpie.png",
            isLike: false,
            challenging: true
        },
        {
            name: "과일 아이스크림",
            r_id: 4,
            price: 6000,
            Lprice: 2000,
            time: 333,
            rating: 3,
            ratingNum: 30,
            imageURL: "images/products/berryicecream.png",
            isLike: true,
            challenging: false
        },
        {
            name: "리코타치즈",
            r_id: 5,
            price: 3000,
            Lprice: "",
            time: 20,
            rating: 1,
            ratingNum: 3300,
            imageURL: "images/products/ricottacheese.png",
            isLike: false,
            challenging: true
        }
    ]
    prod_list.sort(() => Math.random()-0.5);

    setProdBigList(prod_list.slice(0, 3));
    setProdSmallList(prod_list.slice(3));
  }

  useEffect(() => {
      var data = {
        isFilter: true,
        u_id: 1
      };
    axios.get(process.env.REACT_APP_API_SERVER+"/recipe/list", {
        headers: {
            "Content-Type" : "application/json; charset=UTF-8"
        },
        params: data
    }
    ).then((response) => {
      console.log(response);
      console.log(response.data);
      /*Do sth*/
   })
   if(localStorage.getItem("session_token")) {
    setIsLoggedIn(true);
    /*필터, 정렬 정보 받기*/
   }
   else{
    let tmp_arr = JSON.parse(localStorage.getItem("filter_array"));
    let tmp_price = JSON.parse(localStorage.getItem("filter_price"));
    let tmp_time = JSON.parse(localStorage.getItem("filter_time"));
    let tmp_order = localStorage.getItem("sort");
    if(!tmp_arr) {
        localStorage.setItem("filter_array", JSON.stringify(initial_filter_array));
        localStorage.setItem("filter_price", JSON.stringify([minPrice, maxPrice]));
        localStorage.setItem("filter_time", JSON.stringify([minTime, maxTime]));
        localStorage.setItem("sort", "1");
    }
    else{
        setCheckedState(tmp_arr);
        setTmpCheckedState(tmp_arr);
        setPriceValue(tmp_price);
        setTmpPriceValue(tmp_price);
        setTimeValue(tmp_time);
        setTmpTimeValue(tmp_time);
        setFilterList(filterCheck_manual(tmp_arr, tmp_price, tmp_time));
        setOrderBy(tmp_order);
    }
   }
  }, []);

  useEffect(() => {
    makeProductList();
  }, [orderBy]);

  return (
    <>
      <Header/>
      <SearchMain />
      <div className="main-wrap overflow-hidden">
        <div className="d-flex flex-row">
          <div className="py-2 w-100">
            <div className="mb-3 d-flex flex-row align-items-center">
                <Button variant="filter" onClick={() => {handleShowFilter("");}}></Button>
                {filterList.map((text, index) => (
                    <Button variant="filter-text" key={index} onClick={() => {handleShowFilter(text);}}>{text}</Button>
                ))}
                <div className="ms-auto p-2">
                  <Form.Select value={orderBy} onChange={handleChange}>
                    <option style={{}}value="1">추천순</option>
                    <option value="2">인기순</option>
                    <option value="3">최신순</option>
                    <option value="4">조리짧은순</option>
                  </Form.Select>
                </div>
            </div>
            {orderBy === "1" && <p className="main-text">{isLoggedIn?("뭉치"+"를 위한 best 추천 3"):("펫키트 추천 상품 best 3")}</p>}
          </div>
          <Modal centered show={showFilter} onHide={handleCloseFilter} className="modal-filter" backdropClassName="modal-backdrop">
            <Modal.Header>
              <Button className="filter-btn-close" variant="default" onClick={handleCloseFilter}></Button>
            </Modal.Header>
            <Modal.Body>

              <Tabs activeKey={tabNum} defaultActiveKey="basic" id="tab-filter" className="mb-3 tab-petkit tab-filter" onSelect={handleTab}>
                <Tab tabClassName = "tab-2text" eventKey="basic" title="기본">
                  <p className="mt-1 mb-1 text-neosb text-smallmedium text-halfblack">기본</p>
                  {isLoggedIn ?
                    (<Form.Group className="mb-0" controlId="basic1">
                      <Form.Check type="checkbox" label="안심 레시피만 보기" checked={tmpcheckedState[0]} onChange={() => handleOnChangeCheckedState(0)} />
                    </Form.Group>):(
                     <Form.Group className="mb-0" controlId="basic1">
                        <Form.Check type="checkbox" label="로그인 후 이용가능합니다." checked={false} onChange={() => {}}/>
                     </Form.Group>
                    )
                  }
                  <p className="mt-5 mb-1 text-neosb text-smallmedium text-halfblack">사용 조리 기구</p>
                  <div>
                    <Form.Check inline label="오븐" id = "oven" type="checkbox" checked={tmpcheckedState[1]} onChange={() => handleOnChangeCheckedState(1)} />
                    <Form.Check inline label="에어프라이어" id = "airfyer" type="checkbox" checked={tmpcheckedState[2]} onChange={() => handleOnChangeCheckedState(2)} />
                    <Form.Check inline label="믹서" id = "mixer" type="checkbox" checked={tmpcheckedState[3]} onChange={() => handleOnChangeCheckedState(3)} />
                    <br></br>
                    <Form.Check inline label="찜기" id = "steamer" type="checkbox" checked={tmpcheckedState[4]} onChange={() => handleOnChangeCheckedState(4)} />
                    <Form.Check inline label="전자레인지" id = "micro" type="checkbox" checked={tmpcheckedState[5]} onChange={() => handleOnChangeCheckedState(5)} />
                  </div>
                </Tab>
                <Tab tabClassName = "tab-2text" eventKey="price" title="가격">
                  <p className="mt-1 mb-3 text-neosb text-smallmedium text-halfblack">가격</p>
                  <Slider
                    min={minPrice}
                    max={maxPrice}
                    step={priceStep}
                    valueLabelDisplay="on"
                    value={tmppriceValue}
                    valueLabelFormat={handlePriceText}
                    marks
                    onChange={(e) => {
                      handleRangePriceInput(e);
                    }}
                  />
                </Tab>
                <Tab tabClassName = "tab-2text" eventKey="size" title="사이즈">
                  <p className="mt-1 mb-1 text-neosb text-smallmedium text-halfblack">사이즈</p>
                  <Form.Group controlId="sizeCheckbox">
                    <Form.Check type="checkbox" label="L-size only" checked={tmpcheckedState[6]} onChange={() => handleOnChangeCheckedState(6)} />
                  </Form.Group>
                </Tab>
                <Tab tabClassName = "tab-2text" eventKey="time" title="난이도/시간">
                  <p className="mt-1 mb-1 text-neosb text-smallmedium text-halfblack">난이도</p>
                  <Form.Group className="mb-0" controlId="timeCheckbox1">
                    <Form.Check type="checkbox" label="Challenge 제외하고 보기" checked={tmpcheckedState[7]} onChange={() => handleOnChangeCheckedState(7)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="timeCheckbox2">
                    <Form.Check type="checkbox" label="Challenge만 보기" checked={tmpcheckedState[8]} onChange={() => handleOnChangeCheckedState(8)} />
                  </Form.Group>
                  <Form.Label>시간</Form.Label>
                  <div className="mb-2">
                    <Slider
                      min={minTime}
                      max={maxTime}
                      step={timeStep}
                      valueLabelDisplay="on"
                      value={tmptimeValue}
                      valueLabelFormat={handleTimeText}
                      marks
                      onChange={(e) => {
                        handleRangeTimeInput(e);
                      }}
                    />
                  </div>
                </Tab>
              </Tabs>
            </Modal.Body>
            <Modal.Footer>
              <div className="filter-button-section">
                <Row>
                  <Col xs={3}><div className="d-grid"><Button variant="reset" size="xs" onClick = {() => filterReset()}>초기화</Button></div></Col>
                  <Col xs={9}><div className="d-grid"><Button variant="apply" size="xs" onClick = {() => filterApply()}>적용하기</Button></div></Col>
                </Row>
              </div>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="products">
            {prodBigList.map((state, index) =>
                <MainProduct key={state.r_id} type="0" state={state}/>
            )}
            {
            <div className="product-list">
                <Row>
                    {prodSmallList.map((state, index) =>
                        <MainProduct key={state.r_id} type="1" state={state}/>
                    )}
                </Row>
            </div>
            }
        </div>
        { cartNum > 0 &&
        <div className="cart-wrap">
          <Link to="/cart">
            <Image src="images/cart-icon.svg" className="cart-icon"/>
            <span className="cart-product-item-count"><span className="cart-product-text">{cartNum}</span></span>
          </Link>
        </div>
        }
      </div>
    </>
  );
}

export default HomePage;